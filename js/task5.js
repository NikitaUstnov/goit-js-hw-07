const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", updateValue);

function updateValue(el) {
  nameOutput.textContent = el.target.value;
  if (el.target.value === "") {
    nameOutput.textContent = "незнакомец";
  }
}
