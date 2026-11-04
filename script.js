
// Seleccionar todos los botones de idioma
const botonesIdioma = document.querySelectorAll(".lang-button");

// Seleccionar todos los elementos que tienen traducciones
const elementosTraducibles = document.querySelectorAll("[data-es][data-en]");

// Función para cambiar el idioma
function cambiarIdioma(idioma) {

    // Cambiar el idioma de toda la página
    document.documentElement.lang = idioma;

    // Cambiar los textos
    elementosTraducibles.forEach(elemento => {
        elemento.textContent = elemento.getAttribute(`data-${idioma}`);
    });

    // Actualizar el título de la pestaña
    document.title = idioma === "es"
        ? "Samuel Zuniga"
        : "Samuel Zuniga";
}

// Detectar cuando se presiona un botón
botonesIdioma.forEach(boton => {
    boton.addEventListener("click", () => {

        const idioma = boton.getAttribute("data-lang");

        cambiarIdioma(idioma);

    });
});

// Idioma inicial
cambiarIdioma("es");
