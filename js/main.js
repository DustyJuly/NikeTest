$(function(){
  var rellax = new Rellax('.rellax');

  var flkty = new Flickity('.carousel');
  var carouselStatus = document.querySelector('.carousel-status');

  function updateStatus() {
    var slideNumber = flkty.selectedIndex + 1;
    carouselStatus.textContent = '0' + slideNumber + '/' + '0' + flkty.slides.length;
  }
  updateStatus();

  flkty.on( 'select', updateStatus );
});