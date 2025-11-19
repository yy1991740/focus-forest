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
      // 首先尝试注册（这会覆盖已存在的用户或创建新用户）
      console.log('Attempting sign up with email confirmation disabled...');
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          // 禁用邮箱验证，立即激活账户
          email_confirm: true,
          data: {
            // 自动设置用户名
            username: email.split('@')[0]
          }
        },
      });
      
      if (signUpError) {
        console.log('Sign up error:', signUpError);
        throw signUpError;
      }
      
      console.log('Sign up successful:', signUpData);
      
      // 注册成功后立即登录
      const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      
      if (loginError) {
        console.log('Login after sign up error:', loginError);
        throw loginError;
      }
      
      console.log('Login successful:', loginData);
      
    } catch (error) {
      console.log('Final error:', error);
      setError(error.message || '登录失败，请重试');
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