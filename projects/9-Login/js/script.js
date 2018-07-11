
// tackice prelaz
$(".dot, .around").on('click', function(){
    $(".login-screen").toggleClass('slideLeft');
    $(".register-screen").toggleClass('slideLeft');
});

// prelaz na uspesno ste se logovali
$(".login").on('click', function(){
    $(".login-screen").addClass("slideDown");
    $(".accept").addClass("visible"); 
    $(".trigger").addClass("drawn");
});

