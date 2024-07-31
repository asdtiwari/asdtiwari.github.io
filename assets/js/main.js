AOS.init();

AOS.init ({

    // Settings that can be overridden on per-element basis, by 'data-aos-*' attributes:
    offset: 120, // offset (in pex) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700,  // default easing for AOS animations
    easing: 'ease', // default easing for AOS animations
    once: false,    // whether animation should happen only once - while scrolling down
    mirror: false,  // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom'   // defines which position of the element regading to the window screen

});


// User able to click submit only once for one message when the form will reset user can again submit
const scriptURL = 'https://script.google.com/macros/s/AKfycbzr-OahPtmr9u6C87rg01T-CvHKGVTit1LWnu0KqBOIJTWU41Oxw4Vx6kkdnEukuP6jbg/exec';
const form = document.forms['submit-to-google-sheet'];
var allowSubmit = true;
var element = document.getElementById("submit-query");
var msg = document.getElementById("submitted-msg");

function disableForUser(){ 
    if(allowSubmit) {
        allowSubmit = false;
    }
    else {
        element.setAttribute("disabled", "disabled");
    }
}

function enableForUser() {
    allowSubmit = true;
    element = document.getElementById("submit-query");
    element.removeAttribute("disabled");
}

if(element.addEventListener) {
    form.addEventListener('submit', e => {
        msg.innerHTML = 'Message is being sent...';
        disableForUser();
    }, false);
}
else {
    form.attachEvent('submit', e => {
        msg.innerHTML = 'Message is being sent...';
        disableForUser();
    }, false);
}



// Sending form data to google sheet
function sendTheQuery(e) {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>  {
        msg.innerHTML = "Message sent successfully!";
        setTimeout(() => { msg.innerHTML = ""; }, 2500);
        form.reset();
        enableForUser();
    })
    .catch(error => console.error('Error!', error.message))
}

if(element.addEventListener) {
    form.addEventListener('submit', e => {
        sendTheQuery(e);
    }, false);
}
else {
    form.attachEvent('submit', e => {
        sendTheQuery(e);
    }, false);
}
