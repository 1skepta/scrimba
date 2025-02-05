let homeScore = 0;
let guestScore = 0;

function increaseHome(points) {
  homeScore += points;
  document.getElementById("home-score").textContent = homeScore;
  console.log("Button Clicked");
}

function increaseGuest(points) {
  guestScore += points;
  document.getElementById("guest-score").textContent = guestScore;
  console.log("Button Clicked");
}

function resetScores() {
  homeScore = 0;
  guestScore = 0;
  document.getElementById("home-score").textContent = homeScore;
  document.getElementById("guest-score").textContent = guestScore;
}
