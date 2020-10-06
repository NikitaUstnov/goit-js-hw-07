const inputRangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
const fontSizeChange = function () {
  textEl.style.fontSize = `${inputRangeEl.value}px`;
};

inputRangeEl.addEventListener("input", fontSizeChange);
