
// Get the modal
var modal = document.getElementById("modalImg");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("imgModal");
var modalImg = document.getElementById("img1");
var modalImg = document.getElementById("img2");
var modalImg = document.getElementById("img3");
var modalImg = document.getElementById("img4");
var modalImg = document.getElementById("img5");
var modalImg = document.getElementById("img6");

var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
