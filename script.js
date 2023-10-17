const textElement = document.getElementById('animatedText');
const backgroundElement = document.getElementById('background');

async function animateText() {
    while (true) {
        for (let i = 100; i; i--) {
            textElement.style.transform = `translateX(${i}%)`;
            backgroundElement.style.backgroundColor = `rgb(${255 - i * 2}, 0, 0)`;
            await sleep(50); 
        }
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

animateText();
