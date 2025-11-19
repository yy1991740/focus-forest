import React, { useState, useEffect } from 'react';
import './Timer.css';
import '../../global.css'; // 导入全局样式
import { supabase } from '../../supabaseClient';

const Timer = ({ showForest, showStats }) => {
  const [mode, setMode] = useState('work');
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const workDuration = 25 * 60;

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      const newMode = mode === 'work' ? 'break' : 'work';
      const newTime = newMode === 'work' ? workDuration : 5 * 60;
      setMode(newMode);
      setTime(newTime);
      setIsActive(false);
      alert(newMode === 'work' ? '开始工作！' : '休息一下！');
    }
    return () => clearInterval(interval);
  }, [isActive, time, mode]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setMode('work');
    setTime(workDuration);
    setIsActive(false);
  };

  const handleComplete = async () => {
    if (mode !== 'work' || !isActive) return;

    const focusedDuration = workDuration - time;
    setIsActive(false);

    const { data: { user } } = await supabase.auth.getUser();

    if (user && focusedDuration > 0) {
      const { error } = await supabase
        .from('sessions')
        .insert([{ user_id: user.id, duration: focusedDuration, start_at: new Date().toISOString(), status: 'completed', reward: 1 }]);

      if (error) {
        console.error('Error saving session:', error);
        alert('保存专注记录失败！');
      } else {
        alert('专注完成，小树正在成长！');
        showForest();
      }
    } else {
      showForest();
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <div className="timer">
        <div className="time-display">{formatTime(time)}</div>
        <div className="controls">
          <button onClick={toggle}>{isActive ? '暂停' : '开始'}</button>
          <button onClick={reset}>重置</button>
          {isActive && mode === 'work' && <button onClick={handleComplete}>完成</button>}
        </div>
      </div>
      <button onClick={showForest} className="view-btn primary-btn view-forest-btn">查看我的森林</button>
      <button onClick={showStats} className="view-btn secondary-btn view-stats-btn">查看统计</button>
    </div>
  );
};

export default Timer;