// crysler zgrada
$(".crysler-building .circle, .crysler-building .crysler-title").hover(function () {
    $(".crysler-building .crysler-title, .bg2").toggleClass('active');
});

// wtc zgrada
$(".wtc-building .circle, .wtc-building .wtc-title").hover(function () {
    $(".wtc-building .wtc-title, .bg3").toggleClass('active');
});

// jos zgrada
$(".more-building .circle, .more-building .more-title").hover(function () {
    $(".more-building .more-title").toggleClass('active');
});

// zoomout i prelaz na more info
$(".main .title .btn").on('click', function () {
    $(".main").toggleClass('scale');
    $(".more-info").addClass('blur');
    $(".main-zoom-in").css({"display": "block"});
    $(".main .title").addClass('bega');
    $(".more-info-title").addClass('border');
});

// vracanje na main
$(".main-zoom-in").on('click', function () {
    $(".main").removeClass('scale');
    $(".main-zoom-in").css({"display": "none"});
    $(".main .title").removeClass('bega');
    $(".more-info").removeClass('blur');
    $(".more-info-title").removeClass('border');
});