// способ из интернета

// const listTitle = document.getElementsByTagName("h2").length;
// console.log(`В списке ${listTitle} категории.`);

//с более специфичным селектором

const listTitle = document.querySelectorAll(".item h2").length;
console.log(`В списке ${listTitle} категории.`);

const headers = document.querySelectorAll(".item h2");
const listEl = categories.getElementsByTagName("ul");

console.log(`Категория:${headers[0].textContent}
Количество элементов: ${listEl[0].childElementCount}`);

console.log(`Категория:${headers[1].textContent}
Количество элементов: ${listEl[1].childElementCount}`);

console.log(`Категория:${headers[2].textContent}
Количество элементов: ${listEl[2].childElementCount}`);
