const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");

// Check if dark mode is enabled in localStorage
const isDarkModeEnabled = localStorage.getItem("darkMode") === "true";

// Function to enable dark mode
const enableDarkMode = () => {
  body.classList.add("dark");
  darkLight.classList.replace("bx-sun", "bx-moon");
  localStorage.setItem("darkMode", "true");
};

// Function to disable dark mode
const disableDarkMode = () => {
  body.classList.remove("dark");
  darkLight.classList.replace("bx-moon", "bx-sun");
  localStorage.setItem("darkMode", "false");
};

// Toggle dark mode on button click
darkLight.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

// Initialize dark mode based on localStorage value
if (isDarkModeEnabled) {
  enableDarkMode();
} else {
  disableDarkMode();
}




window.addEventListener('DOMContentLoaded', function() {
  var popupContainer = document.querySelector('.popup-container');
  var closeButton = document.querySelector('.close-btn');

  closeButton.addEventListener('click', function() {
    popupContainer.style.display = 'none';
  });
});

/*Obtener todas las cartas
const cardsAll = document.getElementsByClassName("card");
const cantidad = cardsAll.length;

// Generar un número aleatorio entre 0 y la cantidad de cartas
const indiceAleatorio = Math.floor(Math.random() * cantidad);

// Obtener la carta recomendada
const cartaRecomendada = cardsAll[indiceAleatorio];

// Insertar la carta recomendada dentro del elemento <section>
const recomendacionApp = document.getElementById("RecomendacionApp");
recomendacionApp.appendChild(cartaRecomendada);

// Obtener el contenedor para las tarjetas actualizadas
const updatedCardsContainer = document.getElementById('updated-cards');

// Obtener todas las tarjetas
const cards = document.getElementsByClassName('card');

// Filtrar las tarjetas actualizadas
const updatedCards = Array.from(cards).filter(card => card.querySelector('.actualizado'));

// Duplicar las tarjetas actualizadas y agregarlas al contenedor "updated-cards"
updatedCards.forEach(card => {
  const clonedCard = card.cloneNode(true);
  updatedCardsContainer.appendChild(clonedCard);
});*/

/*document.addEventListener('DOMContentLoaded', function() {
  // Obtener todas las cartas
  const cardsAll = document.getElementsByClassName("card");
  const cantidad = cardsAll.length;

  // Generar un número aleatorio entre 0 y la cantidad de cartas
  const indiceAleatorio = Math.floor(Math.random() * cantidad);

  // Obtener la carta recomendada
  const cartaRecomendada = cardsAll[indiceAleatorio];

  // Insertar la carta recomendada dentro del elemento <section>
  const recomendacionApp = document.getElementById("RecomendacionApp");
  recomendacionApp.appendChild(cartaRecomendada);
});*/

document.addEventListener('DOMContentLoaded', function() {
  // Obtener todas las cartas con botón de descarga
  const cardsDownloadable = document.querySelectorAll('.card .button-download');
  const cantidad = cardsDownloadable.length;

  // Generar un número aleatorio entre 0 y la cantidad de cartas descargables
  const indiceAleatorio = Math.floor(Math.random() * cantidad);

  // Obtener la carta recomendada con botón de descarga
  const cartaRecomendada = cardsDownloadable[indiceAleatorio].closest('.card');

  // Ocultar el botón "button-download" en la carta recomendada
  const buttonDownload = cartaRecomendada.querySelector(".button-download");
  buttonDownload.style.display = "none";

  // Insertar la carta recomendada dentro del elemento <section>
  const recomendacionApp = document.getElementById("RecomendacionApp");
  recomendacionApp.appendChild(cartaRecomendada);

  // Agregar evento de clic a la carta recomendada
  cartaRecomendada.addEventListener("click", function() {
    // Obtener la ID de la carta recomendada
    const cartaID = cartaRecomendada.id;

    // Modificar la URL sin recargar la página
    history.pushState(null, null, "#" + cartaID);
  });
});


// Obtener el contenedor para las tarjetas actualizadas
const updatedCardsContainer = document.getElementById('updated-cards');

// Obtener todas las tarjetas
const cards = document.getElementsByClassName('card');

// Filtrar las tarjetas actualizadas
const updatedCards = Array.from(cards).filter(card => card.querySelector('.actualizado'));

// Duplicar las tarjetas actualizadas y agregarlas al contenedor "updated-cards"
updatedCards.forEach(card => {
  const clonedCard = card.cloneNode(true);
  updatedCardsContainer.appendChild(clonedCard);
});


document.addEventListener('DOMContentLoaded', function() {
  // Obtener todas las cartas
  const cardsAll = document.getElementsByClassName("card");
  const cantidad = cardsAll.length;

  // Mostrar la cantidad de cartas en el sitio web
  const cantidadCartasElement = document.getElementById("cantidadCartas");
  cantidadCartasElement.textContent = cantidad.toString();
});

document.addEventListener('DOMContentLoaded', function() {
  // Obtener todas las cartas
  const cardsAll = document.getElementsByClassName("card");

  // Agregar evento de clic a cada carta
  for (let i = 0; i < cardsAll.length; i++) {
    const carta = cardsAll[i];

    carta.addEventListener("click", function() {
      const cartaID = carta.id;
      history.pushState(null, null, "#" + cartaID);
    });
  }
});

window.addEventListener('online', function() {
  // El usuario ha recuperado la conexión, redirigir a la página principal u otra página relevante
  window.location.href = 'index.html';
});

window.addEventListener('offline', function() {
  // No hay conexión a Internet, redirigir a la página de error
  window.location.href = '/error.html';
});

document.addEventListener('DOMContentLoaded', function() {
  var loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.classList.add('hidden');
});


document.addEventListener("DOMContentLoaded", function() {
  var accordionToggle = document.querySelector(".accordion-toggle");
  var accordionContent = document.querySelector(".accordion-content");

  accordionToggle.addEventListener("click", function() {
    this.parentNode.classList.toggle("active");
    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
    } else {
      accordionContent.style.display = "block";
    }
  });
});
