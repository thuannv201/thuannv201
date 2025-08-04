# 🐬 MySQL với phpMyAdmin

Cấu hình Docker Compose để chạy MySQL kèm phpMyAdmin interface.

## 🚀 Cách chạy

```bash
cd database/mysql
docker-compose up -d
```

## 📋 Thông tin kết nối

### MySQL
- **Host**: localhost
- **Port**: 3306
- **Database**: myapp
- **Username**: admin
- **Password**: admin123
- **Root Password**: root123

### phpMyAdmin (Web Interface)
- **URL**: http://localhost:8081
- **Username**: admin (hoặc root)
- **Password**: admin123 (hoặc root123)

## 📁 Cấu trúc

```
mysql/
├── docker-compose.yml     # Cấu hình Docker Compose
├── README.md             # Hướng dẫn này
├── init/                 # Thư mục chứa script khởi tạo
│   └── init.sql         # SQL script chạy khi khởi tạo database
└── config/              # Thư mục cấu hình MySQL
    └── my.cnf           # File cấu hình MySQL
```

## 🔧 Tùy chỉnh

### Thay đổi thông tin đăng nhập
Sửa trong `docker-compose.yml`:
```yaml
environment:
  MYSQL_ROOT_PASSWORD: root_password_của_bạn
  MYSQL_DATABASE: tên_database_của_bạn
  MYSQL_USER: username_của_bạn
  MYSQL_PASSWORD: password_của_bạn
```

### Thêm script khởi tạo
Tạo file SQL trong thư mục `init/`, các file sẽ được thực thi theo thứ tự alphabet khi database khởi tạo lần đầu.

### Cấu hình MySQL
Chỉnh sửa file `config/my.cnf` để tùy chỉnh cấu hình MySQL.

## 🛑 Dừng service

```bash
docker-compose down
```

## 🗑️ Xóa dữ liệu

```bash
docker-compose down -v
```

## 📊 Kiểm tra logs

```bash
# Xem logs của MySQL
docker-compose logs mysql

# Xem logs của phpMyAdmin
docker-compose logs phpmyadmin
```

## 🔍 Troubleshooting

### Lỗi kết nối authentication
Nếu gặp lỗi authentication, thử kết nối bằng root user hoặc kiểm tra plugin authentication trong MySQL 8.0.
