// 测试Supabase连接 - 使用正确的URL和密钥
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zutwxkfdvzgglbzntoux.supabase.co';
// 注意：需要替换为与 zutwxkfdvzgglbzntoux.supabase.co 匹配的正确anon key
const supabaseKey = '你的正确anon密钥'; // 请替换为实际的anon key

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  console.log('🚀 开始测试Supabase连接...');
  console.log('使用URL:', supabaseUrl);
  
  try {
    // 测试1: 检查认证
    console.log('\n1. 测试认证连接...');
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.log('❌ 认证连接失败:', sessionError.message);
    } else {
      console.log('✅ 认证连接成功');
      console.log('当前会话:', session ? '已登录' : '未登录');
    }

    console.log('\n🎉 基础连接测试完成！');
    
  } catch (error) {
    console.error('测试过程中出现错误:', error.message);
  }
}

// 如果提供了正确的密钥才执行测试
if (supabaseKey !== '你的正确anon密钥') {
  testConnection();
} else {
  console.log('⚠️ 请先设置正确的Supabase anon密钥');
}