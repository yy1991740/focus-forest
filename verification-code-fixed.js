// Supabase验证码配置指南 - 修复版
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zutwxkfdvzgglbzntoux.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ';

console.log('📧 Supabase验证码注册配置指南');
console.log('='.repeat(60));
console.log('Supabase URL:', supabaseUrl);
console.log('正在测试连接...');

const supabase = createClient(supabaseUrl, supabaseKey);

// 修复版：移除浏览器依赖
class VerificationCodeAuth {
  constructor() {
    this.pendingEmail = null;
    this.pendingPassword = null;
  }

  // 1. 发送验证码
  async sendVerificationCode(email) {
    try {
      console.log('正在发送验证码到:', email);
      
      // 使用Supabase的OTP功能发送验证码
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          // 设置验证码有效期（可选）
          emailRedirectTo: `${supabaseUrl}/auth/callback`, // 使用服务端URL
          // 自定义邮件模板（需要在Supabase控制台配置）
          data: {
            verification_type: 'signup',
            code_length: 6
          }
        }
      });

      if (error) {
        console.log('发送失败:', error.message);
        throw error;
      }
      
      console.log('✅ 验证码发送成功');
      console.log('📧 检查邮箱获取验证码');
      return { success: true, message: '验证码已发送，请查收邮件' };
    } catch (error) {
      console.error('发送验证码失败:', error);
      return { success: false, message: error.message };
    }
  }

  // 2. 验证验证码并创建账户
  async verifyCodeAndSignup(email, code, password, username) {
    try {
      console.log('正在验证验证码:', code);
      
      // 首先验证OTP代码
      const { data: verifyData, error: verifyError } = await supabase.auth.verifyOtp({
        email: email,
        token: code,
        type: 'email'
      });

      if (verifyError) {
        console.log('验证码验证失败:', verifyError.message);
        throw verifyError;
      }

      console.log('✅ 验证码验证成功');
      console.log('用户ID:', verifyData.user?.id);

      // 如果验证成功，更新用户密码和其他信息
      const { data: updateData, error: updateError } = await supabase.auth.updateUser({
        password: password,
        data: {
          username: username,
          email_verified: true
        }
      });

      if (updateError) {
        console.log('更新用户信息失败:', updateError.message);
        throw updateError;
      }

      console.log('✅ 用户账户创建成功');
      return { success: true, message: '账户创建成功！', user: updateData.user };
    } catch (error) {
      console.error('验证码验证失败:', error);
      return { success: false, message: '验证码无效或已过期' };
    }
  }

  // 3. 测试验证码系统
  async testVerificationSystem() {
    console.log('\n🧪 开始测试验证码系统...');
    
    const testEmail = 'test-code@qq.com';
    
    console.log('\n1️⃣ 发送验证码...');
    const sendResult = await this.sendVerificationCode(testEmail);
    console.log('发送结果:', sendResult);
    
    if (sendResult.success) {
      console.log('\n2️⃣ 模拟验证码输入...');
      console.log('📧 检查邮箱获取真实验证码');
      console.log('⚠️  注意：需要使用真实的验证码进行测试');
      console.log('在真实环境中，用户会从邮件中获取验证码');
    }
  }
}

// 测试连接
async function testConnection() {
  try {
    console.log('\n🔗 测试Supabase连接...');
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.log('❌ 连接失败:', error.message);
      return false;
    } else {
      console.log('✅ 连接成功');
      console.log('当前会话:', data.session ? '已登录' : '未登录');
      return true;
    }
  } catch (error) {
    console.log('❌ 连接错误:', error.message);
    return false;
  }
}

// 运行测试
async function runTests() {
  const isConnected = await testConnection();
  
  if (isConnected) {
    console.log('\n🚀 开始验证码系统测试...');
    const authSystem = new VerificationCodeAuth();
    await authSystem.testVerificationSystem();
  } else {
    console.log('\n❌ 无法连接到Supabase，请检查配置');
  }
}

console.log('\n💡 配置说明:');
console.log('   • 在Supabase控制台配置邮件模板');
console.log('   • 设置SMTP服务（如SendGrid、Resend等）');
console.log('   • 自定义验证码邮件内容');
console.log('   • 可选：配置短信验证码（需要Twilio等服务）');

console.log('\n🔧 配置步骤:');
console.log('   1. 访问 https://app.supabase.com');
console.log('   2. 选择您的项目');
console.log('   3. 进入 Authentication > Email Templates');
console.log('   4. 编辑 "Confirm signup" 模板');
console.log('   5. 添加验证码显示和输入表单');

console.log('\n📱 用户界面设计建议：');
console.log('   • 清晰的验证码输入框（6位）');
console.log('   • 倒计时显示（60秒后重发）');
console.log('   • 错误提示和成功反馈');
console.log('   • 支持重新发送验证码');
console.log('   • 返回上一步的选项');

console.log('\n⚠️  安全注意事项：');
console.log('   • 限制验证码尝试次数');
console.log('   • 设置验证码有效期');
console.log('   • 使用HTTPS传输');
console.log('   • 防止暴力破解');
console.log('   • 记录验证日志');

console.log('\n✅ 完成配置后，用户将收到包含验证码的邮件');
console.log('   而不是验证网址，体验更加流畅！');

// 运行测试
runTests();