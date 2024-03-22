var languageContent = {
    'es': {
        'welcome': '¡Bienvenido a nuestro hotel!',
        'description': 'Encuentra la mejor experiencia de hospedaje con nosotros.'
        
    },
    'en': {
        'welcome': 'Welcome to our hotel!',
        'description': 'Find the best lodging experience with us.'
       
    }
};

// Función para cambiar el idioma de la página
function changeLanguage(lang) {
    var content = languageContent[lang];
    
    document.getElementById('welcome-message').innerText = content['welcome'];
    document.getElementById('description').innerText = content['description'];
   
}


