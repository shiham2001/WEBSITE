function openStory(text) {
    document.getElementById("story").innerText = text;
    document.getElementById("popup").style.display = "block";
}

function closeStory() {
    document.getElementById("popup").style.display = "none";
}
