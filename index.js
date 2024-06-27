// Switching content of about section and skills section
function openTab(tabname) {
    
    var tablinks = document.getElementsByClassName("tab-link");
    var tabcontents = document.getElementsByClassName("tab-content");

    for(var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    for(var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

// User only able to click submit only once for one message when the form will reset user can again submit
var allowSubmit = true;
var element = null;
function disableForUser(){
    element = document.getElementById("submit-query");
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

// Sending form data to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbw7WUGloiVd5x2eraLH4Qh0ZGhHK6mLfn9RlNmcnzUbMhGRn5F4FJ3XP-QntjAi70elmg/exec'
const form = document.forms['submit-to-google-sheet']
var msg = document.getElementById("submitted-msg");
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>  {
        msg.innerHTML = "Message sent successfully!";
        setTimeout(() => { msg.innerHTML = ""; }, 5000);
        form.reset();
        enableForUser();
    })
    .catch(error => console.error('Error!', error.message))
})
