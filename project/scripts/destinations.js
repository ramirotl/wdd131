const destinations = [
    {
        name: "Salar de Uyuni",
        location: "Uyuni, Bolivia",
        category: "Nature",
        image: "images/uyuni.webp",
        description: "The world's largest salt flat and one of Bolivia's most breathtaking natural wonders."
    },
    {
        name: "Lake Titicaca",
        location: "Copacabana, Bolivia",
        category: "Culture",
        image: "images/titicaca.webp",
        description: "The highest navigable lake in the world with rich cultural history."
    },
    {
        name: "Madidi National Park",
        location: "La Paz Department, Bolivia",
        category: "Nature",
        image: "images/madidi.webp",
        description: "One of the most biodiverse national parks in the world."
    },
    {
        name: "Sucre",
        location: "Chuquisaca, Bolivia",
        category: "Cities",
        image: "images/sucre.webp",
        description: "Bolivia's constitutional capital known for its colonial architecture."
    },
    {
        name: "The Carnival of Oruro",
        location: "Oruro Department, Bolivia",
        category: "Culture",
        image: "images/oruro.webp",
        description: "A vibrant cultural festival recognized by UNESCO for its rich traditions and colorful costumes."
    },
    {
        name: "Santa Cruz de la Sierra",
        location: "Santa Cruz, Bolivia",
        category: "Cities",
        image: "images/scz.webp",
        description: "Bolivia's largest city and economic hub, known for its modern amenities and vibrant nightlife."
    }
];

const container = document.querySelector("#destination-cards");

function displayDestinations(destinations) {

    container.innerHTML = "";

    destinations.forEach(destination => {

        const card = document.createElement("article");

        const img = document.createElement("img");
        img.src = destination.image;
        img.alt = destination.name;
        img.loading = "lazy";
        img.width = 400;
        img.height = 300;

        const title = document.createElement("h3");
        title.textContent = destination.name;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${destination.location}`;

        const description = document.createElement("p");
        description.textContent = destination.description;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(location);
        card.appendChild(description);

        container.appendChild(card);
    });
}

displayDestinations(destinations);

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        if (category === "All") {
            displayDestinations(destinations);
        } else {
            const filtered = destinations.filter(destination =>
                destination.category === category
            );

            displayDestinations(filtered);
        }

    });

});
