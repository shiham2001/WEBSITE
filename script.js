let music = document.getElementById("bgMusic");
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        music.pause();
    } else {
        music.play();
    }
    isPlaying = !isPlaying;
}

function openStory(text) {
    document.getElementById("story").innerText = text;
    document.getElementById("popup").style.display = "block";
}

function closeStory() {
    document.getElementById("popup").style.display = "none";
}
