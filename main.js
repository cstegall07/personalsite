function toggleDarkMode() {
    var bodyElement = document.getElementById("mainBackground")
    var darkModeBtnElement = document.getElementById("darkModeBtn")
    var textElement = document.getElementsByClassName("text")
    var randomFactDiv = document.getElementById("random")
    console.log(darkModeBtnElement);
    // if it's in dark mode, change it to light mode
    if (bodyElement.style.background == "black") {
        bodyElement.style.background = "#FFFFFF"
        randomFactDiv.style.background = "pink"
        darkModeBtnElement.innerHTML="Change to Dark Mode"
        for (var i = 0; i<textElement.length; i++) {
            textElement[i].style.color = "black"
        }
   // if it's in light mode, change it to dark mode
    } else {
        bodyElement.style.background = "black"
        randomFactDiv.style.background = "black"
        darkModeBtnElement.innerHTML="Change to Light Mode"
        for (var i = 0; i<textElement.length; i++) {
            textElement[i].style.color = "white"
        }
    }
}
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
