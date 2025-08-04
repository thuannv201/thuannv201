# 🚀 Portfolio & Docker Templates

Repo này được dùng để làm **Portfolio cá nhân dành cho Dev**, đồng thời chứa các **mẫu cấu hình Docker** cho các công nghệ thường dùng, có hướng dẫn đi kèm.

## 📁 Cấu trúc project

### 🎨 `view-app/`
* Ứng dụng giao diện được build bằng **Next.js**
* Dùng để hiển thị **portfolio cá nhân**, dự án mẫu, và **tài liệu/hướng dẫn sử dụng các công nghệ**
* Có thể deploy lên GitHub Pages hoặc Vercel

### 🐳 Các thư mục cấu hình Docker:

#### `database/`
Cấu hình Docker cho các hệ quản trị cơ sở dữ liệu:
- `postgres/` - PostgreSQL với pgAdmin
- `mysql/` - MySQL với phpMyAdmin
- `mongodb/` - MongoDB với Mongo Express

#### `jenkins/`
Mẫu cấu hình Jenkins để CI/CD với Docker

#### `nginx/`
Cấu hình Nginx dùng làm reverse proxy hoặc static web server

#### `prometheus-grafana/`
Cấu hình giám sát hệ thống bằng Prometheus + Grafana

## 🚀 Cách sử dụng

Mỗi thư mục đều có thể chạy độc lập:

```bash
cd <tên-thư-mục>
docker-compose up -d
```

Chi tiết cách sử dụng xem trong file `README.md` của từng thư mục.

## 📋 Yêu cầu hệ thống

- Docker
- Docker Compose

## 🤝 Đóng góp

Feel free to fork và submit pull requests!

## 📄 License

MIT License