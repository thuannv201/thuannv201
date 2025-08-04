# 🔧 Jenkins CI/CD với Docker

Cấu hình Docker Compose để chạy Jenkins với khả năng build Docker images.

## 🚀 Cách chạy

```bash
cd jenkins
docker-compose up -d
```

## 📋 Thông tin truy cập

### Jenkins Web Interface
- **URL**: http://localhost:8083
- **Initial Admin Password**: Xem trong logs hoặc file

### Lấy mật khẩu admin đầu tiên
```bash
# Cách 1: Xem trong logs
docker-compose logs jenkins

# Cách 2: Đọc từ file
docker exec jenkins_server cat /var/jenkins_home/secrets/initialAdminPassword
```

## 📁 Cấu trúc

```
jenkins/
├── docker-compose.yml     # Cấu hình Docker Compose
├── README.md             # Hướng dẫn này
└── pipelines/            # Thư mục chứa các pipeline mẫu
    ├── Jenkinsfile       # Pipeline script mẫu
    └── docker-build.groovy
```

## 🔧 Cấu hình ban đầu

### 1. Unlock Jenkins
- Truy cập http://localhost:8083
- Nhập mật khẩu admin từ lệnh ở trên
- Chọn "Install suggested plugins"

### 2. Tạo admin user
- Tạo user admin mới
- Hoàn tất setup

### 3. Cài đặt plugin cần thiết
Vào **Manage Jenkins** > **Manage Plugins** và cài:
- Docker Pipeline
- Git
- GitHub Integration
- Blue Ocean (UI đẹp hơn)

## 📖 Sử dụng Docker trong Jenkins

### Cấu hình Docker
1. Vào **Manage Jenkins** > **Manage Nodes and Clouds** > **Configure Clouds**
2. Add **Docker Cloud**
3. Docker Host URI: `tcp://docker:2376`
4. Enable TLS và chọn Server credentials

### Pipeline mẫu với Docker
```groovy
pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo/your-project.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("myapp:${env.BUILD_ID}")
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    docker.image("myapp:${env.BUILD_ID}").inside {
                        sh 'npm test'
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    docker.image("myapp:${env.BUILD_ID}").run('-p 3000:3000')
                }
            }
        }
    }
}
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
# Xem logs của Jenkins
docker-compose logs jenkins

# Xem logs của Docker daemon
docker-compose logs docker
```

## 🔍 Troubleshooting

### Jenkins không kết nối được Docker
- Kiểm tra Docker daemon đã chạy: `docker-compose logs docker`
- Verify Docker Host URI trong Jenkins configuration

### Permission denied khi build
- Đảm bảo Jenkins user có quyền truy cập Docker socket
- Kiểm tra user configuration trong docker-compose.yml
