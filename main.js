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
        randomFactDiv.style.background = "purple"
        darkModeBtnElement.innerHTML="Change to Light Mode"
        for (var i = 0; i<textElement.length; i++) {
            textElement[i].style.color = "white"
        }
    }
}
