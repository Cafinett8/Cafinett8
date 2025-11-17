// اسکریپت پیشرفته‌تر برای افکت‌های تعاملی کافی نت

class CafeNetAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.serviceItemEffects();
        this.contactButtonEffects();
        this.iconAnimations();
        this.smoothScroll();
        this.insuranceFeatures();
        this.pageLoader();
        this.floatingAnimations();
    }

    // افکت hover برای آیتم‌های خدمات
    serviceItemEffects() {
        document.querySelectorAll('.service-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            });

            // افکت کلیک برای خدمات
            item.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(-2px) scale(0.98)';
            });
            
            item.addEventListener('mouseup', function() {
                this.style.transform = 'translateY(-8px)';
            });
        });
    }

    // افکت کلیک برای دکمه‌های تماس
    contactButtonEffects() {
        document.querySelectorAll('.contact-btn').forEach(button => {
            button.addEventListener('mousedown', function() {
                this.style.transform = 'scale(0.92)';
            });
            
            button.addEventListener('mouseup', function() {
                this.style.transform = 'scale(1)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });

            // افکت hover پیشرفته
            button.addEventListener('mouseenter', function() {
                this.style.filter = 'brightness(1.1)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.filter = 'brightness(1)';
            });
        });
    }

    // انیمیشن ساده برای آیکون‌ها
    iconAnimations() {
        document.querySelectorAll('.service-item i').forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.2) rotate(5deg)';
                this.style.color = '#4ecdc4';
                this.style.transition = 'all 0.3s ease';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
                this.style.color = '';
            });
        });

        // انیمیشن ویژه برای آیکون‌های متحرک
        document.querySelectorAll('.animated-logo').forEach(logo => {
            logo.style.animation = 'pulse 2s infinite, float 3s ease-in-out infinite';
        });
    }

    // اسکرول نرم
    smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ویژگی‌های بیمه
    insuranceFeatures() {
        const insuranceItems = document.querySelectorAll('.insurance-item');
        
        insuranceItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const badge = this.querySelector('.insurance-badge');
                if (badge) {
                    badge.style.transform = 'scale(1.1)';
                    badge.style.backgroundColor = '#ff5252';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const badge = this.querySelector('.insurance-badge');
                if (badge) {
                    badge.style.transform = 'scale(1)';
                    badge.style.backgroundColor = '#ff6b6b';
                }
            });
        });

        // نمایش جزئیات بیمه با کلیک
        document.querySelectorAll('.insurance-type').forEach(type => {
            type.addEventListener('click', function() {
                this.classList.toggle('expanded');
            });
        });
    }

    // لود صفحه با افکت‌های پیشرفته
    pageLoader() {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('سایت کافی نت با موفقیت لود شد 🚀');
            
            // افکت ظاهر شدن تدریجی
            this.fadeInElements();
            
            // اضافه کردن کلاس loaded برای انیمیشن‌ها
            document.body.classList.add('loaded');
        });
    }

    // افکت شناور برای المان‌ها
    floatingAnimations() {
        // ایجاد افکت شناور برای برخی المان‌ها
        const floatingElements = document.querySelectorAll('.service-item, .contact-btn');
        
        floatingElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
        });
    }

    // افکت fade-in برای المان‌ها
    fadeInElements() {
        const elements = document.querySelectorAll('.service-item, .contact-buttons, .insurance-description');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = `all 0.6s ease ${index * 0.1}s`;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        });
    }

    // متد برای اضافه کردن افکت تایپ (اگر نیاز باشد)
    typeWriterEffect(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
}

// راه‌اندازی اسکریپت
const cafeNet = new CafeNetAnimations();

// اضافه کردن انیمیشن‌های CSS جدید
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .service-item, .contact-btn {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    .insurance-type {
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .insurance-type.expanded {
        background: rgba(255, 255, 255, 0.2) !important;
        transform: scale(1.02);
    }
    
    body.loaded .service-item {
        animation: fadeInUp 0.6s ease forwards;
    }
`;

document.head.appendChild(style);

// مدیریت رسپانسیو و resize
window.addEventListener('resize', () => {
    console.log('سایز صفحه تغییر کرد:', window.innerWidth, 'x', window.innerHeight);
});

// اضافه کردن افکت برای لینک‌های خدمات
document.querySelectorAll('.service-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // افکت کلیک
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            window.location.href = this.href;
        }, 150);
    });
});
