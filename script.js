// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const storedTheme = localStorage.getItem("theme") || "light";
root.setAttribute("data-theme", storedTheme);
themeToggle.checked = storedTheme === "dark";

themeToggle.addEventListener("change", () => {
 const theme = themeToggle.checked ? "dark" : "light";
 root.setAttribute("data-theme", theme);
 localStorage.setItem("theme", theme);
});

// Nav links switching content
const navLinks = document.querySelectorAll('[data-target]');
const sections = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
 link.addEventListener("click", e => {
  e.preventDefault();
  const targetId = link.getAttribute("data-target");
  sections.forEach(section => {
   section.classList.toggle("show", section.id === targetId);
  });
 });
});

// Hero Explore Btn -> About
document.getElementById("exploreBtn").addEventListener("click", () => {
 sections.forEach(sec => sec.classList.remove("show"));
 document.getElementById("about").classList.add("show");
});

// Pop-up toggle
document.getElementById("popupToggle").addEventListener("click", () => {
 document.getElementById("popupContent").classList.toggle("show");
});
 
