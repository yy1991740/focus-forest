# 馃殌 鎵嬪姩閮ㄧ讲鎸囧崡 - GitHub + Vercel

## 馃搵 閮ㄧ讲鍓嶅噯澶?
### 1. GitHub 浠撳簱璁剧疆

#### 鍒涘缓鏂颁粨搴?1. 璁块棶 [GitHub](https://github.com)
2. 鐐瑰嚮鍙充笂瑙掔殑 "+" 鈫?"New repository"
3. 浠撳簱鍚嶇О锛歚focus-forest`
4. 鎻忚堪锛歚涓撴敞妫灄 - 鏃堕棿绠＄悊搴旂敤`
5. 閫夋嫨 **Public**锛圴ercel 鍏嶈垂鐗堥渶瑕佸叕寮€浠撳簱锛?6. 涓嶈鍒濆鍖?README锛堟垜浠凡鏈夋枃浠讹級
7. 鐐瑰嚮 "Create repository"

#### 鏈湴椤圭洰鍑嗗
鍦ㄧ粓绔腑鎵ц浠ヤ笅鍛戒护锛?
```bash
# 鍒濆鍖?Git 浠撳簱锛堝鏋滆繕娌″垵濮嬪寲锛?git init

# 娣诲姞鎵€鏈夋枃浠?git add .

# 鎻愪氦鍒濆鐗堟湰
git commit -m "Initial commit - Focus Forest App"

# 杩炴帴鍒?GitHub 浠撳簱锛堟浛鎹?YOUR_USERNAME锛?git remote add origin https://github.com/YOUR_USERNAME/focus-forest.git

# 鎺ㄩ€佸埌 GitHub
git push -u origin main
```

### 2. Vercel 璐︽埛璁剧疆

#### 娉ㄥ唽/鐧诲綍 Vercel
1. 璁块棶 [Vercel](https://vercel.com)
2. 浣跨敤 GitHub 璐︽埛鐧诲綍
3. 鎺堟潈 Vercel 璁块棶鎮ㄧ殑 GitHub 璐︽埛

#### 瀵煎叆椤圭洰
1. 鐐瑰嚮 "New Project"
2. 閫夋嫨 "Import Git Repository"
3. 鎵惧埌鎮ㄧ殑 `focus-forest` 浠撳簱
4. 鐐瑰嚮 "Import"

## 鈿欙笍 椤圭洰閰嶇疆

### 鐜鍙橀噺璁剧疆
鍦?Vercel 椤圭洰璁剧疆涓紝娣诲姞浠ヤ笅鐜鍙橀噺锛?
```
VITE_SUPABASE_URL=https://zutwxkfdvzgglbzntoux.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ
```

### 鏋勫缓璁剧疆
纭繚浠ヤ笅璁剧疆姝ｇ‘锛?- **Framework**: React
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Vercel 閰嶇疆鏂囦欢
纭繚 `vercel.json` 鏂囦欢瀛樺湪涓斿唴瀹规纭細

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

## 馃殌 閮ㄧ讲姝ラ

### 绗竴姝ワ細鎺ㄩ€佷唬鐮佸埌 GitHub
```bash
# 纭繚鎵€鏈夋洿鏀瑰凡鎻愪氦
git add .
git commit -m "Ready for deployment - Focus Forest v1.0"

# 鎺ㄩ€佸埌 GitHub
git push origin main
```

### 绗簩姝ワ細鍦?Vercel 涓缃」鐩?1. 鐧诲綍 [Vercel](https://vercel.com)
2. 鐐瑰嚮 "New Project"
3. 閫夋嫨 "Import Git Repository"
4. 閫夋嫨鎮ㄧ殑 `focus-forest` 浠撳簱
5. 閰嶇疆椤圭洰锛?   - **Project Name**: `focus-forest`
   - **Framework**: React
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 绗笁姝ワ細璁剧疆鐜鍙橀噺
鍦?Vercel 椤圭洰璁剧疆椤甸潰锛?1. 鐐瑰嚮 "Settings" 鏍囩
2. 閫夋嫨 "Environment Variables"
3. 娣诲姞浠ヤ笅鍙橀噺锛?   ```
   VITE_SUPABASE_URL = https://zutwxkfdvzgglbzntoux.supabase.co
   VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ
   ```

### 绗洓姝ワ細閮ㄧ讲
1. 鐐瑰嚮 "Deploy" 鎸夐挳
2. 绛夊緟鏋勫缓瀹屾垚锛堥€氬父 2-3 鍒嗛挓锛?3. 閮ㄧ讲瀹屾垚鍚庯紝Vercel 浼氭彁渚涜闂?URL

## 鉁?閮ㄧ讲鍚庨獙璇?
### 鍩虹鍔熻兘娴嬭瘯
1. **璁块棶閮ㄧ讲鐨?URL**
2. **鐢ㄦ埛娉ㄥ唽**: 鍒涘缓鏂扮敤鎴疯处鎴?3. **鐢ㄦ埛鐧诲綍**: 浣跨敤鍒涘缓鐨勮处鎴风櫥褰?4. **涓撴敞鍔熻兘**: 寮€濮嬩竴涓?25 鍒嗛挓涓撴敞浼氳瘽
5. **妫灄鏌ョ湅**: 妫€鏌ヤ笓娉ㄥ悗鏄惁鏈夋柊鏍戞湪
6. **缁熻鏁版嵁**: 鏌ョ湅涓撴敞鏃堕暱缁熻

### 鏁版嵁楠岃瘉
- [ ] 鐢ㄦ埛鏁版嵁瀛樺偍鍦?`users` 琛?- [ ] 涓撴敞浼氳瘽瀛樺偍鍦?`sessions` 琛?- [ ] 鏍戞湪鏁版嵁瀛樺偍鍦?`trees` 琛?- [ ] 鏁版嵁姝ｇ‘鍏宠仈鍒扮敤鎴?
## 馃敡 甯歌闂瑙ｅ喅

### 鏋勫缓澶辫触
濡傛灉鏋勫缓澶辫触锛屾鏌ワ細
1. **渚濊禆闂**: `npm install` 鏄惁鎴愬姛
2. **鏋勫缓鑴氭湰**: `npm run build` 鍦ㄦ湰鍦版槸鍚︽甯稿伐浣?3. **鐜鍙橀噺**: 鏄惁鍦?Vercel 涓纭缃?4. **鏂囦欢瀹屾暣鎬?*: 纭繚鎵€鏈夋枃浠跺凡鎺ㄩ€佸埌 GitHub

### 杩愯鏃堕敊璇?1. **妫€鏌ユ祻瑙堝櫒鎺у埗鍙?* 鏌ョ湅閿欒淇℃伅
2. **楠岃瘉 Supabase 杩炴帴** 鏄惁姝ｅ父
3. **妫€鏌ョ綉缁滆姹?* 鏄惁鎴愬姛
4. **纭鏁版嵁搴撴潈闄?* 璁剧疆姝ｇ‘

### 璁块棶闂
1. **娓呴櫎娴忚鍣ㄧ紦瀛?*
2. **浣跨敤鏃犵棔妯″紡娴嬭瘯**
3. **妫€鏌?CORS 璁剧疆**锛堝鏋滈渶瑕侊級

## 馃搳 鐩戞帶鍜岀淮鎶?
### Vercel 鍒嗘瀽
1. 鍦?Vercel 鎺у埗鍙版煡鐪嬪垎鏋愭暟鎹?2. 鐩戞帶搴旂敤鎬ц兘鍜岄敊璇巼
3. 鏌ョ湅璁块棶鏃ュ織

### Supabase 鐩戞帶
1. 鐧诲綍 Supabase 鎺у埗鍙?2. 鏌ョ湅鏁版嵁搴撲娇鐢ㄦ儏鍐?3. 鐩戞帶 API 璋冪敤娆℃暟
4. 妫€鏌ュ瓨鍌ㄤ娇鐢ㄦ儏鍐?
## 馃帀 鎴愬姛閮ㄧ讲锛?
閮ㄧ讲鎴愬姛鍚庯紝鎮ㄥ皢鑾峰緱锛?- **鍏紑璁块棶 URL**: `https://focus-forest-*.vercel.app`
- **鑷姩 HTTPS**: SSL 璇佷功鑷姩閰嶇疆
- **鍏ㄧ悆 CDN**: 蹇€熻闂€熷害
- **鑷姩閮ㄧ讲**: 姣忔鎺ㄩ€佷唬鐮佽嚜鍔ㄦ洿鏂?
鎮ㄧ殑 Focus Forest 搴旂敤鐜板湪宸茬粡瀹屽叏閮ㄧ讲骞跺彲浠ヤ娇鐢ㄤ簡锛侌煂测湪
