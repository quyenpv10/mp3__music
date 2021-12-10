const song = document.getElementById("song");
const playBtn = document.querySelector(".play-inner");
let isPlaying = true;

playBtn.addEventListener("click", playPause);

function playPause() {
    if (isPlaying) {
        song.play();
        playBtn.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`
        isPlaying = false;
    } else {
        song.pause()
        isPlaying = true;
        playBtn.innerHTML = ` <ion-icon name="play" class="play-icon"></ion-icon>`

    }
}