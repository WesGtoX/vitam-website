let SLIDEINDEX = 100

showSlides(SLIDEINDEX);

function showSlides(index) {
    // GET SLIDES HTML AND DOTS
    let slides = document.querySelectorAll(".slide"),
        dots = document.querySelectorAll('.dot-navigation');

    // CHECK IF INDEX IS OUT OF BOUNDS
    if (index >= slides.length) SLIDEINDEX = 0;
    if (index < 0) SLIDEINDEX = slides.length - 1;

    // HIDE ALL THE SLIDERS AND REMOVE THE ACTIVE-DOT CLASS
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active-dot");
    }

    // SHOW DESIRED SLIDE & SET THE DOT AS ACTIVE
    slides[SLIDEINDEX].style.display = "block";
    dots[SLIDEINDEX].classList.add("active-dot");
}

// EVENT ON PREV ARROW
document.querySelector("#arrow-prev").addEventListener("click", function() {
    showSlides(--SLIDEINDEX);
});

// EVENT ON NEXT ARROW
document.querySelector("#arrow-next").addEventListener("click", function() {
    showSlides(++SLIDEINDEX);
});

// EVENT ON DOTS
document.querySelectorAll('.dot-navigation').forEach(
    function(element) {
        // GET INDEX OF THE DOT
        element.addEventListener("click", function() {
            let dots = Array.prototype.slice.call(this.parentElement.children),
                dotIndex = dots.indexOf(element);

            // CALL THE FUNCFTION FOR THE INDEX OF CLICKED DOT
            showSlides(SLIDEINDEX = dotIndex);
        });
    }
);

// AUTOMATIC SLIDESHOW
setInterval(function() {showSlides(++SLIDEINDEX)},5000);