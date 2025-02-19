// GSAP Animations
gsap.from(".hero h2", { opacity: 0, y: -50, duration: 2 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 2, delay: 0.5 });
gsap.from(".explore-btn", { opacity: 0, scale: 0.5, duration: 2, delay: 1 });

// Navbar animation on scroll
window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0, 0, 0, 0.9)";
    } else {
        nav.style.background = "rgba(0, 0, 0, 0.8)";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".project-card").forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: i * 0.3,
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
    });

    // Navbar Animation
    window.addEventListener("scroll", function () {
        let nav = document.querySelector("nav");
        if (window.scrollY > 50) {
            nav.style.background = "rgba(0, 0, 0, 0.9)";
        } else {
            nav.style.background = "rgba(0, 0, 0, 0.8)";
        }
    });
});

gsap.to("body", {
    backgroundColor: "lightblue",
    scrollTrigger: {
        trigger: "body",
        start: "top 50%",
        toggleActions: "play none none reverse",
    },
});

