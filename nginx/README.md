# 🌐 Nginx Web Server & Reverse Proxy

Cấu hình Docker Compose để chạy Nginx làm web server hoặc reverse proxy.

## 🚀 Cách chạy

```bash
cd nginx
docker-compose up -d
```

## 📋 Thông tin truy cập

### Web Server
- **URL**: http://localhost
- **HTTPS**: https://localhost (nếu đã cấu hình SSL)

## 📁 Cấu trúc

```
nginx/
├── docker-compose.yml     # Cấu hình Docker Compose
├── README.md             # Hướng dẫn này
├── config/               # Thư mục cấu hình Nginx
│   ├── nginx.conf       # Cấu hình chính
│   └── conf.d/          # Cấu hình virtual hosts
│       ├── default.conf # Virtual host mặc định
│       └── api.conf     # Reverse proxy cho API
├── html/                # Thư mục chứa static files
│   └── index.html      # Trang chủ mẫu
└── ssl/                 # Thư mục chứa SSL certificates
    ├── cert.pem
    └── key.pem
```

## 🔧 Các trường hợp sử dụng

### 1. Static Web Server
Đặt các file HTML/CSS/JS vào thư mục `html/`

### 2. Reverse Proxy
Chỉnh sửa file `config/conf.d/api.conf` để proxy đến backend services

### 3. Load Balancer
Cấu hình upstream servers trong nginx.conf

## 📖 Cấu hình mẫu

### Static Site
```nginx
server {
    listen 80;
    server_name localhost;
    
    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Reverse Proxy
```nginx
server {
    listen 80;
    server_name api.localhost;
    
    location / {
        proxy_pass http://backend:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Load Balancing
```nginx
upstream backend_servers {
    server backend1:80;
    server backend2:80;
    server backend3:80;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend_servers;
    }
}
```

## 🔒 HTTPS/SSL

### 1. Tạo self-signed certificate
```bash
# Tạo thư mục ssl
mkdir ssl

# Tạo certificate
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout ssl/key.pem \
    -out ssl/cert.pem \
    -subj "/C=VN/ST=HCM/L=HCM/O=MyOrg/CN=localhost"
```

### 2. Cấu hình SSL trong nginx
```nginx
server {
    listen 443 ssl;
    server_name localhost;
    
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    
    location / {
        root /usr/share/nginx/html;
        index index.html;
    }
}
```

## 🛑 Dừng service

```bash
docker-compose down
```

## 📊 Kiểm tra logs

```bash
# Xem logs của Nginx
docker-compose logs nginx

# Xem access logs
docker exec nginx_server tail -f /var/log/nginx/access.log

# Xem error logs
docker exec nginx_server tail -f /var/log/nginx/error.log
```

## 🔍 Troubleshooting

### Reload cấu hình không cần restart
```bash
docker exec nginx_server nginx -s reload
```

### Test cấu hình
```bash
docker exec nginx_server nginx -t
```

### Permission denied với volumes
Kiểm tra quyền của thư mục host và chown nếu cần thiết.
