-- 修复 sessions 表的权限设置
-- 为匿名用户授予读取权限
GRANT SELECT ON sessions TO anon;

-- 为认证用户授予完全权限
GRANT ALL PRIVILEGES ON sessions TO authenticated;

-- 为匿名用户授予读取权限（trees 表）
GRANT SELECT ON trees TO anon;

-- 为认证用户授予完全权限（trees 表）
GRANT ALL PRIVILEGES ON trees TO authenticated;

-- 为匿名用户授予读取权限（users 表）
GRANT SELECT ON users TO anon;

-- 为认证用户授予完全权限（users 表）
GRANT ALL PRIVILEGES ON users TO authenticated;