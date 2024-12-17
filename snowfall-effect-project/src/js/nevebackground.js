// This file implements the snow falling effect.
const snowflakes = [];
const numberOfSnowflakes = 100;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    document.body.appendChild(snowflake);
    snowflakes.push(snowflake);
}

function animateSnowflakes() {
    snowflakes.forEach((snowflake, index) => {
        const fallSpeed = Math.random() * 3 + 1;
        snowflake.style.top = (parseFloat(snowflake.style.top || 0) + fallSpeed) + 'px';

        if (parseFloat(snowflake.style.top) > window.innerHeight) {
            snowflake.style.top = '-10px';
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
        }
    });
}

function initSnowfall() {
    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }
    setInterval(animateSnowflakes, 50);
}

window.onload = initSnowfall;