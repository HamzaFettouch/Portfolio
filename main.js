var typed = new Typed(".text", {
    strings: ["Developer", "Student", "Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

const barras = document.querySelectorAll(".Technical-bars .bar");

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function activarAnimacion() {
    barras.forEach(bar => {
        if (isElementInViewport(bar)) {
            bar.classList.add("animado");
        }
    });
}

window.addEventListener("scroll", activarAnimacion);
window.addEventListener("load", activarAnimacion);

document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-line span');
    const radialBars = document.querySelectorAll('.radial-bar .progress-bar');
    
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });

    radialBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        const offset = 339.292 - (339.292 * percentage / 100);
        bar.style.strokeDashoffset = offset;
    });
});