
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImageSrc = `images/dice${randomNumber1}.png`;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSrc);


