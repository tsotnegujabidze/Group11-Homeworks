const rectangle = document.querySelector('.rectangle');
const box = document.querySelector('.box');

const boxWidth = box.offsetWidth;
const boxHeight = box.offsetHeight;
const rectSize = rectangle.offsetWidth;
            
let x = 0;
let y = 0;
let direction = 'right';

function animate() {
    switch (direction) {
        case 'right':
            x += 2;
        if (x + rectSize >= boxWidth) {
            direction = 'down';
        }
        break;
    case 'down':
        y += 2;
        if (y + rectSize >= boxHeight) {
            direction = 'left';
        }
        break;
    case 'left':
        x -= 2;
        if (x <= 0) {
            direction = 'up';
        }
        break;
    case 'up':
        y -= 2;
        if (y <= 0) {
            direction = 'right';
        }
        break;
}

rectangle.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animate);
}

animate();