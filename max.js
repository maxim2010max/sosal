var yesElements = document.getElementsByClassName("yes");

if (yesElements.length > 0) {
   for (var i = 0; i < yesElements.length; i++) {
      yesElements[i].addEventListener("click", function () {
         var yest = document.getElementById("yest");
        
         yest.textContent = "Я так и знал !";
        
      });
   }
}