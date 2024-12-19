import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

window.addEventListener('scroll', function () {
    let header = document.querySelector('.contatoc');
    let header_p = document.querySelector('.cabecalho-principal');

    if (window.scrollY > 50) {
        header.style.height = '0';
        header.style.opacity = '0';
        header.style.visibility = 'hidden';
        header_p.style.background = '#101010';
    } else {
        header.style.height = '40px';
        header.style.opacity = '1';
        header.style.visibility = 'visible';
        header_p.style.background = 'transparent';
    }
});



var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 45,
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 350,
        modifier: 0.5,
    },
    autoplay: {
        delay: 2700,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }

});
