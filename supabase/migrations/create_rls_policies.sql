-- 为 sessions 表创建 RLS 策略
-- 允许用户插入自己的会话数据
CREATE POLICY "Users can insert their own sessions" ON sessions
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 允许用户查看自己的会话数据
CREATE POLICY "Users can view their own sessions" ON sessions
    FOR SELECT USING (auth.uid() = user_id);

-- 允许用户更新自己的会话数据
CREATE POLICY "Users can update their own sessions" ON sessions
    FOR UPDATE USING (auth.uid() = user_id);

-- 允许用户删除自己的会话数据
CREATE POLICY "Users can delete their own sessions" ON sessions
    FOR DELETE USING (auth.uid() = user_id);

-- 为 trees 表创建 RLS 策略
-- 允许用户插入自己的树木数据
CREATE POLICY "Users can insert their own trees" ON trees
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 允许用户查看自己的树木数据
CREATE POLICY "Users can view their own trees" ON trees
    FOR SELECT USING (auth.uid() = user_id);

-- 允许用户更新自己的树木数据
CREATE POLICY "Users can update their own trees" ON trees
    FOR UPDATE USING (auth.uid() = user_id);

-- 允许用户删除自己的树木数据
CREATE POLICY "Users can delete their own trees" ON trees
    FOR DELETE USING (auth.uid() = user_id);