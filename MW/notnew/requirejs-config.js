var config = {

    deps: [
        "js/main"
    ],

    paths: {
        "popper":"js/popper.min",
        'bootstrap':'js/bootstrap.bundle',
        "magnific-popup":"js/magnific-popup.min",
        "waypoints":"js/waypoints.min",
        "counterup":"js/counterup.min",
        "meanmenu":"js/meanmenu.min",
        'aos':'js/aos.min',
        'isotope':'js/isotope.min',
        'backgroundMove':'js/jquery.backgroundMove',
        'slick':'js/slick.min',
        'scrollUp':'js/scrollUp'
    } ,
    shim: {
        'bootstrap': {
            'deps': ['jquery']
        },
        'aos': {
            'deps': ['jquery']
        }
    }
}
