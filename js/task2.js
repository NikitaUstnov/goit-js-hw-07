const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
// обращаемся к ul по id
const addList = document.querySelector("#ingredients");

// на каждой итерации создаем li и вкладываем в него элемент массива
const listEl = ingredients.map((element) => {
  const itemEl = document.createElement("li");
  itemEl.append(element);
  return itemEl;
});
// вкладываем полученый спасиок в ul
addList.append(...listEl);
