-- Script khởi tạo database mẫu
-- File này sẽ được chạy tự động khi container PostgreSQL khởi động lần đầu

-- Tạo bảng users mẫu
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng posts mẫu
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT,
    user_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Thêm dữ liệu mẫu
INSERT INTO users (username, email) VALUES 
    ('john_doe', 'john@example.com'),
    ('jane_smith', 'jane@example.com')
ON CONFLICT (username) DO NOTHING;

INSERT INTO posts (title, content, user_id) VALUES 
    ('First Post', 'This is my first post!', 1),
    ('Hello World', 'Welcome to my blog!', 2)
ON CONFLICT DO NOTHING;
