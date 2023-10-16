
const textElement = document.getElementById('animatedText');

async function animateText() {
    for (let i = 100; i; i--) {
        textElement.style.transform = `translateX(${i}%)`;
        await sleep(50); 
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

animateText();
