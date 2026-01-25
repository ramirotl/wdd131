// Weather
document.addEventListener("DOMContentLoaded", () => {
    const temp = parseFloat(document.getElementById("temp").textContent);
    const wind = parseFloat(document.getElementById("wind").textContent);

    function calculateWindChill(t, w) {
        return (13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16)).toFixed(1);
    }
    const windChill =
        (temp <= 10 && wind > 4.8) ? `${calculateWindChill(temp, wind)} °C` : "N/A";
    document.getElementById("windchill").textContent = windChill;
});


//Footer
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

