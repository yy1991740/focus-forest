// 完整的Supabase验证码注册实施方案
import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import './User.css';
import './VerificationCode.css';

function CompleteVerificationRegister({ toggleView }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [step, setStep] = useState('email'); // 'email', 'verify', 'success'
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [canResend, setCanResend] = useState(true);

  // 倒计时效果
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  // 发送验证码
  const handleSendCode = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 验证邮箱格式
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('请输入有效的邮箱地址');
      }

      // 验证密码强度
      if (password.length < 6) {
        throw new Error('密码长度至少为6位');
      }

      // 使用Supabase的OTP功能发送验证码
      console.log('正在发送验证码到:', email);
      
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          // 设置验证码有效期
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          // 自定义数据
          data: {
            username: username,
            password: password, // 临时存储，验证后使用
            signup_type: 'verification_code',
            timestamp: new Date().toISOString()
          }
        }
      });

      if (error) throw error;

      console.log('✅ 验证码发送成功');
      setStep('verify');
      setCountdown(60); // 60秒倒计时
      setCanResend(false);
      
      // 显示成功消息
      alert(`验证码已发送到 ${email}，请查收邮件！\n\n在实际应用中，验证码会显示在邮件中。`);
      
    } catch (error) {
      setError(error.message || '发送验证码失败');
      console.error('发送验证码失败:', error);
    } finally {
      setLoading(false);
    }
  };

  // 验证验证码
  const handleVerifyCode = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 验证验证码格式
      if (verificationCode.length !== 6 || !/^\d{6}$/.test(verificationCode)) {
        throw new Error('请输入6位数字验证码');
      }

      console.log('正在验证验证码:', verificationCode);
      
      // 验证OTP代码
      const { data: verifyData, error: verifyError } = await supabase.auth.verifyOtp({
        email: email,
        token: verificationCode,
        type: 'email'
      });

      if (verifyError) throw verifyError;

      console.log('✅ 验证码验证成功');
      console.log('用户ID:', verifyData.user?.id);

      // 更新用户信息（设置密码和用户名）
      const { data: updateData, error: updateError } = await supabase.auth.updateUser({
        password: password,
        data: {
          username: username,
          email_verified: true,
          signup_method: 'verification_code',
          verified_at: new Date().toISOString()
        }
      });

      if (updateError) {
        console.log('更新用户信息失败，尝试其他方法:', updateError.message);
        
        // 如果更新失败，尝试直接注册
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            email_confirm: true,
            data: {
              username: username,
              signup_method: 'verification_code',
              verification_code: verificationCode
            }
          }
        });

        if (signUpError) throw signUpError;
        console.log('✅ 使用备用注册方案成功');
      } else {
        console.log('✅ 用户信息更新成功');
      }

      // 验证成功，进入成功页面
      setStep('success');
      
    } catch (error) {
      console.error('验证码验证失败:', error);
      
      // 提供更详细的错误信息
      let errorMessage = '验证码验证失败';
      if (error.message.includes('Token has expired')) {
        errorMessage = '验证码已过期，请重新获取';
      } else if (error.message.includes('Invalid token')) {
        errorMessage = '验证码不正确，请检查输入';
      } else if (error.message.includes('Email not confirmed')) {
        errorMessage = '邮箱未确认，请使用其他注册方式';
      } else {
        errorMessage = error.message || '验证失败，请重试';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // 重新发送验证码
  const handleResendCode = async () => {
    if (!canResend) return;
    
    setError(null);
    setVerificationCode('');
    
    try {
      setLoading(true);
      
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            username: username,
            password: password,
            signup_type: 'verification_code_resend',
            timestamp: new Date().toISOString()
          }
        }
      });

      if (error) throw error;

      console.log('✅ 验证码重新发送成功');
      setCountdown(60);
      setCanResend(false);
      alert('验证码已重新发送！');
      
    } catch (error) {
      setError('重新发送失败：' + (error.message || '未知错误'));
      console.error('重新发送验证码失败:', error);
    } finally {
      setLoading(false);
    }
  };

  // 返回上一步
  const goBack = () => {
    setStep('email');
    setError(null);
    setVerificationCode('');
  };

  // 渲染步骤
  if (step === 'success') {
    return (
      <div className="user-container">
        <div className="registration-success">
          <div className="success-icon">🎉</div>
          <h2>注册成功！</h2>
          <p>您的账户已通过验证码验证并创建成功。</p>
          <p>现在您可以开始使用专注森林了！</p>
          <div className="success-details">
            <p>📧 邮箱：{email}</p>
            <p>👤 用户名：{username}</p>
          </div>
          <button onClick={toggleView} className="success-button">
            立即开始使用
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="user-container">
      <div className="verification-form">
        {step === 'email' && (
          <form onSubmit={handleSendCode}>
            <h2>📧 验证码注册</h2>
            <p className="info-message">
              我们将发送一个6位验证码到您的邮箱，请输入验证码完成注册。
              验证码有效期为1小时。
            </p>
            {error && <p className="error-message">{error}</p>}
            
            <input
              type="text"
              placeholder="用户名"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={loading}
            />
            
            <input
              type="email"
              placeholder="邮箱地址"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            
            <input
              type="password"
              placeholder="设置密码（至少6位）"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
            
            <button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="loading-spinner"></span>
                  发送验证码...
                </>
              ) : (
                '发送验证码'
              )}
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
              验证码已发送到 <strong>{email}</strong>，请查收邮件
              {countdown > 0 && (
                <span className="countdown">（{countdown}秒后可重发）</span>
              )}
            </p>
            
            <input
              type="text"
              placeholder="6位验证码"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
              maxLength={6}
              pattern="[0-9]{6}"
              inputMode="numeric"
              disabled={loading}
            />
            
            <button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="loading-spinner"></span>
                  验证中...
                </>
              ) : (
                '验证并注册'
              )}
            </button>
            
            <button 
              type="button" 
              onClick={goBack}
              className="secondary-button"
              disabled={loading}
            >
              返回
            </button>
            
            <p className="resend-code">
              {canResend ? (
                <span onClick={handleResendCode}>重新发送验证码</span>
              ) : (
                <span>重新发送验证码（{countdown}秒）</span>
              )}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default CompleteVerificationRegister;