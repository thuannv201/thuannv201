import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const stacks = [
    {
      category: "🎨 Frontend",
      title: "Next.js Application",
      description: "Ứng dụng web được xây dựng bằng Next.js với TypeScript",
      features: ["React 18", "TypeScript", "CSS Modules", "App Router"],
      path: "view-app/",
      icon: "/next.svg"
    },
    {
      category: "🗄️ Database",
      title: "Database Stack",
      description: "Các hệ quản trị cơ sở dữ liệu phổ biến với Docker",
      features: ["PostgreSQL + pgAdmin", "MySQL + phpMyAdmin", "MongoDB + Mongo Express"],
      path: "database/",
      icon: "/window.svg"
    },
    {
      category: "🚀 DevOps",
      title: "Jenkins CI/CD",
      description: "Hệ thống tích hợp liên tục và triển khai tự động",
      features: ["Pipeline automation", "Docker integration", "Jenkinsfile templates"],
      path: "jenkins/",
      icon: "/file.svg"
    },
    {
      category: "🌐 Web Server",
      title: "Nginx Proxy",
      description: "Reverse proxy và static web server",
      features: ["Load balancing", "SSL termination", "Static file serving"],
      path: "nginx/",
      icon: "/globe.svg"
    },
    {
      category: "📊 Monitoring",
      title: "Prometheus + Grafana",
      description: "Hệ thống giám sát và visualization",
      features: ["Metrics collection", "Alert management", "Custom dashboards"],
      path: "prometheus-grafana/",
      icon: "/window.svg"
    }
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Portfolio logo"
            width={180}
            height={38}
            priority
          />
          <h1 className={styles.title}>🚀 Portfolio & Docker Templates</h1>
          <p className={styles.subtitle}>
            Hướng dẫn sử dụng các stack công nghệ trong dự án
          </p>
        </div>

        <section className={styles.intro}>
          <h2>📖 Tổng quan dự án</h2>
          <p>
            Repo này chứa <strong>Portfolio cá nhân</strong> dành cho Dev và các 
            <strong> mẫu cấu hình Docker</strong> cho các công nghệ thường dùng, 
            kèm theo hướng dẫn chi tiết.
          </p>
        </section>

        <section className={styles.stacks}>
          <h2>🛠️ Các Stack Công Nghệ</h2>
          <div className={styles.stackGrid}>
            {stacks.map((stack, index) => (
              <div key={index} className={styles.stackCard}>
                <div className={styles.stackHeader}>
                  <Image
                    src={stack.icon}
                    alt={`${stack.title} icon`}
                    width={24}
                    height={24}
                  />
                  <span className={styles.category}>{stack.category}</span>
                </div>
                <h3>{stack.title}</h3>
                <p>{stack.description}</p>
                <ul className={styles.features}>
                  {stack.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.stackPath}>
                  <code>{stack.path}</code>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.quickStart}>
          <h2>🚀 Hướng dẫn nhanh</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <h3>1. Yêu cầu hệ thống</h3>
              <ul>
                <li>Docker</li>
                <li>Docker Compose</li>
              </ul>
            </div>
            <div className={styles.step}>
              <h3>2. Chạy một stack</h3>
              <div className={styles.codeBlock}>
                <code>
                  cd &lt;tên-thư-mục&gt;<br/>
                  docker-compose up -d
                </code>
              </div>
            </div>
            <div className={styles.step}>
              <h3>3. Xem hướng dẫn chi tiết</h3>
              <p>Mỗi thư mục đều có file <code>README.md</code> với hướng dẫn cụ thể.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className={styles.footer}>
        <a
          href="https://github.com/thuannv201"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          GitHub Profile
        </a>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="Docs icon"
            width={16}
            height={16}
          />
          Next.js Docs
        </a>
        <a
          href="https://docs.docker.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Docker icon"
            width={16}
            height={16}
          />
          Docker Docs
        </a>
      </footer>
    </div>
  );
}
