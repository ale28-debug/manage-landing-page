$(function () {
    var $overlay = $('.overlay');
    var $hamburger = $('.hamburger-menu');
    var $mobileNavigation = $('.mobile-navigation');

    var $hideImage = $('.image:first');

    var $bringMargin = $('#bring');

    $hamburger.on('click', function () {
        if ($mobileNavigation.css('display') === 'block') {
            $overlay.css('background-color', 'rgba(0,0,0,0.5');
            $hideImage.hide();
            $bringMargin.css('margin-top', '300px');
        }
        else {
            $overlay.css('background-color', '#fff');
            $hideImage.show();
            $bringMargin.css('margin-top', '0');
        }
    });
});




