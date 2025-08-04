-- Script khởi tạo database mẫu cho MySQL
-- File này sẽ được chạy tự động khi container MySQL khởi động lần đầu

USE myapp;

-- Tạo bảng users mẫu
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng posts mẫu
CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Thêm dữ liệu mẫu
INSERT IGNORE INTO users (username, email) VALUES 
    ('john_doe', 'john@example.com'),
    ('jane_smith', 'jane@example.com');

INSERT IGNORE INTO posts (title, content, user_id) VALUES 
    ('First Post', 'This is my first post!', 1),
    ('Hello World', 'Welcome to my blog!', 2);
