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

