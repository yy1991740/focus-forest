#!/bin/bash

# Focus Forest 閮ㄧ讲鑴氭湰
# 鎵嬪姩閮ㄧ讲鍒?GitHub 鍜?Vercel

echo "馃殌 寮€濮?Focus Forest 閮ㄧ讲娴佺▼..."
echo "=================================="

# 妫€鏌?Git 鐘舵€?echo "馃搵 妫€鏌?Git 鐘舵€?.."
git status

# 娣诲姞鎵€鏈夋洿鏀?echo "馃搧 娣诲姞鎵€鏈夋枃浠?.."
git add .

# 鎻愪氦鏇存敼
echo "馃捑 鎻愪氦鏇存敼..."
git commit -m "Ready for deployment - Focus Forest v1.0"

# 妫€鏌ユ槸鍚︽湁杩滅▼浠撳簱
echo "馃敆 妫€鏌ヨ繙绋嬩粨搴?.."
if git remote | grep -q origin; then
    echo "鉁?杩滅▼浠撳簱宸插瓨鍦?
else
    echo "鉂?璇峰厛璁剧疆杩滅▼浠撳簱锛?
    echo "git remote add origin https://github.com/YOUR_USERNAME/focus-forest.git"
    exit 1
fi

# 鎺ㄩ€佸埌 GitHub
echo "馃摛 鎺ㄩ€佸埌 GitHub..."
git push origin main

echo "鉁?GitHub 鎺ㄩ€佸畬鎴愶紒"
echo ""
echo "馃幆 涓嬩竴姝ワ細Vercel 閮ㄧ讲"
echo "==================="
echo "1. 璁块棶 https://vercel.com"
echo "2. 浣跨敤 GitHub 鐧诲綍"
echo "3. 鐐瑰嚮 'New Project'"
echo "4. 瀵煎叆 focus-forest 浠撳簱"
echo "5. 璁剧疆鐜鍙橀噺锛?
echo "   VITE_SUPABASE_URL=https://zutwxkfdvzgglbzntoux.supabase.co"
echo "   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ"
echo "6. 鐐瑰嚮 'Deploy'"
echo ""
echo "馃寪 閮ㄧ讲瀹屾垚鍚庯紝鎮ㄥ皢鑾峰緱锛?
echo "   - 鍏紑璁块棶 URL"
echo "   - 鑷姩 HTTPS"
echo "   - 鍏ㄧ悆 CDN"
echo ""
echo "馃帀 閮ㄧ讲瀹屾垚锛佹偍鐨?Focus Forest 搴旂敤鍗冲皢涓婄嚎锛?

# Windows 鐢ㄦ埛鎻愮ず
echo ""
echo "馃挕 Windows 鐢ㄦ埛锛?
echo "   濡傛灉浣跨敤鐨勬槸 Windows锛岃鎵嬪姩鎵ц浠ヤ笅鍛戒护锛?
echo "   git add ."
echo "   git commit -m \"Ready for deployment - Focus Forest v1.0\""
echo "   git push origin main"
