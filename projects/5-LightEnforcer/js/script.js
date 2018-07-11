var $aktivno = $('.active');
var $tacka = $('.header-slides .dot');

$tacka.on('click', function() {
    if($tacka.hasClass('active')){
        $tacka.removeClass('active');
    };
    $(this).addClass('active');
    
    if($('.first').hasClass('active')){
        $('.header').addClass('header-first');
        $('.header').removeClass('header-second header-third');
        $('.slide1').slideDown(400);
        $('.slide2, .slide3').hide(0);
    }
    if($('.second').hasClass('active')){
        $('.header').addClass('header-second');
        $('.header').removeClass('header-first header-third');
        $('.slide2').slideDown(400);
        $('.slide1, .slide3').hide(0);
    }
    if($('.third').hasClass('active')){
        $('.header').addClass('header-third');
        $('.header').removeClass('header-second header-first');
        $('.slide3').slideDown(400);
        $('.slide2, .slide1').hide(0);
    }
});

//BURGER
$(".burger-container").on('click', function(){
  $(this).toggleClass("open");
});
