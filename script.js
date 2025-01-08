const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Function to update the footer with the current date and time
function updateFooterDateTime() {
  const now = new Date();

  // Format date and time
  const formattedDate = now.toLocaleDateString(); // e.g., "01/08/2025"
  const formattedTime = now.toLocaleTimeString(); // e.g., "14:45:30"

  // Combine date and time
  const dateTimeString = `Date: ${formattedDate} | Time: ${formattedTime}`;

  // Update the footer element
  const footerElement = document.getElementById("footerDateTime");
  footerElement.textContent = dateTimeString;
}

// Update the footer date and time on page load
updateFooterDateTime();

// Optional: Update the time every second
setInterval(updateFooterDateTime, 1000);
