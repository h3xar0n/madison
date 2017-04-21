$(document).ready(function() {
  $('.cart').click(function(){
    $(this).find('.dropdown-menu').fadeToggle();
    $('.account .dropdown-menu, .help .dropdown-menu').hide();
  });
  $('.account').click(function(){
    $(this).find('.dropdown-menu').fadeToggle();
    $('.cart .dropdown-menu, .help .dropdown-menu').hide();
  });
  $('.help').click(function(){
    $(this).find('.dropdown-menu').fadeToggle();
    $('.cart .dropdown-menu, .account .dropdown-menu').hide();
  });
});