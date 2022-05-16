//gets the kenggth of the array that holds all of the headers with class .item-text
var numOfHeaders = document.querySelectorAll(".item").length;

//intializing sound variables
var eating = new Audio("sounds/eating.mp3");
var chicken = new Audio("sounds/chicken.mp3");
var cow = new Audio("sounds/cow.mp3");
var creeper = new Audio("sounds/creeper.mp3");
var enderman = new Audio("sounds/enderman.mp3");
var skeleton = new Audio("sounds/skeleton.mp3");
var oof = new Audio("sounds/oof.mp3");
var villager = new Audio("sounds/villager.mp3");
var water = new Audio("sounds/water.mp3");

//waiting for a button to be clicked dependign on the key
//and then references the innerHTML value
//and then call for a funciton to play a sounds when that key is pressed
for(var i=0; i<numOfHeaders; i++) {
  document.querySelectorAll(".item")[i].addEventListener("click", function() {
    var headerHTML = this.innerHTML;

    makeSound(headerHTML);
    buttonAnimation(headerHTML);
  });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
  switch(key){
    case "w":
      eating.play();
      break;

    case "a":
      chicken.play();
      break;

    case "s":
      cow.play();
      break;

    case "d":
      creeper.play();
      break;

    case "i":
      enderman.play();
      break;

    case "j":
      skeleton.play();
      break;

    case "k":
      oof.play();
      break;

    case "l":
      villager.play();
      break;

    case "m":
      water.play();
      break;

    default:
      console.log(key);
  }
}

// allows buttons to flash
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 300);
}
