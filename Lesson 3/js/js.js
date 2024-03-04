let money, name, time, price;

function start() {
  money = prompt("Ваш бюджет");
  // проверка правильности ввода бюджета
  while (isNaN(money) || money == "" || money == null) {
    money = prompt("Ваш бюджет");
  }
  name = prompt("Введите название вашего магазина").toUpperCase();
  time = 2;
  price = 80;
}

start();
console.log(name);
console.log(price);

let mainList = {
  budget: money,
  shopName: name.toUpperCase(),
  shopGoods: [],
  employers: {},
  open: false,
  discount: false,
};

// nameList.shopGoods[0] = prompt("Какой тип товара будем продавать?");
// nameList.shopGoods[1] = prompt("Какой тип товара будем продавать?");
// nameList.shopGoods[2] = p rompt("Какой тип товара будем продавать?");
// переделаем с пом цикла

function chooseGoods() {
  for (let i = 0; i < 5; i++) {
    let a = prompt("Какой тип товара будем продавать?");
    if (typeof a === "string" && typeof a != null && a != "" && a.length < 50) {
      console.log("Все верно");
      mainList.shopGoods[i] = a;
    } else {
      i = i - 1;
    }
  }
}

chooseGoods();

function hiringEmployers() {
  for (let i = 0; i < 5; i++) {
    let a = prompt("Нанять сотрудника");
    if (typeof a === "string" && typeof a != null && a != "" && a.length < 50) {
      mainList.employers[i] = a;
    } else {
      i = i - 1;
    }
  }
}

hiringEmployers();

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
workTime(2);

function calculationBudgetDey() {
  let moneyDay = mainList.budget / 30;
  console.log("Бюджет на 1 день = " + moneyDay);
  return moneyDay;
}

calculationBudgetDey();

function discountPrice(discont) {
  if ((discount = true)) {
    price = price * 0.8;
  }
}

discountPrice(true);
console.log(price);

console.log(mainList);
