# Focus Forest 閮ㄧ讲鑴氭湰 - PowerShell
Write-Host "馃殌 寮€濮?Focus Forest 閮ㄧ讲娴佺▼..." -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Green

# 妫€鏌?Git 鐘舵€?Write-Host "馃搵 妫€鏌?Git 鐘舵€?.." -ForegroundColor Yellow
git status

# 娣诲姞鎵€鏈夋洿鏀?Write-Host "馃搧 娣诲姞鎵€鏈夋枃浠?.." -ForegroundColor Yellow
git add .

# 鎻愪氦鏇存敼
Write-Host "馃捑 鎻愪氦鏇存敼..." -ForegroundColor Yellow
$commitMessage = "Ready for deployment - Focus Forest v1.0"
git commit -m $commitMessage

# 妫€鏌ユ槸鍚︽湁杩滅▼浠撳簱
Write-Host "馃敆 妫€鏌ヨ繙绋嬩粨搴?.." -ForegroundColor Yellow
$remotes = git remote
if ($remotes -contains "origin") {
    Write-Host "鉁?杩滅▼浠撳簱宸插瓨鍦? -ForegroundColor Green
} else {
    Write-Host "鉂?璇峰厛璁剧疆杩滅▼浠撳簱锛? -ForegroundColor Red
    Write-Host "git remote add origin https://github.com/YOUR_USERNAME/focus-forest.git" -ForegroundColor Yellow
    Read-Host "鎸?Enter 閿户缁?.."
    exit 1
}

# 鎺ㄩ€佸埌 GitHub
Write-Host "馃摛 鎺ㄩ€佸埌 GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "鉁?GitHub 鎺ㄩ€佸畬鎴愶紒" -ForegroundColor Green
} else {
    Write-Host "鉂?GitHub 鎺ㄩ€佸け璐ワ紝璇锋鏌ラ敊璇俊鎭? -ForegroundColor Red
    Read-Host "鎸?Enter 閿户缁?.."
    exit 1
}

Write-Host ""
Write-Host "馃幆 涓嬩竴姝ワ細Vercel 閮ㄧ讲" -ForegroundColor Cyan
Write-Host "===================" -ForegroundColor Cyan
Write-Host "1. 璁块棶 https://vercel.com" -ForegroundColor White
Write-Host "2. 浣跨敤 GitHub 鐧诲綍" -ForegroundColor White
Write-Host "3. 鐐瑰嚮 'New Project'" -ForegroundColor White
Write-Host "4. 瀵煎叆 focus-forest 浠撳簱" -ForegroundColor White
Write-Host "5. 璁剧疆鐜鍙橀噺锛? -ForegroundColor Yellow
Write-Host "   VITE_SUPABASE_URL=https://zutwxkfdvzgglbzntoux.supabase.co" -ForegroundColor Yellow
Write-Host "   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ" -ForegroundColor Yellow
Write-Host "6. 鐐瑰嚮 'Deploy'" -ForegroundColor White
Write-Host ""
Write-Host "馃寪 閮ㄧ讲瀹屾垚鍚庯紝鎮ㄥ皢鑾峰緱锛? -ForegroundColor Green
Write-Host "   - 鍏紑璁块棶 URL" -ForegroundColor White
Write-Host "   - 鑷姩 HTTPS" -ForegroundColor White
Write-Host "   - 鍏ㄧ悆 CDN" -ForegroundColor White
Write-Host ""
Write-Host "馃帀 閮ㄧ讲瀹屾垚锛佹偍鐨?Focus Forest 搴旂敤鍗冲皢涓婄嚎锛? -ForegroundColor Green

Read-Host "鎸?Enter 閿畬鎴愰儴缃叉祦绋?
