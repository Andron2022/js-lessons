let openBtn = document.getElementById("open-btn"),
  nameVl = document.getElementsByClassName("name-value")[0], // в переменную записываем именно 1-й элемент псевдомассива. Видимо так структурируются объекты в двумерном массиве ли в многомерном.
  budgetVl = document.getElementsByClassName("budget-value")[0],
  goodsVl = document.getElementsByClassName("goods-value")[0],
  itemsVl = document.getElementsByClassName("items-value")[0],
  employersVl = document.getElementsByClassName("employers-value")[0],
  discountVl = document.getElementsByClassName("discount-value")[0],
  isopenVl = document.getElementsByClassName("isopen-value")[0],
  goodsItems = document.getElementsByClassName("goods-item"),
  // Кнопки
  goodsItemBtn = document.getElementsByTagName("button")[1],
  budgetBtn = document.getElementsByTagName("button")[2],
  employersBtn = document.getElementsByTagName("button")[3],
  // Продукты. Время. Дневной бюджет. Имена сотрудников
  chooseItem = document.querySelector(".choose-item"),
  timeVl = document.querySelector(".time-value"),
  countBudgetVl = document.querySelector(".count-budget-value"),
  hireEmployers = document.querySelectorAll(".hire-employers-item");

let money, price;

openBtn.addEventListener("click", () => {
  money = prompt("Ваш бюджет", "");
  while (isNaN(money) || money == "" || money == null) {
    money = prompt("Ваш бюджет", "");
  }
  budgetVl.textContent = money;
  nameVl.textContent = prompt(
    "Введите название вашего магазина",
    ""
  ).toUpperCase();
});

goodsItemBtn.addEventListener("click", () => {
  for (let i = 0; i < goodsItems.length; i++) {
    let a = goodsItems[i].value;
    if (typeof a === "string" && typeof a != null && a.length < 50) {
      console.log("Все верно");
      mainList.shopGoods[i] = a;
    } else {
      i = i - 1;
    }
  }
  goodsVl.textContent = mainList.shopGoods;
});

chooseItem.addEventListener("change", () => {
  let items = chooseItem.value;
  if (isNaN(items) && items != "") {
    mainList.shopItems = items.split(", ");
    mainList.shopItems.sort();

    itemsVl.textContent = mainList.shopItems;
  }
});

timeVl.addEventListener("change", () => {
  time = timeVl.value;
  if (time >= 8 && time < 20) {
    mainList.open = true;
  } else {
    mainList.open = false;
  }

  if (mainList.open == true) {
    isopenVl.style.backgroundColor = "green";
  } else {
    isopenVl.style.backgroundColor = "red";
  }
});

budgetBtn.addEventListener("click", () => {
  countBudgetVl.value = money / 30; // Число в свойство textContent не записывается
});

employersBtn.addEventListener("click", () => {
  console.log(mainList.employers);
  for (let i = 0; i < hireEmployers.length; i++) {
    let name = hireEmployers[i].value;
    mainList.employers[i] = name;

    if (i != hireEmployers.length - 1) {
      employersVl.textContent += mainList.employers[i] + ", ";
    } else {
      employersVl.textContent += mainList.employers[i];
    }
  }
  console.log(mainList.employers);
});

discountVl.addEventListener("click", () => {
  mainList.discount = !mainList.discount;
  if (mainList.discount == true) {
    discountVl.style.backgroundColor = "green";
  }
  if (mainList.discount == false) {
    discountVl.style.backgroundColor = "red";
  }
});

let mainList = {
  budget: money,
  shopGoods: [],
  employers: {},
  open: false,
  discount: false,
  shopItems: [],
};
