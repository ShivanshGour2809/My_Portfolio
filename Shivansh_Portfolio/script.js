// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.replace("fa-bars", "fa-xmark");

    } else {

        icon.classList.replace("fa-xmark", "fa-bars");

    }

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.replace("fa-xmark", "fa-bars");

    });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .info-card, " +
    ".education-card, .skill-card, .career-box, " +
    ".project-box, .contact-info, .contact-message"
);

revealElements.forEach(function(element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition = "all 0.7s ease";

});


const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.1
});


revealElements.forEach(function(element) {

    observer.observe(element);

});