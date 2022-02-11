document.addEventListener('DOMContentLoaded', ()=>{

 
    console.log('DOM fully loaded and parsed');
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}



})
