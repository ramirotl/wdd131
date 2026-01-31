// Navigation menu

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const header = document.querySelector("header");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    header.classList.toggle("open");
});

// Array of temples
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Cochabamba Bolivia",
        location: "Cochabamba, Bolivia",
        dedicated: "2000, April, 30",
        area: 35500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13721-main.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    },
    {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Colombia",
        dedicated: "1999, April, 24",
        area: 53500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
    }
];

//createTempleCard(temples);

// function createTempleCard() {
//     temples.forEach((temple) => {
//         let card = document.createElement("section");
//         let name = document.createElement("h3");
//         let location = document.createElement("p");
//         let dedicated = document.createElement("p");
//         let area = document.createElement("p");
//         let image = document.createElement("img");

//         name.textContent = temple.templeName;
//         location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
//         dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
//         area.innerHTML = `<span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft`;
//         image.setAttribute("src", temple.imageUrl);
//         image.setAttribute("alt", `Image of ${temple.templeName} Temple`);
//         image.setAttribute("loading", "lazy");
    
//         card.appendChild(name);
//         card.appendChild(location);
//         card.appendChild(dedicated);
//         card.appendChild(area);
//         card.appendChild(image);
    
//         document.querySelector(".container").appendChild(card);
//     })
// };

//new approach to create temple cards

const container = document.querySelector(".container");

function displayTemples(templeList) {
    container.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `Image of ${temple.templeName} Temple`;
        image.loading = "lazy";

        card.append(name, location, dedicated, area, image);
        container.appendChild(card);
    });
}
displayTemples(temples);

//filtering functionality
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = link.textContent;

        switch (filter) {
            case "Old":
                displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
                break;
            case "New":
                displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
                break;
            case "Large":
                displayTemples(temples.filter(t => t.area > 90000));
                break;
            case "Small":
                displayTemples(temples.filter(t => t.area < 10000));
                break;
            default:
                displayTemples(temples);
        }

        document.querySelector("h1").textContent = filter;
    });
});


//Footer
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;