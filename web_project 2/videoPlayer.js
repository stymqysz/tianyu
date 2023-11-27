
window.onload = function() {
    const videoId = new URLSearchParams(window.location.search).get('id');
    loadVideo(videoId);
};

function loadVideo(videoId) {
    // Pseudocode: Fetch video details from the server
}

function populateDescription(description) {
    const descriptionElement = document.getElementById('course-description');
    descriptionElement.textContent = description;
}
