// Animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.5
};
const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// drag
const slider = document.querySelector('.slide');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
    isDown = true;
    // slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    // slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    // slider.classList.remove('active');
});

slider.addEventListener('mousemove', e => {
    if (!isDown) return; 
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
});

// show more
const btn = document.querySelector('.button');
const text = document.querySelector('.text');
const i5 = document.getElementById('v5');
const i6 = document.getElementById('v6');
const i7 = document.getElementById('v7');
const i8 = document.getElementById('v8');
const i9 = document.getElementById('v9');
const i10 = document.getElementById('v10');
const i11 = document.getElementById('v11');
const i12 = document.getElementById('v12');
let isOpen = false;

btn.addEventListener('click', e => {
    if (isOpen == false) {
        isOpen = true;
        i5.classList.remove('hidden-2col');
        i6.classList.remove('hidden-2col');
        i7.classList.remove('hidden-2col');
        i8.classList.remove('hidden-2col');
        i9.classList.remove('hidden-2col');
        i10.classList.remove('hidden-2col', 'full');
        i11.classList.remove('hidden-2col', 'full');
        i12.classList.remove('hidden-2col', 'full');
        text.innerHTML = "SHOW LESS";
    } else {
        isOpen = false;
        i5.classList.add('hidden-2col');
        i6.classList.add('hidden-2col');
        i7.classList.add('hidden-2col');
        i8.classList.add('hidden-2col');
        i9.classList.add('hidden-2col');
        i10.classList.add('hidden-2col', 'full');
        i11.classList.add('hidden-2col', 'full');
        i12.classList.add('hidden-2col', 'full');
        text.innerHTML = "SHOW MORE";
    }
});

// navbar
const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", e => {
    if (window.scrollY==0) {
        navbar.classList.remove('height-55');
        navbar.classList.add('height-75');
    } else {
        navbar.classList.remove('height-75');
        navbar.classList.add('height-55');
    }
});