var drums = document.querySelectorAll(".drum");
var audioFiles = {
    "w": new Audio("sounds/tom-1.mp3"),
    "a": new Audio("sounds/tom-2.mp3"),
    "s": new Audio("sounds/tom-3.mp3"),
    "d": new Audio("sounds/tom-4.mp3"),
    "j": new Audio("sounds/snare.mp3"),
    "k": new Audio("sounds/kick-bass.mp3"),
    "l": new Audio("sounds/crash.mp3")
};

function handleKeyPress(key) {
    var audio = audioFiles[key];
    if (audio) {
        audio.currentTime = 0; // Reset audio to the beginning
        audio.play().catch(function(error) {
            console.error('Error playing sound:', error);
        });
    } else {
        console.log("Invalid key:", key);
    }
}

// Event listeners for drum button clicks
for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        handleKeyPress(buttonInnerHTML);
    });
}

// Event listener for keyboard key presses
document.addEventListener("keydown", function(event) {
    var key = event.key.toLowerCase();
    if (/[wasdjkl]/.test(key)) {
        handleKeyPress(key);
    }
});

// Preload audio files
function preloadAudio() {
    for (var key in audioFiles) {
        if (audioFiles.hasOwnProperty(key)) {
            audioFiles[key].load();
        }
    }
}

// Preload audio files when the page is loaded
window.addEventListener("load", preloadAudio);
