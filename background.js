// Send a HEAD request to Moodle
function sendReq() {
    req = new XMLHttpRequest();
    req.open("HEAD", "https://courses.iwu.edu/", true);
    req.send();
}

// Preserve the current cookie session by sending HEAD requests every so often
function preserve() {
    sendReq();

    setTimeout(preserve, 300000);  // wait 5 mins worth of millisecs, then repeat
}

preserve();
