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

/*var cards = document.getElementsByClassName("card"); // Obtener todas las cartas
var cantidad = cards.length;

// Generar un número aleatorio entre 0 y la cantidad de cartas
var indiceAleatorio = Math.floor(Math.random() * cantidad);

// Obtener la carta recomendada
var cartaRecomendada = cards[indiceAleatorio];

// Insertar la carta recomendada dentro del elemento <section>
var recomendacionApp = document.getElementById("RecomendacionApp");
recomendacionApp.appendChild(cartaRecomendada);*/


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

document.addEventListener('DOMContentLoaded', function() {
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


