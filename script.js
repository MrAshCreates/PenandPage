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

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    // Send form data using AJAX or fetch API
    // Example using fetch API:
    fetch("contact.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle response (e.g., show success message)
        console.log(data);
    })
    .catch(error => {
        // Handle errors (e.g., show error message)
        console.error("Error:", error);
    });
});
