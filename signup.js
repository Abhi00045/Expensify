let Fname = document.getElementById("Name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cnPassword = document.getElementById("confirmPassword");

let submit=document.getElementById("btn");

submit.addEventListener("click",function(){
    if(Fname.value===""){
alert("Enter the Name");
    }
    if(email.value=" "){
alert("Enter the Email");
    }
    else if(password.value=" "){
        alert("Enter the password");
            }
           else if(cnPassword.value=" " && cnPassword.value!=password.value){
                alert("Write the password");
                    }
})

