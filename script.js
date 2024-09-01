let graphic = document.getElementById("graphic");
let orginalBtn = document.getElementById("orginal-btn");
let second = document.getElementById("second");
function login(){
    graphic.style.display="none";
    orginalBtn.style.display="none";
    let createdForm = document.createElement("div");
    second.appendChild(createdForm);
    createdForm.style.border="1px solid yellow";
    createdForm.style.height="500px";
    createdForm.style.width="400px";

}               