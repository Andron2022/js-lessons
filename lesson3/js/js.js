// var youBudget = 0;
// var nameShop = "Мега";

let money, name, time, price;

function start() {
  money = prompt("Ваш бюджет");
  // проверка правильности ввода бюджета
  while (isNaN(money) || money == "" || money == null) {
    money = prompt("Ваш бюджет");
  }

  let name = prompt("Введите название вашего магазина").toUpperCase;
  let time = 15;
}
start();

let mainList = {
  budget: money,
  shopName: name,
  shopGoods: [],
  employers: {},
  open: false,
  discount: false,
};
// console.log(mainList);

// nameList.shopGoods[0] = prompt("Какой тип товара будем продавать?");
// nameList.shopGoods[1] = prompt("Какой тип товара будем продавать?");
// nameList.shopGoods[2] = prompt("Какой тип товара будем продавать?");
// переделаем с пом цикла

function chooseGoods() {
  for (let i = 0; i < 5; i++) {
    let a = prompt("Какой тип товара будем продавать?");
    if (
      typeof a === "string" &&
      (typeof a != null) & (a != "") &&
      a.length < 50
    ) {
      console.log("Все верно");
      mainList.shopGoods[i] = a;
    } else {
      i = i - 1;
    }
  }
}
chooseGoods();

function workTime(time) {
  if (time < 0) {
    console.log("Такого не может быть");
  } else if (time > 8 && time < 20) {
    console.log("Время работать");
  } else if (time < 24) {
    console.log("Уже слишком поздно");
  } else {
    console.log("В сутках только 24 часа");
  }
}
workTime(19);

function calculationBudgetDey() {
  alert("Бюджет на 1 день = " + mainList.budget / 30);
}
calculationBudgetDey();

console.log(mainList);
