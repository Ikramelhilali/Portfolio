const icons = document.querySelectorAll('.floating-icon');
const speed = 0.5;

const iconData = Array.from(icons).map((img) => {
    return {
        el: img,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * speed * 2,
        dy: (Math.random() - 0.5) * speed * 2,
    };
});

function animate() {
    iconData.forEach((data) => {
        data.x += data.dx;
        data.y += data.dy;

        if (data.x + 50 > window.innerWidth || data.x < 0) {
            data.dx *= -1;
        }

        if (data.y + 50 > window.innerHeight || data.y < 0) {
            data.dy *= -1;
        }

        data.el.style.left = data.x + 'px';
        data.el.style.top = data.y + 'px';
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    iconData.forEach(data => {
        data.x = Math.random() * (window.innerWidth - 50);
        data.y = Math.random() * (window.innerHeight - 50);
    });
});

animate();