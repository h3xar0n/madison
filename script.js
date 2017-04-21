$(document).ready(function() {
  $('.dropdown').click(function(){
    $('.menu-shown').removeClass('menu-shown');
    $(this).find('.dropdown-menu').addClass('menu-shown');
    $('.dropdown-menu').not('.menu-shown').fadeOut();
    $(this).find('.dropdown-menu').fadeToggle();
  });
});