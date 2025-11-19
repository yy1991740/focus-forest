import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import './User.css';

function Login({ toggleView }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) throw error;
      // 登录成功消息由App.jsx处理，此处无需弹窗
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="user-container">
      <div className="user-form">
        <form onSubmit={handleSubmit}>
          <h2>登录</h2>
          {error && <p className="error-message">{error}</p>}
          <input
            type="email"
            placeholder="邮箱"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">登录</button>
          <p className="toggle-view">
            没有帐户？ <span onClick={toggleView}>立即注册</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;