// 娴嬭瘯Supabase涓嶸ercel杩炴帴
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zutwxkfdvzgglbzntoux.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  console.log('馃И 寮€濮嬫祴璇昐upabase杩炴帴...');
  
  try {
    // 娴嬭瘯1: 妫€鏌ヨ璇?    console.log('\n1. 娴嬭瘯璁よ瘉杩炴帴...');
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.log('鉂?璁よ瘉杩炴帴澶辫触:', sessionError.message);
    } else {
      console.log('鉁?璁よ瘉杩炴帴鎴愬姛');
      console.log('褰撳墠浼氳瘽:', session ? '宸茬櫥褰? : '鏈櫥褰?);
      if (session) {
        console.log('鐢ㄦ埛ID:', session.user.id);
        console.log('鐢ㄦ埛閭:', session.user.email);
      }
    }

    // 娴嬭瘯2: 灏濊瘯娉ㄥ唽娴嬭瘯鐢ㄦ埛
    console.log('\n2. 娴嬭瘯鐢ㄦ埛娉ㄥ唽...');
    const testEmail = 'testuser@qq.com';
    const testPassword = 'test123456';
    
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
      options: {
        email_confirm: true,
        data: {
          username: 'test-user'
        }
      }
    });

    if (signUpError) {
      console.log('鉂?鐢ㄦ埛娉ㄥ唽澶辫触:', signUpError.message);
    } else {
      console.log('鉁?鐢ㄦ埛娉ㄥ唽鎴愬姛');
      console.log('鐢ㄦ埛ID:', signUpData.user.id);
      console.log('鐢ㄦ埛閭:', signUpData.user.email);
    }

    // 娴嬭瘯3: 娴嬭瘯鐧诲綍
    console.log('\n3. 娴嬭瘯鐢ㄦ埛鐧诲綍...');
    const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
      email: testEmail,
      password: testPassword
    });

    if (loginError) {
      console.log('鉂?鐢ㄦ埛鐧诲綍澶辫触:', loginError.message);
    } else {
      console.log('鉁?鐢ㄦ埛鐧诲綍鎴愬姛');
      console.log('璁块棶浠ょ墝:', loginData.session.access_token.substring(0, 20) + '...');
    }

    // 娴嬭瘯4: 妫€鏌ユ暟鎹簱琛?    console.log('\n4. 娴嬭瘯鏁版嵁搴撹繛鎺?..');
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('*')
      .limit(5);

    if (usersError) {
      console.log('鉂?鏁版嵁搴撴煡璇㈠け璐?', usersError.message);
    } else {
      console.log('鉁?鏁版嵁搴撹繛鎺ユ垚鍔?);
      console.log('鐢ㄦ埛琛ㄨ褰曟暟:', users ? users.length : 0);
      if (users && users.length > 0) {
        console.log('绀轰緥鐢ㄦ埛:', users[0].email);
      }
    }

    // 娴嬭瘯5: 娴嬭瘯浼氳瘽琛?    console.log('\n5. 娴嬭瘯浼氳瘽琛?..');
    const { data: sessions, error: sessionsError } = await supabase
      .from('sessions')
      .select('*')
      .limit(3);

    if (sessionsError) {
      console.log('鉂?浼氳瘽琛ㄦ煡璇㈠け璐?', sessionsError.message);
    } else {
      console.log('鉁?浼氳瘽琛ㄨ繛鎺ユ垚鍔?);
      console.log('浼氳瘽璁板綍鏁?', sessions ? sessions.length : 0);
    }

    console.log('\n馃帀 杩炴帴娴嬭瘯瀹屾垚锛?);
    
    // 娓呯悊锛氱櫥鍑烘祴璇曠敤鎴?    await supabase.auth.signOut();
    console.log('宸叉竻鐞嗘祴璇曚細璇?);

  } catch (error) {
    console.log('鉂?娴嬭瘯杩囩▼涓彂鐢熼敊璇?', error.message);
  }
}

// 杩愯娴嬭瘯
testConnection();
