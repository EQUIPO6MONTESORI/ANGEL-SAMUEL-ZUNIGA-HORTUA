
document.addEventListener("DOMContentLoaded", function () {

    const botones = document.querySelectorAll(".lang-button");

    function cambiarIdioma(idioma) {

        // Buscar todos los elementos que tengan traducción
        const elementos = document.querySelectorAll("[data-es][data-en]");

        elementos.forEach(function(elemento) {

            // Obtener el texto correspondiente al idioma
            const texto = elemento.getAttribute("data-" + idioma);

            // Cambiar el contenido del elemento
            if (texto !== null) {
                elemento.textContent = texto;
            }

        });

        // Cambiar el idioma de la página
        document.documentElement.lang = idioma;

        console.log("Idioma cambiado a: " + idioma);
    }

    // Recorrer los botones
    botones.forEach(function(boton) {

        boton.addEventListener("click", function() {

            const idioma = boton.getAttribute("data-lang");

            cambiarIdioma(idioma);

        });

    });

    // Idioma inicial: español
    cambiarIdioma("es");

});
