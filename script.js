const textElement = document.getElementById('animatedText');
const backgroundElement = document.getElementById('background');
const imageElement = document.getElementById('animatedImage');
const imageCounter = document.getElementById('imageCounter');
const imageCaption = document.getElementById('imageCaption');
const toggleImageButton = document.getElementById('toggleImage');


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

imageElement.addEventListener('click', () => {
    clickCount++;
    imageCounter.textContent = `Image Clicks: ${clickCount}`;
});

toggleImageButton.addEventListener('click', () => {
    isImageVisible = !isImageVisible;
    imageElement.style.display = isImageVisible ? 'block' : 'none';
    imageCaption.style.display = isImageVisible ? 'block' : 'none';
});

async function animateTextAndImage() {
    while (true) {
        for (let i = 100; i; i--) {
            textElement.style.transform = `translateX(${i}%)`;
            backgroundElement.style.backgroundColor = `rgb(${255 - i * 2}, 0, 0)`;
            textElement.style.fontSize = `${24 + i / 4}px`;
            imageElement.style.transform = isZoomedIn ? `scale(${i / 100})` : `scale(${1 - i / 100})`;
            await sleep(50);
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


