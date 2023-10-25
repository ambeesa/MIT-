var typed = new Typed(".text", {
  strings: ["Growing Diversity", "Transforming Tech"],
  typeSpeed: 50,   // Decreased from 250
  backSpeed: 50,   // Decreased from 250
  backDelay: 150,   // Decreased from 500
  loop: true,
});



// Get references to the button and the element to animate
const animationButton = document.getElementById("navbar");
const animatedElement = document.querySelector(".animated-element");

// Add a click event listener to the button
animationButton.addEventListener("click", () => {
  // Add a CSS class that triggers the animation
  animatedElement.classList.add("animate-slide");
  
  // Remove the class after the animation duration (adjust this time as needed)
  setTimeout(() => {
    animatedElement.classList.remove("animate-slide");
  }, 1000); // 1000ms = 1 second (adjust as needed)
});






