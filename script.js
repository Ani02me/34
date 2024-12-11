let box = document.getElementById('box');
let greenButton = document.getElementById('greenButton');
let widenButton = document.getElementById('widenButton');
let heightenButton = document.getElementById('heightenButton');


greenButton.addEventListener('click', () => {
    box.style.backgroundColor = 'green';
});


widenButton.addEventListener('click', () => {
    let currentWidth = parseInt(window.getComputedStyle(box).width);
    box.style.width = (currentWidth + 20) + 'px';
});


heightenButton.addEventListener('click', () => {
    let currentHeight = parseInt(window.getComputedStyle(box).height);
    box.style.height = (currentHeight + 20) + 'px';
});


box.addEventListener('mouseenter', () => {
    box.textContent = 'Сіздің мышкаңыз қораптың ішінде!';
});

box.addEventListener('mouseleave', () => {
    box.textContent = 'Сіздің мышкаңыз қораптан шығып кетті!';
});
