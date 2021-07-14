const toggle = document.querySelectorAll('.toggle-mobile-menu')[0];
const navLinks = document.querySelectorAll('.nav-links')[0];
console.log(navLinks);

toggle.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('clicked');
    navLinks.classList.toggle('active');
})