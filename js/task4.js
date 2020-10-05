const onMinus = document.querySelector('[data-action="decrement"]');
const onPlus = document.querySelector('[data-action="increment"]');
const counValue = document.getElementById("value");

const counter = {
  value: 0,
  increment() {
    console.log("increment -> this", this);
    this.value += 1;
  },
  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
};

onMinus.addEventListener("click", function () {
  counter.decrement();
  counValue.textContent = counter.value;
});

onPlus.addEventListener("click", function () {
  counter.increment();
  counValue.textContent = counter.value;
});
