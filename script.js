var radioButton = document.getElementById("radio-button");

radioButton.addEventListener("click", function() {
  var audio = new Audio("./Sound_effect.mp3");
  audio.play();
});
