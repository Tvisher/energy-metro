

const tabBtns = document.querySelectorAll('.tabs-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnId = btn.getAttribute('data-tab-btn');
        const prevActiveBtn = document.querySelector('.tabs-btn.active');
        prevActiveBtn.classList.remove('active')
        btn.classList.add('active')

        const prevActiveTab = document.querySelector('.tab-item.active');
        prevActiveTab.classList.remove('active')
        const newActiveTab = document.querySelector(`[data-item='${btnId}']`)
        newActiveTab && newActiveTab.classList.add('active')

    })
})



Fancybox.bind("[data-fancybox]", {});

window.addEventListener('load', () => {
    const modal = document.querySelector('.main-modal-video');
    const video = document.querySelector('.main-modal-video video');

    video.play().catch(error => {
        console.log("Автоплей заблокирован браузером. Ожидание взаимодействия.");
    });
    video.addEventListener('timeupdate', () => {
        const timeLeft = video.duration - video.currentTime;

        if (timeLeft <= 1.2 && timeLeft > 0) {
            document.querySelector('body').classList.add('video-end');
            modal.classList.add('hide');
            AOS.init({
                // Global settings:
                disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
                startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
                initClassName: 'aos-init', // class applied after initialization
                animatedClassName: 'aos-animate', // class applied on animation
                useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
                disableMutationObserver: false, // disables automatic mutations' detections (advanced)
                debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
                throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
                offset: 50, // offset (in px) from the original trigger point
                delay: 0, // values from 0 to 3000, with step 50ms
                duration: 700, // values from 0 to 3000, with step 50ms
                easing: 'ease', // default easing for AOS animations
                once: true, // whether animation should happen only once - while scrolling down
                mirror: false, // whether elements should animate out while scrolling past them
                anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
            });
        }
    });
});



$(document).ready(function () {
    $('.type-select').select2({
        minimumResultsForSearch: -1
    });
});




const sliders = document.querySelectorAll('.tab-item__slider');
const slidersInstance = [];
sliders.forEach(slider => {
    const imagesSlider = new Swiper(slider, {
        speed: 400,
        spaceBetween: 10,
        slidesPerView: 1,
        pagination: {
            el: slider.querySelector('.swiper-pagination'),
            type: 'bullets',
        },
    });
    slidersInstance.push(imagesSlider);
})


$('.type-select').on('select2:select', function (e) {
    const tabId = e.target.value;
    const prevActiveTab = document.querySelector('.tab-item.active');
    const currentActiveTab = document.querySelector(`.tab-item[data-item="${tabId}"]`);
    prevActiveTab.classList.remove('active');
    currentActiveTab.classList.add('active');
    slidersInstance[tabId - 1].slideTo(0)
});



document.querySelector('#totopbtn').addEventListener('click', (e) => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
})




