

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
        }
    });
});