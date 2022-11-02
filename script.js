const bill = document.querySelector(".bill-input");
const tip = document.querySelector(".tip-input");
const people = document.querySelector(".people-input");
const calbtn = document.querySelector(".calculate");
const result = document.querySelector(".result");
const totalTip = document.querySelector(".totalTip");

calbtn.onclick = function () {
  billValue = parseInt(bill.value);
  tipValue = parseInt(tip.value);
  TotalBill = (billValue + (billValue * tipValue) / 100) / people.value;
  //   console.log(TotalBill);
  tipAmount = tipValue / people.value;
  //   console.log(tipAmount);

  if (bill.value == "" || tip.value == "" || people.value == "") {
    return alert("Missing Value");
  } else {
    result.innerHTML = `₹ ${TotalBill.toFixed(2)}`;
    totalTip.innerHTML = `₹ ${tipAmount.toFixed(2)}`;
  }
};

bill.onkeyup = function () {
  console.log(parseInt(bill.value));
};


document.querySelector(".reset").onclick = function () {
  bill.value = "";
  tip.value = "";
  people.value = "";
  result.innerHTML = "₹ 0.00";
  totalTip.innerHTML = "₹ 0.00";
};
