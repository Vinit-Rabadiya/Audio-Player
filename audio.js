const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("playPause");

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = "Pause";
    playPauseButton.style.backgroundColor = "#e74c3c";
  } else {
    audio.pause();
    playPauseButton.textContent = "Play";
    playPauseButton.style.backgroundColor = "#27ae60";
  }
}
playPauseButton.onclick = togglePlay;

const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("input", (event) => {
  audio.volume = event.target.value;
});

const timeDisplay = document.getElementById("timeDisplay");
audio.ontimeupdate = () => {
  timeDisplay.textContent = audio.currentTime.toFixed(1);
};

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault(); //to stop the page from scrolling when space is pressed
    togglePlay();
  }
});
