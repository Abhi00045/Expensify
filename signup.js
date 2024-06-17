let Fname = document.getElementById("Name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cnPassword = document.getElementById("confirmPassword");

let submit=document.getElementById("btn");

// const saveDetails = (Email , Password)=>
//     {
//         if(!localStorage.getItem(Email))
//             {
//             localStorage.setItem(Email , Password);
//             alert("Registered Successfully");
//             }
//             else{
//                 alert("Email Already Registered");
//             }
//     }

submit.addEventListener("click",function(){
    if(Fname.value ===""){
        alert("Enter the Name");
            }
            if(email.value ===""){
                alert("Enter the Email");
                    }
            if(password.value ===""){
                alert("Enter the password");
                    }
            if(cnPassword.value===password.value){
                
                localStorage.setItem("Name",Fname.value);
                localStorage.setItem("Email",email.value);
                localStorage.setItem("Password",password.value);
                alert("Registered Successfully!!")
                     }
            else{
                alert("Retry password");   
                    }
    // if(password.value === cnPassword.value)
    //     {
    //         saveDetails(email.value , password.value);
    //     }
    // else 
    // {
    //     alert("Retry Password");
    // }  
})


