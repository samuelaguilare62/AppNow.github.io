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


