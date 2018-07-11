
// CLICK TO HIDE
$(".fa-times").on('click', function() {
    $(this).closest('.container').hide('1s');
  });

// BAR HIDE AND SHOW
$(".bar-burger").on('click', function() {
    $(".bar").toggleClass('active');
    $(".bar-item").fadeToggle('500ms');
    $(".main").toggleClass('main-width');
});
