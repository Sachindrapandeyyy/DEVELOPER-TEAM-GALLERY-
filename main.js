'use strict';

const carouselItems = document.querySelectorAll('.carousel__item');
let currentItem = document.querySelector('.carousel__item--main');
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn');

// Function to move the carousel to the right
function moveRight() {
    currentItem = document.querySelector('.carousel__item--right');
    const leftItem = document.querySelector('.carousel__item--main');
    carouselItems.forEach((item) => {
        item.classList = 'carousel__item';
    });
    currentItem.classList.add('carousel__item--main');
    leftItem.classList.add('carousel__item--left');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const rightItem = currentId === carouselItems.length - 1 ? carouselItems[0] : carouselItems[currentId + 1];
    rightItem.classList.add('carousel__item--right');
}

// Function to move the carousel to the left
function moveLeft() {
    currentItem = document.querySelector('.carousel__item--left');
    const rightItem = document.querySelector('.carousel__item--main');
    carouselItems.forEach((item) => {
        item.classList = 'carousel__item';
    });
    currentItem.classList.add('carousel__item--main');
    rightItem.classList.add('carousel__item--right');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const leftItem = currentId === 0 ? carouselItems[carouselItems.length - 1] : carouselItems[currentId - 1];
    leftItem.classList.add('carousel__item--left');
}

// Right button click
rightBtn.addEventListener('click', moveRight);

// Left button click
leftBtn.addEventListener('click', moveLeft);

// Arrow key support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        moveRight();
    } else if (e.key === 'ArrowLeft') {
        moveLeft();
    }
});

// Touch support
let touchStartX = 0;
let touchEndX = 0;

carouselItems.forEach((item) => {
    item.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    item.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    });
});

function handleGesture() {
    if (touchEndX < touchStartX) {
        moveRight();
    }

    if (touchEndX > touchStartX) {
        moveLeft();
    }
}
