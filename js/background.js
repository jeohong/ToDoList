const images = [
    "background_0.jpg",
    "background_1.jpg",
    "background_2.jpg",
    "background_3.jpg",
    "background_4.jpg",
    "background_5.jpg",
    "background_6.jpg",
    "background_7.jpg",
    "background_8.jpg",
    "background_9.jpg",
    "background_10.jpg",
    "background_11.jpg",
    "background_12.jpg"
];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${randomImg}`;
document.body.appendChild(bgImg);