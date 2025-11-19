# Focus Forest 部署脚本 - PowerShell
Write-Host "🚀 开始 Focus Forest 部署流程..." -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Green

# 检查 Git 状态
Write-Host "📋 检查 Git 状态..." -ForegroundColor Yellow
git status

# 添加所有更改
Write-Host "📁 添加所有文件..." -ForegroundColor Yellow
git add .

# 提交更改
Write-Host "💾 提交更改..." -ForegroundColor Yellow
$commitMessage = "Ready for deployment - Focus Forest v1.0"
git commit -m $commitMessage

# 检查是否有远程仓库
Write-Host "🔗 检查远程仓库..." -ForegroundColor Yellow
$remotes = git remote
if ($remotes -contains "origin") {
    Write-Host "✅ 远程仓库已存在" -ForegroundColor Green
} else {
    Write-Host "❌ 请先设置远程仓库：" -ForegroundColor Red
    Write-Host "git remote add origin https://github.com/YOUR_USERNAME/focus-forest.git" -ForegroundColor Yellow
    Read-Host "按 Enter 键继续..."
    exit 1
}

# 推送到 GitHub
Write-Host "📤 推送到 GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ GitHub 推送完成！" -ForegroundColor Green
} else {
    Write-Host "❌ GitHub 推送失败，请检查错误信息" -ForegroundColor Red
    Read-Host "按 Enter 键继续..."
    exit 1
}

Write-Host ""
Write-Host "🎯 下一步：Vercel 部署" -ForegroundColor Cyan
Write-Host "===================" -ForegroundColor Cyan
Write-Host "1. 访问 https://vercel.com" -ForegroundColor White
Write-Host "2. 使用 GitHub 登录" -ForegroundColor White
Write-Host "3. 点击 'New Project'" -ForegroundColor White
Write-Host "4. 导入 focus-forest 仓库" -ForegroundColor White
Write-Host "5. 设置环境变量：" -ForegroundColor Yellow
Write-Host "   VITE_SUPABASE_URL=https://anaslurquuyylxrtfjqj.supabase.co" -ForegroundColor Yellow
Write-Host "   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ" -ForegroundColor Yellow
Write-Host "6. 点击 'Deploy'" -ForegroundColor White
Write-Host ""
Write-Host "🌐 部署完成后，您将获得：" -ForegroundColor Green
Write-Host "   - 公开访问 URL" -ForegroundColor White
Write-Host "   - 自动 HTTPS" -ForegroundColor White
Write-Host "   - 全球 CDN" -ForegroundColor White
Write-Host ""
Write-Host "🎉 部署完成！您的 Focus Forest 应用即将上线！" -ForegroundColor Green

Read-Host "按 Enter 键完成部署流程"