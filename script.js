function musicPlayback() {
var song = document.getElementById("song");
var icon = document.getElementById("playerIcon");
if (song.paused == true) {
song.play();
icon.setAttribute("name", "pause")
icon.style.opacity="75%";
} else {
song.pause();
icon.setAttribute("name", "play");
icon.style.opacity="100%";
}
}
