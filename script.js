const imageSources = [
  "assets/trail.jpg",
  "assets/lakesunset.jpg",
  "assets/cabin.jpg",
  "assets/doe.jpg",
  "assets/starrynight.jpg",
];

function addThumbnail(imageSource) {
  // 1.1 Create the element
  let image = document.createElement("img");
  
  // 1.2 Customize the element
  image.setAttribute("src", imageSource);
  image.classList.add("thumbnail");
  
  // 1.3 Append the element
  let thumbnailContainer = document.getElementById("thumbnail-container");
  thumbnailContainer.appendChild(image);
  
  // 1.4 Add the onclick
  image.addEventListener("click", function() {
    let fullsizeImage = document.getElementById("fullsize-image");
    fullsizeImage.setAttribute("src", imageSource);
  });
  
}

function addAllThumbnails() {
  // 2.1 Loop through imageSources
  for (i = 0; i <imageSources.length; i++) {
    // 2.2 Call addThumbnail each iteration 
    addThumbnail(imageSources[i]);
  }
}

// 2.3 Call addAllThumbnails
addAllThumbnails();

// LevelUp Display the first image on page load.

function displayFirstImage() {
  let fullsizeImage = document.getElementById("fullsize-image");
  fullsizeImage.setAttribute("src", imageSources[0]);
}

document.addEventListener("DOMContentLoaded", function() {
  displayFirstImage();
});
