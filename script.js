function showStory(text) {
    document.getElementById("storyText").innerText = text;
    document.getElementById("popup").style.display = "block";
}

function closeStory() {
    document.getElementById("popup").style.display = "none";
}
