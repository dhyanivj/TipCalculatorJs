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
    result.innerHTML = `<i class="fa fa-rupee mr-3  "></i
    >${TotalBill.toFixed(2)}`;
    totalTip.innerHTML = `<i class="fa fa-rupee mr-3"></i
    >${tipAmount.toFixed(2)}`;
  }
};

bill.onkeyup = function () {
  console.log(parseInt(bill.value));
};

const defaultAmount = document.querySelectorAll('.amount')
// .innerHTML = `yoooooooooo`;
for (var i=0;i < defaultAmount.length;i++){
  var str = defaultAmount[i].innerHTML;
  defaultAmount[i].innerHTML = `yooooooooo`;
  // console.log(defaultAmount[i])
}



document.querySelector(".reset").onclick = function () {
  bill.value = "";
  tip.value = "";
  people.value = "";
  // result.innerHTML = `${defaultAmount}`;
  // totalTip.innerHTML =  `${defaultAmount}`;
};
