/** event al hacer scroll cambia el menu **/
$(window).scroll(function() {
  if ($(document).scrollTop() >= $('#sectionInfo').offset().top) {
    $('.header').css("background-color", "rgb(43, 52,61)");
    $('#titlePuppy').css("visibility", "visible");
  }
  if ($(document).scrollTop() < $('#sectionInfo').offset().top)
  {
    $('.header').css("background-color","transparent");
    $('#titlePuppy').css("visibility", "hidden");
  }
});

/** efecto de aparecer lento **/
$(document).ready(function () {
  $('.cover').fadeIn(2000);
});

/** evento al hacer click en la flecha de leer más **/
$("#go-down").click(function(){
  $("html, body").delay(400).animate({
    scrollTop: $('#sectionInfo').offset().top
  }, 1000);
});

/** abrir menu navbar */
$('#bar').click(function () {
  $('.nav-bar').show();
  $('.overlay').css("visibility", "visible");
});

/** cerrar menu navbar **/
$('#close').click(function () {
  $('.nav-bar').hide();
  $('.overlay').css("visibility", "hidden");
});