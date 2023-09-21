const images = ["./images/gc-chicken.jpeg", "./images/hdspaghetti.jpeg", "./images/pork.jpeg"]; // Add image URLs here
const paths =["./recipes/garlicChicken.html", "./recipes/spaghetti.html", "./recipes/tenderloin.html"]; // Add relative paths here
const alts =["Garlic-Caper Chicken", "Quick Hot Dog Spaghetti", "Sheet Pan Pork with Roasted Vegetables"];
const descriptions = ["Delicious Garlic-Caper Chicken Recipe", "Quick and Easy Hot Dog Spaghetti Recipe", "Sheet Pan Pork with Roasted Vegetables Recipe"];

let currentIndex = 0;

const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const image = document.getElementById("image");
const imageLink1 = document.getElementById("image-link-1");
const imageLink2 = document.getElementById("image-link-2");
const imageDescription = document.getElementById("image-description");

function showImage(index) {
    image.src = images[index];
    imageLink1.href = paths[index]; // Set the anchor's href to the corresponding relative path
    imageLink2.href = paths[index];
    image.alt = alts[index];
    imageDescription.textContent = descriptions[index];
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Display the first image initially
showImage(currentIndex);
