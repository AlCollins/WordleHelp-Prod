
document.getElementById("main-menu-button").addEventListener('click', () => {menuDrop();}, false);
document.getElementById("bar1").addEventListener('click', () => {menuDrop();}, false);
document.getElementById("bar2").addEventListener('click', () => {menuDrop();}, false);
document.getElementById("bar3").addEventListener('click', () => {menuDrop();}, false);

function menuDrop() {
    event.stopPropagation();
    document.getElementById("main-menu-dropdown").classList.toggle("show");
    var ele1 = document.getElementById("bar1");
    var ele3 = document.getElementById("bar3");
    ele1.style.backgroundColor = window.getComputedStyle(ele1).backgroundColor == "rgb(180, 159, 58)" ? "white" : "rgb(180, 159, 58)";
    ele3.style.backgroundColor = window.getComputedStyle(ele3).backgroundColor == "rgb(83, 141, 79)" ? "white" : "rgb(83, 141, 79)";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    event.stopPropagation();
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content') && !event.target.matches('label.container > *') && !event.target.matches('.container') ) {
        document.getElementById("bar1").style.backgroundColor = "white";
        document.getElementById("bar3").style.backgroundColor = "white";
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

let aboutImage = document.getElementById("about-image");
let wordleImage = document.getElementById("wordle-image");
let aboutContainer = document.getElementById("About");
let wordleContainer = document.getElementById("WordleLink");
aboutContainer.addEventListener('mouseover', function(){aboutImage.setAttribute("src", "aboutIcon03-white-middle.png");}, false); 
aboutContainer.addEventListener('mouseleave', function(){aboutImage.setAttribute("src", "aboutIcon03.png");}, false);
wordleContainer.addEventListener('mouseover', function(){wordleImage.setAttribute("src", "NYTimesFaviconWhite.ico.png");}, false);
wordleContainer.addEventListener('mouseleave', function(){wordleImage.setAttribute("src", "NYTimesFavicon.ico.png");}, false);

