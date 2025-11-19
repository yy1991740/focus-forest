import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import './Forest.css';
import '../../global.css'; // 导入全局样式
import tree1 from '../../assets/trees/tree-1.svg';
import tree2 from '../../assets/trees/tree-2.svg';
import tree3 from '../../assets/trees/tree-3.svg';
import tree4 from '../../assets/trees/tree-4.svg';
import tree5 from '../../assets/trees/tree-5.svg';

const trees = [tree1, tree2, tree3, tree4, tree5];

const Forest = ({ showTimer, showStats }) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('sessions')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) {
          console.log('Error fetching sessions:', error);
        } else {
          setSessions(data);
        }
      }
    };

    fetchSessions();
  }, []);

  const getTreeSize = (duration) => {
    const minutes = duration / 60;
    if (minutes < 10) return '40px';
    if (minutes < 20) return '60px';
    if (minutes < 30) return '80px';
    if (minutes < 45) return '100px';
    return '120px';
  };

  return (
    <div className="forest-container">
      <button onClick={showTimer} className="view-btn primary-btn view-timer-btn">返回计时器</button>
      <button onClick={showStats} className="view-btn secondary-btn view-stats-btn">查看统计</button>
      <div className="forest-floor">
        {sessions.length > 0 ? (
          sessions.map((session) => {
            const treeType = trees[Math.floor(Math.random() * trees.length)];
            const size = getTreeSize(session.duration);
            const rotation = Math.random() * 15 - 7.5; // -7.5 to 7.5 degrees
            const top = 20 + Math.random() * 60; // 20% to 80% from top
            const left = 5 + Math.random() * 90; // 5% to 95% from left
            const zIndex = Math.floor(top);
            const filter = `hue-rotate(${Math.random() * 40 - 20}deg)`; // -20 to 20 deg hue shift

            return (
              <div
                key={session.id}
                className="tree"
                style={{
                  width: size,
                  height: size,
                  top: `${top}%`,
                  left: `${left}%`,
                  zIndex: zIndex,
                  transform: `rotate(${rotation}deg)`,
                  filter: filter,
                }}
                title={`专注了 ${Math.floor(session.duration / 60)} 分钟`}
              >
                <img src={treeType} alt="tree" />
              </div>
            );
          })
        ) : (
          <p className="empty-forest-message">你的森林空空如也，快去专注吧！</p>
        )}
      </div>
    </div>
  );
};

export default Forest;