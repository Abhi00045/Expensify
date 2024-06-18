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
        let transactionHistory = document.getElementById("transactionHistory");

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
            transactionHistory.appendChild(div);
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

