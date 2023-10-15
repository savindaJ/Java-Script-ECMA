// script.js
const elements = document.querySelectorAll('.scroll-animation');

function checkScroll() {
    elements.forEach((element, index) => {
        const offset = element.offsetTop;
        const scrollY = window.scrollY;

        if (scrollY > offset - window.innerHeight / 2) {
            // element.classList.add('active');
            element.style.transform = 'rotate(180deg)';
        } else {
            element.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', checkScroll);
