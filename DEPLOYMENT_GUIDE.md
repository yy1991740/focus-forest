# TRAE x Vercel 部署配置

## 当前项目状态
✅ **应用开发完成**
- 精美的 UI 界面（计时器、森林、统计、认证页面）
- 完整的 Supabase 数据库集成
- 5种不同的树木 SVG 资源
- 自然的森林动画效果

✅ **数据库配置完成**
- Supabase 项目：`https://anaslurquuyylxrtfjqj.supabase.co`
- 表结构：`users`, `sessions`, `trees`
- RLS 权限策略已配置
- 匿名和认证用户权限已设置

## 部署步骤

### 1. 通过 TRAE 集成连接 Vercel
您提供的 OAuth URL 是正确的连接方式：
```
https://www.trae.ai/third-party-oauth?user_id=7569780871554827280&username=yy1991740&oauth_type=vercel&redirect_url=trae%3A%2F%2Ftrae.ai-ide%2Foauth%2F%3Aoauth-type%3Ftype%3Ddeploy
```

### 2. 环境变量配置
在 Vercel 控制台中设置以下环境变量：
```
VITE_SUPABASE_URL=https://anaslurquuyylxrtfjqj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ
```

### 3. 部署配置
vercel.json 文件已创建，包含正确的路由和环境配置。

### 4. 构建命令
构建命令：`npm run build`
输出目录：`dist`

## 部署后测试

部署完成后，请测试以下功能：
1. ✅ 用户注册/登录
2. ✅ 专注计时器功能
3. ✅ 森林页面显示树木
4. ✅ 统计数据图表
5. ✅ 数据持久化

## 常见问题解决

### CSRF 错误处理
如果仍然遇到 CSRF 错误：
1. 清除浏览器缓存和 Cookie
2. 使用无痕模式测试
3. 检查 Supabase 控制台中的认证设置

### 数据库连接问题
确保在 Vercel 环境变量中正确设置了 Supabase URL 和密钥。

项目已完全准备就绪，可以通过 TRAE 集成部署到 Vercel 了！🚀