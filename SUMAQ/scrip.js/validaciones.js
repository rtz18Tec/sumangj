document.querySelector(".reservation-form").addEventListener("submit", function(e) {
    e.preventDefault(); // evita envío hasta validar

    let fecha = document.getElementById("reservation-date").value;
    let hora = document.getElementById("reservation-time").value;
    let personas = document.getElementById("num-guests").value;
    let mesa = document.querySelector("input[name='table_number']:checked");
    let nombre = document.getElementById("user-name").value.trim();
    let email = document.getElementById("user-email").value.trim();
    let telefono = document.getElementById("user-phone").value.trim();

    let hoy = new Date().toISOString().split("T")[0]; 
    let errores = [];


    if (!fecha || fecha < hoy) {
        errores.push("La fecha debe ser hoy o una futura.");
    }

    if (!hora || hora < "12:00" || hora > "22:00") {
        errores.push("La hora debe estar entre 12:00 y 22:00.");
    }

    if (personas < 1 || personas > 10) {
        errores.push("El número de personas debe estar entre 1 y 10.");
    }

    if (!mesa) {
        errores.push("Debes seleccionar una mesa.");
    }

    if (nombre.length < 3 || /^[0-9]+$/.test(nombre)) {
        errores.push("Ingresa un nombre válido (mínimo 3 letras, no solo números).");
    }

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        errores.push("Ingresa un correo válido.");
    }

    if (telefono && !/^[0-9]{7,9}$/.test(telefono)) {
        errores.push("El teléfono debe contener 9 dígitos numéricos.");
    }

    if (errores.length > 0) {
        alert("Errores encontrados:\n- " + errores.join("\n- "));
    } else {
        alert("Reserva confirmada. ¡Gracias por confiar en SUMAQ!");
        this.submit();
    }
});

