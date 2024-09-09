//JS for nav bar - Dark mode
let darkModeBtn = document.querySelectorAll(".DarkBtn");
let main = document.getElementsByTagName("main")[0]; // Accessing the first <main> element
let container = document.querySelector(".container");
let header = document.querySelector("header"); // Using querySelector to get the first <header> element
let navbar = document.querySelector(".navbar");
let hambergar = document.querySelector(".hambergar");
let left = document.querySelector(".left");
let dark = 0;

// Toggle dark mode function
const toggleDarkMode = () => {
  if (dark === 0) {
    // Switch to dark mode
    dark = 1;
    navbar.style.backgroundColor = "rgb(40, 40, 40)";
    header.style.backgroundColor = "rgb(40, 40, 40)";
    header.style.color = "white";
    main.style.backgroundColor = "#37353A";
    darkModeBtn.forEach(btn => {
      btn.innerText = "Light";
    });
    container.style.backgroundColor = "#2D292F";
    container.style.color = "white";
    left.style.color = "black";
    hambergar.classList.add("inverted");
  } else {
    // Switch to light mode
    dark = 0;
    navbar.style.backgroundColor = "white";
    header.style.backgroundColor = "white";
    main.style.backgroundColor = "#e7eeee";
    header.style.color = "black";
    darkModeBtn.forEach(btn => {
      btn.innerText = "Dark";
    });
    container.style.backgroundColor = "#fff";
    container.style.color = "black";
    hambergar.classList.remove("inverted");
  }
};

// Event listener for dark mode button click
darkModeBtn.forEach(btn => {
  btn.addEventListener("click", toggleDarkMode);
});

// Add event listener on hamburger icon
hambergar.addEventListener("click", () => {
  left.style.left = "40px";
  left.style.display = "block";
});

// Add event listener on cross button
let cross = document.querySelector(".cross")
cross.addEventListener("click", () => {
  left.style.left = "-425px";
  left.style.display = "none";
});
