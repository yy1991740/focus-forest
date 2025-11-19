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
      if (error) {
        // 如果登录失败，尝试注册新用户（适用于演示环境）
        if (error.message.includes('Invalid login credentials')) {
          const { error: signUpError } = await supabase.auth.signUp({
            email: email,
            password: password,
          });
          if (signUpError) throw signUpError;
          // 注册成功后自动登录
          const { error: loginError } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          });
          if (loginError) throw loginError;
        } else {
          throw error;
        }
      }
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