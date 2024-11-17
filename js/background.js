const images = [
    "images/background1.jpg",
    "images/background2.jpg",
    "images/background3.jpg",
];
document.body.style.backgroundImage =
    `url(${images[Math.floor(Math.random() * images.length)]})`;
