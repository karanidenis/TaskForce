document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        const readMoreText = container.querySelector('.read-more');
        const overlayText = container.querySelector('.overlay-text');

        container.addEventListener('mouseover', () => {
            container.classList.add('hover');
            readMoreText.style.display = 'block';
        });

        container.addEventListener('mouseout', () => {
            container.classList.remove('hover');
            readMoreText.style.display = 'none';
        });
    });
});
