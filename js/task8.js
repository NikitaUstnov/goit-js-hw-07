const boxesContainerRef = document.querySelector('#boxes');
const boxesAmountRef = document.querySelector('#controls input');
const renderBtnRef = document.querySelector('[data-action=“render”]');
const destroyBtnRef = document.querySelector('[data-action=“destroy”]');
const amountOfBoxes = boxesAmountRef.value;function createBoxes(amountOfBoxes) {
 function createBoxes(event) {
  for (let i = 1; i <= event.value; i += 1) {
    const divCreate = document.createElement('div');
    divCreate.style.width = '30px';
    divCreate.style.heigh = '30px';
    divCreate.style.backgroundColor = 'rgb(200, 200, 200)';
    boxesContainerRef.appendChild(divCreate);
  }
}boxesAmountRef.addEventListener('input', createBoxes);
}boxesAmountRef.addEventListener('input', createBoxes(amountOfBoxes));