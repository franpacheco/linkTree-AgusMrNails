document.addEventListener("DOMContentLoaded", function() {
    VanillaTilt.init(document.querySelectorAll(".social_links ul li"), {
        max: 10,
        speed: 10,
        glare: true,
        "max-glare": 1
    });
});
