  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 10;
function checkGuess() {
  attempts -= 1;
  let inputElement = document.getElementById("guess");
  let feedbackElement = document.getElementById("feedback");
  let guess = inputElement.value;
  
  while (attempts > 0) {
  if (guess == randomNumber){
   attempts = 0;
   feedbackElement.innerHTML = "Congrations!!!"
   feedbackElement.style.color = "green";
   break;
  }
  else if (guess<randomNumber){
   feedbackElement.innerHTML = "Too low! " + attempts + " attempts left.";
   feedbackElement.style.color = "red";
   break;  
  }
  else{
   feedbackElement.innerHTML = "Too high! " + attempts + " attempts left.";
   feedbackElement.style.color = "red";
   break; 
  }
  }
  if (attempts === 0 && guess != randomNumber) {
    feedbackElement.style.color = "red";
    feedbackElement.innerHTML = "The correct number is " + randomNumber + " Game Over.";
  }
}
