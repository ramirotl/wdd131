let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

document.querySelector("#reviewCount").textContent = count;


//Footer
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;