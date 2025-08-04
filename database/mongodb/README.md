# 🍃 MongoDB với Mongo Express

Cấu hình Docker Compose để chạy MongoDB kèm Mongo Express interface.

## 🚀 Cách chạy

```bash
cd database/mongodb
docker-compose up -d
```

## 📋 Thông tin kết nối

### MongoDB
- **Host**: localhost
- **Port**: 27017
- **Database**: myapp
- **Username**: admin
- **Password**: admin123

### Mongo Express (Web Interface)
- **URL**: http://localhost:8082
- **Username**: admin
- **Password**: admin123

## 📁 Cấu trúc

```
mongodb/
├── docker-compose.yml     # Cấu hình Docker Compose
├── README.md             # Hướng dẫn này
└── init/                 # Thư mục chứa script khởi tạo
    └── init.js          # JavaScript script chạy khi khởi tạo database
```

## 🔧 Tùy chỉnh

### Thay đổi thông tin đăng nhập
Sửa trong `docker-compose.yml`:
```yaml
environment:
  MONGO_INITDB_ROOT_USERNAME: username_của_bạn
  MONGO_INITDB_ROOT_PASSWORD: password_của_bạn
  MONGO_INITDB_DATABASE: tên_database_của_bạn
```

### Thêm script khởi tạo
Tạo file JavaScript hoặc shell script trong thư mục `init/`, các file sẽ được thực thi theo thứ tự alphabet khi database khởi tạo lần đầu.

## 📖 Kết nối từ ứng dụng

### Connection String
```
mongodb://admin:admin123@localhost:27017/myapp?authSource=admin
```

### Node.js với Mongoose
```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin123@localhost:27017/myapp?authSource=admin');
```

### Python với PyMongo
```python
from pymongo import MongoClient
client = MongoClient('mongodb://admin:admin123@localhost:27017/')
db = client.myapp
```

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
# Xem logs của MongoDB
docker-compose logs mongodb

# Xem logs của Mongo Express
docker-compose logs mongo-express
```

## 🔍 Troubleshooting

### Lỗi authentication
Đảm bảo sử dụng đúng `authSource=admin` trong connection string khi kết nối từ ứng dụng.
