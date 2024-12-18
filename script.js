// Display a welcome message when the user opens the homepage
window.onload = function () {
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        alert("Welcome to My Personal Website! Explore my Resume and Bio-data.");
    }
};

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").split(".")[0];
            if (targetId === "index") {
                window.location.href = "index.html";
            } else {
                window.location.href = this.getAttribute("href");
            }
        });
    });
});

// Dynamic year display in the footer
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} Your Name. All Rights Reserved.`;
});
