
// Seleccionar todos los botones de idioma
const languageButtons = document.querySelectorAll(".lang-button");

// Seleccionar todos los elementos que tienen traducciones
const translatableElements = document.querySelectorAll("[data-es][data-en]");

// Función para cambiar el idioma
function changeLanguage(language) {

    // Cambiar el idioma de la página
    document.documentElement.lang = language;

    // Recorrer todos los elementos traducibles
    translatableElements.forEach(element => {

        // Obtener el texto correspondiente al idioma seleccionado
        const translatedText = element.getAttribute(`data-${language}`);

        // Actualizar el contenido del elemento
        element.textContent = translatedText;

    });

    // Actualizar el botón activo
    languageButtons.forEach(button => {

        button.classList.remove("active");

        if (button.dataset.lang === language) {
            button.classList.add("active");
        }

    });

    // Guardar el idioma seleccionado
    localStorage.setItem("selectedLanguage", language);
}

// Agregar funcionamiento a los botones
languageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedLanguage = button.dataset.lang;

        changeLanguage(selectedLanguage);

    });

});

// Recuperar el idioma guardado
const savedLanguage = localStorage.getItem("selectedLanguage") || "es";

// Aplicar el idioma inicial
changeLanguage(savedLanguage);
