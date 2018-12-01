$(document).ready(function() {

    // Get the header height
    const headerHeight = $('.main-menu').outerHeight();
    
    const scrollLink = $("a[href^='#']")

    // Smooth scroll
    scrollLink.click(function(e) {
        
        const linkHref = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight + 20
        }, 1000);

        e.preventDefault();
    });

    
    // Change link color on scroll
    $(window).scroll(function() {

        const hrefLink = $(this).scrollTop();

        $('.slide-section').each(function (e) {

            if (hrefLink >= $($(this).attr('href')).offset().top - 100) {
                $('.slide-section').not(this).removeClass('active-link');
                $(this).addClass('active-link');
            }
        });

        // Change mobile link color on scroll
        $('.slide-mobile-section').each(function (e) {

            if (hrefLink >= $($(this).attr('href')).offset().top - 100) {
                $('.slide-mobile-section').not(this).removeClass('active-link');
                $(this).addClass('active-link');
            }
        });
    });


    // Change navbar size on scroll
    $(window).scroll(function() {

        const navSize = $(this).scrollTop();

        if(navSize > 300) {
            $('nav').addClass('scroll')
        } else {
            $('nav').removeClass('scroll')
        }
    });
    

    // Change footer contact icon color
    $('.link-color').hover(function() {
        $(this).addClass('hover-color');
    }, function() {
        $(this).removeClass('hover-color');
    });
    

    // Mobile burguer menu
	jQuery('.menu-icon').on('click', function() {
        jQuery('.menu-icon').toggleClass('change');
		jQuery('.mobile-nav').toggleClass('active');
	});
    
	jQuery('ul.mobile-nav li a').on('click', function() {
        jQuery('.menu-icon').removeClass('change');
		jQuery('.mobile-nav').removeClass('active');
	})
});