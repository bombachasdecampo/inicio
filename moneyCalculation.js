const dolarValue = document.querySelector(
  `input[type='hidden']:first-of-type`
).value;

const prices = document.querySelectorAll(
  "input[type='hidden']:not(#dolarPrice)"
);

const outputs = document.querySelectorAll("#prices li  output");

let argentinePesos = [];
for (index = 0; index < prices.length; index++) {
  argentinePesos[index] = Number(prices[index].value) * Number(dolarValue);
  outputs[index].innerText = `${Math.floor(argentinePesos[index])}$ pesos`;
}
