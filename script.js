// اطلاعات تماس
const telegramUsername = 'Cafinett8';
const whatsappNumber = '09224044842';

// تنظیم لینک‌ها
document.getElementById('telegram-link').href = `https://t.me/${telegramUsername}`;
document.getElementById('whatsapp-link').href = `https://wa.me/${whatsappNumber}`;

// افکت کلیک روی دکمه‌ها
document.querySelectorAll('.contact-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// اسکرول نرم
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
