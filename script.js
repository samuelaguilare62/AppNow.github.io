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

sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}



// Obtén los elementos de los botones de redes sociales
const facebookBtn = document.getElementById('facebook');
const twitterBtn = document.getElementById('twitter');
const whatsappBtn = document.getElementById('whatsapp');
const messengerBtn = document.getElementById('messenger');

// Agrega eventos click a los botones de redes sociales
facebookBtn.addEventListener('click', function() {
  shareOnFacebook();
});

twitterBtn.addEventListener('click', function() {
  shareOnTwitter();
});

whatsappBtn.addEventListener('click', function() {
  shareOnWhatsApp();
});

messengerBtn.addEventListener('click', function() {
  shareOnMessenger();
});

// Funciones para compartir en cada red social
function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href);
  const shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
  openPopup(shareUrl);
}

function shareOnTwitter() {
  const url = encodeURIComponent(window.location.href);
  const shareUrl = 'https://twitter.com/intent/tweet?url=' + url;
  openPopup(shareUrl);
}

function shareOnWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const shareUrl = 'https://api.whatsapp.com/send?text=' + url;
  openPopup(shareUrl);
}

function shareOnMessenger() {
  const url = encodeURIComponent(window.location.href);
  const shareUrl = 'https://www.facebook.com/dialog/send?app_id=1234567890&link=' + url;
  openPopup(shareUrl);
}

// Función para abrir una ventana emergente para compartir
function openPopup(url) {
  window.open(url, 'Compartir', 'width=600,height=400');
}
