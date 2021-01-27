// Hamburger button
var $hamburger = $('.hamburger-menu');

$hamburger.on('click', function () {
    $hamburger.toggleClass('change');
});

// Mobile navigation menu
var $mobileNavigation = $('.mobile-navigation');

$hamburger.on('click', function () {
    $mobileNavigation.toggle();
});




