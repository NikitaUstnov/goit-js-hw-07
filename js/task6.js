const inputValueEl = document.querySelector("[data-length]");

inputValueEl.addEventListener("input", validation);

function validation() {
  let dataLenght = this.value.length;
  if (dataLenght > 6 && dataLenght < 6) {
    inputValueEl.classList.add("#validation-input.invalid");
  }
  if ((dataLenght = 6)) {
    inputValueEl.classList.add("#validation-input.valid");
  }
  inputValueEl.classList.add("#validation-input");
}
