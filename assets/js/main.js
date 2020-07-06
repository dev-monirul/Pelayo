(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		$(".testimonial").owlCarousel({
			items:3,
			margin:80,
			loop:true,
			autoplay:true,
			dots:false,
			nav:true,
			navText: ["<img src='assets/img/icons/arrow-left.png'>", "<img src='assets/img/icons/arrow-right.png'>"],
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			responsive: {
                0: {
                    items: 1,
                },
                767: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 2
                }
            }
		});

		$(".featured-slider").owlCarousel({
			items:1,
			loop:true,
			autoplay:true,
			dots:false,
			nav:true,
			navText: ["<img src='assets/img/icons/arrow-left.png'>", "<img src='assets/img/icons/arrow-right.png'>"],
			autoplayTimeout: 3000,
            smartSpeed: 1000,
		});

		jQuery('nav').meanmenu({
			meanMenuContainer: '.mobile-menu-container',
			meanScreenWidth: "993"
		});

		$(".scroll-top").click(function () {
			$("html,body").animate({
				scrollTop: 0
			}, 1000);
		});
		$(window).scroll(function () {
			if ($(this).scrollTop() > 180) {
				$(".scroll-top").fadeIn();
			} else {
				$(".scroll-top").fadeOut();
			}
		});





	});


	jQuery(window).load(function () {


	});


}(jQuery));
