$(document).ready(function () {
    // Ajouter un écouteur d'événements pour le lien "Voir détails"
    $(".text-blue a").on("click", function (event) {
        // Empêcher le comportement par défaut du lien
        event.preventDefault();

        // Afficher le modal
        $("#contactModal").modal("show");
    });
    let testimonyOwl = $("#testimony");
    let headerOwl = $("#header-carousel");

    $("#custom_preloader").fadeOut();

    // animate on scroll
    AOS.init({
        once: true,
        duration: 600,
    });

    // this script is for picking up the language abbr
    let language = document
        .querySelector(".language .dropdown a.dropdown-item.active")
        .getAttribute("language");
    document.querySelector(".language .dropdown .active-language").innerHTML =
        language;

    // this script is about toggling the menu on the mobile view
    $(".hamburger").on("click", () => {
        $(".hamburger").toggleClass("toggled");
        $(".main_content").toggleClass("toggled");
        $(".mobile_navigation_menu").toggleClass("active");
    });

    $("main").on("click", () => {
        $(".hamburger").removeClass("toggled");
        $(".main_content").removeClass("toggled");
        $(".mobile_navigation_menu").removeClass("active");
    });

    $(".banner").on("click", () => {
        $(".hamburger").removeClass("toggled");
        $(".main_content").removeClass("toggled");
        $(".mobile_navigation_menu").removeClass("active");
    });

    // this script handles the top navbar change while scrolling
    $(window).on("scroll", () => {
        if ($(window).scrollTop() > 125) {
            $(".navbar_block").addClass("scrolled_navbar");
        } else {
            $(".navbar_block").removeClass("scrolled_navbar");
        }
    });

    // the testimony owl carousel setup
    testimonyOwl.owlCarousel({
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
        },
        smartSpeed: 450,
        margin: 0,
        loop: false,
        nav: false,
        dots: true,
        mouseDrag: true,
        touchDrag: true,
        autoplay: false,
        slideTransition: "ease-in-out",
    });

    // the header owl carousel setup
    headerOwl.owlCarousel({
        responsive: {
            0: {
                items: 1,
            },
        },
        smartSpeed: 450,
        margin: 0,
        loop: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 4500,
        animateOut: "fadeOut",
        slideTransition: "ease-in-out",
    });

    // handling custom navigation
    $("#testimony-next-slide").click(function () {
        testimonyOwl.trigger("next.owl.carousel");
    });
    $("#testimony-prev-slide").click(function () {
        testimonyOwl.trigger("prev.owl.carousel");
    });

    $("#header-next-slide").click(function () {
        headerOwl.trigger("next.owl.carousel");
    });
    $("#header-prev-slide").click(function () {
        headerOwl.trigger("prev.owl.carousel");
    });
});
