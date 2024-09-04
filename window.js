let data=[];
let arr = data;
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
    // logEntries.style.display="block";
    
    

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
    // logEntries.style.display="block";
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

chart.addEventListener("click", () => {
    inputEntries.style.display = "none";
    entriesList.style.display = "none";
    entriesChart.style.display = "block";
    entriesAi.style.display = "none";
    entriesTax.style.display = "none";
    // logEntries.style.display="block";

    // Get the chart canvas element
    const ctx = document.getElementById('myChart').getContext('2d');

    // Prepare data for the chart
    let income = 0;
    let expenses = 0;

    // Retrieve data from local storage
    let dataFromLocalStorage = JSON.parse(localStorage.getItem("data")) || [];
    console.log(dataFromLocalStorage);
    
    income = dataFromLocalStorage[dataFromLocalStorage.length-1].income;
    expenses = dataFromLocalStorage[dataFromLocalStorage.length-1].expenses;

    // Create or update the chart
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Income', 'Expenses', 'Balance'],
            datasets: [{
                label: 'Financial Overview',
                data: [income, expenses, income - expenses], // Data points
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',  // Income
                    'rgba(255, 99, 132, 0.2)',  // Expenses
                    'rgba(153, 102, 255, 0.2)'  // Balance
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',    // Income border color
                    'rgba(255, 99, 132, 1)',    // Expenses border color
                    'rgba(153, 102, 255, 1)'    // Balance border color
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ₹' + tooltipItem.raw;
                        }
                    }
                }
            }
        }
    });
});


// let logEntries = document.getElementById("log-entries");
import { GoogleGenerativeAI } from "@google/generative-ai";
let API_KEY ="AIzaSyAF5NzuxS9Nphv6YE1U07dRzwPuIOHOeY0";
const genAI = new GoogleGenerativeAI(API_KEY);
async function getApi() {


    inputEntries.style.display="none";
    entriesList.style.display="none";
    // chart.style.display="block";
    entriesChart.style.display="none";
    // Ai.style.display="none";
    entriesAi.style.display="block";
    entriesTax.style.display="none";
    // logEntries.style.display="none";

    let oneAi = document.getElementById("oneAi");

    let div1 = document.createElement("div");
    let h3 = document.createElement("h3");
    div1.appendChild(h3);


    let div2 = document.createElement("div");
    let h23 = document.createElement("p");

    div2.appendChild(h23);
    oneAi.appendChild(div1);
    oneAi.appendChild(div2);

    let inputAi = document.getElementById("inputAi");

    
    async function  clickGrenrate() {
        let inputAiValue = inputAi.value;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = inputAiValue;
        h3.innerHTML=`--${inputAiValue}`;
        const result = await model.generateContent(prompt);
        let res = result.response.text();
        h23.innerHTML=`--${res}`;
        console.log(inputAi.value);
        // clickGrenrate();
        console.log(result.response.text());

    }
    let aiGeneratebtn = document.getElementById("Ai-Generate");
    aiGeneratebtn.addEventListener("click",()=>{
        clickGrenrate();
        inputAi.value="";
    });

    
}
Ai.addEventListener("click",()=>{
    getApi()
})




let DashBoard = document.getElementById("DashBoard");
DashBoard.addEventListener("click",()=>{
    inputEntries.style.display="block";
    entriesList.style.display="none";
    // chart.style.display="block";
    entriesChart.style.display="none";
    // Ai.style.display="none";
    entriesAi.style.display="none";
    entriesTax.style.display="none";
    // logEntries.style.display="block";
})
// let pay = document.getElementById("pay");