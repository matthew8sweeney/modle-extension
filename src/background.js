// background.js
// by Matthew Sweeney
// 10/23/2020
// For extension to keep Moodle from kicking you out for inactivity

// Send a HEAD request to Moodle
function sendReq() {
    chrome.cookies.getAll({"domain": "https://courses.iwu.edu", "name": "IDMSESSID"}, (cookies) => {
        req = new XMLHttpRequest();
        req.open("HEAD", "https://courses.iwu.edu/", true);
        // req.setRequestHeader("cookie", "IDMSESSID=test_value")
        req.withCredentials = "true";
        req.send();
        console.log(req);
        console.log("cookies found:");
        console.log(cookies);
    })
}

// Preserve the current cookie session by sending HEAD requests every so often
function preserve() {
    sendReq();
    // wait 5 mins worth of millisecs, then repeat
    setTimeout(preserve, 300000);
    // setTimeout(preserve, 30000);  // for testing
}

preserve();
