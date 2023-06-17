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


/*document.addEventListener("DOMContentLoaded", function() {
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
});*/


 /* var input = document.getElementById("searchInput");
  var message = document.getElementById("searchMessage");
  input.addEventListener("input", searchCards);
  
  function searchCards() {
    var filter = input.value.toUpperCase();
    var cards = document.getElementsByClassName("card");
    var hasResults = false;
  
    for (var i = 0; i < cards.length; i++) {
      var content = cards[i].textContent || cards[i].innerText;
  
      if (content.toUpperCase().indexOf(filter) > -1) {
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
  }*/
  
var input = document.getElementById("searchInput");
var message = document.getElementById("searchMessage");
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

/*document.querySelector(".menu-icon").addEventListener("click", function () {
  document.querySelector(".menu").style.display = "block";
});*/

document.addEventListener("click", function (event) {
  var targetElement = event.target;
  if (!menuIcon.contains(targetElement) && !menu.contains(targetElement)) {
    menu.style.display = "none";
  }
});



function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
}

function filterCards(category) {
  var cards = document.getElementsByClassName("card");

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var cardCategory = card.getAttribute("data-category");

    if (cardCategory === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }

  var dropdown = document.getElementById("dropdown");
  dropdown.classList.remove("show");
}

function showAllCards() {
  var cards = document.getElementsByClassName("card");

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    card.style.display = "block";
  }

  var dropdown = document.getElementById("dropdown");
  dropdown.classList.remove("show");
}


function searchText() {
  var input = document.getElementById('searchInput');
  var filter = input.value.toLowerCase().trim(); // Convertir la entrada a minúsculas y eliminar espacios en blanco
  var h2Elements = document.getElementsByTagName('h2');

  var matchFound = false;
  var regex = new RegExp("\\b" + filter + "\\b"); // Expresión regular para buscar la palabra completa

  for (var i = 0; i < h2Elements.length; i++) {
    var text = h2Elements[i].textContent.toLowerCase();

    if (regex.test(text)) { // Verificar coincidencia de palabra completa
      h2Elements[i].style.display = '';
      matchFound = true;
    } else {
      h2Elements[i].style.display = 'none';
    }
  }

  var searchMessage = document.getElementById('searchMessage');
  if (matchFound || filter === '') {
    searchMessage.style.display = 'none'; // Ocultar el mensaje de no se encontraron resultados
  } else {
    searchMessage.style.display = ''; // Mostrar el mensaje de no se encontraron resultados
  }
}
