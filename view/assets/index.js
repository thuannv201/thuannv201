// Additional utility functions and configurations for the portfolio

// Configuration object
const portfolioConfig = {
    author: {
        name: "Nguyễn Văn Thuần",
        title: "Full Stack Developer",
        email: "thuannv201.dev@gmail.com",
        phone: "+84 9887739418",
        location: "Hà Nội, Việt Nam",
        avatar: null // You can add an avatar URL here
    },
    social: {
        github: "https://github.com/thuannv201",
        linkedin: "https://linkedin.com/in/thuannv201",
        twitter: "https://twitter.com/thuannv201",
        facebook: "https://facebook.com/thuannv201"
    },
    skills: {
        frontend: [
            { name: "React.js", level: 90 },
            { name: "Vue.js", level: 85 },
            { name: "TypeScript", level: 88 },
            { name: "Next.js", level: 82 }
        ],
        backend: [
            { name: "Node.js", level: 92 },
            { name: "Python", level: 86 },
            { name: "Java", level: 80 },
            { name: "Express.js", level: 90 }
        ],
        database: [
            { name: "MongoDB", level: 88 },
            { name: "PostgreSQL", level: 85 },
            { name: "Docker", level: 87 },
            { name: "AWS", level: 83 }
        ]
    },
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Nền tảng thương mại điện tử hoàn chỉnh với React, Node.js, và MongoDB. Hỗ trợ thanh toán online, quản lý kho hàng và analytics.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "fas fa-shopping-cart",
            githubUrl: "#",
            demoUrl: "#",
            featured: true
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Ứng dụng quản lý công việc nhóm với real-time collaboration, notification system và advanced reporting.",
            technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
            image: "fas fa-tasks",
            githubUrl: "#",
            demoUrl: "#",
            featured: true
        },
        {
            id: 3,
            title: "Analytics Dashboard",
            description: "Dashboard tổng hợp dữ liệu với data visualization, real-time updates và machine learning insights.",
            technologies: ["Next.js", "Python", "D3.js", "TensorFlow"],
            image: "fas fa-chart-line",
            githubUrl: "#",
            demoUrl: "#",
            featured: true
        }
    ]
};

// Language management
const LanguageManager = {
    currentLanguage: 'vi',
    
    translations: {
        vi: {
            // Navigation
            'nav.home': 'Trang chủ',
            'nav.about': 'Giới thiệu',
            'nav.skills': 'Kỹ năng',
            'nav.projects': 'Dự án',
            'nav.contact': 'Liên hệ',
            
            // Hero Section
            'hero.greeting': 'Xin chào, tôi là',
            'hero.title': 'Full Stack Developer',
            'hero.description': 'Tôi chuyên phát triển ứng dụng web hiện đại với React, Node.js, và các công nghệ cloud. Đam mê tạo ra những sản phẩm có tác động tích cực đến người dùng.',
            'hero.viewProjects': 'Xem dự án',
            'hero.contact': 'Liên hệ',
            
            // About Section
            'about.title': 'Giới thiệu',
            'about.paragraph1': 'Với hơn 5 năm kinh nghiệm trong lĩnh vực phát triển phần mềm, tôi đã tham gia vào nhiều dự án từ startup đến enterprise. Tôi có khả năng làm việc với cả frontend và backend, từ thiết kế UI/UX đến xây dựng API và quản lý database.',
            'about.paragraph2': 'Tôi luôn theo dõi và học hỏi các công nghệ mới, đặc biệt quan tâm đến DevOps, Cloud Computing và AI/ML. Mục tiêu của tôi là tạo ra những giải pháp công nghệ hiệu quả và có thể mở rộng.',
            'about.projects': 'Dự án hoàn thành',
            'about.experience': 'Năm kinh nghiệm',
            'about.technologies': 'Công nghệ thành thạo',
            
            // Skills Section
            'skills.title': 'Kỹ năng',
            'skills.frontend': 'Frontend',
            'skills.backend': 'Backend',
            'skills.database': 'Database & DevOps',
            
            // Projects Section
            'projects.title': 'Dự án nổi bật',
            'projects.ecommerce.title': 'E-Commerce Platform',
            'projects.ecommerce.desc': 'Nền tảng thương mại điện tử hoàn chỉnh với React, Node.js, và MongoDB. Hỗ trợ thanh toán online, quản lý kho hàng và analytics.',
            'projects.task.title': 'Task Management App',
            'projects.task.desc': 'Ứng dụng quản lý công việc nhóm với real-time collaboration, notification system và advanced reporting.',
            'projects.analytics.title': 'Analytics Dashboard',
            'projects.analytics.desc': 'Dashboard tổng hợp dữ liệu với data visualization, real-time updates và machine learning insights.',
            'projects.devops.title': 'DevOps Templates',
            'projects.devops.desc': 'Bộ template Docker và CI/CD cho các stack công nghệ phổ biến, giúp setup môi trường development nhanh chóng.',
            'projects.mobile.title': 'React Native App',
            'projects.mobile.desc': 'Ứng dụng di động cross-platform với tính năng offline-first, push notifications và biometric authentication.',
            'projects.ai.title': 'AI Chatbot',
            'projects.ai.desc': 'Chatbot thông minh với natural language processing, integration với multiple platforms và learning capabilities.',
            'projects.code': 'Code',
            'projects.demo': 'Demo',
            
            // Contact Section
            'contact.title': 'Liên hệ',
            'contact.subtitle': 'Hãy kết nối với tôi!',
            'contact.description': 'Tôi luôn sẵn sàng thảo luận về các cơ hội hợp tác mới hoặc các dự án thú vị.',
            'contact.email': 'Email',
            'contact.phone': 'Điện thoại',
            'contact.address': 'Địa chỉ',
            'contact.form.name': 'Họ và tên',
            'contact.form.email': 'Email',
            'contact.form.subject': 'Chủ đề',
            'contact.form.message': 'Nội dung tin nhắn',
            'contact.form.send': 'Gửi tin nhắn',
            'contact.form.sending': 'Đang gửi...',
            'contact.form.success': 'Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.',
            'contact.form.error': 'Vui lòng điền đầy đủ thông tin!',
            'contact.form.emailError': 'Email không hợp lệ!',
            
            // Footer
            'footer.rights': 'Tất cả quyền được bảo lưu.',
            
            // Accessibility
            'skip.content': 'Bỏ qua đến nội dung chính',
        },
        
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.skills': 'Skills',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            
            // Hero Section
            'hero.greeting': 'Hello, I am',
            'hero.title': 'Full Stack Developer',
            'hero.description': 'I specialize in developing modern web applications with React, Node.js, and cloud technologies. Passionate about creating products that make a positive impact on users.',
            'hero.viewProjects': 'View Projects',
            'hero.contact': 'Contact',
            
            // About Section
            'about.title': 'About Me',
            'about.paragraph1': 'With over 5 years of experience in software development, I have participated in many projects from startups to enterprises. I have the ability to work with both frontend and backend, from UI/UX design to building APIs and database management.',
            'about.paragraph2': 'I always follow and learn new technologies, especially interested in DevOps, Cloud Computing and AI/ML. My goal is to create efficient and scalable technology solutions.',
            'about.projects': 'Projects Completed',
            'about.experience': 'Years Experience',
            'about.technologies': 'Technologies Mastered',
            
            // Skills Section
            'skills.title': 'Skills',
            'skills.frontend': 'Frontend',
            'skills.backend': 'Backend',
            'skills.database': 'Database & DevOps',
            
            // Projects Section
            'projects.title': 'Featured Projects',
            'projects.ecommerce.title': 'E-Commerce Platform',
            'projects.ecommerce.desc': 'Complete e-commerce platform with React, Node.js, and MongoDB. Supports online payments, inventory management and analytics.',
            'projects.task.title': 'Task Management App',
            'projects.task.desc': 'Team task management application with real-time collaboration, notification system and advanced reporting.',
            'projects.analytics.title': 'Analytics Dashboard',
            'projects.analytics.desc': 'Data aggregation dashboard with data visualization, real-time updates and machine learning insights.',
            'projects.devops.title': 'DevOps Templates',
            'projects.devops.desc': 'Docker and CI/CD templates for popular technology stacks, helping to quickly setup development environments.',
            'projects.mobile.title': 'React Native App',
            'projects.mobile.desc': 'Cross-platform mobile application with offline-first features, push notifications and biometric authentication.',
            'projects.ai.title': 'AI Chatbot',
            'projects.ai.desc': 'Smart chatbot with natural language processing, integration with multiple platforms and learning capabilities.',
            'projects.code': 'Code',
            'projects.demo': 'Demo',
            
            // Contact Section
            'contact.title': 'Contact',
            'contact.subtitle': 'Let\'s Connect!',
            'contact.description': 'I am always ready to discuss new collaboration opportunities or interesting projects.',
            'contact.email': 'Email',
            'contact.phone': 'Phone',
            'contact.address': 'Address',
            'contact.form.name': 'Full Name',
            'contact.form.email': 'Email',
            'contact.form.subject': 'Subject',
            'contact.form.message': 'Message Content',
            'contact.form.send': 'Send Message',
            'contact.form.sending': 'Sending...',
            'contact.form.success': 'Message sent successfully! I will respond as soon as possible.',
            'contact.form.error': 'Please fill in all information!',
            'contact.form.emailError': 'Invalid email!',
            
            // Footer
            'footer.rights': 'All rights reserved.',
            
            // Accessibility
            'skip.content': 'Skip to main content',
        }
    },
    
    init() {
        const savedLanguage = localStorage.getItem('portfolio-language');
        if (savedLanguage && this.translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        }
        this.createLanguageToggle();
        this.applyTranslations();
    },
    
    translate(key) {
        return this.translations[this.currentLanguage][key] || key;
    },
    
    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'vi' ? 'en' : 'vi';
        localStorage.setItem('portfolio-language', this.currentLanguage);
        this.applyTranslations();
        this.updateLanguageToggle();
    },
    
    applyTranslations() {
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translate(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update document title
        document.title = `${portfolioConfig.author.name} - ${this.translate('hero.title')}`;
        
        // Update typing effect
        this.updateTypingEffect();
    },
    
    updateTypingEffect() {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const greeting = this.translate('hero.greeting');
            const name = portfolioConfig.author.name;
            const fullText = `${greeting} ${name}`;
            
            // Clear current typing effect
            heroTitle.innerHTML = `${greeting} <span class="highlight">${name}</span>`;
        }
    },
    
    createLanguageToggle() {
        const langToggle = document.getElementById('languageToggle');
        const langToggleMobile = document.getElementById('languageToggleMobile');
        
        const updateButton = (button) => {
            if (!button) return;
            button.innerHTML = this.currentLanguage === 'vi' ? '🇺🇸' : '🇻🇳';
            button.title = this.currentLanguage === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt';
        };
        
        // Update both buttons
        updateButton(langToggle);
        updateButton(langToggleMobile);
        
        // Add event listeners
        const handleToggle = () => {
            this.toggleLanguage();
        };
        
        if (langToggle) {
            langToggle.addEventListener('click', handleToggle);
            this.langToggleButton = langToggle;
        }
        
        if (langToggleMobile) {
            langToggleMobile.addEventListener('click', handleToggle);
            this.langToggleButtonMobile = langToggleMobile;
        }
    },
    
    updateLanguageToggle() {
        const updateButton = (button) => {
            if (button) {
                button.innerHTML = this.currentLanguage === 'vi' ? '🇺🇸' : '🇻🇳';
                button.title = this.currentLanguage === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt';
            }
        };
        
        updateButton(this.langToggleButton);
        updateButton(this.langToggleButtonMobile);
    }
};

// Theme management
const ThemeManager = {
    themes: {
        light: {
            primary: '#6366f1',
            secondary: '#8b5cf6',
            accent: '#fbbf24',
            background: '#ffffff',
            surface: '#f9fafb',
            text: '#1f2937'
        },
        dark: {
            primary: '#818cf8',
            secondary: '#a78bfa',
            accent: '#fcd34d',
            background: '#111827',
            surface: '#1f2937',
            text: '#f9fafb'
        }
    },
    
    currentTheme: 'light',
    
    init() {
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme && this.themes[savedTheme]) {
            this.currentTheme = savedTheme;
        }
        this.applyTheme();
        this.createThemeToggle();
    },
    
    applyTheme() {
        const theme = this.themes[this.currentTheme];
        const root = document.documentElement;
        
        Object.entries(theme).forEach(([key, value]) => {
            root.style.setProperty(`--color-${key}`, value);
        });
        
        document.body.classList.toggle('dark-theme', this.currentTheme === 'dark');
    },
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        localStorage.setItem('portfolio-theme', this.currentTheme);
    },
    
    createThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const themeToggleMobile = document.getElementById('themeToggleMobile');
        
        const handleToggle = () => {
            this.toggleTheme();
            const updateIcon = (button) => {
                if (button) {
                    const icon = button.querySelector('i');
                    if (icon) {
                        icon.className = this.currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
                    }
                }
            };
            updateIcon(themeToggle);
            updateIcon(themeToggleMobile);
        };
        
        if (themeToggle) {
            themeToggle.addEventListener('click', handleToggle);
        }
        
        if (themeToggleMobile) {
            themeToggleMobile.addEventListener('click', handleToggle);
        }
        
        // Update icons based on current theme
        const updateInitialIcon = (button) => {
            if (button && this.currentTheme === 'dark') {
                const icon = button.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-sun';
                }
            }
        };
        
        updateInitialIcon(themeToggle);
        updateInitialIcon(themeToggleMobile);
    }
};

// Performance monitoring
const PerformanceMonitor = {
    metrics: {},
    
    init() {
        this.measurePageLoad();
        this.measureScrollPerformance();
    },
    
    measurePageLoad() {
        window.addEventListener('load', () => {
            const navigation = performance.getEntriesByType('navigation')[0];
            this.metrics.pageLoad = {
                domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
                totalTime: navigation.loadEventEnd - navigation.navigationStart
            };
            
            console.log('Page Load Metrics:', this.metrics.pageLoad);
        });
    },
    
    measureScrollPerformance() {
        let isScrolling = false;
        let scrollCount = 0;
        
        window.addEventListener('scroll', () => {
            if (!isScrolling) {
                const start = performance.now();
                
                requestAnimationFrame(() => {
                    const end = performance.now();
                    scrollCount++;
                    
                    if (scrollCount % 10 === 0) {
                        console.log(`Scroll performance: ${end - start}ms`);
                    }
                });
                
                isScrolling = true;
                setTimeout(() => {
                    isScrolling = false;
                }, 100);
            }
        });
    }
};

// Analytics helper
const Analytics = {
    events: [],
    
    init() {
        this.trackPageView();
        this.trackUserInteractions();
    },
    
    trackPageView() {
        this.trackEvent('page_view', {
            url: window.location.href,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
        });
    },
    
    trackUserInteractions() {
        // Track button clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('button, .btn, .nav-link')) {
                this.trackEvent('click', {
                    element: e.target.tagName,
                    className: e.target.className,
                    text: e.target.textContent.trim(),
                    timestamp: new Date().toISOString()
                });
            }
        });
        
        // Track form submissions
        document.addEventListener('submit', (e) => {
            this.trackEvent('form_submit', {
                formId: e.target.id,
                timestamp: new Date().toISOString()
            });
        });
        
        // Track scroll depth
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
            }
        });
        
        window.addEventListener('beforeunload', () => {
            this.trackEvent('scroll_depth', {
                maxScrollPercent: maxScroll,
                timestamp: new Date().toISOString()
            });
        });
    },
    
    trackEvent(eventName, data) {
        this.events.push({
            event: eventName,
            data: data
        });
        
        // In a real application, you would send this data to your analytics service
        console.log('Analytics Event:', eventName, data);
    },
    
    getEvents() {
        return this.events;
    }
};

// SEO helpers
const SEOHelper = {
    init() {
        this.updateMetaTags();
        this.addStructuredData();
    },
    
    updateMetaTags() {
        const meta = {
            title: `${portfolioConfig.author.name} - ${portfolioConfig.author.title}`,
            description: `Portfolio của ${portfolioConfig.author.name}, ${portfolioConfig.author.title} với hơn 5 năm kinh nghiệm trong phát triển phần mềm.`,
            keywords: 'full stack developer, react, node.js, javascript, portfolio, web development',
            author: portfolioConfig.author.name,
            og: {
                title: `${portfolioConfig.author.name} - Portfolio`,
                description: `Portfolio chuyên nghiệp của ${portfolioConfig.author.name}`,
                type: 'website',
                url: window.location.href,
                image: '/path/to/og-image.jpg' // Add your OG image path
            }
        };
        
        // Update title
        document.title = meta.title;
        
        // Update or create meta tags
        this.setMetaTag('description', meta.description);
        this.setMetaTag('keywords', meta.keywords);
        this.setMetaTag('author', meta.author);
        
        // Open Graph tags
        this.setMetaTag('og:title', meta.og.title, 'property');
        this.setMetaTag('og:description', meta.og.description, 'property');
        this.setMetaTag('og:type', meta.og.type, 'property');
        this.setMetaTag('og:url', meta.og.url, 'property');
        this.setMetaTag('og:image', meta.og.image, 'property');
        
        // Twitter Card tags
        this.setMetaTag('twitter:card', 'summary_large_image', 'name');
        this.setMetaTag('twitter:title', meta.og.title, 'name');
        this.setMetaTag('twitter:description', meta.og.description, 'name');
        this.setMetaTag('twitter:image', meta.og.image, 'name');
    },
    
    setMetaTag(name, content, attribute = 'name') {
        let meta = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute(attribute, name);
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
    },
    
    addStructuredData() {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": portfolioConfig.author.name,
            "jobTitle": portfolioConfig.author.title,
            "email": portfolioConfig.author.email,
            "telephone": portfolioConfig.author.phone,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": portfolioConfig.author.location
            },
            "sameAs": Object.values(portfolioConfig.social),
            "url": window.location.href
        };
        
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
    }
};

// Accessibility improvements
const AccessibilityHelper = {
    init() {
        this.addSkipLink();
        this.improveKeyboardNavigation();
        this.addAriaLabels();
    },
    
    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#home';  // Sử dụng #home thay vì #main-content
        skipLink.textContent = 'Bỏ qua đến nội dung chính';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: #fff;
            padding: 8px;
            z-index: 10000;
            text-decoration: none;
            border-radius: 4px;
            font-size: 14px;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Đảm bảo hero section có thể focus
        const heroSection = document.querySelector('#home');
        if (heroSection) {
            heroSection.setAttribute('tabindex', '-1');
        }
    },
    
    improveKeyboardNavigation() {
        // Add keyboard support for hamburger menu
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            hamburger.setAttribute('role', 'button');
            hamburger.setAttribute('aria-label', 'Toggle navigation menu');
            hamburger.setAttribute('tabindex', '0');
            
            hamburger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    hamburger.click();
                }
            });
        }
        
        // Trap focus in mobile menu
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            const focusableElements = navMenu.querySelectorAll('a[href], button, input, textarea, select');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            navMenu.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            });
        }
    },
    
    addAriaLabels() {
        // Add aria-labels to social links
        document.querySelectorAll('.social-link').forEach(link => {
            const iconClass = link.querySelector('i').className;
            let platform = 'Social Media';
            
            if (iconClass.includes('github')) platform = 'GitHub';
            else if (iconClass.includes('linkedin')) platform = 'LinkedIn';
            else if (iconClass.includes('twitter')) platform = 'Twitter';
            else if (iconClass.includes('facebook')) platform = 'Facebook';
            
            link.setAttribute('aria-label', `Visit my ${platform} profile`);
        });
        
        // Add aria-labels to project links
        document.querySelectorAll('.project-link').forEach(link => {
            const text = link.textContent.trim();
            const projectTitle = link.closest('.project-card').querySelector('h3').textContent;
            link.setAttribute('aria-label', `${text} for ${projectTitle} project`);
        });
    }
};

// Error handling
const ErrorHandler = {
    init() {
        window.addEventListener('error', this.handleError);
        window.addEventListener('unhandledrejection', this.handlePromiseRejection);
    },
    
    handleError(event) {
        console.error('Global error:', event.error);
        // In production, you might want to send this to an error reporting service
    },
    
    handlePromiseRejection(event) {
        console.error('Unhandled promise rejection:', event.reason);
        event.preventDefault();
    }
};

// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize modules
    LanguageManager.init();
    ThemeManager.init();
    PerformanceMonitor.init();
    Analytics.init();
    SEOHelper.init();
    AccessibilityHelper.init();
    ErrorHandler.init();
    
    console.log('Portfolio initialized successfully!');
    console.log('Configuration:', portfolioConfig);
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        portfolioConfig,
        LanguageManager,
        ThemeManager,
        PerformanceMonitor,
        Analytics,
        SEOHelper,
        AccessibilityHelper,
        ErrorHandler
    };
}

// Make available globally
window.PortfolioUtils = {
    config: portfolioConfig,
    LanguageManager,
    ThemeManager,
    PerformanceMonitor,
    Analytics,
    SEOHelper,
    AccessibilityHelper,
    ErrorHandler
};
