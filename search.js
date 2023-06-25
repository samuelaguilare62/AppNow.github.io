document.addEventListener("DOMContentLoaded", function() {
 var showMoreLinks = document.querySelectorAll(".show-more");
 var showLessLinks = document.querySelectorAll(".show-less");

 showMoreLinks.forEach(function(link) {
   link.addEventListener("click", function(event) {
     event.preventDefault();
     var description = this.parentNode;
     var moreInfo = description.nextElementSibling;
     description.style.display = "none";
     moreInfo.style.display = "block";
   });
 });

 showLessLinks.forEach(function(link) {
   link.addEventListener("click", function(event) {
     event.preventDefault();
     var moreInfo = this.parentNode;
     var description = moreInfo.previousElementSibling;
     moreInfo.style.display = "none";
     description.style.display = "block";
   });
 });

 document.addEventListener("click", function(event) {
   var target = event.target;
   var isShowMoreLink = target.classList.contains("show-more");
   var isShowLessLink = target.classList.contains("show-less");

   if (!isShowMoreLink && !isShowLessLink) {
     // Ocultar información adicional
     showLessLinks.forEach(function(link) {
       var moreInfo = link.parentNode;
       var description = moreInfo.previousElementSibling;
       moreInfo.style.display = "none";
       description.style.display = "block";
     });
   }
 });
});
 
var input = document.getElementById("SearchBar");
var message = document.getElementById("ErrorSearch");
input.addEventListener("input", searchCards);

function searchCards() {
 var filter = input.value.toLowerCase();
 var cards = document.getElementsByClassName("card");
 var hasResults = false;

 for (var i = 0; i < cards.length; i++) {
   var content = cards[i].textContent || cards[i].innerText;

   if (content.toLowerCase().indexOf(filter) > -1) {
     cards[i].style.display = "";
     hasResults = true;
   } else {
     cards[i].style.display = "none";
   }
 }

 if (hasResults) {
   message.style.display = "none";
 } else {
   message.style.display = "block";
 }
}

// Obtener la URL de la tarjeta
var cardUrl = window.location.href;

// Agregar eventos de clic a los botones de redes sociales
document.getElementById('facebook').addEventListener('click', function() {
  shareOnFacebook(cardUrl);
});

document.getElementById('twitter').addEventListener('click', function() {
  shareOnTwitter(cardUrl);
});

document.getElementById('whatsapp').addEventListener('click', function() {
  shareOnWhatsApp(cardUrl);
});

document.getElementById('messenger').addEventListener('click', function() {
  shareOnMessenger(cardUrl);
});

// Funciones para compartir enlaces en redes sociales
function shareOnFacebook(url) {
  // Abrir ventana emergente para compartir en Facebook
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank');
}

function shareOnTwitter(url) {
  // Abrir ventana emergente para compartir en Twitter
  window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(url), '_blank');
}

function shareOnWhatsApp(url) {
  // Abrir ventana emergente para compartir en WhatsApp
  window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(url), '_blank');
}

function shareOnMessenger(url) {
  // Abrir ventana emergente para compartir en Facebook Messenger
  window.open('fb-messenger://share/?link=' + encodeURIComponent(url), '_blank');
}


window.addEventListener('DOMContentLoaded', function() {
  var popupContainer = document.querySelector('.popup-container');
  var closeButton = document.querySelector('.close-btn');

  closeButton.addEventListener('click', function() {
    popupContainer.style.display = 'none';
  });
});


// Obtener el contenedor de todas las tarjetas
const allCardsContainer = document.getElementById('all-cards');

// Obtener el contenedor para las tarjetas actualizadas
const updatedCardsContainer = document.getElementById('updated-cards');

// Obtener todas las tarjetas
const cards = allCardsContainer.getElementsByClassName('card');

// Filtrar las tarjetas actualizadas
const updatedCards = Array.from(cards).filter(card => card.querySelector('.actualizado'));

// Duplicar las tarjetas actualizadas y agregarlas al contenedor "updated-cards"
updatedCards.forEach(card => {
  const clonedCard = card.cloneNode(true);
  updatedCardsContainer.appendChild(clonedCard);
});



