let meItem = document.getElementsByClassName("menu-item"),
  paMeIt = meItem[0].parentNode,
  title = document.getElementById("title"),
  adv = document.getElementsByClassName("adv");

// console.log(paMeIt);
// console.log(title);
paMeIt.insertBefore(meItem[2], meItem[1]);

document.body.style.background = "url(./img/apple_true.jpg)";

title.textContent = "Мы продаем только проверенную технику Apple";

let paAdv = adv[0].parentNode;
console.log(paAdv);
paAdv.removeChild(adv[0]);

let pmt = document.getElementsByClassName("prompt");
pmt.textContent = prompt("Как вы относитесь к технике Apple?", "");
