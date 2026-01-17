// Navigation menu

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const header = document.querySelector("header");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    header.classList.toggle("open");
});

//Footer
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;