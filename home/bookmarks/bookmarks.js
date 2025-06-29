$(document).ready(function() {
  $('.category').on('click', 'h2', function(){
    $('.urls').hide();
    $(this).closest('.category').find('.urls').fadeToggle();
  });

  $('body').on('click', '.toggle', function(){
    $('.hidden').show();
  });
});