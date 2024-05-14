var drums = document.querySelectorAll(".drum");

function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play().catch(function(error) {
        console.error('Error playing sound:', error);
    });
}

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        playSound("sounds/tom-1.mp3");
        break;
      case "a":
        playSound("sounds/tom-2.mp3");
        break;
      case "s":
        playSound("sounds/tom-3.mp3");
        break;
      case "d":
        playSound("sounds/tom-4.mp3");
        break;
      case "j":
        playSound("sounds/snare.mp3");
        break;
      case "k":
        playSound("sounds/kick-bass.mp3");
        break;
      case "l":
        playSound("sounds/crash.mp3");
        break;
      default:
        console.log(buttonInnerHTML);
    }
  });
}
