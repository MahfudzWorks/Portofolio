// Animasi Typing Job Title
const jobTitles = [
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];
let index = 0;

function typeJobTitle(title, element) {
  let i = 0;
  element.classList.add("typing");
  const interval = setInterval(() => {
    if (i < title.length) {
      element.textContent += title.charAt(i);
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        eraseJobTitle(element);
      }, 1000);
    }
  }, 150);
}

function eraseJobTitle(element) {
  let text = element.textContent;
  const interval = setInterval(() => {
    if (text.length > 0) {
      text = text.slice(0, -1);
      element.textContent = text;
    } else {
      clearInterval(interval);
      index = (index + 1) % jobTitles.length;
      setTimeout(() => {
        typeJobTitle(jobTitles[index], element);
      }, 500);
    }
  }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
  const jobTitleElement = document.getElementById("job-title");
  typeJobTitle(jobTitles[index], jobTitleElement);
});

// Function untuk Tampilkan Panel
function showPanel(panel) {
  const categories = document.querySelectorAll(".myskills-categories span");
  categories.forEach((category) => category.classList.remove("active"));

  if (panel === "programming") {
    document.getElementById("programming-panel").style.display = "flex";
    document.getElementById("tools-panel").style.display = "none";
    categories[0].classList.add("active");
  } else if (panel === "tools") {
    document.getElementById("programming-panel").style.display = "none";
    document.getElementById("tools-panel").style.display = "flex";
    categories[1].classList.add("active");
  }
}

// Intersection Observer untuk Animasi fade-in-left, .fade-in-right, .fade-in-top, .fade-in-bottom, .fade-in-center
const fadeInElements = document.querySelectorAll(
  ".fade-in-left, .fade-in-right, .fade-in-top, .fade-in-bottom, .fade-in-center"
);
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

fadeInElements.forEach((element) => observer.observe(element));

const footerJobTitles = [
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

let currentIndex = 0;
const jobTitleElement = document.getElementById("job-title-footer");

function updateJobTitle() {
  jobTitleElement.textContent = footerJobTitles[currentIndex];

  currentIndex = (currentIndex + 1) % footerJobTitles.length;
}

setInterval(updateJobTitle, 2000);

updateJobTitle();
