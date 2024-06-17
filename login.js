let email = document.getElementById("email");
let password =document.getElementById("password");
let login = document.getElementById("btn");

login.addEventListener("click",()=>{
    if(email.value != localStorage.Email){
        alert("Email is not registered");
        console.log(localStorage.Email);
    }else if(password.value != localStorage.Password){
         alert("Incorrect Password");
    }else{
        alert("logged in successfully");
    }
})