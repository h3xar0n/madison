var main = function() {
  $('.cart').click(function(){
    $('.cart .dropdown-menu').show();
    $('.account .dropdown-menu, .help .dropdown-menu').hide();
  });
  $('.account').click(function(){
    $('.account .dropdown-menu').show();
    $('.cart .dropdown-menu, .help .dropdown-menu').hide();
  });
  $('.help').click(function(){
    $('.help .dropdown-menu').show();
    $('.cart .dropdown-menu, .account .dropdown-menu').hide();
  });
};

$(document).ready(main);