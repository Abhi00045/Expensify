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

addBtn.addEventListener("click",()=>{
        console.log(selectExp.value);
        if(amount.value==""){
            alert("Enter Amount");
        }
    if(description.value==""){
              alert("Write the description");
           }
           else{
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
            let transactionHistory = document.getElementById("transactionHistory");

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
            transactionHistory.appendChild(div);

            amt.innerHTML="$"+amount.value;
            des.innerHTML=description.value;
            h3.innerHTML=selectExp.value;

        }
    })

