# TRAE x Vercel 閮ㄧ讲閰嶇疆

## 褰撳墠椤圭洰鐘舵€?
鉁?**搴旂敤寮€鍙戝畬鎴?*
- 绮剧編鐨?UI 鐣岄潰锛堣鏃跺櫒銆佹．鏋椼€佺粺璁°€佽璇侀〉闈級
- 瀹屾暣鐨?Supabase 鏁版嵁搴撻泦鎴?
- 5绉嶄笉鍚岀殑鏍戞湪 SVG 璧勬簮
- 鑷劧鐨勬．鏋楀姩鐢绘晥鏋?

鉁?**鏁版嵁搴撻厤缃畬鎴?*
- Supabase 椤圭洰锛歚https://zutwxkfdvzgglbzntoux.supabase.co`
- 琛ㄧ粨鏋勶細`users`, `sessions`, `trees`
- RLS 鏉冮檺绛栫暐宸查厤缃?
- 鍖垮悕鍜岃璇佺敤鎴锋潈闄愬凡璁剧疆

## 閮ㄧ讲姝ラ

### 1. 閫氳繃 TRAE 闆嗘垚杩炴帴 Vercel
鎮ㄦ彁渚涚殑 OAuth URL 鏄纭殑杩炴帴鏂瑰紡锛?
```
https://www.trae.ai/third-party-oauth?user_id=7569780871554827280&username=yy1991740&oauth_type=vercel&redirect_url=trae%3A%2F%2Ftrae.ai-ide%2Foauth%2F%3Aoauth-type%3Ftype%3Ddeploy
```

### 2. 鐜鍙橀噺閰嶇疆
鍦?Vercel 鎺у埗鍙颁腑璁剧疆浠ヤ笅鐜鍙橀噺锛?
```
VITE_SUPABASE_URL=https://zutwxkfdvzgglbzntoux.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ
```

### 3. 閮ㄧ讲閰嶇疆
vercel.json 鏂囦欢宸插垱寤猴紝鍖呭惈姝ｇ‘鐨勮矾鐢卞拰鐜閰嶇疆銆?

### 4. 鏋勫缓鍛戒护
鏋勫缓鍛戒护锛歚npm run build`
杈撳嚭鐩綍锛歚dist`

## 閮ㄧ讲鍚庢祴璇?

閮ㄧ讲瀹屾垚鍚庯紝璇锋祴璇曚互涓嬪姛鑳斤細
1. 鉁?鐢ㄦ埛娉ㄥ唽/鐧诲綍
2. 鉁?涓撴敞璁℃椂鍣ㄥ姛鑳?
3. 鉁?妫灄椤甸潰鏄剧ず鏍戞湪
4. 鉁?缁熻鏁版嵁鍥捐〃
5. 鉁?鏁版嵁鎸佷箙鍖?

## 甯歌闂瑙ｅ喅

### CSRF 閿欒澶勭悊
濡傛灉浠嶇劧閬囧埌 CSRF 閿欒锛?
1. 娓呴櫎娴忚鍣ㄧ紦瀛樺拰 Cookie
2. 浣跨敤鏃犵棔妯″紡娴嬭瘯
3. 妫€鏌?Supabase 鎺у埗鍙颁腑鐨勮璇佽缃?

### 鏁版嵁搴撹繛鎺ラ棶棰?
纭繚鍦?Vercel 鐜鍙橀噺涓纭缃簡 Supabase URL 鍜屽瘑閽ャ€?

椤圭洰宸插畬鍏ㄥ噯澶囧氨缁紝鍙互閫氳繃 TRAE 闆嗘垚閮ㄧ讲鍒?Vercel 浜嗭紒馃殌
