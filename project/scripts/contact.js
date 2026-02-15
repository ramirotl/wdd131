const form = document.querySelector("#contact-form");
const confirmation = document.querySelector("#confirmation");

if (form) {
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const fullname = form.fullname.value;
        const email = form.email.value;
        const message = form.message.value;
        const travelDate = form.travelDate.value;

        // Get selected radio
        const travelerType = form.travelerType.value;

        // Get selected checkboxes
        const selectedDestinations = [];
        const checkboxes = document.querySelectorAll('input[name="destinations"]:checked');

        checkboxes.forEach((checkbox) => {
            selectedDestinations.push(checkbox.value);
        });

        const formData = {
            fullname,
            email,
            travelerType,
            selectedDestinations,
            travelDate,
            message,
            dateSubmitted: new Date().toLocaleString()
        };

        localStorage.setItem("contactSubmission", JSON.stringify(formData));

        confirmation.textContent = "Thank you! Your message has been saved.";

        form.reset();
    });
}
