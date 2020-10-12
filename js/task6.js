const inputValueEl = document.querySelector("#validation-input");

inputValueEl.addEventListener("blur", validation);

function validation() {
  if (inputValueEl.value.length == inputValueEl.dataset.length) {
    inputValueEl.classList.add("valid");
     inputValueEl.classList.remove("invalid");
  }
  if (inputValueEl.value.length != inputValueEl.dataset.length) {
    inputValueEl.classList.remove("valid");
    inputValueEl.classList.add("invalid");
  }
  if (inputValueEl.value.length == 0) {
    inputValueEl.classList.remove("invalid");
  }
}
