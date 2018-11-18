$(document).ready(function() {

    // Get the header height
    const headerHeight = $('.main-menu').outerHeight();

    const scrollLink = $('.slide-section')

    scrollLink.click(function(e) {
        
        const linkHref = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);

        e.preventDefault();
    });

    // Active link switching
    $(window).scroll(function() {

        const hrefLink = $(this).scrollTop();

        $('.slide-section').each(function (e) {

            if (hrefLink >= $($(this).attr('href')).offset().top - 100) {
                $('.slide-section').not(this).removeClass('active');
                $(this).addClass('active');
            }
        });
    });

    // Change navbar attribute on scroll
    $(window).scroll(function() {

        const navSize = $(this).scrollTop();

        if(navSize > 300) {
            $('nav').addClass('scroll')
        } else {
            $('nav').removeClass('scroll')
        }
    });
});