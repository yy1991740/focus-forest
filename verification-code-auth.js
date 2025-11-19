// 验证码注册系统 - 替代邮箱验证网址
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zutwxkfdvzgglbzntoux.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ';

const supabase = createClient(supabaseUrl, supabaseKey);

// 验证码注册组件逻辑
class VerificationCodeAuth {
  constructor() {
    this.pendingEmail = null;
    this.pendingPassword = null;
  }

  // 1. 发送验证码
  async sendVerificationCode(email) {
    try {
      // 使用Supabase的OTP功能发送验证码
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          // 设置验证码有效期（可选）
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          // 自定义邮件模板（需要在Supabase控制台配置）
          data: {
            verification_type: 'signup',
            code_length: 6
          }
        }
      });

      if (error) throw error;
      
      console.log('验证码已发送到:', email);
      return { success: true, message: '验证码已发送，请查收邮件' };
    } catch (error) {
      console.error('发送验证码失败:', error);
      return { success: false, message: error.message };
    }
  }

  // 2. 验证验证码并创建账户
  async verifyCodeAndSignup(email, code, password, username) {
    try {
      // 首先验证OTP代码
      const { data: verifyData, error: verifyError } = await supabase.auth.verifyOtp({
        email: email,
        token: code,
        type: 'email'
      });

      if (verifyError) throw verifyError;

      console.log('验证码验证成功');

      // 如果验证成功，更新用户密码和其他信息
      const { data: updateData, error: updateError } = await supabase.auth.updateUser({
        password: password,
        data: {
          username: username,
          email_verified: true
        }
      });

      if (updateError) throw updateError;

      console.log('用户账户创建成功');
      return { success: true, message: '账户创建成功！', user: updateData.user };
    } catch (error) {
      console.error('验证码验证失败:', error);
      return { success: false, message: '验证码无效或已过期' };
    }
  }

  // 3. 替代方案：使用手机号验证码
  async sendPhoneVerificationCode(phone) {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        phone: phone
      });

      if (error) throw error;
      
      console.log('短信验证码已发送到:', phone);
      return { success: true, message: '短信验证码已发送' };
    } catch (error) {
      console.error('发送短信验证码失败:', error);
      return { success: false, message: error.message };
    }
  }

  // 4. 验证手机号验证码
  async verifyPhoneCode(phone, code) {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        phone: phone,
        token: code,
        type: 'sms'
      });

      if (error) throw error;

      console.log('手机号验证成功');
      return { success: true, user: data.user };
    } catch (error) {
      console.error('手机号验证码验证失败:', error);
      return { success: false, message: '验证码无效' };
    }
  }

  // 5. 测试验证码系统
  async testVerificationSystem() {
    console.log('🧪 开始测试验证码系统...');
    
    const testEmail = 'test-code@qq.com';
    const testCode = '123456'; // 测试用的验证码
    
    console.log('\n1. 发送验证码...');
    const sendResult = await this.sendVerificationCode(testEmail);
    console.log('发送结果:', sendResult);
    
    // 等待用户输入验证码（实际应用中需要UI）
    console.log('\n2. 模拟验证码输入...');
    console.log('假设用户输入验证码:', testCode);
    
    // 注意：在实际测试中，您需要从邮件中获取真实验证码
    // 这里只是演示流程
    
    console.log('\n3. 验证验证码...');
    console.log('⚠️  注意：需要使用真实的验证码进行测试');
    console.log('验证码会发送到邮箱，请检查邮件');
  }
}

// 使用示例
const authSystem = new VerificationCodeAuth();

// 运行测试
console.log('📧 Supabase验证码注册系统测试');
console.log('='.repeat(50));

// 测试验证码系统
authSystem.testVerificationSystem();

console.log('\n💡 配置说明:');
console.log('1. 在Supabase控制台配置邮件模板');
console.log('2. 设置SMTP服务（如SendGrid、Resend等）');
console.log('3. 自定义验证码邮件内容');
console.log('4. 可选：配置短信验证码（需要Twilio等服务）');

console.log('\n🔧 配置步骤:');
console.log('1. 访问 https://app.supabase.com');
console.log('2. 选择您的项目');
console.log('3. 进入 Authentication > Email Templates');
console.log('4. 编辑 "Confirm signup" 模板');
console.log('5. 添加验证码显示和输入表单');

export { VerificationCodeAuth };