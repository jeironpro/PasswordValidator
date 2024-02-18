document.getElementById('contrasena').addEventListener('input', function() {
    var input = document.getElementById('contrasena').value;
    var inputMayuscula = /[A-Z]/.test(input);
    var inputEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(input);
    var inputNumero = /\d/.test(input);
    
    var iconoMinimo = document.getElementById('minimo');
    var iconoMayuscula = document.getElementById('mayuscula');
    var iconoEspecial = document.getElementById('especial');
    var iconoNumero = document.getElementById('numero');

    if (input.length >= 8) {
        iconoMinimo.style.opacity = '1';
    } else {
        iconoMinimo.style.opacity = '0.5';
    }

    if (inputMayuscula) {
        iconoMayuscula.style.opacity = '1';
    } else {
        iconoMayuscula.style.opacity = '0.5';
    }

    if (inputEspecial) {
        iconoEspecial.style.opacity = '1';
    } else {
        iconoEspecial.style.opacity = '0.5';
    }

    if (inputNumero) {
        iconoNumero.style.opacity = '1';
    } else {
        iconoNumero.style.opacity = '0.5';
    }
})

function mostrar_ocultar() {
    var input_contrasena = document.getElementById("contrasena");
    var icono_mostrar = document.getElementById('icono_mostrar');

    input_contrasena.type = input_contrasena.type === "password" ? "text" : "password";

    icono_mostrar.className = input_contrasena.type === "password" ? "fa-solid fa-eye" : "fa-solid fa-eye-slash";
}