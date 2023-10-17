const textElement = document.getElementById('animatedText');
const backgroundElement = document.getElementById('background');
const texts = [
    'Hello, World! This is a scrolling text.',
    'Welcome to our website!',
    'Scrolling text example.',
    'Try different animations!',
];

let currentTextIndex = 0;

async function animateText() {
    while (true) {
        for (let i = 100; i; i--) {
            textElement.style.transform = `translateX(${i}%)`;
            backgroundElement.style.backgroundColor = `rgb(${255 - i * 2}, 0, 0)`;
            await sleep(50); 
        }

        currentTextIndex = (currentTextIndex + 1) % texts.length;
        textElement.textContent = texts[currentTextIndex];

        await sleep(1000); 
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

animateText();

