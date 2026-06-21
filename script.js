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

let openCount = 0; // Counts how many folders are open

const positionWindow = (folderWindow) => {
  folderWindow.style.top = 90 + openCount * 20 + "px";
  folderWindow.style.left = 140 + openCount * 20 + "px";
  openCount++;
};

const aboutFolder = document.querySelector(".aboutFolder");
const aboutWindow = document.querySelector(".aboutWindow");

aboutFolder.addEventListener("click", () => {
  if (aboutWindow.classList.contains("hidden")) {
    positionWindow(aboutWindow);
    aboutWindow.classList.remove("hidden");
  }
});

const skillsFolder = document.querySelector(".skillsFolder");
const skillsWindow = document.querySelector(".skillsWindow");

skillsFolder.addEventListener("click", () => {
  if (skillsWindow.classList.contains("hidden")) {
    positionWindow(skillsWindow);
    skillsWindow.classList.remove("hidden");
  }
});

const educationFolder = document.querySelector(".educationFolder");
const educationWindow = document.querySelector(".educationWindow");

educationFolder.addEventListener("click", () => {
  if (educationWindow.classList.contains("hidden")) {
    positionWindow(educationWindow);
    educationWindow.classList.remove("hidden");
  }
});

const projectsFolder = document.querySelector(".projectsFolder");
const projectsWindow = document.querySelector(".projectsWindow");

projectsFolder.addEventListener("click", () => {
  if (projectsWindow.classList.contains("hidden")) {
    positionWindow(projectsWindow);
    projectsWindow.classList.remove("hidden");
  }
});

const contactFolder = document.querySelector(".contactFolder");
const contactWindow = document.querySelector(".contactWindow");

contactFolder.addEventListener("click", () => {
  if (contactWindow.classList.contains("hidden")) {
    positionWindow(contactWindow);
    contactWindow.classList.remove("hidden");
  }
});

const closeButton = document.querySelectorAll(".closeButton");

closeButton.forEach((cButton) => {
  cButton.addEventListener("click", () => {
    const cWindow = cButton.closest(".folderWindow"); // Find closest window and close that one
    cWindow.classList.add("hidden");
  });
});
