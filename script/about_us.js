const navSlide = ()=>{
    const burger=document.querySelector('.burger')
    const nav=document.querySelector('.nav-links')

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')
    })
}

navSlide();


$(document).ready(() => {
    $('#prvi-deo .slick').slick({
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        speed: 4000,
        dots: true,
        arrows: false
    });
 })