const bill = document.querySelector('.bill-input')
const tip = document.querySelector('.tip-input')
const people = document.querySelector('.people-input')
const calbtn = document.querySelector('.calculate')

calbtn.onclick = function(){
    billValue = parseInt(bill.value)
    tipValue = parseInt(tip.value)
    TotalBill =  (billValue+(billValue * tipValue/100))/people.value
    console.log(TotalBill)
}