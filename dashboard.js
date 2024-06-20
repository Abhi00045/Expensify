let selectExp = document.getElementById("expenditure");

let description = document.getElementById("description");
let amount = document.getElementById("amount");
let addBtn=document.getElementById("Add");
let balances = document.getElementById("balances");
let savings = document.getElementById("Savings");
let spendings = document.getElementById("Spendings");



let  totalBalance = 0;
let spendAmount =0;
let savingAmount =0;
 let arr =[];
 window.addEventListener("load",(e)=>{
      let arr=localStorage.getItem("array");
      arr=JSON.parse(arr);
      arr.forEach( element => {
        let newThing = document.getElementById("newthing");

            let div = document.createElement("div");

            let div2 = document.createElement("div");
            
            let h3 = document.createElement("h3");
            let des = document.createElement("p");
            let amt = document.createElement("h4");
            // let hr = document.createElement("vr");
            
            div2.appendChild(h3);
            div2.appendChild(des);
            div2.appendChild(amt);
            // div2.appendChild(hr);
            div2.style.display="flex";
            div2.style.flexDirection="row";
            div2.style.justifyContent="space-between";
            div2.style.gap="100px"
        transactionHistory.style.background="#A7A1FF"
        transactionHistory.style.padding="19px"
        transactionHistory.style.margin="5px";
        div.style.padding="10px"
            
            div.appendChild(div2);
            newThing.appendChild(div);
        amt.innerHTML="$"+element.amount;
            des.innerHTML=element.des;
            h3.innerHTML=element.type;

            balances.innerHTML="$"+element.balance;
            savings.innerHTML="$"+element.income;
            spendings.innerHTML="$"+element.spendings;

      });
 })
addBtn.addEventListener("click",()=>{
        console.log(selectExp.value);
        if(amount.value==""){
            alert("Enter Amount");
        }
    if(description.value==""){
              alert("Write the description");
           }
           else{
            let obj={
            "type":"","amount":0,"des":"","balance":0,"spendings":0,"income":0
            };
            if(selectExp.value=="Income"){
            totalBalance += parseInt(amount.value);
            balances.innerHTML="$"+totalBalance;
            savingAmount += parseInt(amount.value);
            savings.innerHTML="$"+savingAmount;
              
            }else{
                totalBalance-=parseInt(amount.value);
                balances.innerHTML="$"+totalBalance;
                spendAmount += parseInt(amount.value);
                spendings.innerHTML="$"+spendAmount;
            }
            obj.amount=totalBalance;
            obj.type=selectExp.value;
            obj.des=description.value;

            obj.balance=totalBalance;
            obj.spendings=spendAmount;
            obj.income=savingAmount;

            arr.push(obj);
            localStorage.setItem("array",JSON.stringify(arr));

            let newThing = document.getElementById("newthing");

            let div = document.createElement("div");

            let div2 = document.createElement("div");
            
            let h3 = document.createElement("h3");
            let des = document.createElement("p");
            let amt = document.createElement("h4");
            
            div2.appendChild(h3);
            div2.appendChild(des);
            div2.appendChild(amt);
            div2.style.display="flex";
            div2.style.flexDirection="row";
            div2.style.justifyContent="space-between";
            div2.style.gap="100px"
            
            div.appendChild(div2);
            newThing.appendChild(div);

            amt.innerHTML="$"+amount.value;
            des.innerHTML=description.value;
            h3.innerHTML=selectExp.value;

        }
    })
//     let action = document.getElementById("action");
// let tax = document.getElementById("tax");
// let transactions = document.getElementById("transactions");
let newThing=document.getElementById("newthing");
// let transactionHistory=document.getElementById("transactionHistory");


// // console.log(transactions,transactionHistory);
// tax.addEventListener("click",function(){
//     transactions.style.visibility = 'hidden'; 
//    newThing.style.display="none";
//    let div = document.createElement("div");
//    let h1=document.createElement("h2");
//    div.appendChild(h1);
//    transactionHistory.appendChild(div);
//    h1.innerHTML="Tax Rate :-"
// })


// let ai = document.getElementById("Ai");
// // let action = document.getElementById("action");

// ai.addEventListener("click",()=>{
//     transactions.style.visibility = 'hidden'; 
//    transactionHistory.style.display="none";

//    let div= document.createElement("div");
//    let h2 = document.createElement("h2");
//    div.appendChild(h2);
//    action.appendChild(div);
//    h2.innerHTML="Still working on it...";
// }
let chart = document.getElementById("chart");

chart.addEventListener("click",function(){
    // transactions.style.visibility="hidden";
newThing.style.display="none";
let arr2 = localStorage.getItem("array");
arr2=JSON.parse(arr2);
const {amount,balance,income,spendings} = arr2[arr2.length-1]
console.log(amount,balance,income,spendings)

// arr.forEach(element=>{
    const ctx = document.getElementById('myChart');
    ctx.style.width="200px";

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green'],
      datasets: [{
        label: '# of Votes',
        data: [amount,balance,income,spendings],
        borderWidth: 1,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
   
  transactionHistory.appendChild(ctx);
});

// })

//   const ctx = document.getElementById('myChart');
//   let dataArray=localStorage.getItem("array");
//   new Chart(ctx, {
//         type: 'pie',
//         data: data,
//   });
//   const data = {
//     labels: [
//       'Red',
//       'Blue',
//       'Yellow'
//     ],
//     datasets: [{
//       label: 'My First Dataset',
//       data: [300, 50, 100],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)'
//       ],
//       hoverOffset: 4
//     }]
//   };

