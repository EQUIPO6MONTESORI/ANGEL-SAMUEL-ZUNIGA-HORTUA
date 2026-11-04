
document.addEventListener("DOMContentLoaded", function () {

    const botones = document.querySelectorAll(".lang-button");

    function cambiarIdioma(idioma) {

        // Buscar todos los elementos que tengan traducción
        const elementos = document.querySelectorAll("[data-es][data-en]");

        elementos.forEach(function(elemento) {

            elemento.innerHTML = elemento.getAttribute("data-" + idioma);

        });

        // Cambiar idioma del documento
        document.documentElement.lang = idioma;

        console.log("Idioma cambiado a: " + idioma);
    }

    // Activar botones
    botones.forEach(function(boton) {

        boton.addEventListener("click", function() {

            const idioma = boton.getAttribute("data-lang");

            cambiarIdioma(idioma);

        });

    });

    // Iniciar en español
    cambiarIdioma("es");

});
