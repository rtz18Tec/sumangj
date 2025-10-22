//imagen del Home 
window.addEventListener("load", function () {
    const homeImagen = document.getElementById("home");
    if (homeImagen) {
        homeImagen.style.transition = "opacity 2s ease-in-out";
        homeImagen.style.opacity = "1";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.hero-image-container')?.classList.add('show');
    document.querySelector('.hero-text')?.classList.add('show');
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
    setTimeout(() => {
        item.classList.add('show');
    }, 500 + index * 300);
});
}); 


// caja de platos tradicionales
document.addEventListener("DOMContentLoaded", () => {
    const targeta = document.getElementById("caja1");

    if (targeta) {
        targeta.style.transition = "transform 0.3s ease-in-out";
        targeta.addEventListener("mouseenter", () => {
            targeta.style.transform = "scale(1.05) translateY(-5px)";
            targeta.style.boxShadow = "0 10px 25px rgba(134, 93, 4, 0.932)";
        });
        targeta.addEventListener("mouseleave", () => {
            targeta.style.transform = "none";
            targeta.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const targeta = document.getElementById("caja2");

    if (targeta) {
        targeta.style.transition = "transform 0.3s ease-in-out";
        targeta.addEventListener("mouseenter", () => {
            targeta.style.transform = "scale(1.05) translateY(-5px)";
            targeta.style.boxShadow = "0 10px 25px rgba(134, 93, 4, 0.932)";
        });
        targeta.addEventListener("mouseleave", () => {
            targeta.style.transform = "none";
            targeta.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const targeta = document.getElementById("caja3");

    if (targeta) {
        targeta.style.transition = "transform 0.3s ease-in-out";
        targeta.addEventListener("mouseenter", () => {
            targeta.style.transform = "scale(1.05) translateY(-5px)";
            targeta.style.boxShadow = "0 10px 25px rgba(134, 93, 4, 0.932)";
        });
        targeta.addEventListener("mouseleave", () => {
            targeta.style.transform = "none";
            targeta.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    }
});


//productos
document.addEventListener('DOMContentLoaded', () => {
    const productosDivs = document.querySelectorAll('.producto');
    productosDivs.forEach(div => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'transparent';
            div.style.transform = 'translateY(-8px)';
            div.style.transition = 'background-color 0.3s ease, transform 0.3s ease';
        });

        div.addEventListener('mouseleave', () => {
            div.style.backgroundColor = ''; 
            div.style.transform = 'none'; 
        });
    });
});