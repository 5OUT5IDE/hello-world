// Hämtar rubriken och knappen
var heading = document.getElementById("myHeading"); // Sparar rubriken med id "myHeading" i variabeln heading
var button = document.getElementById("myButton");   // Sparar knappen med id "myButton" i variabeln button

// När knappen klickas, då byts texten
button.onclick = function() {                       // När användaren klickar på knappen
  heading.textContent = "Goodbye World";           // ändras texten i rubriken till "Goodbye World"
};