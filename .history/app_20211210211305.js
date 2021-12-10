const song = document.getElementById("song");
const playBtn = document.querySelector(".play-inner");
const backBtn = document.querySelector('.play-back');
const nextBtn = document.querySelector('.play-forward');
let isPlaying = true;
const musics = ['holo.mp3', 'home.mp3', 'summer.mp3', 'spark.mp3'];
let indexSong = 0;

song.setAttribute("src", `./music/${musics[0]}`);
nextBtn.addEventListener('click', function() {
    changeSong(1);
})
backBtn.addEventListener('click', function() {
    changeSong(-1);
})

function changeSong(dir) {
    if (dir === 1) {
        indexSong++;
        if (indexSong > musics.length) {
            indexSong = 0;
        }
        isPlaying = true;

    } else if (dir === -1) {

    }
    song.setAttribute("src", `./music/${musics[indexSong]}`);
    playPause()
}

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