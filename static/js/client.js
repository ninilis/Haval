document.addEventListener('DOMContentLoaded', function () {
// Цвет машин
    document.querySelectorAll('.car-card__colors').forEach(function (colorsBlock) {
        const card = colorsBlock.closest('.car-card');
        const imageBlock = card.querySelector('.car-card__image-block');
        const images = imageBlock.querySelectorAll('.car-image');
        const dots = colorsBlock.querySelectorAll('.color-dot');
        // Начальное состояние: первый цвет активен
        dots[0].classList.add('active');
        images[0].classList.add('active');
        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                const color = this.getAttribute('data-color');

                dots.forEach(d => d.classList.remove('active'));
                images.forEach(img => img.classList.remove('active'));

                this.classList.add('active');

                const target = imageBlock.querySelector('.car-image--' + color);
                if (target) {
                    target.classList.add('active');
                }
            });
        });
    });

// Модалки
    setTimeout(function () {
        const timerWrapper = document.querySelector('.timer-wrapper');
        if (timerWrapper) {
            timerWrapper.classList.add('visible');
        }
    }, 600);
     const modal = document.getElementById('requestModal');
    if (!modal) return;   // выход, если окна нет на странице
    const closeBtn = modal.querySelector('.modal-close');
    const form = document.getElementById('requestForm');
    const phoneInput = document.getElementById('phone');
    document.body.addEventListener('click', function (e) {
        if (
            e.target.closest('.promotion__button') ||
            e.target.closest('.btn-card') ||
            e.target.closest('.car-card__test-drive')
        ) {
            e.preventDefault();
            modal.classList.add('active');
        }
    });
    closeBtn.addEventListener('click', function () {
        modal.classList.remove('active');
    });
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    // Отправка формы
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Форма отправлена. Телефон: ' + phoneInput.value);
        modal.classList.remove('active');
        phoneInput.value = '';
    });

});
