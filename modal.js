var modal = document.getElementById("onload-modal");
var aboutModal = document.getElementById("about-modal");
var span = document.getElementById("close");
var aboutSpan = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
aboutSpan.onclick = function() {
  aboutModal.style.display="none";
}
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  modal.style.display = "none";
  aboutModal.style.display = "none";
}
