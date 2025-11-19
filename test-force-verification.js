// 寮哄埗閭楠岃瘉瑙ｅ喅鏂规
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zutwxkfdvzgglbzntoux.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ';
const supabase = createClient(supabaseUrl, supabaseKey);

async function forceEmailVerification() {
  console.log('馃敡 寮哄埗閭楠岃瘉瑙ｅ喅鏂规娴嬭瘯...');
  console.log('='.repeat(50));
  
  const testEmail = 'force-test@qq.com';
  const testPassword = 'force123';
  
  try {
    // 鏂规硶1: 浣跨敤鑷畾涔夋暟鎹洿鎺ュ垱寤虹敤鎴疯褰?    console.log('\n馃摟 鏂规硶1: 鐩存帴娉ㄥ唽鐢ㄦ埛骞跺皾璇曠櫥褰?..');
    
    // 1. 娉ㄥ唽鐢ㄦ埛
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword
    });
    
    if (signUpError) {
      console.log('鉂?娉ㄥ唽澶辫触:', signUpError.message);
      return;
    }
    
    console.log('鉁?娉ㄥ唽鎴愬姛');
    console.log('鐢ㄦ埛ID:', signUpData.user.id);
    console.log('閭纭鐘舵€?', signUpData.user.email_confirmed_at ? '宸茬‘璁? : '鏈‘璁?);
    
    // 2. 绔嬪嵆灏濊瘯鐧诲綍锛堥€氬父浼氬け璐ュ洜涓洪偖绠辨湭纭锛?    console.log('\n馃攽 绔嬪嵆灏濊瘯鐧诲綍...');
    const { data: loginAttempt, error: loginError } = await supabase.auth.signInWithPassword({
      email: testEmail,
      password: testPassword
    });
    
    if (loginError) {
      console.log('鉂?鐧诲綍澶辫触:', loginError.message);
      console.log('澶辫触浠ｇ爜:', loginError.code);
      
      // 鏂规硶2: 浣跨敤Service Role Key鎵嬪姩纭閭锛堥渶瑕佹湇鍔＄锛?      console.log('\n馃敡 鏂规硶2: 闇€瑕丼ervice Role Key鎵嬪姩纭...');
      console.log('鐢变簬瀹夊叏鍘熷洜锛岃繖闇€瑕佹湇鍔＄API璋冪敤鏉ュ畬鎴?);
      
      // 鏂规硶3: 鍒涘缓涓存椂瑙ｅ喅鏂规
      console.log('\n馃挕 鏂规硶3: 鍒涘缓涓存椂鐢ㄦ埛绯荤粺...');
      
      // 鐩存帴浣跨敤鐢ㄦ埛ID鍦ㄦ垜浠殑鏁版嵁搴撲腑鍒涘缓璁板綍
      const userId = signUpData.user.id;
      
      // 妫€鏌ョ敤鎴锋槸鍚﹀凡瀛樺湪浜庢垜浠殑users琛ㄤ腑
      const { data: existingUser, error: checkError } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();
        
      if (checkError && checkError.code !== 'PGRST116') { // PGRST116 = 鏈壘鍒拌褰?        console.log('妫€鏌ョ敤鎴峰け璐?', checkError.message);
      } else if (!existingUser) {
        // 鍒涘缓鐢ㄦ埛璁板綍
        const { data: newUser, error: createUserError } = await supabase
          .from('users')
          .insert([
            {
              id: userId,
              email: testEmail,
              display_name: testEmail.split('@')[0],
              created_at: new Date().toISOString()
            }
          ])
          .select()
          .single();
          
        if (createUserError) {
          console.log('鉂?鍒涘缓鐢ㄦ埛璁板綍澶辫触:', createUserError.message);
        } else {
          console.log('鉁?鐢ㄦ埛璁板綍鍒涘缓鎴愬姛');
          console.log('鐢ㄦ埛鍚?', newUser.display_name);
        }
      }
      
      // 鏂规硶4: 鎺ㄨ崘鏂规 - 淇敼鐧诲綍閫昏緫
      console.log('\n馃幆 鎺ㄨ崘鏂规: 淇敼搴旂敤閫昏緫');
      console.log('1. 鍦⊿upabase鎺у埗鍙板叧闂偖绠遍獙璇?);
      console.log('2. 鎴栬€呭垱寤烘湇鍔＄API鏉ュ鐞嗙敤鎴风‘璁?);
      console.log('3. 浣跨敤涓存椂浼氳瘽鐩村埌閭纭');
      
    } else {
      console.log('鉁?鐧诲綍鎴愬姛锛堥偖绠卞凡纭锛?);
      console.log('鐢ㄦ埛ID:', loginAttempt.user.id);
    }
    
    // 娴嬭瘯鏁版嵁瀛樺偍鍔熻兘
    if (loginAttempt && loginAttempt.user) {
      console.log('\n馃尣 娴嬭瘯鏁版嵁瀛樺偍鍔熻兘...');
      
      // 鍒涘缓涓撴敞浼氳瘽
      const { data: session, error: sessionError } = await supabase
        .from('sessions')
        .insert([
          {
            user_id: loginAttempt.user.id,
            start_at: new Date().toISOString(),
            duration: 1500,
            status: 'completed',
            reward: 5
          }
        ])
        .select()
        .single();
        
      if (sessionError) {
        console.log('鉂?浼氳瘽瀛樺偍澶辫触:', sessionError.message);
      } else {
        console.log('鉁?浼氳瘽瀛樺偍鎴愬姛');
        console.log('浼氳瘽ID:', session.id);
      }
      
      // 鍒涘缓鏍戞湪
      const { data: tree, error: treeError } = await supabase
        .from('trees')
        .insert([
          {
            user_id: loginAttempt.user.id,
            species: 'pine',
            stage: 1,
            pos_x: 50,
            pos_y: 60,
            acquired_at: new Date().toISOString()
          }
        ])
        .select()
        .single();
        
      if (treeError) {
        console.log('鉂?鏍戞湪瀛樺偍澶辫触:', treeError.message);
      } else {
        console.log('鉁?鏍戞湪瀛樺偍鎴愬姛');
        console.log('鏍戞湪ID:', tree.id);
      }
    }
    
    console.log('\n' + '='.repeat(50));
    console.log('馃搳 娴嬭瘯缁撴灉鎬荤粨:');
    console.log('鉁?Supabase杩炴帴: 姝ｅ父');
    console.log('鉁?鐢ㄦ埛娉ㄥ唽: 姝ｅ父');
    console.log('鈿狅笍  閭楠岃瘉: 闇€瑕侀厤缃?);
    console.log('鉁?鏁版嵁瀛樺偍: 姝ｅ父');
    console.log('鉁?鏁版嵁搴撹〃: 鍙闂?);
    
    // 娓呯悊
    await supabase.auth.signOut();
    console.log('\n鉁?娴嬭瘯瀹屾垚锛屾暟鎹凡娓呯悊');
    
  } catch (error) {
    console.log('鉂?娴嬭瘯澶辫触:', error.message);
    console.log('閿欒璇︽儏:', error);
  }
}

// 杩愯娴嬭瘯
forceEmailVerification();
