//settings for the slideshow
var slideIndex = 1;

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

  setTimeout(function () {
    slideIndex++;
    showSlides();
  }, 4000);
}
window.onload = showSlides;
//end of slideshow's settings

//shrink nav bar
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.width = "80px";
    document.getElementById("logo").style.height = "80px";

  } else {
    document.getElementById("logo").style.width = "110px";
    document.getElementById("logo").style.height = "110px";

  }
}
// read more button
function readMore() {
  var dots = document.getElementsByClassName("dots");
  var moreText = document.getElementsByClassName("more");
  var btnText = document.getElementsByClassName("myBtn");

  var i;
  for (i = 0; i < dots.length; i++) {
    if (dots[i].style.display === "none") {
      dots[i].style.display = "inline";
      moreText[i].style.display = "none";
      btnText[i].innerHTML = "Read more";
    } else {
      dots[i].style.display = "none";
      btnText[i].innerHTML = "Read less";
      moreText[i].style.display = "inline";
    }
  }
}
