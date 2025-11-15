// اطلاعات تماس
const telegramUsername = 'Cafinett8';
const whatsappNumber = '09224044842';

// تنظیم لینک‌ها
document.getElementById('telegram-link').href = `https://t.me/${telegramUsername}`;
document.getElementById('whatsapp-link').href = `https://wa.me/98${whatsappNumber.substring(1)}`;

// باز کردن در تب جدید
document.getElementById('telegram-link').setAttribute('target', '_blank');
document.getElementById('whatsapp-link').setAttribute('target', '_blank');

// تغییر رنگ پس‌زمینه به صورت تصادفی
function changeBackgroundColor() {
    const colors = [
        'linear-gradient(45deg, #000428, #004e92, #000428)',
        'linear-gradient(45deg, #0f0c29, #302b63, #24243e)',
        'linear-gradient(45deg, #23074d, #cc5333, #23074d)',
        'linear-gradient(45deg, #1a2a6c, #b21f1f, #fdbb2d)',
        'linear-gradient(45deg, #3a1c71, #d76d77, #ffaf7b)',
        'linear-gradient(45deg, #1d2b64, #f8cdda, #1d2b64)',
        'linear-gradient(45deg, #667eea, #764ba2, #667eea)',
        'linear-gradient(45deg, #f093fb, #f5576c, #f093fb)',
        'linear-gradient(45deg, #4facfe, #00f2fe, #4facfe)',
        'linear-gradient(45deg, #43e97b, #38f9d7, #43e97b)'
    ];
    
    const matrixBg = document.querySelector('.matrix-background');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // انیمیشن تغییر رنگ
    matrixBg.style.transition = 'background 2s ease-in-out';
    matrixBg.style.background = randomColor;
    
    console.log('رنگ تغییر کرد به:', randomColor); // برای دیباگ
}

// تغییر رنگ هر 8 ثانیه
setInterval(changeBackgroundColor, 8000);

// تغییر رنگ اولیه هنگام لود صفحه
document.addEventListener('DOMContentLoaded', function() {
    changeBackgroundColor();
});

// افکت کلیک روی دکمه‌ها
document.querySelectorAll('.contact-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // افکت فشرده شدن
        this.style.transform = 'scale(0.95)';
        
        // باز کردن لینک بعد از افکت
        setTimeout(() => {
            window.open(this.href, '_blank');
            this.style.transform = '';
        }, 200);
    });
});

// انیمیشن اسکرول نرم برای آینده اگر بخش‌های بیشتری اضافه کردید
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

// افکت hover برای آیتم‌های سرویس
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});
