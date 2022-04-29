let a = document.querySelector(".my-menu")
let logo = document.getElementById("logoo")
let open = false
let audio = new Audio('../Public/audios/Siuuu.mp3');

a.addEventListener("click" , ()=>{
    open = !open
    if(open){
        document.querySelector(".my-nav-links").classList.add("my-nav-links-checked")
    }
    if(!open){
        document.querySelector(".my-nav-links").classList.remove("my-nav-links-checked")
    }
})


logo.addEventListener('click' , ()=>{
    console.log("Siuuu!");
    audio.play();
})