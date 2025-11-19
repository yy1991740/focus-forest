# 馃殌 TRAE x Vercel 閮ㄧ讲妫€鏌ユ竻鍗?

## 馃搵 閮ㄧ讲鍓嶆鏌?

### 鉁?椤圭洰鏂囦欢瀹屾暣鎬?
- [x] `src/` - 鎵€鏈?React 缁勪欢鍜岄〉闈?
- [x] `public/` - 闈欐€佽祫婧?
- [x] `package.json` - 渚濊禆鍜岃剼鏈?
- [x] `vercel.json` - Vercel 閰嶇疆鏂囦欢
- [x] `DEPLOYMENT_GUIDE.md` - 閮ㄧ讲鎸囧崡

### 鉁?鏁版嵁搴撻厤缃?
- [x] Supabase 椤圭洰宸茶繛鎺ワ細`https://zutwxkfdvzgglbzntoux.supabase.co`
- [x] 琛ㄧ粨鏋勶細`users`, `sessions`, `trees`
- [x] RLS 鏉冮檺绛栫暐宸查厤缃?
- [x] 鍖垮悕鐢ㄦ埛鏉冮檺宸茶缃?

### 鉁?搴旂敤鍔熻兘娴嬭瘯
- [x] 鐢ㄦ埛娉ㄥ唽/鐧诲綍鍔熻兘
- [x] 涓撴敞璁℃椂鍣紙25鍒嗛挓锛?
- [x] 妫灄椤甸潰鏄剧ず鏍戞湪
- [x] 缁熻鏁版嵁鍥捐〃
- [x] 鏁版嵁鎸佷箙鍖栧埌鏁版嵁搴?

## 馃幆 閮ㄧ讲姝ラ

### 1. 閫氳繃 TRAE 闆嗘垚杩炴帴
```bash
# 浣跨敤 TRAE IDE 涓殑 Vercel 闆嗘垚鎸夐挳
# 鎺堟潈娴佺▼灏嗛€氳繃浠ヤ笅 URL 瀹屾垚
https://www.trae.ai/third-party-oauth?user_id=7569780871554827280&username=yy1991740&oauth_type=vercel
```

### 2. Vercel 椤圭洰璁剧疆
1. 鐧诲綍 Vercel 鎺у埗鍙?
2. 瀵煎叆 GitHub 浠撳簱锛堝鏋滃凡杩炴帴锛?
3. 璁剧疆鐜鍙橀噺锛?
   ```
   VITE_SUPABASE_URL=https://zutwxkfdvzgglbzntoux.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ
   ```

### 3. 鏋勫缓璁剧疆
- **妗嗘灦**: React (Vite)
- **鏋勫缓鍛戒护**: `npm run build`
- **杈撳嚭鐩綍**: `dist`
- **瀹夎鍛戒护**: `npm install`

### 4. 閮ㄧ讲閰嶇疆楠岃瘉
纭繚 `vercel.json` 鏂囦欢鍖呭惈锛?
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "env": {
    "VITE_SUPABASE_URL": "https://zutwxkfdvzgglbzntoux.supabase.co",
    "VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ"
  }
}
```

## 馃攳 閮ㄧ讲鍚庢祴璇?

### 鉁?鍩虹鍔熻兘娴嬭瘯
1. **璁块棶閮ㄧ讲鐨?URL**
2. **鐢ㄦ埛娉ㄥ唽**: 鍒涘缓鏂扮敤鎴疯处鎴?
3. **鐢ㄦ埛鐧诲綍**: 浣跨敤鍒涘缓鐨勮处鎴风櫥褰?
4. **涓撴敞鍔熻兘**: 寮€濮嬩竴涓?25 鍒嗛挓涓撴敞浼氳瘽
5. **妫灄鏌ョ湅**: 妫€鏌ヤ笓娉ㄥ悗鏄惁鏈夋柊鏍戞湪
6. **缁熻鏁版嵁**: 鏌ョ湅涓撴敞鏃堕暱缁熻

### 鉁?鏁版嵁楠岃瘉
- [ ] 鐢ㄦ埛鏁版嵁瀛樺偍鍦?`users` 琛?
- [ ] 涓撴敞浼氳瘽瀛樺偍鍦?`sessions` 琛?
- [ ] 鏍戞湪鏁版嵁瀛樺偍鍦?`trees` 琛?
- [ ] 鏁版嵁姝ｇ‘鍏宠仈鍒扮敤鎴?

## 馃洜锔?甯歌闂瑙ｅ喅

### CSRF 閿欒
濡傛灉浠嶇劧閬囧埌 CSRF 閿欒锛?
1. 娓呴櫎娴忚鍣ㄧ紦瀛樺拰 Cookie
2. 浣跨敤鏃犵棔妯″紡娴嬭瘯
3. 妫€鏌?Supabase 鎺у埗鍙颁腑鐨勮璇佽缃?
4. 纭繚鐜鍙橀噺姝ｇ‘璁剧疆

### 鏁版嵁搴撹繛鎺ラ棶棰?
1. 楠岃瘉 Supabase URL 鍜屽瘑閽?
2. 妫€鏌ョ綉缁滆繛鎺?
3. 纭 RLS 鏉冮檺璁剧疆
4. 娴嬭瘯鍖垮悕鐢ㄦ埛璁块棶鏉冮檺

### 鏋勫缓澶辫触
1. 妫€鏌ヤ緷璧栧寘鏄惁瀹屾暣
2. 楠岃瘉鏋勫缓鑴氭湰
3. 妫€鏌?TypeScript/JavaScript 閿欒
4. 纭繚鎵€鏈夋枃浠跺凡鎻愪氦

## 馃摓 鏀寔

濡傛灉閬囧埌閮ㄧ讲闂锛?
1. 妫€鏌?TRAE IDE 鐨勯泦鎴愭棩蹇?
2. 鏌ョ湅 Vercel 閮ㄧ讲鏃ュ織
3. 楠岃瘉 Supabase 鎺у埗鍙扮姸鎬?
4. 妫€鏌ユ祻瑙堝櫒寮€鍙戣€呭伐鍏锋帶鍒跺彴

---

**馃帀 鍑嗗閮ㄧ讲锛佹偍鐨?Focus Forest 搴旂敤宸茬粡瀹屽叏鍑嗗灏辩华銆?*
