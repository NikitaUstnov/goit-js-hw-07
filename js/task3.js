const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//обращаемся к ul по id
const imgEl = document.querySelector("#gallery");

// на каждой итерации создаем li и вкладываем в него елемент
const imgList = images.map((elem) => {
  const tagImg = document.createElement("img");
  const itemEl = document.createElement("li");
  itemEl.append(tagImg);
  tagImg.append(elem);
});
console.log(...imgList);

// const imgEl = document.querySelector("#gallery");
// imgEl.classList.add("list");

// imgEl.insertAdjacentHTML(
//   "afterbegin",
//   images.reduce((acc, { url, alt }) => {
//     acc += `<li><img class="img" src="${url}" alt="${alt}"/></li>`;
//     return acc;
//   }, "")
// );

// console.log(imgEl);
