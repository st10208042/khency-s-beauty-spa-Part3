// JavaScript source code

// Search and filter beauty services
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("serviceSearch");
    const searchMessage = document.getElementById("searchMessage");
    const serviceCards = document.querySelectorAll(".service-card");

    if (!searchInput || !searchMessage || serviceCards.length === 0) {
        return;
    }

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let visibleServices = 0;

        serviceCards.forEach(function (card) {
            const serviceName = card.textContent.toLowerCase();
            const matches = serviceName.includes(searchTerm);

            card.hidden = !matches;

            if (matches) {
                visibleServices++;
            }
        });

        if (visibleServices === 0) {
            searchMessage.textContent = "No services found. Please try another search.";
        } else {
            searchMessage.textContent =
                visibleServices + " service(s) found.";
        }
    });
});


// Image Gallery Lightbox
document.addEventListener("DOMContentLoaded", function () {
    const serviceImages = document.querySelectorAll(".service-card img");

    if (serviceImages.length === 0) {
        return;
    }

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Enlarged treatment image");

    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Close image">&times;</button>
        <img class="lightbox-image" src="" alt="">
        <p class="lightbox-caption"></p>
    `;

    document.body.appendChild(lightbox);

    const largeImage = lightbox.querySelector(".lightbox-image");
    const caption = lightbox.querySelector(".lightbox-caption");
    const closeButton = lightbox.querySelector(".lightbox-close");

    function closeLightbox() {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    }

    serviceImages.forEach(function (image) {
        image.style.cursor = "zoom-in";

        image.addEventListener("click", function () {
            largeImage.src = image.src;
            largeImage.alt = image.alt;
            caption.textContent =
                image.closest(".service-card")
                    .querySelector("h3").textContent;

            lightbox.classList.add("active");
            document.body.style.overflow = "hidden";
            closeButton.focus();
        });
    });

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });
});

// Enquiry Form Submission
document.addEventListener("DOMContentLoaded", function () {
    const enquiryForm = document.getElementById("enquiry-form");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you for contacting Khency's Beauty & Wellness Spa! Your enquiry has been received.");

            enquiryForm.reset();
        });
    }
});

// Contact Form Submission
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you for contacting Khency's Beauty & Wellness Spa! Your message has been received.");

            contactForm.reset();
        });
    }
});

