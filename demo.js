 /* =========================================
   SAIT WEBSITE JAVASCRIPT
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
       INTRO - PLAY ONLY ON FIRST VISIT
    ========================================= */

    const introPlayed = sessionStorage.getItem("saitIntroPlayed");


    /* =========================================
       ENTER MAIN WEBSITE
    ========================================= */

    const enterSite = () => {

        /* Remember that intro has played */
        sessionStorage.setItem("saitIntroPlayed", "true");


        /* Fade out intro */
        if (introContainer) {
            introContainer.style.opacity = "0";
        }


        /* Show homepage */
        if (mainContent) {
            mainContent.style.opacity = "1";
        }


        /* Enable scrolling */
        document.body.style.overflow = "auto";


        /* Fix navbar */
        if (navbar) {
            navbar.classList.add("navbar-fixed");
        }


        /* Completely remove intro */
        setTimeout(() => {

            if (introContainer) {
                introContainer.style.display = "none";
            }

        }, 800);

    };


    /* =========================================
       CHECK INTRO STATUS
    ========================================= */

    if (introPlayed) {

        /*
        =========================================
        RETURNING TO WEBSITE

        Example:
        Executives → Home
        Events → Home
        Placements → Home

        Intro will NOT play again.
        =========================================
        */

        if (introContainer) {
            introContainer.style.display = "none";
            introContainer.style.opacity = "0";
        }

        if (mainContent) {
            mainContent.style.opacity = "1";
        }

        document.body.style.overflow = "auto";

        if (navbar) {
            navbar.classList.add("navbar-fixed");
        }

    } else {

        /*
        =========================================
        FIRST VISIT

        Intro plays normally.
        =========================================
        */

        if (introContainer) {
            introContainer.style.display = "flex";
            introContainer.style.opacity = "1";
        }

        if (mainContent) {
            mainContent.style.opacity = "0";
        }

        document.body.style.overflow = "hidden";


        /* =========================================
           VIDEO ENDS
        ========================================= */

        if (introVideo) {

            introVideo.addEventListener("ended", () => {
                enterSite();
            });

        }


        /* =========================================
           SKIP BUTTON
        ========================================= */

        if (skipBtn) {

            skipBtn.addEventListener("click", () => {
                enterSite();
            });

        }

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