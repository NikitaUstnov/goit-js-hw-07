// способ из интернета

// const listTitle = document.getElementsByTagName("h2").length;
// console.log(`В списке ${listTitle} категории.`);

//с более специфичным селектором

const listTitle = document.querySelectorAll(".item h2").length;
console.log(`В списке ${listTitle} категории.`);

const headers = document.querySelectorAll(".item h2");
const listEl = document.querySelectorAll(".item li").length;
console.log(
  "Категория:",
  headers[0].textContent,
  "\n",
  "Количество элементов:",
  listEl
);
