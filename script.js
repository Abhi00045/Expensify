let graphic = document.getElementById("graphic");
let orginalBtn = document.getElementById("orginal-btn");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let loginLink = document.getElementById("loginLink");
let loginBtn = document.getElementById("loginBtn");
let form = document.getElementById("form");
let log = document.getElementById("log");
let sig = document.getElementById("sig");
let loginForm = document.getElementById("login-Form");
let data =[];

let dataPack= JSON.parse(localStorage.getItem("userInfo")) || [];
// console.log(dataop.email);

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
    sig.style.display="none";
}

function login(){
    graphic.style.display="none";
    orginalBtn.style.display="none";
    second.style.display="none";
    third.style.display="block";
    fourth.style.display="none";
    log.style.display="none";
}  

loginLink.addEventListener("click",(e)=>{
    third.style.display="block";
    fourth.style.display="none";
})

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let writtenEmail = document.getElementById("loginEmail").value;
    let writtenPassword = document.getElementById("loginPassword").value;
    if(writtenEmail !== dataPack.email || writtenEmail === ""){
        alert("incorret mail");
    }else if(writtenPassword !== dataPack.password || writtenPassword===""){
        alert("incorrect Password");
    }else{
        // window.open("https://leetcode.com/problems/unique-number-of-occurrences/description/");
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
         let SignupDetails={name,
           email,
            password
         };
         data.push(SignupDetails);
         console.log(data);  
    }
    // name="";
    // email="";
    // password="";
})