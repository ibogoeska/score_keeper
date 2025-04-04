const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetBtn = document.querySelector("#reset");
const p1ScoreDisplay = document.querySelector("#p1ScoreDisplay");
const p2ScoreDisplay = document.querySelector("#p2ScoreDisplay");
const winningScoreSelect = document.querySelector("#playTo");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1ScoreDisplay.classList.add("text-success");
      p2ScoreDisplay.classList.add("text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1ScoreDisplay.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2ScoreDisplay.classList.add("text-success");
      p1ScoreDisplay.classList.add("text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2ScoreDisplay.textContent = p2Score;
  }
});

winningScoreSelect.addEventListener("change", function (e) {
  winningScore = parseInt(e.target.value);
  reset();
});

resetBtn.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1ScoreDisplay.textContent = 0;
  p2ScoreDisplay.textContent = 0;
  p1ScoreDisplay.classList.remove("text-success", "text-danger");
  p2ScoreDisplay.classList.remove("text-success", "text-danger");
  p1Button.disabled = false;
  p2Button.disabled = false;
}
