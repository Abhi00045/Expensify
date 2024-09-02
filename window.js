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

