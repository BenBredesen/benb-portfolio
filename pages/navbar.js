function loadNav() {
    if (currentPage != "home") {
        document.getElementById("navbar-home").addEventListener("click", () => {
            window.location.href = "index.html";
            return;
        });
    }
    if (currentPage != "work") {
        document.getElementById("navbar-work").addEventListener("click", () => {
            window.location.href = "my-work.html";
            return;
        });
    }
    if (currentPage != "other") {
        document.getElementById("navbar-other").addEventListener("click", () => {
            window.location.href = "other.html";
            return;
        });
    }
}

loadNav();