// Script khởi tạo database mẫu cho MongoDB
// File này sẽ được chạy tự động khi container MongoDB khởi động lần đầu

// Chuyển đến database myapp
db = db.getSiblingDB('myapp');

// Tạo collection users và thêm dữ liệu mẫu
db.users.insertMany([
    {
        username: "john_doe",
        email: "john@example.com",
        profile: {
            firstName: "John",
            lastName: "Doe",
            age: 30
        },
        createdAt: new Date()
    },
    {
        username: "jane_smith",
        email: "jane@example.com",
        profile: {
            firstName: "Jane",
            lastName: "Smith",
            age: 25
        },
        createdAt: new Date()
    }
]);

// Tạo collection posts và thêm dữ liệu mẫu
db.posts.insertMany([
    {
        title: "First Post",
        content: "This is my first post!",
        author: "john_doe",
        tags: ["introduction", "first"],
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Hello World",
        content: "Welcome to my blog!",
        author: "jane_smith",
        tags: ["welcome", "blog"],
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

// Tạo index cho hiệu suất tốt hơn
db.users.createIndex({ "username": 1 }, { unique: true });
db.users.createIndex({ "email": 1 }, { unique: true });
db.posts.createIndex({ "author": 1 });
db.posts.createIndex({ "createdAt": -1 });

print("Database initialized successfully with sample data!");
