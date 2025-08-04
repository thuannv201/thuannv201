# 📊 Prometheus + Grafana Monitoring Stack

Cấu hình Docker Compose để chạy stack giám sát hoàn chỉnh với Prometheus, Grafana, Node Exporter, cAdvisor và Alertmanager.

## 🚀 Cách chạy

```bash
cd prometheus-grafana
docker-compose up -d
```

## 📋 Thông tin truy cập

### Prometheus
- **URL**: http://localhost:9090
- **Purpose**: Time series database và alerting

### Grafana
- **URL**: http://localhost:3000
- **Username**: admin
- **Password**: admin123
- **Purpose**: Visualization và dashboards

### Node Exporter
- **URL**: http://localhost:9100/metrics
- **Purpose**: Metrics của hệ thống (CPU, RAM, Disk, Network)

### cAdvisor
- **URL**: http://localhost:8084
- **Purpose**: Metrics của Docker containers

### Alertmanager
- **URL**: http://localhost:9093
- **Purpose**: Quản lý alerts và notifications

## 📁 Cấu trúc

```
prometheus-grafana/
├── docker-compose.yml        # Cấu hình Docker Compose
├── README.md                # Hướng dẫn này
├── prometheus.yml           # Cấu hình Prometheus
├── alertmanager.yml         # Cấu hình Alertmanager
├── alerts/                  # Thư mục chứa alert rules
│   └── node-alerts.yml     # Alert rules mẫu
└── grafana/                # Cấu hình Grafana
    ├── provisioning/       # Auto-provisioning
    │   ├── datasources/   # Data sources
    │   └── dashboards/    # Dashboard providers
    └── dashboards/        # Dashboard files
        └── node-exporter.json
```

## 📊 Dashboards có sẵn

### 1. Node Exporter Dashboard
- CPU Usage
- Memory Usage
- Disk Usage
- Network Traffic
- System Load

### 2. Docker Container Metrics
- Container CPU/Memory usage
- Container network I/O
- Container filesystem usage

## 🔔 Alerting

### Alerts được cấu hình sẵn:
- High CPU usage (>80%)
- High Memory usage (>90%)
- Low Disk space (<10%)
- Container down
- High load average

### Cấu hình notification:
Chỉnh sửa `alertmanager.yml` để thêm:
- Email notifications
- Slack notifications
- Discord notifications
- Webhook notifications

## 🔧 Tùy chỉnh

### Thêm targets mới
Chỉnh sửa `prometheus.yml`:
```yaml
scrape_configs:
  - job_name: 'my-app'
    static_configs:
      - targets: ['my-app:8080']
```

### Thêm alert rules mới
Tạo file `.yml` trong thư mục `alerts/`:
```yaml
groups:
  - name: my-app-alerts
    rules:
      - alert: MyAppDown
        expr: up{job="my-app"} == 0
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "My App is down"
```

### Import dashboards từ Grafana.com
1. Vào Grafana UI
2. Click "+" → "Import"
3. Nhập ID dashboard (VD: 1860 cho Node Exporter Full)
4. Select Prometheus datasource

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
# Xem logs của Prometheus
docker-compose logs prometheus

# Xem logs của Grafana
docker-compose logs grafana

# Xem logs của tất cả services
docker-compose logs
```

## 🔍 Troubleshooting

### Prometheus không scrape được targets
- Kiểm tra network connectivity: `docker exec prometheus ping node_exporter`
- Verify targets trong Prometheus UI: Status → Targets

### Grafana không hiển thị data
- Kiểm tra Prometheus datasource: Configuration → Data Sources
- Verify query trong dashboard panels

### Alerts không fire
- Kiểm tra alert rules: Alerts → Alert Rules
- Verify Alertmanager config: `docker exec alertmanager cat /etc/alertmanager/alertmanager.yml`

## 📚 Useful Queries

### Prometheus Queries mẫu:
```promql
# CPU usage percentage
100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)

# Memory usage percentage  
(1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100

# Disk usage percentage
100 - ((node_filesystem_avail_bytes * 100) / node_filesystem_size_bytes)

# Container CPU usage
rate(container_cpu_usage_seconds_total[5m]) * 100

# Container Memory usage
container_memory_usage_bytes / container_spec_memory_limit_bytes * 100
```

---

## 🐧 Docker installation trên Ubuntu 20 LTS

```bash
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update && sudo apt-get install docker-ce docker-ce-cli containerd.io
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo usermod -aG docker $USER
newgrp docker
```
