// اسکریپت ساده برای افکت‌های تعاملی کافی نت

// افکت hover برای آیتم‌های خدمات
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
});

// افکت کلیک برای دکمه‌های تماس
document.querySelectorAll('.contact-btn').forEach(button => {
    button.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// انیمیشن برای آیکون‌ها
document.querySelectorAll('.service-item i').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'all 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// اسکرول نرم برای لینک‌های داخلی
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// افکت برای لینک سرویس فیلترشکن
document.querySelectorAll('.service-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#4ecdc4';
        this.style.textDecoration = 'underline';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.color = '';
        this.style.textDecoration = 'none';
    });
});

// لود صفحه
document.addEventListener('DOMContentLoaded', function() {
    console.log('سایت کافی نت لود شد');
    
    // اضافه کردن کلاس loaded برای انیمیشن‌های اولیه
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});
