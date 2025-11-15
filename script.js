// اطلاعات تماس
const telegramUsername = 'Cafinett8';
const whatsappNumber = '09224044842';

// تنظیم لینک‌ها
document.getElementById('telegram-link').href = `https://t.me/${telegramUsername}`;
document.getElementById('whatsapp-link').href = `https://wa.me/98${whatsappNumber.substring(1)}`;

// باز کردن در تب جدید
document.getElementById('telegram-link').setAttribute('target', '_blank');
document.getElementById('whatsapp-link').setAttribute('target', '_blank');

// افکت کلیک روی دکمه‌ها
document.querySelectorAll('.contact-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});
