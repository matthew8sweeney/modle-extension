// main.js
// by Matthew Sweeney
// 10/23/2020
// For the Modle extension, to keep Moodle from ending your session

// Preserve the current cookie session by sending HEAD requests every so often
function preserve() {
    sendReq();

    setTimeout(preserve, 300000);  // wait 5 mins worth of millisecs, then repeat
}

// Send a HEAD request to Moodle
function sendReq() {
    req = new XMLHttpRequest();
    req.open("HEAD", "https://courses.iwu.edu/", true);
    req.send();
}

function jqSendReq() {
    $.ajax({
        type: "HEAD",
        async: true,
        url: "https://courses.iwu.edu/"
    });
}


function main() {
    document.addEventListener("DOMContentLoaded", () => {
        btn = document.getElementById("btnAction");
        btn.addEventListener("click", preserve);
    });
}

main();
