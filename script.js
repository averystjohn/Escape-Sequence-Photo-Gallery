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
  // 1.1 Create the element
  let image = document.createElement("img");
  
  // 1.2 Customize the element
  image.setAttribute("src", imageSource);
  image.setAttribute("alt", altText);  // Add alt text here
  image.classList.add("thumbnail");
  
  // 1.3 Append the element
  let thumbnailContainer = document.getElementById("thumbnail-container");
  thumbnailContainer.appendChild(image);
  
  // 1.4 Add the onclick
  image.addEventListener("click", function() {
    let fullsizeImage = document.getElementById("fullsize-image");
    fullsizeImage.setAttribute("src", imageSource);
    fullsizeImage.setAttribute("alt", altText);  // Set alt text for full-size image as well
  });
}

function addAllThumbnails() {
  // 2.1 Loop through imageSources
  for (let i = 0; i < imageSources.length; i++) {
    // 2.2 Call addThumbnail each iteration 
    addThumbnail(imageSources[i], altTexts[i]);
  }
}

// 2.3 Call addAllThumbnails
addAllThumbnails();

// LevelUp Display the first image on page load.

function displayFirstImage() {
  let fullsizeImage = document.getElementById("fullsize-image");
  fullsizeImage.setAttribute("src", imageSources[0]);
  fullsizeImage.setAttribute("alt", altTexts[0]);  // Set alt text for the first image
}

document.addEventListener("DOMContentLoaded", function() {
  displayFirstImage();
});
