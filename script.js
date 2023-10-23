const textElement = document.getElementById('animatedText');
const backgroundElement = document.getElementById('background');
const imageElement = document.getElementById('animatedImage');
const imageCounter = document.getElementById('imageCounter');
const imageCaption = document.getElementById('imageCaption');
const toggleImageButton = document.getElementById('toggleImage');
const changeSpeedButton = document.getElementById('changeSpeed');
const changeTextColorButton = document.getElementById('changeTextColor');
const itemList = document.getElementById('itemList');
const addItemButton = document.getElementById('addItemButton');
const removeItemButton = document.getElementById('removeItemButton');

const texts = [
    'Hello, World! This is a scrolling text.',
    'Welcome to our website!',
    'Scrolling text example.',
    'Try different animations!',
];

let currentTextIndex = 0;
let isZoomedIn = true;
let isCaptionVisible = true;
let isImageVisible = true;
let clickCount = 0;
let animationSpeed = 50;

imageElement.addEventListener('click', () => {
    clickCount++;
    imageCounter.textContent = `Image Clicks: ${clickCount}`;
});

toggleImageButton.addEventListener('click', () => {
    isImageVisible = !isImageVisible;
    imageElement.style.display = isImageVisible ? 'block' : 'none';
    imageCaption.style.display = isImageVisible ? 'block' : 'none';
});

changeSpeedButton.addEventListener('click', () => {
    animationSpeed = animationSpeed === 50 ? 100 : 50;
});

changeTextColorButton.addEventListener('click', () => {
    const randomColor = getRandomColor();
    textElement.style.color = randomColor;
});
addItemButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `New Item ${itemList.childElementCount + 1}`;
    itemList.appendChild(newItem);
});

removeItemButton.addEventListener('click', () => {
    const lastItem = itemList.lastElementChild;
    if (lastItem) {
        itemList.removeChild(lastItem);
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

async function animateTextAndImage() {
    while (true) {
        for (let i = 100; i; i--) {
            textElement.style.transform = `translateX(${i}%)`;
            backgroundElement.style.backgroundColor = `rgb(${255 - i * 2}, 0, 0)`;
            textElement.style.fontSize = `${24 + i / 4}px`;
            imageElement.style.transform = isZoomedIn ? `scale(${i / 100})` : `scale(${1 - i / 100})`;
            await sleep(animationSpeed);
        }

        currentTextIndex = (currentTextIndex + 1) % texts.length;
        textElement.textContent = texts[currentTextIndex];

        isZoomedIn = !isZoomedIn; 

        await sleep(1000);
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

animateTextAndImage();


