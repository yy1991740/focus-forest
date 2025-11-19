# 鈿?蹇€熼儴缃?- GitHub + Vercel

## 馃殌 3姝ュ畬鎴愰儴缃?
### 绗?姝ワ細鎺ㄩ€佸埌 GitHub
```bash
# 鍦ㄧ粓绔墽琛?git add .
git commit -m "Ready for deployment - Focus Forest v1.0"
git push origin main
```

鎴栬€呰繍琛岃剼鏈細
```powershell
# Windows
.\deploy.ps1

# 鎴栬€呮墜鍔ㄥ懡浠?git add . && git commit -m "Ready for deployment" && git push origin main
```

### 绗?姝ワ細Vercel 璁剧疆
1. 璁块棶 [vercel.com](https://vercel.com)
2. 鐢?GitHub 鐧诲綍
3. 鐐瑰嚮 "New Project"
4. 閫夋嫨 `focus-forest` 浠撳簱
5. 璁剧疆鐜鍙橀噺锛?   ```
   VITE_SUPABASE_URL=https://zutwxkfdvzgglbzntoux.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ
   ```
6. 鐐瑰嚮 "Deploy"

### 绗?姝ワ細娴嬭瘯搴旂敤
閮ㄧ讲瀹屾垚鍚庯紝璁块棶鎻愪緵鐨?URL锛屾祴璇曪細
- 鉁?鐢ㄦ埛娉ㄥ唽/鐧诲綍
- 鉁?涓撴敞璁℃椂鍣紙25鍒嗛挓锛?- 鉁?妫灄鏄剧ず鏂版爲鏈?- 鉁?缁熻鏁版嵁鏇存柊

---

## 馃搵 椤圭洰鐗圭偣
- 馃帹 **绮剧編UI**锛氱幇浠ｅ寲璁捐锛屾墍鏈夐〉闈紭鍖?- 馃尣 **涓板瘜妫灄**锛?绉嶄笉鍚屾爲鏈紝鑷劧鍔ㄧ敾
- 馃搳 **鏁版嵁缁熻**锛氫笓娉ㄦ椂闀垮彲瑙嗗寲
- 馃攼 **鐢ㄦ埛璁よ瘉**锛氬畬鏁寸殑娉ㄥ唽鐧诲綍绯荤粺
- 馃捑 **鏁版嵁鎸佷箙**锛歋upabase 鏁版嵁搴撳瓨鍌?- 馃實 **鍏ㄧ悆璁块棶**锛歏ercel CDN 鍔犻€?
---

## 馃敡 濡傛灉杩樻病鍒涘缓 GitHub 浠撳簱
```bash
# 鍒涘缓鏂颁粨搴撳苟鎺ㄩ€?git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/focus-forest.git
git push -u origin main
```

**鏇挎崲 `YOUR_USERNAME` 涓烘偍鐨?GitHub 鐢ㄦ埛鍚?*

---

**馃帀 鍑嗗灏辩华锛佸紑濮嬮儴缃叉偍鐨?Focus Forest 搴旂敤鍚э紒**
