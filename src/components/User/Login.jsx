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
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      
      if (error) {
        console.log('Login error:', error);
        // 如果登录失败，尝试注册新用户（适用于演示环境）
        if (error.message.includes('Invalid login credentials') || error.code === 'invalid_credentials') {
          console.log('Attempting to register new user...');
          const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email: email,
            password: password,
          });
          
          if (signUpError) {
            console.log('Sign up error:', signUpError);
            throw signUpError;
          }
          
          console.log('Sign up successful:', signUpData);
          
          // 注册成功后自动登录
          const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          });
          
          if (loginError) {
            console.log('Auto login after sign up error:', loginError);
            throw loginError;
          }
          
          console.log('Auto login successful:', loginData);
        } else {
          throw error;
        }
      } else {
        console.log('Login successful:', data);
      }
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