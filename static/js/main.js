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
});