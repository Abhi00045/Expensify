let balances = document.getElementById("balances");
let savings = document.getElementById("Savings");
let spendings = document.getElementById("Spendings");
// console.log(localStorage.getItem("array"));

window.addEventListener("load",(e)=>{
   let arr = localStorage.getItem("array");
   arr=JSON.parse(arr);
   arr.forEach(element => {
    // console.log(element);
    balances.innerHTML="$"+element.balance;
    savings.innerHTML="$"+element.income;
    spendings.innerHTML="$"+element.spendings;
   });
 });

 let calculate = document.getElementById("calculate");
 let payable = document.getElementById("payable");
 let leftAmount = document.getElementById("leftAmount");
 let pay = document.getElementById("pay");

 calculate.addEventListener("click",()=>{
    let arr = localStorage.getItem("array");
    let taxPayable =0;
    arr =JSON.parse(arr);
    arr.forEach(element=>{
        let incomeTaxAmount=element.income;
        if(incomeTaxAmount>=1000000){
           taxPayable = (incomeTaxAmount * 20) / 100;
        }else if(incomeTaxAmount>=700000){
            taxPayable = (incomeTaxAmount * 15) / 100;
        }else if(incomeTaxAmount>=500000){
            taxPayable = (incomeTaxAmount * 10) / 100;
        }
        else if(incomeTaxAmount>=300000){
            taxPayable = (incomeTaxAmount * 5) / 100;
        }
        else{
            taxPayable=0;
        }
        payable.innerHTML="$"+taxPayable;
        leftAmount.innerHTML="$"+(incomeTaxAmount-taxPayable);
    })
 })