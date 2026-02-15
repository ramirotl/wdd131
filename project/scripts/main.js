// // Select elements
// const menuButton = document.querySelector("#menu-button");
// const navigation = document.querySelector("#navigation");

// // Toggle Menu Function
// function toggleMenu() {
//     navigation.classList.toggle("open");

//     if (navigation.classList.contains("open")) {
//         menuButton.textContent = "✖";
//     } else {
//         menuButton.textContent = "☰";
//     }
// }

// // Display Current Year
// function displayYear() {
//     const currentYear = new Date().getFullYear();
//     yearSpan.textContent = `${currentYear}`;
// }

// // Event Listeners
// menuButton.addEventListener("click", toggleMenu);

// // Initialize
// displayYear();


// //Footer
// const year = document.querySelector("#currentyear");
// const today = new Date().getFullYear();

// year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
// document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

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
