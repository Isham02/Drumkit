var numberOfButtons = document.querySelectorAll(".drum").length;


function makeSound(key) {

  switch (key) {
    case "w":
      var oHihat = new Audio("sounds/Open-hihat.wav");
      oHihat.play();


      break;
    case "a":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var cHihat = new Audio("sounds/Closed-hihat.wav");
      cHihat.play();
      break;
    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(buttonInnerHTML);

  }

}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
});

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
  });
}
