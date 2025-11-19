# ⚡ 快速部署 - GitHub + Vercel

## 🚀 3步完成部署

### 第1步：推送到 GitHub
```bash
# 在终端执行
git add .
git commit -m "Ready for deployment - Focus Forest v1.0"
git push origin main
```

或者运行脚本：
```powershell
# Windows
.\deploy.ps1

# 或者手动命令
git add . && git commit -m "Ready for deployment" && git push origin main
```

### 第2步：Vercel 设置
1. 访问 [vercel.com](https://vercel.com)
2. 用 GitHub 登录
3. 点击 "New Project"
4. 选择 `focus-forest` 仓库
5. 设置环境变量：
   ```
   VITE_SUPABASE_URL=https://anaslurquuyylxrtfjqj.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ
   ```
6. 点击 "Deploy"

### 第3步：测试应用
部署完成后，访问提供的 URL，测试：
- ✅ 用户注册/登录
- ✅ 专注计时器（25分钟）
- ✅ 森林显示新树木
- ✅ 统计数据更新

---

## 📋 项目特点
- 🎨 **精美UI**：现代化设计，所有页面优化
- 🌲 **丰富森林**：5种不同树木，自然动画
- 📊 **数据统计**：专注时长可视化
- 🔐 **用户认证**：完整的注册登录系统
- 💾 **数据持久**：Supabase 数据库存储
- 🌍 **全球访问**：Vercel CDN 加速

---

## 🔧 如果还没创建 GitHub 仓库
```bash
# 创建新仓库并推送
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/focus-forest.git
git push -u origin main
```

**替换 `YOUR_USERNAME` 为您的 GitHub 用户名**

---

**🎉 准备就绪！开始部署您的 Focus Forest 应用吧！**