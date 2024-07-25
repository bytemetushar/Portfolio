let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// for MovingText-------->
var Typed = new Typed(".text",{
    strings:["Frontend Developer", "Web Designer", "Software Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
}); 


// For Menubar------->
function menutoggle(){
    if(navbar.style.display == "block"){
        navbar.style.display = "none"
    }
    else{
        navbar.style.display = "block"
    }
}