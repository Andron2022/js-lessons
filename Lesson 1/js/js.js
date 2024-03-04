var youBudget = 0;
var nameShop = "Мега";

youBudget = +prompt("Какой у вас бюджет", 0);
console.log(youBudget);
nameShop = prompt("Введите название вашего магазина");
console.log(nameShop);

nameList = {
  budget: youBudget,
  nameShop: nameShop,
  shopGoods: ["Миша", "Маша", "Петя"],
  employers: ["Миша", "Маша", "Петя", "Ася"],
  open: false,
};
console.log(nameList);

nameList.shopGoods[0] = prompt("Какой тип товара будем продавать");
nameList.shopGoods[1] = prompt("Какой тип товара будем продавать");
nameList.shopGoods[2] = prompt("Какой тип товара будем продавать");

var youBudgetDay = youBudget / 30;
alert("Бюджет на 1 день = " + youBudgetDay);

console.log(nameList.shopGoods);
console.log(nameList.employers);
