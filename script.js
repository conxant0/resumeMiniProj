const now = () => {
  let date = new Date();

  return date
    .toLocaleString("en-US", {
      // Custom Format
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .replaceAll(",", "");
};

const dateTime = document.querySelector(".dateTime");
dateTime.innerHTML = now();

setInterval(() => {
  dateTime.innerHTML = now(); //Refresh every minute
}, 60000);

const aboutFolder = document.querySelector(".aboutFolder");
const aboutWindow = document.querySelector(".aboutWindow");

aboutFolder.addEventListener("click", () => {
  aboutWindow.classList.toggle("hidden");
});

const skillsFolder = document.querySelector(".skillsFolder");
const skillsWindow = document.querySelector(".skillsWindow");

skillsFolder.addEventListener("click", () => {
  skillsWindow.classList.toggle("hidden");
});

const educationFolder = document.querySelector(".educationFolder");
const educationWindow = document.querySelector(".educationWindow");

educationFolder.addEventListener("click", () => {
  educationWindow.classList.toggle("hidden");
});

const projectsFolder = document.querySelector(".projectsFolder");
const projectsWindow = document.querySelector(".projectsWindow");

projectsFolder.addEventListener("click", () => {
  projectsWindow.classList.toggle("hidden");
});

const contactFolder = document.querySelector(".contactFolder");
const contactWindow = document.querySelector(".contactWindow");

contactFolder.addEventListener("click", () => {
  contactWindow.classList.toggle("hidden");
});

const closeButton = document.querySelectorAll(".closeButton");

closeButton.forEach((cButton) => {
  cButton.addEventListener("click", () => {
    const cWindow = cButton.closest(".folderWindow");
    cWindow.classList.toggle("hidden");
  });
});
