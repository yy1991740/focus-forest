import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import './User.css';

function Register({ toggleView }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            username: username,
          },
          // 禁用邮箱验证，立即激活账户
          email_confirm: true
        },
      });
      if (error) throw error;
      setRegistrationSuccess(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="user-container">
      {registrationSuccess ? (
        <div className="registration-success">
          <h2>注册成功！</h2>
          <p>我们已向您的邮箱发送了一封验证邮件，请点击邮件中的链接以完成注册。</p>
        </div>
      ) : (
        <div className="user-form">
          <form onSubmit={handleSubmit}>
            <h2>注册</h2>
            {error && <p className="error-message">{error}</p>}
            <input
              type="text"
              placeholder="用户名"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
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
            <button type="submit">注册</button>
            <p className="toggle-view">
              已有帐户？ <span onClick={toggleView}>立即登录</span>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default Register;