const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play');
const videoModal = document.querySelector('.modal__inner iframe');

buttonsModal.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalWindow.classList.add('active');
    });
});

modalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active');
    videoModal.src = videoModal.src;
});