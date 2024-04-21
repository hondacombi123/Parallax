let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let man = document.getElementById("man");

window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    moon.style.top = value * .8 + "px";
    text.style.top = 80 + value * -0.2 + '%';
    train.style.left = value * 1.5 + "px";

    man.style.left = value * .6 + "px";
})