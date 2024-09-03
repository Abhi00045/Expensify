let data=[];
let displayedData=[];

let inputEntries = document.getElementById("input-entries");
let entriesTax = document.getElementById("entries-tax");
// let entriesList = document.getElementById("entries-list");
let entriesAi = document.getElementById("entries-Ai");
let entriesChart = document.getElementById("entriesChart");

let chart = document.getElementById("chart");
let tax = document.getElementById("tax");
let Ai = document.getElementById("Ai")



function login(){
    graphic.style.display="none";
    orginalBtn.style.display="none";
    second.style.display="none";
    third.style.display="block";
    fourth.style.display="none";
    log.style.display="none";
}
let imageMenu = document.getElementById("imageMenu");
let zero = document.getElementById("zero");
let left= document.getElementById("left");

zero.addEventListener("click",()=>{
    // alert("ok")
    imageMenu.style.display="none";
    // imageMenu.classList.toggle("material-symbols-outlined");
    zero.innerHTML=`<span class="material-symbols-outlined">
close
</span>`
    
    zero.innerHTML=`
    <span id=Closed class="material-symbols-outlined">close</span>
    `
    // let closed = document.getElementById("Closed")
    // closed.addEventListener("click",()=>{
    //     imageMenu.style.display="block";
    // })
    left.style.width="15vw";
})
 let entriesList = document.getElementById("entries-list");
 let select = document.querySelectorAll("option");
 let incomesExpensives = document.getElementById("income-expensives");
 let Amount = document.getElementById("entries-amount");
 let description = document.getElementById("description");
 let addBtn = document.getElementById("add-btn");
 let incomeMoney = document.getElementById("incomeMoney");
 let expensesMoney = document.getElementById("expensesMoney");
 let balanceMoney = document.getElementById("balanceMoney");
//  console.log(incomeMoney);

let income = 0;
let expenses = 0;
let balance = 0;
//  console.log(select[incomesExpensives.selectedIndex].value);
 

 addBtn.addEventListener("click",(e)=>{
    if(Amount.value=="" || description.value=="" || select[incomesExpensives.selectedIndex].value==-1){
        alert("Fill all the fields");
    }else{
        let table = document.createElement("table");
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        table.style.display="flex";
        table.style.flexDirection="column";
        table.style.gap="10px";
        table.style.margin="auto";
        table.style.marginTop="20px";
        table.style.width="90%";

        tr.style.backgroundColor = "rgb(48, 48, 48)";
        tr.style.height="10vh";
        tr.style.display="flex";
        tr.style.flexDirection="row";
        tr.style.justifyContent="space-between";
        tr.style.alignItems="center";
        tr.style.gap="10px";
        tr.style.padding="10px";
        tr.style.borderRadius="10px";
        tr.style.width="90%";
        tr.style.margin="auto";
        tr.style.marginLeft="10px";

        td1.style.color="white";
        td2.style.color="white";
        td3.style.color="white";
        td1.fontSize="20px";
        td2.fontSize="20px";
        td3.fontSize="20px";

        td1.style.fontFamily=  "Teko, sans-serif";
        td2.style.fontFamily=  "Teko, sans-serif" ;
        td3.style.fontFamily=   "Teko, sans-serif";

        td1.innerHTML = `₹${Amount.value}`;
        td2.innerHTML = description.value;
        td3.innerHTML = select[incomesExpensives.selectedIndex].value;
        tr.append(td1,td2,td3);
        table.append(tr);
        entriesList.append(table);

        // let incomeAmount  = ;
         


        if(select[incomesExpensives.selectedIndex].value=="Income"){
            income+=parseInt(Amount.value);
            incomeMoney.innerHTML = `₹${income}`;
        }else{
            expenses+=parseInt(Amount.value);
            expensesMoney.innerHTML = `₹${expenses}`
        }

        balance = income - expenses;
        balanceMoney.innerHTML = `₹${balance}`

        let displayData={
            Amount:Amount.value,
            description:description.value,
            select:select[incomesExpensives.selectedIndex].value
        }
        console.log(displayData);
        displayedData.push(displayData);
        console.log(displayedData);
        localStorage.setItem("displayedData",JSON.stringify(displayedData));
        
        

        // displayedData.push(displayData);
        let dataset ={
            income:income,
            expenses:expenses,
            balance:balance
            // Amount:Amount.value,
            // description:description.value,
            // select:select[incomesExpensives.selectedIndex].value
        };
        

        data.push(dataset);
        console.log(data);
        
        localStorage.setItem("data",JSON.stringify(data));


        Amount.value="";
        description.value="";


    }

 })
 window.addEventListener("load",()=>{
    console.log("loaded");
    entriesTax.style.display="none";
    // chart.style.display="none";
    entriesChart.style.display="none";
    // Ai.style.display="none";
    entriesAi.style.display="none";
    
    

    let data = localStorage.getItem("data");
    console.log(data);
    
    // let length = displayedData.length;

    if(data){
        data = JSON.parse(data);
        income = data[data.length-1].income;
        expenses = data[data.length-1].expenses;
        balance = data[data.length-1].balance;
        // displayedData = data[data.length-1].displayedData;
    }
    incomeMoney.innerHTML = `₹${income}`;
    expensesMoney.innerHTML = `₹${expenses}`;
    balanceMoney.innerHTML = `₹${balance}`;

    let displayedData = localStorage.getItem("displayedData");
    if(displayedData.length>-1){
        displayedData = JSON.parse(displayedData);
        for(let i=0;i<displayedData.length;i++){
            let table = document.createElement("table");
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");

            table.style.display="flex";
            table.style.flexDirection="column";
            table.style.gap="10px";
            table.style.margin="auto";
            table.style.marginTop="20px";
            table.style.width="90%";

            tr.style.backgroundColor = "rgb(48, 48, 48)";
            tr.style.height="10vh";
            tr.style.display="flex";
            tr.style.flexDirection="row";
            tr.style.justifyContent="space-between";
            tr.style.alignItems="center";
            tr.style.gap="10px";
            tr.style.padding="10px";
            tr.style.borderRadius="10px";
            tr.style.width="90%";
            tr.style.margin="auto";
            tr.style.marginLeft="10px";

            td1.style.color="white";
            td2.style.color="white";
            td3.style.color="white";
            td1.fontSize="20px";
            td2.fontSize="20px";
            td3.fontSize="20px";

            td1.style.fontFamily=  "Teko, sans-serif";
            td2.style.fontFamily=  "Teko, sans-serif" ;
            td3.style.fontFamily=   "Teko, sans-serif";

            td1.innerHTML = `₹${displayedData[i].Amount}`;
            td2.innerHTML = displayedData[i].description;
            td3.innerHTML = displayedData[i].select;
            tr.append(td1,td2,td3);
            table.append(tr);
            entriesList.append(table);

        
        }
    }
 })


// let entriesList = document.getElementById("entries-list");
tax.addEventListener("click",()=>{
    inputEntries.style.display="none";
    entriesList.style.display="none";
    entriesTax.style.display="block";
    // chart.style.display="none";
    entriesChart.style.display="none";
    // Ai.style.display="none";
    entriesAi.style.display="none";
})
let calculate = document.getElementById("calculate");
let payable = document.getElementById("payable");
let leftAmount = document.getElementById("leftAmount");
let pay = document.getElementById("pay");
let taxPayable =0;

calculate.addEventListener("click",()=>{
   let arr = localStorage.getItem("data");
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

       pay.addEventListener("click",()=>{
        if(taxPayable>0){
            alert("No tax to pay");
        }else{
            setTimeout(()=>{let createElement=document.createElement("div");
                createElement.style.backgroundColor=" rgb(154, 155, 149)";
                createElement.style.width="300px";
                createElement.style.height="300px";
                let img = document.createElement("img");
                img.src="https://imgs.search.brave.com/vYh_94ZuznP3QNvdTANA1u4Ip7jwQCVdlbThmUwonOg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29vbHp0cmlja3Mu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzEwL3Bob3Rv/XzIwMjEtMTAtMTkt/MDkuMzQuMDgtMzAw/eDI4My5qcGVn";
                let h1 = document.createElement("h1");
                h1.innerHTML="pay tax here";
                createElement.append(h1);
                createElement.append(img);
                document.body.append(createElement);
                createElement.style.position="absolute";
                createElement.style.top="50%";
                createElement.style.left="50%";
                createElement.style.transform="translate(-50%,-50%)";
                createElement.style.fontSize="30px";
                createElement.style.fontFamily="Teko, sans-serif";
                createElement.style.color="red";
            },1000)


            // alert("Tax paid successfully");
        }
       })

   })
})
// let pay = document.getElementById("pay");