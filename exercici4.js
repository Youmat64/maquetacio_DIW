const video = document.getElementById("TheVideo");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const volumeOnBtn = document.getElementById("volume-on");
const volumeOffBtn = document.getElementById("volume-off");

playBtn.addEventListener("click", () => {
  video.play();
});

pauseBtn.addEventListener("click", () => {
  video.pause();
});

volumeOnBtn.addEventListener("click", () => {
  video.muted = false;
});

volumeOffBtn.addEventListener("click", () => {
  video.muted = true;
});
