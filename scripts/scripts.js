const images = ["./images/gc-chicken.jpeg", "./images/hdspaghetti.jpeg", "./images/pork.jpeg"]; // Add image URLs here
const paths =["./recipes/garlicChicken.html", "./recipes/spaghetti.html", "./recipes/tenderloin.html"]; // Add relative paths here
let currentIndex = 0;

const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const image = document.getElementById("image");
const imageLink = document.getElementById("image-link");

function showImage(index) {
    image.src = images[index];
    imageLink.href = paths[index]; // Set the anchor's href to the corresponding relative path
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
