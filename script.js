console.log("Script is loaded!");

document.addEventListener("DOMContentLoaded", function () {
  // Select the toggle button and the dropdown menu
  const toggleBtn = document.querySelector(".toggle-button");
  const dropdown = document.querySelector(".dropdown-menu");

  // Add a click event listener to the toggle button
  toggleBtn.addEventListener("click", () => {
    console.log("Sclick works!");
    // Toggle the 'top-16' class on the dropdown menu
    dropdown.classList.toggle("top-16");
  });
});
