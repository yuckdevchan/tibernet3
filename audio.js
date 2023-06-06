var minecraft = new Audio("minecraft.mp3");
var playing = false;

function music() {
  if (playing == false) {
    document.getElementById("music_button").innerHTML = "Playing...";
    minecraft.play();
  } else {
    playing = true;
    document.getElementById("music_button").innerHTML = "Paused";
    minecraft.pause();
  }
}
