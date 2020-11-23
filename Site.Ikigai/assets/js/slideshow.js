//settings for the slideshow
var slideIndex = 1;
function showSlides() {
	var slides = document.getElementsByClassName("mySlides");
	if (slideIndex > slides.length) {slideIndex = 1;}
	if (slideIndex < 1) {slideIndex = slides.length;}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	setTimeout(function() {
			slideIndex++;
			showSlides();
    },4000);
 }
window.onload = showSlides;
//end of slideshow's settings

//shrink nav bar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.width = "80px";
    document.getElementById("logo").style.height = "80px";

  } else {
    document.getElementById("logo").style.width = "150px";
    document.getElementById("logo").style.height = "150px";

  }
}