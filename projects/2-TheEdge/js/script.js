//WELCOME

var stisnuto = 0; //prati dugmice
//YES
$(".yes").on('click', function(){
    if(stisnuto > 0){
        $(".choose-no-yes").addClass('scared');
        $(".retry").css({'display':'block'});
        $(".choose-no").hide(0);
        $(".yes").hide(0);
        $(".no").hide(0);
    }
    else{
        $(this).delay(3000).css({'opacity':'0'});
        $(".no").delay(1000).css({'opacity':'0'});
        $(".welcome-scroll").hide(0);
        $(".welcome-title h1").delay(3000).css({'color':'red'}).slideToggle('6s').toggleClass('slideLine');
        $(".welcome-title h2").delay(1000).slideToggle('6s').toggleClass('slideLine');
        $(".welcome-img").removeClass('scaleUpReversed').addClass('scaleDown');
        
        $(".welcome-container").delay(5000).hide(2000);
        
        setTimeout(function(){
            $(".main").css({'display':'block'});
            window.scrollTo(0,0).delay(3000);
        }, 5000);
    }
});

//NO
$(".no").on('click', function(){
    if(stisnuto == 0){
        stisnuto=+1;
    }
    else{
        $(".welcome-img").toggleClass('scaleUpReversed');
        $(this).css({'opacity':'0.3'}).off('click');
        $(".choose-no").hide(0);
        stisnuto=-1;
    }
    $(".welcome-scroll").hide(0);
    $(".welcome-title h1").delay(3000).slideToggle('3s').toggleClass('slideLine');
    $(".welcome-title h2").delay(1000).slideToggle('6s').toggleClass('slideLine');
    $(".welcome-img").toggleClass('scaleUp');
    $(".choose-no").delay(3000).queue(function (next){
        $(this).addClass('scared');
        next();});
});

//RETRY
$(".retry").on('click', function(){
    location.reload();
});

//MAIN
//burger

$(".burger-container").on('click', function(){
  $(this).toggleClass("open");
});

//burger izabran
$(".bar a").on('click', function(){
  $(".burger-container").toggleClass("open");
});
