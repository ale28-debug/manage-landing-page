$(function () {

    ScrollReveal({
        reset: true // Reimposta l'animazione
    });

    // Sezione bring
    $h2Bring = $('.caption h2:first');
    ScrollReveal().reveal($h2Bring, { delay: 100 });

    $pBring = $('.caption p:first');
    ScrollReveal().reveal($pBring, { delay: 100 });

    $imgBring = $('.image img:first');
    ScrollReveal().reveal($imgBring, { delay: 100 });

    $btnBring = $('.caption .btn');
    ScrollReveal().reveal($btnBring, { delay: 100 });


    // Sezione manage
    $h2Manage = $('.caption h2:last');
    ScrollReveal().reveal($h2Manage, { delay: 100 });

    $pManage = $('.caption p:last');
    ScrollReveal().reveal($pManage, { delay: 100 });

    $firstArticle = $('.articles .first');
    ScrollReveal().reveal($firstArticle, { delay: 100 });

    $secondArticle = $('.articles .second');
    ScrollReveal().reveal($secondArticle, { delay: 100 });

    $thirdArticle = $('.articles .third');
    ScrollReveal().reveal($thirdArticle, { delay: 100 });

    // btn-slider
    $btnSlider = $('.btn-slider');
    ScrollReveal().reveal($btnSlider, { delay: 100 });


    // Sezione simplify
    $h2Simplify = $('.simplify h2');
    ScrollReveal().reveal($h2Simplify, { delay: 100 });

    $btnSimplify = $('.simplify .btn-simplify');
    ScrollReveal().reveal($btnSimplify, { delay: 100 });


    // Footer
    $footerLogo = $('.footer-logo img');
    ScrollReveal().reveal($footerLogo, { delay: 100 });

    $firstSocialIcon = $('.social img:first-child');
    ScrollReveal().reveal($firstSocialIcon, { delay: 200 });

    // Footer social icons
    $secondSocialIcon = $('.social img:nth-child(2)');
    ScrollReveal().reveal($secondSocialIcon, { delay: 300 });

    $thirdSocialIcon = $('.social img:nth-child(3)');
    ScrollReveal().reveal($thirdSocialIcon, { delay: 400 });

    $fourthSocialIcon = $('.social img:nth-child(4)');
    ScrollReveal().reveal($fourthSocialIcon, { delay: 500 });

    $lastSocialIcon = $('.social img:last');
    ScrollReveal().reveal($lastSocialIcon, { delay: 600 });


    // Footer link
    $footerFirstLink1 = $('.link .first a:first');
    ScrollReveal().reveal($footerFirstLink1, { delay: 100 });

    $footerSecondLink1 = $('.link .first a:nth-child(2)');
    ScrollReveal().reveal($footerSecondLink1, { delay: 200 });

    $footerThirdLink1 = $('.link .first a:nth-child(3)');
    ScrollReveal().reveal($footerThirdLink1, { delay: 300 });

    $footerLastLink1 = $('.link .first a:last');
    ScrollReveal().reveal($footerLastLink1, { delay: 400 });


    $footerFirstLink2 = $('.link .second a:first');
    ScrollReveal().reveal($footerFirstLink2, { delay: 500 });

    $footerSecondLink2 = $('.link .second a:nth-child(2)');
    ScrollReveal().reveal($footerSecondLink2, { delay: 600 });

    $footerLastLink2 = $('.link .second a:last');
    ScrollReveal().reveal($footerLastLink2, { delay: 700 });


    // info-footer
    $inputFooter = $(':input');
    ScrollReveal().reveal($inputFooter, { delay: 800 });

    $btnFooter = $('.info-footer .btn');
    ScrollReveal().reveal($btnFooter, { delay: 900 });








});