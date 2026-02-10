const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
];

const select = document.querySelector("#product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});

//Footer
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;