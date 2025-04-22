$('.urls').hide();
$('h2').hide()
$('.hidden').hide()
$(document).ready(function(){
  $('h2').fadeIn();
  $('.category').on('click', 'h2', function(){
    $('.urls').hide();
    $(this).closest('.category').find('.urls').fadeToggle();
  });
  $('body').on('click', '.toggle', function(){
    $('.hidden').show();
  });
});
