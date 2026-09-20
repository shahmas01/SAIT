 /* =========================================
   SAIT INTRO + HOMEPAGE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       INTRO ELEMENTS
    ========================================= */

    const introContainer = document.getElementById("intro-container");
    const introVideo = document.getElementById("intro-video");
    const mainContent = document.getElementById("main-content");
    const skipBtn = document.getElementById("skip-btn");

    const navbar = document.querySelector(".navbar-wrapper");


    /* =========================================
       ENTER MAIN WEBSITE
    ========================================= */

    const enterSite = () => {

        /* Fade out intro */
        if (introContainer) {
            introContainer.style.opacity = "0";
        }


        /* Show main content */
        if (mainContent) {
            mainContent.style.opacity = "1";
        }


        /* Enable page scrolling */
        document.body.style.overflow = "auto";


        /* =========================================
           FIX NAVBAR AFTER INTRO
        ========================================= */

        if (navbar) {
            navbar.classList.add("navbar-fixed");
        }


        /* Remove intro after fade */
        setTimeout(() => {

            if (introContainer) {
                introContainer.style.display = "none";
            }

        }, 800);

    };


    /* =========================================
       VIDEO ENDS
    ========================================= */

    if (introVideo) {

        introVideo.addEventListener("ended", enterSite);

    }


    /* =========================================
       SKIP BUTTON
    ========================================= */

    if (skipBtn) {

        skipBtn.addEventListener("click", enterSite);

    }


    /* =========================================
       NAVBAR ACTIVE LINK
    ========================================= */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");


    window.addEventListener("scroll", () => {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            const target = link.getAttribute("href");


            if (target === `#${currentSection}`) {

                link.classList.add("active");

            }

        });

    });


    /* =========================================
       ROTATING LOGO
    ========================================= */

    const rotatingLogo = document.querySelector(".rotating-logo");


    if (rotatingLogo) {

        rotatingLogo.addEventListener("mouseenter", () => {

            rotatingLogo.style.animationDuration = "0.6s";

        });


        rotatingLogo.addEventListener("mouseleave", () => {

            rotatingLogo.style.animationDuration = "1s";

        });

    }


    /* =========================================
       SEARCH BUTTON
    ========================================= */

    const searchButton = document.querySelector(".search-btn");


    if (searchButton) {

        searchButton.addEventListener("click", () => {

            alert("Search feature coming soon.");

        });

    }

});