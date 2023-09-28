// Función para verificar si el atributo src de la imagen está vacío o no
function checkImageSrc(element) {
  const imgElement = element.querySelector('.icon img');
  return imgElement && imgElement.getAttribute('src').trim() !== '';
}

// Función para ocultar o mostrar tarjetas y actualizar el contador en pantalla
function toggleCardVisibility() {
  const cardElements = document.getElementsByClassName('card');
  for (let i = 0; i < cardElements.length; i++) {
    const card = cardElements[i];
    const buttonDownload = card.querySelector('.button-download');
    const linkElement = buttonDownload.querySelector('a');
    const hrefValue = linkElement.getAttribute('href');

    if (!hrefValue.trim() || !checkImageSrc(card)) {
      card.classList.add('hidden'); // Agrega una clase para ocultar la tarjeta
      linkElement.classList.add('hidden'); // Agrega una clase para ocultar el enlace
    } else {
      card.classList.remove('hidden'); // Remueve la clase para mostrar la tarjeta
      linkElement.classList.remove('hidden'); // Remueve la clase para mostrar el enlace
    }
  }
}

// Función para contar las tarjetas visibles y actualizar el contador en pantalla
function updateCardCount() {
  const cardCountElement = document.getElementById('cardCount');
  const cardElements = document.getElementsByClassName('card');
  let visibleCardCount = 0;

  // Contar tarjetas visibles
  for (let i = 0; i < cardElements.length; i++) {
    const card = cardElements[i];
    if (!card.classList.contains('hidden')) {
      visibleCardCount++;
    }
  }

  cardCountElement.textContent = visibleCardCount.toString();
}

// Ejecutar la función al cargar la página
window.onload = function () {
  toggleCardVisibility(); // Llamar a la función inicial para ocultar/mostrar tarjetas
  updateCardCount();
};

function openPopup(event) {
  event.preventDefault();
  var btnInfo = event.target;
  var card = btnInfo.closest('.card');
  var moreInfo = card.querySelector('.more-info').innerHTML;

  var popupContent = document.querySelector('.popup-content');
  popupContent.innerHTML = moreInfo;

  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup(event) {
  event.preventDefault();
  var popup = event.target.closest('.popup');
  popup.style.display = 'none';
}

    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://https-raxstudios-000webhostapp-com-home-index-html.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();


/* Obtener todos los elementos con la clase "button-download"
const buttonDownloadElements = document.querySelectorAll('.button-download');

// Verificar si el atributo href está vacío
buttonDownloadElements.forEach(element => {
  const linkElement = element.querySelector('a');
  const hrefValue = linkElement.getAttribute('href');

  if (!hrefValue.trim()) {
    linkElement.classList.add('hidden');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "Lo sentimos, pero parece que hay un problema. Intentaremos solucionarlo.";
    element.appendChild(errorMessage);
  }
});


function openPopup(event) {
  event.preventDefault();
  var btnInfo = event.target;
  var card = btnInfo.closest('.card');
  var moreInfo = card.querySelector('.more-info').innerHTML;

  var popupContent = document.querySelector('.popup-content');
  popupContent.innerHTML = moreInfo;

  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup(event) {
  event.preventDefault();
  var popup = event.target.closest('.popup');
  popup.style.display = 'none';
}

const darkLightToggle = document.getElementById("darkLight");
const body = document.body;

darkLightToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Función para contar las cartas por su clase "card" y actualizar el contador en pantalla
function updateCardCount() {
  const cardCountElement = document.getElementById('cardCount');
  const cardElements = document.getElementsByClassName('card');
  cardCountElement.textContent = cardElements.length.toString();
}

// Actualizar el contador al cargar la página
window.onload = updateCardCount;
*/