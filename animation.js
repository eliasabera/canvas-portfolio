const track = document.getElementById("image-track");
window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};
window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100;
  const rawNext = parseFloat(track.dataset.prevPercentage) + percentage;
  const nextPercentage = Math.max(Math.min(rawNext, 0), -100);

  track.dataset.percentage = nextPercentage;

  //track.style.transform = `translate(${nextPercentage}%,-50%)`;
  track.animate(
    {
      transform: `translate(${nextPercentage}%,-50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );
  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      {
        objectPosition: `${nextPercentage + 100}%  50%`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};
window.onmouseup = (e) => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};
