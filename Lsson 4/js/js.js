// let solder = {
//   health: 400,
//   armor: 100
// }

// let john = {
//   health: 100
// }

// john.__proto__ = solder;

// console.log(john);
// console.log(john.armor);

let money, name, time, price;

function start() {
  money = prompt("Ваш бюджет", "");
  // проверка правильности ввода бюджета
  while (isNaN(money) || money == "" || money == null) {
    money = prompt("Ваш бюджет", "");
  }
  name = prompt("Введите название вашего магазина", "").toUpperCase();
  time = 2;
}

let mainList = {
  budget: money,
  shopName: name,
  shopGoods: [],
  employers: {},
  open: false,
  discount: false,
  shopItems: [],
  chooseGoods: function chooseGoods() {
    for (let i = 0; i < 5; i++) {
      let a = prompt("Какой тип товара будем продавать?");
      if (
        typeof a === "string" &&
        typeof a != null &&
        a != "" &&
        a.length < 50
      ) {
        console.log("Все верно");
        mainList.shopGoods[i] = a;
      } else {
        i = i - 1;
      }
    }
  },
  workTime: function workTime(time) {
    if (time < 0) {
      console.log("Такого не может быть");
    } else if (time > 8 && time < 20) {
      console.log("Время работать");
      mainList.open = true;
    } else if (time < 24) {
      console.log("Уже слишком поздно");
    } else {
      console.log("В сутках только 24 часа");
    }
  },
  dayBudget: function dayBudget() {
    alert("Дневной бюджет = " + mainList.budget / 30);
  },
  makeDiscount: function makeDiscount() {
    if (mainList.discount == true) {
      price = price * 0.8;
    }
  },
  hireEmployers: function hiringEmployers() {
    for (let i = 0; i < 4; i++) {
      let name = prompt("Нанять сотрудника", "");
      if (
        typeof name === "string" &&
        typeof name != null &&
        name != "" &&
        name.length < 50
      ) {
        mainList.employers[i] = name;
      } else {
        i = i - 1;
      }
    }
  },
  chooseShopItems: function chooseShopItems() {
    let items = prompt("Введте товары через запятую: ", "");
    console.log(typeof items);
    while (!isNaN(items) || items == null || items == "") {
      items = prompt("Введте товары через запятую: ", "");
    }
    mainList.shopItems = items.split(",");
    mainList.shopItems.push(prompt("Введите ещё один товар", ""));
    mainList.shopItems.sort();
  },
  alItems: function alItems() {
    alert("У нас вы можете купить: " + mainList.shopItems.split);
    // mainList.shopGoods.forEach(item, i, arr){

    // }
  },
};
