document.addEventListener('DOMContentLoaded', function() {
    // Переключение цветов машин
    document.querySelectorAll('.car-card__colors').forEach(function(colorsBlock) {
        const card = colorsBlock.closest('.car-card');
        const imageBlock = card.querySelector('.car-card__image-block');
        const images = imageBlock.querySelectorAll('.car-image');
        const dots = colorsBlock.querySelectorAll('.color-dot');

        // Начальное состояние: белая машина активна
        dots[0].classList.add('active');
        images[0].classList.add('active');

        dots.forEach(function(dot) {
            dot.addEventListener('click', function() {
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

    // Плавный показ таймера после отрисовки
    setTimeout(function() {
        const timerWrapper = document.querySelector('.timer-wrapper');
        if (timerWrapper) {
            timerWrapper.classList.add('visible');
        }
    }, 600);
});
