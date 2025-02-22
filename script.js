document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.background = "#222";
            header.style.transition = "background 0.5s";
        } else {
            header.style.background = "#333";
        }
    });
    
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});
