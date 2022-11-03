const bill = document.querySelector(".bill-input");
const tip = document.querySelector(".tip-input");
const people = document.querySelector(".people-input");
const calbtn = document.querySelector(".calculate");
const result = document.querySelector(".result");
const totalTip = document.querySelector(".totalTip");

function cal() {
  billValue = parseInt(bill.value);
  tipValue = parseInt(tip.value);
  TotalBill = (billValue + (billValue * tipValue) / 100) / people.value;
  tipAmount = tipValue / people.value;

  if (bill.value == "" || tip.value == "" || people.value == "") {
    // return alert("Missing Value");
  } else {
    result.innerHTML = `${TotalBill.toFixed(2)}`;
    totalTip.innerHTML = `${tipAmount.toFixed(2)}`;
  }
}

// for adding default value 0
let finalRs = document.querySelectorAll(".result-rs");
for (var i = 0; i < finalRs.length; i++) {
  var defaultValue = (finalRs[i].innerHTML = `0.00`);
}
// Reset Button
document.querySelector(".reset").onclick = function () {
  bill.value = "";
  tip.value = "";
  people.value = "";
  result.innerHTML = `${defaultValue}`;
  totalTip.innerHTML = `${defaultValue}`;
};
