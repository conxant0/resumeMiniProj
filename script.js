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
