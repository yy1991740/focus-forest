// Supabase验证码配置指南
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zutwxkfdvzgglbzntoux.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ';

console.log('📧 Supabase验证码注册配置指南');
console.log('='.repeat(60));

console.log('\n🎯 目标：使用验证码替代邮箱验证网址');
console.log('\n📋 配置步骤：');

console.log('\n1️⃣ 配置Supabase邮件模板：');
console.log('   • 访问：https://app.supabase.com');
console.log('   • 选择您的项目');
console.log('   • 进入：Authentication > Email Templates');
console.log('   • 编辑 "Confirm signup" 模板');

console.log('\n2️⃣ 修改邮件模板内容：');
console.log(`
   主题：您的验证码是 {{ .Token }}
   
   邮件内容：
   您好！
   
   您的注册验证码是：{{ .Token }}
   
   请在应用中输入此验证码完成注册。
   
   验证码有效期为1小时。
   
   如果这不是您请求的，请忽略此邮件。
`);

console.log('\n3️⃣ 配置SMTP服务（可选但推荐）：');
console.log('   • 使用SendGrid、Resend或自定义SMTP');
console.log('   • 在Supabase设置中配置SMTP凭据');
console.log('   • 提高邮件送达率');

console.log('\n4️⃣ 前端实现验证码输入：');
console.log('   • 创建验证码输入界面');
console.log('   • 实现6位验证码验证');
console.log('   • 添加重发验证码功能');

console.log('\n5️⃣ 后端验证流程：');
console.log('   • 用户输入邮箱请求注册');
console.log('   • 系统发送验证码到邮箱');
console.log('   • 用户输入验证码');
console.log('   • 验证验证码并创建账户');

console.log('\n💡 代码实现示例：');

// 演示验证码发送
async function demoVerificationCode() {
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  const testEmail = 'demo-verification@qq.com';
  
  console.log('\n🧪 演示：发送验证码到', testEmail);
  
  try {
    // 方法1：使用signInWithOtp发送验证码
    const { data, error } = await supabase.auth.signInWithOtp({
      email: testEmail,
      options: {
        // 设置验证码类型和有效期
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        data: {
          verification_type: 'code',
          expires_in: 3600 // 1小时
        }
      }
    });
    
    if (error) {
      console.log('❌ 发送失败:', error.message);
    } else {
      console.log('✅ 验证码发送成功');
      console.log('📧 检查邮箱获取验证码');
      console.log('⏰ 验证码有效期：1小时');
    }
    
  } catch (error) {
    console.log('❌ 错误:', error.message);
  }
}

// 演示验证码验证
async function demoVerifyCode() {
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  const testEmail = 'demo-verification@qq.com';
  const demoCode = '123456'; // 实际应用中需要从用户输入获取
  
  console.log('\n🧪 演示：验证验证码');
  console.log('邮箱:', testEmail);
  console.log('验证码:', demoCode);
  
  try {
    // 验证OTP代码
    const { data, error } = await supabase.auth.verifyOtp({
      email: testEmail,
      token: demoCode,
      type: 'email'
    });
    
    if (error) {
      console.log('❌ 验证失败:', error.message);
    } else {
      console.log('✅ 验证成功');
      console.log('用户ID:', data.user?.id);
      console.log('邮箱:', data.user?.email);
    }
    
  } catch (error) {
    console.log('❌ 错误:', error.message);
  }
}

console.log('\n🚀 运行演示：');
demoVerificationCode().then(() => {
  setTimeout(() => {
    demoVerifyCode();
  }, 2000);
});

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

console.log('\n' + '='.repeat(60));
