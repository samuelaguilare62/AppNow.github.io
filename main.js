document.addEventListener("DOMContentLoaded", function () {
  


// Función para manejar el interruptor de modo oscuro / claro
  const darkLightToggle = document.getElementById("darkLight");
  const body = document.body;
  
  // Comprueba si el usuario tenía el modo oscuro activado
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }
  
  darkLightToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  
    // Guarda la preferencia del usuario en localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Función para manejar la funcionalidad de filtrado de categorías
const dropdownElement = document.getElementById("dropdown");
const cards = document.querySelectorAll(".card");

// Obtener todas las categorías únicas de las tarjetas
const categorias = Array.from(cards, card => {
  const categoriaElement = card.querySelector("#categoria");
  return categoriaElement.textContent.trim();
});

// Filtrar categorías duplicadas y ordenarlas alfabéticamente
const categoriasUnicas = [...new Set(categorias)].sort();

// Eliminar las opciones existentes en el menú desplegable
while (dropdownElement.firstChild) {
  dropdownElement.removeChild(dropdownElement.firstChild);
}

// Crear opción para "Todas Las Apps" y agregarla siempre
const todasLasAppsOption = document.createElement("option");
todasLasAppsOption.value = "Todas Las Apps";
todasLasAppsOption.textContent = "Todas Las Apps";
dropdownElement.appendChild(todasLasAppsOption);

// Crear opciones para el menú desplegable solo para categorías presentes en las tarjetas
categoriasUnicas.forEach(categoria => {
  if (categoria.trim() !== "") { // Evitar agregar categorías en blanco
    const optionElement = document.createElement("option");
    optionElement.value = categoria;
    optionElement.textContent = categoria;
    dropdownElement.appendChild(optionElement);
  }
});

dropdownElement.addEventListener("change", function () {
  const selectedCategoria = dropdownElement.value;

  cards.forEach(card => {
    const categoriaElement = card.querySelector("#categoria");
    const cardCategoria = categoriaElement.textContent.trim();

    if (selectedCategoria === "" || selectedCategoria === cardCategoria || selectedCategoria === "Todas Las Apps") {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
  
  
  
});
  
  
  

// Función para manejar la funcionalidad de búsqueda
const buscarBox = document.getElementById("buscarBox");
const noResultsMessage = document.getElementById("noResultsMessage");

buscarBox.addEventListener("input", function () {
  const searchTerm = buscarBox.value.trim().toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector(".title-card");
    if (title) {
      const cardTitle = title.textContent.trim().toLowerCase();
      const isVisible = cardTitle.includes(searchTerm); // Verifica si searchTerm está dentro de cardTitle
      card.classList.toggle("hidden", searchTerm !== "" && !isVisible);
    }
  });


    const matchingCards = document.querySelectorAll(".card:not(.hidden)");
    noResultsMessage.classList.toggle("hidden", matchingCards.length > 0);
  });

  // Función para manejar el menú desplegable
  const hamburger = document.querySelector(".Hamburger");
  const navBar = document.querySelector(".nav-bar");

  hamburger.addEventListener("click", function () {
    navBar.classList.toggle("active");
  });




  // Función para manejar la caja de búsqueda
  const searchIcon = document.querySelector('.search');
  const searchBox = document.querySelector('.searchBox');
  const searchInput = document.querySelector('.searchBox input[type="text"]');
  const closeIcon = document.querySelector('.fa-xmark');

  searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('active');
    searchInput.focus();
  });

  closeIcon.addEventListener('click', () => {
    searchBox.classList.remove('active');
    searchInput.value = '';
  });
  
});


// Función para ocultar la animación de carga
function hideLoader() {
  var loader = document.querySelector(".loader");
  loader.style.display = "none";
}

// Espera a que se cargue todo el contenido de la página
document.addEventListener("DOMContentLoaded", function() {
  // Muestra la animación de carga

  // Si después de 10 segundos la animación de carga aún está visible, la oculta
  setTimeout(function() {
    hideLoader();
  }, 10000); // 10000 milisegundos (10 segundos)
});



// Función para verificar si un enlace es seguro
function isLinkSafe(linkElement) {
  const href = linkElement.getAttribute('href');
  const safeDomains = ['example.com', 'trusteddomain.com']; // Dominios seguros conocidos

  // Verificar si el enlace comienza con "https://"
  if (href.startsWith('https://')) {
    return true; // El enlace se considera seguro
  }

  // Verificar si el dominio es uno de los dominios seguros conocidos
  for (const domain of safeDomains) {
    if (href.includes(domain)) {
      return true; // El enlace se considera seguro
    }
  }

  // Si no cumple ninguna de las reglas anteriores, el enlace no se considera seguro
  return false;
}


// Obtener todos los elementos con la clase "button-download"
const buttonDownloadElements = document.querySelectorAll('.button-download');

// Verificar si el enlace es seguro o no y mostrar un mensaje con estilos
buttonDownloadElements.forEach(element => {
  const linkElement = element.querySelector('a');
  const messageElement = document.createElement('p');

  if (isLinkSafe(linkElement)) {
    // El enlace es seguro, agregar la clase CSS para mensajes seguros
    messageElement.textContent = "✔️ Este enlace es seguro.";
    messageElement.classList.add('safe-message');
  } else {
    // El enlace no es seguro, agregar la clase CSS para mensajes no seguros
    messageElement.textContent = "⚠️ Este enlace no es seguro. Por favor, ten precaución al hacer clic.";
    messageElement.classList.add('unsafe-message');
  }

  // Agregar el mensaje al elemento de la tarjeta
  element.appendChild(messageElement);
});


// Obtén el elemento que contiene todas las tarjetas
const allCardsSection = document.getElementById("all-cards");

// Obtén todas las tarjetas dentro del elemento
const cards = Array.from(allCardsSection.querySelectorAll(".card"));

/* Ordena las tarjetas alfabéticamente por su contenido
cards.sort((a, b) => {
  const textA = a.textContent.trim().toLowerCase();
  const textB = b.textContent.trim().toLowerCase();
  return textA.localeCompare(textB);
});*/



// Función para generar un número aleatorio entre -1 y 1
function randomSort() {
  return Math.random() * 2 - 1;
}

// Ordena las tarjetas de manera aleatoria cada vez que se ejecuta
cards.sort(() => {
  return randomSort();
});


// Elimina las tarjetas existentes del elemento
cards.forEach(card => {
  allCardsSection.removeChild(card);
});

// Agrega las tarjetas ordenadas nuevamente al elemento
cards.forEach(card => {
  allCardsSection.appendChild(card);
});


let currentPage = 1;


// Obtén el botón y registra un evento click para el desplazamiento suave
document.getElementById("scrollToTopBtn").addEventListener("click", scrollToTop);

// Función para desplazarse suavemente hacia arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
    });
}

// Muestra u oculta el botón basado en la posición de desplazamiento
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
});

// Función para agregar el código a cada tarjeta
function injectCodeIntoCards() {
  // Obtén todas las tarjetas con la clase "card"
  var cards = document.querySelectorAll('.card');

  // Crea el código a inyectar
  var codeToInject = `
        <button onclick="openSharePopup()" class="shareButton"><i class="fas fa-share"></i></button>

        <div id="popupShare" class="popupShare">
        <input type="text" class="link" id="linkInput">
          <button onclick="copyLink()"><i class="fa-regular fa-copy"></i></button>
          
          <button onclick="closeSharePopup()">Cerrar</button>
        </div>
      `;

  // Itera sobre cada tarjeta y agrega el código
  cards.forEach(function(card) {
    // Crea un elemento div para contener el código
    var codeContainer = document.createElement('div');
    codeContainer.innerHTML = codeToInject;

    // Agrega el código al final de cada tarjeta
    card.appendChild(codeContainer);
  });
}

// Llama a la función para injectar el código cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', injectCodeIntoCards);


function openSharePopup() {
  var popup = document.getElementById("popupShare");
  popup.style.display = "block";

  // Obtener el elemento input
  var linkInput = document.getElementById("linkInput");

  // Establecer el valor del input con la URL
  linkInput.value = window.location.href;
}

function closeSharePopup() {
  var popup = document.getElementById("popupShare");
  popup.style.display = "none";
}

function copyLink() {
  var linkToCopy = window.location.href;

  // Obtener el elemento input
  var linkInput = document.getElementById("linkInput");

  // Seleccionar y copiar el contenido del elemento de entrada de texto
  linkInput.select();
  document.execCommand("copy");

  // Deseleccionar el input después de copiar
  linkInput.setSelectionRange(0, 0);

  alert("Enlace copiado: " + linkToCopy);
}


// Obtener el nombre de la aplicación desde la URL
const urlParams = new URLSearchParams(window.location.search);
const appNameFromURL = urlParams.get('appName');

// Función para mostrar la tarjeta correspondiente
function mostrarTarjeta(nombreApp) {
    // Ocultar todas las tarjetas
    const todasLasTarjetas = document.querySelectorAll('.card');
    todasLasTarjetas.forEach(tarjeta => {
        tarjeta.style.display = 'none';
    });

    // Mostrar la tarjeta correspondiente
    const tarjetaCorrespondiente = document.querySelector(`.card:has(.title-card:contains("${nombreApp}"))`);
    if (tarjetaCorrespondiente) {
        tarjetaCorrespondiente.style.display = 'block';
    }
}

// Verificar si se proporciona el nombre de la aplicación en la URL
if (appNameFromURL) {
    // Mostrar la tarjeta correspondiente según el nombre de la aplicación en la URL
    mostrarTarjeta(appNameFromURL);
} else {
    console.log('Nombre de la aplicación no proporcionado en la URL.');

    // Código adicional para manejar el caso en que no se proporciona un nombre de aplicación en la URL
}
