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

// Ordena las tarjetas alfabéticamente por su contenido
cards.sort((a, b) => {
  const textA = a.textContent.trim().toLowerCase();
  const textB = b.textContent.trim().toLowerCase();
  return textA.localeCompare(textB);
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





/*document.addEventListener("DOMContentLoaded", function() {
  const cardsContainer = document.getElementById("all-cards");
  const dropdownElement = document.getElementById("dropdown");

  const cards = cardsContainer.querySelectorAll(".card");
  const categories = new Set();

  cards.forEach(card => {
    const categoriaElement = card.querySelector("#categoria");
    const categoria = categoriaElement.textContent.trim();

    if (!categories.has(categoria)) {
      categories.add(categoria);
      const optionElement = document.createElement("option");
      optionElement.value = categoria;
      optionElement.text = categoria;
      dropdownElement.appendChild(optionElement);
    }
  });

  dropdownElement.addEventListener("change", function() {
    const selectedCategoria = dropdownElement.value;
    cards.forEach(card => {
      const categoriaElement = card.querySelector("#categoria");
      const cardCategoria = categoriaElement.textContent.trim();
      card.style.display = selectedCategoria === "" || selectedCategoria === cardCategoria ? "block" : "none";
    });
  });
});


  // Función para manejar la funcionalidad de filtrado de categorías
  const dropdownElement = document.getElementById("dropdown");
  const cards = document.querySelectorAll(".card");

  // Obtener todas las categorías únicas de las tarjetas
  const categorias = Array.from(cards, card => {
    const categoriaElement = card.querySelector("#categoria");
    return categoriaElement.textContent.trim();
  });

  // Filtrar categorías duplicadas
  const categoriasUnicas = [...new Set(categorias)];

  // Crear opciones para el menú desplegable
  categoriasUnicas.forEach(categoria => {
    const optionElement = document.createElement("option");
    optionElement.value = categoria;
    optionElement.textContent = categoria;
    dropdownElement.appendChild(optionElement);
  });

  dropdownElement.addEventListener("change", function () {
    const selectedCategoria = dropdownElement.value;

    cards.forEach(card => {
      const categoriaElement = card.querySelector("#categoria");
      const cardCategoria = categoriaElement.textContent.trim();

      if (selectedCategoria === "" || selectedCategoria === cardCategoria) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });




*/

