// 测试Supabase连接
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zutwxkfdvzgglbzntoux.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  console.log('🚀 开始测试Supabase连接...');
  
  try {
    // 测试1: 检查认证
    console.log('\n1. 测试认证连接...');
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.log('❌ 认证连接失败:', sessionError.message);
    } else {
      console.log('✅ 认证连接成功');
      console.log('当前会话:', session ? '已登录' : '未登录');
      if (session) {
        console.log('用户ID:', session.user.id);
        console.log('用户邮箱:', session.user.email);
      }
    }

    // 测试2: 尝试注册测试用户
    console.log('\n2. 测试用户注册...');
    const testEmail = 'testuser@qq.com';
    const testPassword = 'test123456';
    
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
    });

    if (signUpError) {
      console.log('❌ 注册失败:', signUpError.message);
    } else {
      console.log('✅ 注册成功');
      console.log('用户数据:', signUpData.user ? signUpData.user.id : '无用户数据');
    }

    // 测试3: 查询数据库
    console.log('\n3. 测试数据库查询...');
    const { data: sessions, error: dbError } = await supabase
      .from('sessions')
      .select('*')
      .limit(5);

    if (dbError) {
      console.log('❌ 数据库查询失败:', dbError.message);
    } else {
      console.log('✅ 数据库查询成功');
      console.log('会话数据条数:', sessions ? sessions.length : 0);
      if (sessions && sessions.length > 0) {
        console.log('示例数据:', JSON.stringify(sessions[0], null, 2));
      }
    }

    // 测试4: 插入测试数据
    console.log('\n4. 测试数据插入...');
    const { error: insertError } = await supabase
      .from('sessions')
      .insert([
        {
          user_id: 'test-user-id',
          duration: 25,
          completed: true,
          created_at: new Date().toISOString()
        }
      ]);

    if (insertError) {
      console.log('❌ 数据插入失败:', insertError.message);
    } else {
      console.log('✅ 数据插入成功');
    }

    console.log('\n🎉 测试完成！');
    
  } catch (error) {
    console.error('测试过程中出现错误:', error.message);
  }
}

testConnection();