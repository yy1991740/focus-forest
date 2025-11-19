#!/bin/bash

# Focus Forest 部署脚本
# 手动部署到 GitHub 和 Vercel

echo "🚀 开始 Focus Forest 部署流程..."
echo "=================================="

# 检查 Git 状态
echo "📋 检查 Git 状态..."
git status

# 添加所有更改
echo "📁 添加所有文件..."
git add .

# 提交更改
echo "💾 提交更改..."
git commit -m "Ready for deployment - Focus Forest v1.0"

# 检查是否有远程仓库
echo "🔗 检查远程仓库..."
if git remote | grep -q origin; then
    echo "✅ 远程仓库已存在"
else
    echo "❌ 请先设置远程仓库："
    echo "git remote add origin https://github.com/YOUR_USERNAME/focus-forest.git"
    exit 1
fi

# 推送到 GitHub
echo "📤 推送到 GitHub..."
git push origin main

echo "✅ GitHub 推送完成！"
echo ""
echo "🎯 下一步：Vercel 部署"
echo "==================="
echo "1. 访问 https://vercel.com"
echo "2. 使用 GitHub 登录"
echo "3. 点击 'New Project'"
echo "4. 导入 focus-forest 仓库"
echo "5. 设置环境变量："
echo "   VITE_SUPABASE_URL=https://anaslurquuyylxrtfjqj.supabase.co"
echo "   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ"
echo "6. 点击 'Deploy'"
echo ""
echo "🌐 部署完成后，您将获得："
echo "   - 公开访问 URL"
echo "   - 自动 HTTPS"
echo "   - 全球 CDN"
echo ""
echo "🎉 部署完成！您的 Focus Forest 应用即将上线！"

# Windows 用户提示
echo ""
echo "💡 Windows 用户："
echo "   如果使用的是 Windows，请手动执行以下命令："
echo "   git add ."
echo "   git commit -m \"Ready for deployment - Focus Forest v1.0\""
echo "   git push origin main"