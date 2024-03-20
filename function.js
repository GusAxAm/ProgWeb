// language.js

// Objeto con el contenido en diferentes idiomas
var languageContent = {
    'es': {
        'welcome': '¡Bienvenido a nuestro hotel!',
        'description': 'Encuentra la mejor experiencia de hospedaje con nosotros.'
        // Agrega más contenido en español aquí
    },
    'en': {
        'welcome': 'Welcome to our hotel!',
        'description': 'Find the best lodging experience with us.'
        // Add more English content here
    }
};

// Función para cambiar el idioma de la página
function changeLanguage(lang) {
    var content = languageContent[lang];
    // Cambiar el contenido de acuerdo al idioma seleccionado
    document.getElementById('welcome-message').innerText = content['welcome'];
    document.getElementById('description').innerText = content['description'];
    // Cambiar cualquier otro contenido necesario
}


