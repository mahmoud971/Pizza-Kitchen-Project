function initialize() {

    scrollwheel: false
};

$(function() {
    $('.flexslider').flexslider({
        controlNav: false,
        nextText: '',
        prevText: '',
    });;
});


$('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
});