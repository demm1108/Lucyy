const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const imageContainer = document.getElementById("image-container");
const overlay = document.getElementById("overlay");

noButton.addEventListener("click", () => {
  let currentFontSize = parseFloat(
    window.getComputedStyle(yesButton, null).getPropertyValue("font-size")
  );
  yesButton.style.fontSize = currentFontSize + 5 + "px";
});

yesButton.addEventListener("click", () => {
  overlay.style.display = "block";
  imageContainer.style.display = "block";
});

// Close modal when clicking outside the image
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  imageContainer.style.display = "none";
});
