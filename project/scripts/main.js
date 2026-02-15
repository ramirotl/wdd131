// Select elements
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const header = document.querySelector("header");

// Toggle Menu
if (hamButton) {
    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");
        header.classList.toggle("open");
    });
}

// Footer Year
const year = document.querySelector("#year");
if (year) {
    year.textContent = new Date().getFullYear();
}

// Last Modified
const lastModified = document.querySelector("#lastModified");
if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}
