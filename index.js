
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImageSrc = `images/dice${randomNumber1}.png`;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSrc);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSrc2 = `images/dice${randomNumber2}.png`

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

