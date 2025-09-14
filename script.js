// Hämtar rubriken och knappen
var heading = document.getElementById("myHeading");
var button = document.getElementById("myButton");

// När knappen klickas, då byts texten
button.onclick = function() {
  heading.textContent = "Goodbye World";
};