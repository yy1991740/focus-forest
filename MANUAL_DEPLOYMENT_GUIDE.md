# 🚀 手动部署指南 - GitHub + Vercel

## 📋 部署前准备

### 1. GitHub 仓库设置

#### 创建新仓库
1. 访问 [GitHub](https://github.com)
2. 点击右上角的 "+" → "New repository"
3. 仓库名称：`focus-forest`
4. 描述：`专注森林 - 时间管理应用`
5. 选择 **Public**（Vercel 免费版需要公开仓库）
6. 不要初始化 README（我们已有文件）
7. 点击 "Create repository"

#### 本地项目准备
在终端中执行以下命令：

```bash
# 初始化 Git 仓库（如果还没初始化）
git init

# 添加所有文件
git add .

# 提交初始版本
git commit -m "Initial commit - Focus Forest App"

# 连接到 GitHub 仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/focus-forest.git

# 推送到 GitHub
git push -u origin main
```

### 2. Vercel 账户设置

#### 注册/登录 Vercel
1. 访问 [Vercel](https://vercel.com)
2. 使用 GitHub 账户登录
3. 授权 Vercel 访问您的 GitHub 账户

#### 导入项目
1. 点击 "New Project"
2. 选择 "Import Git Repository"
3. 找到您的 `focus-forest` 仓库
4. 点击 "Import"

## ⚙️ 项目配置

### 环境变量设置
在 Vercel 项目设置中，添加以下环境变量：

```
VITE_SUPABASE_URL=https://anaslurquuyylxrtfjqj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ
```

### 构建设置
确保以下设置正确：
- **Framework**: React
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Vercel 配置文件
确保 `vercel.json` 文件存在且内容正确：

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

## 🚀 部署步骤

### 第一步：推送代码到 GitHub
```bash
# 确保所有更改已提交
git add .
git commit -m "Ready for deployment - Focus Forest v1.0"

# 推送到 GitHub
git push origin main
```

### 第二步：在 Vercel 中设置项目
1. 登录 [Vercel](https://vercel.com)
2. 点击 "New Project"
3. 选择 "Import Git Repository"
4. 选择您的 `focus-forest` 仓库
5. 配置项目：
   - **Project Name**: `focus-forest`
   - **Framework**: React
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 第三步：设置环境变量
在 Vercel 项目设置页面：
1. 点击 "Settings" 标签
2. 选择 "Environment Variables"
3. 添加以下变量：
   ```
   VITE_SUPABASE_URL = https://anaslurquuyylxrtfjqj.supabase.co
   VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ
   ```

### 第四步：部署
1. 点击 "Deploy" 按钮
2. 等待构建完成（通常 2-3 分钟）
3. 部署完成后，Vercel 会提供访问 URL

## ✅ 部署后验证

### 基础功能测试
1. **访问部署的 URL**
2. **用户注册**: 创建新用户账户
3. **用户登录**: 使用创建的账户登录
4. **专注功能**: 开始一个 25 分钟专注会话
5. **森林查看**: 检查专注后是否有新树木
6. **统计数据**: 查看专注时长统计

### 数据验证
- [ ] 用户数据存储在 `users` 表
- [ ] 专注会话存储在 `sessions` 表
- [ ] 树木数据存储在 `trees` 表
- [ ] 数据正确关联到用户

## 🔧 常见问题解决

### 构建失败
如果构建失败，检查：
1. **依赖问题**: `npm install` 是否成功
2. **构建脚本**: `npm run build` 在本地是否正常工作
3. **环境变量**: 是否在 Vercel 中正确设置
4. **文件完整性**: 确保所有文件已推送到 GitHub

### 运行时错误
1. **检查浏览器控制台** 查看错误信息
2. **验证 Supabase 连接** 是否正常
3. **检查网络请求** 是否成功
4. **确认数据库权限** 设置正确

### 访问问题
1. **清除浏览器缓存**
2. **使用无痕模式测试**
3. **检查 CORS 设置**（如果需要）

## 📊 监控和维护

### Vercel 分析
1. 在 Vercel 控制台查看分析数据
2. 监控应用性能和错误率
3. 查看访问日志

### Supabase 监控
1. 登录 Supabase 控制台
2. 查看数据库使用情况
3. 监控 API 调用次数
4. 检查存储使用情况

## 🎉 成功部署！

部署成功后，您将获得：
- **公开访问 URL**: `https://focus-forest-*.vercel.app`
- **自动 HTTPS**: SSL 证书自动配置
- **全球 CDN**: 快速访问速度
- **自动部署**: 每次推送代码自动更新

您的 Focus Forest 应用现在已经完全部署并可以使用了！🌲✨