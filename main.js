document.addEventListener('DOMContentLoaded', ()=>{
 
    console.log('DOM fully loaded and parsed');

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    }

    /*Menu items*/
    const home = document.querySelector('#home')
    const about = document.querySelector('#about')
    const contact = document.querySelector('#contact')
    const js = document.querySelector('#js')
    const react = document.querySelector('#react')
    const python = document.querySelector('#python')

    /*pages to be swapped*/
    const front_page = document.querySelector('#front_page')
    const about_info = document.querySelector('#about_div')
    const contact_page = document.querySelector('#contact_div')
    const js_page = document.querySelector('#js_div')
    const react_page = document.querySelector('#react_div')
    const python_page = document.querySelector('#python_div')

    front_page.style.display = 'block'
    about_info.style.display = 'none'        
    contact_page.style.display = 'none'
    js_page.style.display = 'none'
    react_page.style.display = 'none'        
    python_page.style.display = 'none'
    
    about.addEventListener('click', (event)=>{
        //event.preventDefault;
        about_info.style.display = 'block'
        front_page.style.display = 'none'
        contact_page.style.display = 'none'
        python_page.style.display = 'none'
        js_page.style.display = 'none'
        react_page.style.display = 'none'

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    home.addEventListener('click', (event)=>{
        //event.preventDefault;
        about_info.style.display = 'none'
        front_page.style.display = 'block'
        contact_page.style.display = 'none'
        python_page.style.display = 'none'
        js_page.style.display = 'none'
        react_page.style.display = 'none'

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    logo.addEventListener('click', (event)=>{
        //event.preventDefault;
        about_info.style.display = 'none'
        front_page.style.display = 'block'
        contact_page.style.display = 'none'
        python_page.style.display = 'none'
        js_page.style.display = 'none'
        react_page.style.display = 'none'
    })

    contact.addEventListener('click', (event)=>{
        //event.preventDefault;
        about_info.style.display = 'none'
        front_page.style.display = 'none'
        contact_page.style.display = 'block'
        python_page.style.display = 'none'
        js_page.style.display = 'none'
        react_page.style.display = 'none'

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    js.addEventListener('click', (event)=>{
        //event.preventDefault;
        python_page.style.display = 'none'
        js_page.style.display = 'block'
        react_page.style.display = 'none'
        about_info.style.display = 'none'
        front_page.style.display = 'none'
        contact_page.style.display = 'none'

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    react.addEventListener('click', (event)=>{
        //event.preventDefault;
        python_page.style.display = 'none'
        js_page.style.display = 'none'
        react_page.style.display = 'block'
        about_info.style.display = 'none'
        front_page.style.display = 'none'
        contact_page.style.display = 'none'

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    python.addEventListener('click', (event)=>{
        //event.preventDefault;
        python_page.style.display = 'block'
        js_page.style.display = 'none'
        react_page.style.display = 'none'
        about_info.style.display = 'none'
        front_page.style.display = 'none'
        contact_page.style.display = 'none'

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })







})
