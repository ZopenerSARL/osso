$(document).ready(function () {
    // services-slider 
    $('#services-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        items: 1,
        smartSpeed: 1000,
        responsive: {
            0: {},
            600: {},
            1000: {}
        }
    })
})
