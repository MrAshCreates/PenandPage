// Scroll to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

document.getElementById("back-to-top").onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Cookie consent
const cookieConsent = document.getElementById("cookie-consent");
const acceptCookiesBtn = document.getElementById("accept-cookies");
const declineCookiesBtn = document.getElementById("decline-cookies");

acceptCookiesBtn.onclick = function() {
    cookieConsent.style.display = "none";
    // Add code to track cookies (if applicable)
}

declineCookiesBtn.onclick = function() {
    cookieConsent.style.display = "none";
    // Add code to handle declined cookies (if applicable)
}
