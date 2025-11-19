import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Stats.css';
import '../../global.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Stats = ({ showTimer }) => {
  const [sessions, setSessions] = useState([]);
  const [chartData, setChartData] = useState({});
  const [timeRange, setTimeRange] = useState('daily');

  useEffect(() => {
    const fetchSessions = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('sessions')
          .select('*')
          .eq('user_id', user.id);

        if (error) {
          console.log('Error fetching sessions:', error);
        } else {
          setSessions(data);
        }
      }
    };

    fetchSessions();
  }, []);

  useEffect(() => {
    if (sessions.length > 0) {
      processChartData(timeRange);
    } else {
      setChartData({}); // Clear chart data if no sessions
    }
  }, [sessions, timeRange]);

  const processChartData = (range) => {
    const data = {};
    sessions.forEach(session => {
      const date = new Date(session.created_at);
      let key;
      if (range === 'daily') {
        key = date.toLocaleDateString();
      } else if (range === 'weekly') {
        const startOfWeek = new Date(date.setDate(date.getDate() - date.getDay()));
        key = startOfWeek.toLocaleDateString();
      } else {
        key = `${date.getFullYear()}-${date.getMonth() + 1}`;
      }

      if (!data[key]) {
        data[key] = 0;
      }
      data[key] += session.duration / 60;
    });

    setChartData({
      labels: Object.keys(data),
      datasets: [
        {
          label: '专注时长 (分钟)',
          data: Object.values(data),
          backgroundColor: 'var(--primary-color)',
          borderRadius: 8,
          barThickness: 30,
        },
      ],
    });
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `专注时长 - ${timeRange === 'daily' ? '每日' : timeRange === 'weekly' ? '每周' : '每月'}`,
        font: {
          size: 18,
          weight: '700',
          family: 'Nunito, sans-serif',
        },
        color: 'var(--text-color-dark)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'var(--background-dark)',
        },
        ticks: {
          color: 'var(--text-color-light)',
          font: {
            weight: '700',
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'var(--text-color-light)',
          font: {
            weight: '700',
          }
        }
      },
    },
  };

  return (
    <div className="container stats-container">
      <button onClick={showTimer} className="view-btn primary-btn view-timer-btn">返回计时器</button>
      <div style={{textAlign: 'center'}}>
        <div className="time-range-selector">
          <button onClick={() => setTimeRange('daily')} className={timeRange === 'daily' ? 'active' : ''}>每日</button>
          <button onClick={() => setTimeRange('weekly')} className={timeRange === 'weekly' ? 'active' : ''}>每周</button>
          <button onClick={() => setTimeRange('monthly')} className={timeRange === 'monthly' ? 'active' : ''}>每月</button>
        </div>
      </div>
      <div className="chart-card">
        {chartData.labels && chartData.labels.length > 0 ? (
          <div style={{ height: '400px' }}>
            <Bar options={options} data={chartData} />
          </div>
        ) : (
          <p className="no-data-message">暂无数据，开始一次专注吧！</p>
        )}
      </div>
    </div>
  );
};

export default Stats;