document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.querySelector(".dropdown__toggle");
    const dropdown = document.querySelector(".dropdown");

    toggle.addEventListener("click", function(e) {
        e.preventDefault();
        dropdown.classList.toggle("show");

        // If menu is opened, scroll to top smoothly
        if (dropdown.classList.contains("show")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });

    // Close dropdown if clicking outside
    document.addEventListener("click", function(e) {
        if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove("show");
        }
    });
});
