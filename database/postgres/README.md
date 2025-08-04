# 🐘 PostgreSQL với pgAdmin

Cấu hình Docker Compose để chạy PostgreSQL kèm pgAdmin interface.

## 🚀 Cách chạy

```bash
cd database/postgres
docker-compose up -d
```

## 📋 Thông tin kết nối

### PostgreSQL
- **Host**: localhost
- **Port**: 5432
- **Database**: myapp
- **Username**: admin
- **Password**: admin123

### pgAdmin (Web Interface)
- **URL**: http://localhost:8080
- **Email**: admin@example.com
- **Password**: admin123

## 📁 Cấu trúc

```
postgres/
├── docker-compose.yml     # Cấu hình Docker Compose
├── README.md             # Hướng dẫn này
└── init/                 # Thư mục chứa script khởi tạo (tùy chọn)
    └── init.sql         # SQL script chạy khi khởi tạo database
```

## 🔧 Tùy chỉnh

### Thay đổi thông tin đăng nhập
Sửa trong `docker-compose.yml`:
```yaml
environment:
  POSTGRES_DB: tên_database_của_bạn
  POSTGRES_USER: username_của_bạn
  POSTGRES_PASSWORD: password_của_bạn
```

### Thêm script khởi tạo
Tạo file SQL trong thư mục `init/`, các file sẽ được thực thi theo thứ tự alphabet khi database khởi tạo lần đầu.

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
# Xem logs của PostgreSQL
docker-compose logs postgres

# Xem logs của pgAdmin
docker-compose logs pgadmin
```
