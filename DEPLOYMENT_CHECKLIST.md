# 🚀 TRAE x Vercel 部署检查清单

## 📋 部署前检查

### ✅ 项目文件完整性
- [x] `src/` - 所有 React 组件和页面
- [x] `public/` - 静态资源
- [x] `package.json` - 依赖和脚本
- [x] `vercel.json` - Vercel 配置文件
- [x] `DEPLOYMENT_GUIDE.md` - 部署指南

### ✅ 数据库配置
- [x] Supabase 项目已连接：`https://anaslurquuyylxrtfjqj.supabase.co`
- [x] 表结构：`users`, `sessions`, `trees`
- [x] RLS 权限策略已配置
- [x] 匿名用户权限已设置

### ✅ 应用功能测试
- [x] 用户注册/登录功能
- [x] 专注计时器（25分钟）
- [x] 森林页面显示树木
- [x] 统计数据图表
- [x] 数据持久化到数据库

## 🎯 部署步骤

### 1. 通过 TRAE 集成连接
```bash
# 使用 TRAE IDE 中的 Vercel 集成按钮
# 授权流程将通过以下 URL 完成
https://www.trae.ai/third-party-oauth?user_id=7569780871554827280&username=yy1991740&oauth_type=vercel
```

### 2. Vercel 项目设置
1. 登录 Vercel 控制台
2. 导入 GitHub 仓库（如果已连接）
3. 设置环境变量：
   ```
   VITE_SUPABASE_URL=https://anaslurquuyylxrtfjqj.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ
   ```

### 3. 构建设置
- **框架**: React (Vite)
- **构建命令**: `npm run build`
- **输出目录**: `dist`
- **安装命令**: `npm install`

### 4. 部署配置验证
确保 `vercel.json` 文件包含：
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "env": {
    "VITE_SUPABASE_URL": "https://anaslurquuyylxrtfjqj.supabase.co",
    "VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ"
  }
}
```

## 🔍 部署后测试

### ✅ 基础功能测试
1. **访问部署的 URL**
2. **用户注册**: 创建新用户账户
3. **用户登录**: 使用创建的账户登录
4. **专注功能**: 开始一个 25 分钟专注会话
5. **森林查看**: 检查专注后是否有新树木
6. **统计数据**: 查看专注时长统计

### ✅ 数据验证
- [ ] 用户数据存储在 `users` 表
- [ ] 专注会话存储在 `sessions` 表
- [ ] 树木数据存储在 `trees` 表
- [ ] 数据正确关联到用户

## 🛠️ 常见问题解决

### CSRF 错误
如果仍然遇到 CSRF 错误：
1. 清除浏览器缓存和 Cookie
2. 使用无痕模式测试
3. 检查 Supabase 控制台中的认证设置
4. 确保环境变量正确设置

### 数据库连接问题
1. 验证 Supabase URL 和密钥
2. 检查网络连接
3. 确认 RLS 权限设置
4. 测试匿名用户访问权限

### 构建失败
1. 检查依赖包是否完整
2. 验证构建脚本
3. 检查 TypeScript/JavaScript 错误
4. 确保所有文件已提交

## 📞 支持

如果遇到部署问题：
1. 检查 TRAE IDE 的集成日志
2. 查看 Vercel 部署日志
3. 验证 Supabase 控制台状态
4. 检查浏览器开发者工具控制台

---

**🎉 准备部署！您的 Focus Forest 应用已经完全准备就绪。**