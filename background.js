// background.js
// by Matthew Sweeney
// 10/23/2020
// For extension to keep Moodle from kicking you out for inactivity

// Send a HEAD request to Moodle
function sendReq() {
    req = new XMLHttpRequest();
    req.open("HEAD", "https://courses.iwu.edu/", true);
    req.send();
}

// Preserve the current cookie session by sending HEAD requests every so often
function preserve() {
    sendReq();
    // wait 5 mins worth of millisecs, then repeat
    setTimeout(preserve, 300000);
}

preserve();
