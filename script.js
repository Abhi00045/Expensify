let graphic = document.getElementById("graphic");
let orginalBtn = document.getElementById("orginal-btn");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let loginLink = document.getElementById("loginLink");
let loginBtn = document.getElementById("loginBtn");
let form = document.getElementById("form");
// let data= JSON.parse(localStorage.getItem("userInfo")) || [];
// console.log(data)
let data =[];

window.addEventListener("load",(e)=>{
    third.style.display="none";
    fourth.style.display="none";
});

function signup(){
    graphic.style.display="none";
    orginalBtn.style.display="none";
    second.style.display="none";
    third.style.display="none";
    fourth.style.display="block";
}

function login(){
    graphic.style.display="none";
    orginalBtn.style.display="none";
    second.style.display="none";
    third.style.display="block";
    fourth.style.display="none";
}  

loginLink.addEventListener("click",(e)=>{
    third.style.display="block";
    fourth.style.display="none";
})

loginBtn.addEventListener("click",(e)=>{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email,password);

    if(email == "" || password == ""){
        alert("please enter email and password");
    }
    else{
        let Previous = localStorage.getItem("email");
        let PreviousPassword = localStorage.getItem("password");
        if(email == Previous && password == PreviousPassword){
            alert("login success");
    }
}
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // console.log(name,email,password);
    // console.log({name , email , password})
    if(name == "" || email == "" || password == ""){
        alert("please enter name , email and password");
    }else{
        localStorage.setItem("userInfo" , JSON.stringify({name , email , password}));
         let SignupDetails={Name : name,
            Email:email,
            Password:password
         };
         data.push(SignupDetails);
         console.log(data);  
    }
    // name="";
    // email="";
    // password="";
})