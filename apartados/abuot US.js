hamburger = document.querySelector(".Hamburger");
hamburger.onclick = function() {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}

const darkLightToggle = document.getElementById("darkLight");
const body = document.body;

darkLightToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

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