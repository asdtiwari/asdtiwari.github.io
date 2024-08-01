$(document).ready(function() {
    
    // Attach a click event listener to each nav-link inside the offcanvas to hide the offcanvas
    $('.offcanvas-body .nav-link, .offcanvas-header .navbar-brand').on('click', function() {
        // Close the offcanvas
        var offcanvasElement = $('#offcanvasNavbar');
        var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement[0]); // Get the instance of the offcanvas
        bsOffcanvas.hide(); // Hide the offcanvas
    });
    

    // Start of  JQuery Code to Submit the form to Google Sheet
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzr-OahPtmr9u6C87rg01T-CvHKGVTit1LWnu0KqBOIJTWU41Oxw4Vx6kkdnEukuP6jbg/exec';
    const form = $('[name="submit-to-google-sheet"]');
    var allowSubmit = true;
    const element = $("#submit-query");
    const msg = $("#submitted-msg");

    // Disable submit button for user
    function disableForUser(){ 
        if(allowSubmit) {
            allowSubmit = false;
        } else {
            element.prop("disabled", true); 
        }
    }

    // Enable Submit button for user
    function enableForUser() {
        allowSubmit = true;
        element.prop("disabled", false);
    }

    // Sending form data to Google Sheet
    function sendTheQuery(e) {
        e.preventDefault();
        $.ajax({
            url: scriptURL,
            type: 'POST',
            data: new FormData(form[0]),
            processData: false,
            contentType: false,
            success: function(response) {
                msg.text("Message sent successfully!");
                setTimeout(() => { msg.text(""); }, 2500);
                form[0].reset();
                enableForUser();
            },
            error: function(xhr, status, error) {
                console.error('Error!', error);
            }
        });
    }

    // Event Handling
    form.on('submit', function(e) {
        msg.text("Message is being sent...");
        disableForUser();
        sendTheQuery(e);
    });
    // End of  JQuery Code to Submit the form to Google Sheet


    /* Start of animate on scroll script code */
    function animateOnScroll() {
        $('.aos-fade-in, .aos-fade-up').each(function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            // Check if the element is in the viewport
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('aos-animate-in');
            } else {
                $(this).removeClass('aos-animate-in');
            }
        });
    }

    // Initial check and setup event listener for scrolling
    $(window).on('scroll', animateOnScroll);
    $(window).on('resize', animateOnScroll);
    animateOnScroll();
    /* End of animate on scroll script code */

});
