let box = document.getElementById("box"),
  btn = document.getElementsByTagName("button"),
  circle = document.getElementsByClassName("circle"),
  heart = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart");

console.log(box);
console.log(btn[0]);
console.log(circle[3]);
console.log(heart[1]);
console.log(oneHeart);

box.style.backgroundColor = "blue";
btn[3].style.borderRadius = "100%";

let div = document.createElement("div");
let text = document.createTextNode("Я тут был");

div.classList.add("black");
console.log(div);

document.body.appendChild(div);
document.body.insertBefore(div, circle[1]);
document.body.removeChild(heart[3]);
document.body.replaceChild(circle[2], heart[1]);

div.textContent = "Привет, МИР!!";
