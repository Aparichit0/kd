alert("random wallpaper change & custom music player button added");

function musicPlayback() {
var song = document.getElementById("song");
var icon = document.getElementById("playerIcon");
if (song.paused == true) {
song.play();
icon.setAttribute("name", "pause")
} else {
song.pause();
icon.setAttribute("name", "play")
}
}
