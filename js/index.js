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