$(window).scroll(function() {
    $('div.fixed-top').toggleClass('scrolled', $(this).scrollTop() > 50);
});