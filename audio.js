const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
playButton.addEventListener("click", () => {
  audio.play();
});

const pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", () => {
  audio.pause();
});
const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("input", (event) => {
  audio.volume = event.target.value;
});

const timeDisplay = document.getElementById("timeDisplay");
audio.ontimeupdate = () => {
  timeDisplay.textContent = audio.currentTime.toFixed(1);
};
