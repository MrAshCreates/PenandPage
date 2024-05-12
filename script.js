document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector('.gallery');

    // Array of image URLs
    const imageUrls = [
        'assets/frontright.jpg',
        'assets/artwindow.jpg',
        'assets/bookimg.jpg',
        'assets/puzzlearea.jpg',
        'assets/readingarea.jpg',
        'assets/snackstation.jpg'
        // Add more image URLs as needed
    ];

    // Function to create and append image elements to the gallery
    function loadImages() {
        imageUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = 'Gallery Image';
            gallery.appendChild(img);
        });
    }

    // Refresh images when all images are loaded
    let loadedImagesCount = 0;
    const totalImages = imageUrls.length;

    function imageLoaded() {
        loadedImagesCount++;
        if (loadedImagesCount === totalImages) {
            loadImages();
        }
    }

    imageUrls.forEach(url => {
        const tempImg = new Image();
        tempImg.src = url;
        tempImg.onload = imageLoaded;
    });
});


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
