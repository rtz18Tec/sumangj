
// Carrusel 1
let imgs = [
    "../imagenes/c1.png",
    "../imagenes/c2.png",
    "../imagenes/c3.png"
];
let c1 = 0;
function carrusel1() {
    document.getElementById("imgCarrucel").src = imgs[c1];
    c1++;
    if (c1 >= imgs.length) c1 = 0;
    setTimeout(carrusel1, 1500);
}

// Carrusel 2
let img = [
    "../imagenes/c2.png",
    "../imagenes/c3.png",
    "../imagenes/c1.png"
];
let c2 = 0;
function carrusel2() {
    document.getElementById("imgCarrucel2").src = img[c2];
    c2++;
    if (c2 >= img.length) c2 = 0;
    setTimeout(carrusel2, 1500);
}

// Carrusel 3
let im = [
    "../imagenes/c3.png",
    "../imagenes/c1.png",
    "../imagenes/c2.png"
];
let c3 = 0;
function carrusel3() {
    document.getElementById("imgCarrucel3").src = im[c3];
    c3++;
    if (c3 >= im.length) c3 = 0;
    setTimeout(carrusel3, 1500);
}

// Iniciar todos al cargar
window.onload = function() {
    carrusel1();
    carrusel2();
    carrusel3();
};

