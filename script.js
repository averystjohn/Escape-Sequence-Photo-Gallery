const imageSources = [
  "assets/trail.jpg",
  "assets/lakesunset.jpg",
  "assets/cabin.jpg",
  "assets/doe.jpg",
  "assets/starrynight.jpg",
];

const altTexts = [
  "Trail through a forest",
  "Sunset over a lake",
  "Cabin in the woods at night",
  "Deer standing in a forest",
  "Starry night sky with bright stars",
];

function addThumbnail(imageSource, altText) {
  // 1.1 Create the image element
  let image = document.createElement("img");

  // 1.2 Set src and alt attributes
  image.src = imageSource;
  image.alt = altText; // Set alt text here for the thumbnail
  image.classList.add("thumbnail");

  // 1.3 Append the image element to the thumbnail container
  let thumbnailContainer = document.getElementById("thumbnail-container");
  thumbnailContainer.appendChild(image);

  // 1.4 Add click event to display full-size image
  image.addEventListener("click", function() {
    let fullsizeImage = document.getElementById("fullsize-image");
    fullsizeImage.src = imageSource;
    fullsizeImage.alt = altText; // Set alt text for the full-size image
  });
}

function addAllThumbnails() {
  // Loop through imageSources and altTexts arrays to add thumbnails
  for (let i = 0; i < imageSources.length; i++) {
    addThumbnail(imageSources[i], altTexts[i]);
  }
}

// Display the first image on page load
function displayFirstImage() {
  let fullsizeImage = document.getElementById("fullsize-image");
  fullsizeImage.src = imageSources[0];
  fullsizeImage.alt = altTexts[0]; // Set alt text for the first image
}

document.addEventListener("DOMContentLoaded", function() {
  addAllThumbnails();
  displayFirstImage();
});
