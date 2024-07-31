AOS.init();

AOS.init ({

    // Settings that can be overridden on per-element basis, by 'data-aos-*' attributes:
    offset: 120, // offset (in pex) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 900,  // default easing for AOS animations
    easing: 'ease', // default easing for AOS animations
    once: false,    // whether animation should happen only once - while scrolling down
    mirror: false,  // whether elements should animate out while scrolling past them
    //anchorPlacement: 'top-bottom'   // defines which position of the element regading to the window screen

});

 
$(document).ready(function() {
    
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

});
