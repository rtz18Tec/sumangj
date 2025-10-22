

const colores = ["rgb(255, 255, 0)", "rgb(255, 255, 102)", "rgb(255, 255, 153)", "rgba(199, 199, 35, 1)", "rgb(255, 255, 51)", "rgb(255, 215, 0)","rgb(204, 204, 0)","rgb(255, 200, 0)","rgba(169, 152, 57, 1)","rgb(255, 255, 60)+"];

function color() {
    // Elige un color al azar de la lista
    let color = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById("texto").style.color = color;


document.getElementById("texto").style.color;
setTimeout("color()", 500);
}


document.body.setAttribute("onload", "color()");

function agrandar(elemento) {
    elemento.style.transform = "scale(1.5) rotate(360deg)";
}

function normal(elemento) {
    elemento.style.transform = "scale(1) rotate(0deg)";
}

let imagenes = document.querySelectorAll(".zoom");

imagenes.forEach(imagen => {
    imagen.onmouseover = () => agrandar(imagen);
    imagen.onmouseout = () => normal(imagen);
});
















