import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import './User.css';
import './VerificationCode.css';

function VerificationCodeRegister({ toggleView }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [step, setStep] = useState('email'); // 'email', 'verify', 'success'
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // 步骤1: 发送验证码
  const handleSendCode = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 使用Supabase的OTP功能发送验证码
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          // 设置验证码有效期为1小时
          data: {
            signup_type: 'verification_code',
            username: username,
            password: password // 临时存储，验证后使用
          }
        }
      });

      if (error) throw error;

      console.log('验证码已发送到邮箱:', email);
      setStep('verify');
      
    } catch (error) {
      setError(error.message);
      console.error('发送验证码失败:', error);
    } finally {
      setLoading(false);
    }
  };

  // 步骤2: 验证验证码并创建账户
  const handleVerifyCode = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 验证OTP代码
      const { data: verifyData, error: verifyError } = await supabase.auth.verifyOtp({
        email: email,
        token: verificationCode,
        type: 'email'
      });

      if (verifyError) throw verifyError;

      console.log('验证码验证成功');

      // 如果验证成功，创建用户账户
      // 注意：这里需要特殊处理，因为verifyOtp会创建会话
      // 我们需要更新用户信息并设置密码
      
      const { data: updateData, error: updateError } = await supabase.auth.updateUser({
        password: password,
        data: {
          username: username,
          email_verified: true,
          signup_method: 'verification_code'
        }
      });

      if (updateError) throw updateError;

      console.log('用户账户创建成功');
      setStep('success');
      
    } catch (error) {
      setError(error.message || '验证码无效或已过期');
      console.error('验证码验证失败:', error);
    } finally {
      setLoading(false);
    }
  };

  // 替代方案：使用手机号验证码
  const PhoneVerificationRegister = () => {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');

    const sendPhoneCode = async () => {
      try {
        const { data, error } = await supabase.auth.signInWithOtp({
          phone: phone
        });

        if (error) throw error;
        console.log('短信验证码已发送');
      } catch (error) {
        console.error('发送短信验证码失败:', error);
      }
    };

    const verifyPhoneCode = async () => {
      try {
        const { data, error } = await supabase.auth.verifyOtp({
          phone: phone,
          token: code,
          type: 'sms'
        });

        if (error) throw error;
        console.log('手机号验证成功');
      } catch (error) {
        console.error('手机号验证码验证失败:', error);
      }
    };

    return (
      <div className="phone-verification">
        <h3>手机号验证码注册</h3>
        <input
          type="tel"
          placeholder="手机号 (+86）"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={sendPhoneCode}>发送验证码</button>
        <input
          type="text"
          placeholder="验证码"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={verifyPhoneCode}>验证手机号</button>
      </div>
    );
  };

  // 渲染步骤
  if (step === 'success') {
    return (
      <div className="user-container">
        <div className="registration-success">
          <h2>🎉 注册成功！</h2>
          <p>您的账户已通过验证码创建成功。</p>
          <p>现在您可以开始使用专注森林了！</p>
          <button onClick={toggleView} className="success-button">
            立即登录
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="user-container">
      <div className="user-form">
        {step === 'email' && (
          <form onSubmit={handleSendCode}>
            <h2>📧 验证码注册</h2>
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
              placeholder="邮箱地址"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="设置密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? '发送中...' : '发送验证码'}
            </button>
            <p className="toggle-view">
              已有账户？ <span onClick={toggleView}>立即登录</span>
            </p>
          </form>
        )}

        {step === 'verify' && (
          <form onSubmit={handleVerifyCode}>
            <h2>🔑 输入验证码</h2>
            {error && <p className="error-message">{error}</p>}
            <p className="info-message">
              验证码已发送到 {email}，请查收邮件
            </p>
            <input
              type="text"
              placeholder="6位验证码"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
              maxLength={6}
            />
            <button type="submit" disabled={loading}>
              {loading ? '验证中...' : '验证并注册'}
            </button>
            <button 
              type="button" 
              onClick={() => setStep('email')}
              className="secondary-button"
            >
              返回
            </button>
            <p className="resend-code">
              没收到验证码？ <span onClick={handleSendCode}>重新发送</span>
            </p>
          </form>
        )}

        <div className="divider">
          <span>或者</span>
        </div>

        <PhoneVerificationRegister />
      </div>
    </div>
  );
}

export default VerificationCodeRegister;