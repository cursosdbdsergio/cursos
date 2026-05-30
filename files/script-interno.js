const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        body.classList.remove("dark");
        body.classList.add("light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
    }
});
