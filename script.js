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
  if (window.innerWidth <= 600) {
    folderWindow.style.top = "";
    folderWindow.style.left = "";
    return;
  }

  folderWindow.style.top = 90 + openCount * 20 + "px";
  folderWindow.style.left = 140 + openCount * 20 + "px";
  openCount++;
};

const openFolderWindow = (folderWindow) => {
  if (folderWindow.classList.contains("hidden")) {
    positionWindow(folderWindow);
    folderWindow.classList.remove("hidden");
  }
};

const connectFolder = (folder, folderWindow) => {
  folder.addEventListener("click", () => {
    openFolderWindow(folderWindow);
  });

  folder.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFolderWindow(folderWindow);
    }
  });
};

const aboutFolder = document.querySelector(".aboutFolder");
const aboutWindow = document.querySelector(".aboutWindow");

connectFolder(aboutFolder, aboutWindow);

const skillsFolder = document.querySelector(".skillsFolder");
const skillsWindow = document.querySelector(".skillsWindow");

connectFolder(skillsFolder, skillsWindow);

const educationFolder = document.querySelector(".educationFolder");
const educationWindow = document.querySelector(".educationWindow");

connectFolder(educationFolder, educationWindow);

const projectsFolder = document.querySelector(".projectsFolder");
const projectsWindow = document.querySelector(".projectsWindow");

connectFolder(projectsFolder, projectsWindow);

const contactFolder = document.querySelector(".contactFolder");
const contactWindow = document.querySelector(".contactWindow");

connectFolder(contactFolder, contactWindow);

const closeButton = document.querySelectorAll(".closeButton");

closeButton.forEach((cButton) => {
  cButton.addEventListener("click", () => {
    const cWindow = cButton.closest(".folderWindow"); // Find closest window and close that one
    cWindow.classList.add("hidden");
  });
});

const windowBars = document.querySelectorAll(".windowBar");

windowBars.forEach((windowBar) => {
  windowBar.addEventListener("mousedown", (event) => {
    const folderWindow = windowBar.closest(".folderWindow");

    if (window.innerWidth <= 600) {
      return;
    }

    const windowRect = folderWindow.getBoundingClientRect();
    const offsetX = event.clientX - windowRect.left;
    const offsetY = event.clientY - windowRect.top;

    const moveWindow = (moveEvent) => {
      folderWindow.style.left = moveEvent.clientX - offsetX + "px";
      folderWindow.style.top = moveEvent.clientY - offsetY + "px";
    };

    const stopDragging = () => {
      document.removeEventListener("mousemove", moveWindow);
      document.removeEventListener("mouseup", stopDragging);
    };

    document.addEventListener("mousemove", moveWindow);
    document.addEventListener("mouseup", stopDragging);
  });
});
