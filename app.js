const resetBtn = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");
const announceWinner = document.querySelector(".winner-announcement");
const scoreHistory = document.querySelector("#scoreHistory");
const clearHistoryBtn = document.querySelector("#clearHistory");

const playerOneInput = document.querySelector("#playerOneName");
const playerTwoInput = document.querySelector("#playerTwoName");
const displayPlayerOne = document.querySelector("#displayPlayerOne");
const displayPlayerTwo = document.querySelector("#displayPlayerTwo");

playerOneInput.addEventListener("input", () => {
  displayPlayerOne.textContent = playerOneInput.value || "Player One";
});

playerTwoInput.addEventListener("input", () => {
  displayPlayerTwo.textContent = playerTwoInput.value || "Player Two";
});

let winningScore = 5;
let isGameOver = false;

const player1 = {
  number: 1,
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1ScoreDisplay"),
};
const player2 = {
  number: 2,
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2ScoreDisplay"),
};

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score >= winningScore && player.score - opponent.score >= 2) {
      isGameOver = true;
      player.display.classList.add("text-success");
      opponent.display.classList.add("text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
      announceWinner.innerHTML = `Congrats! ${playerOneInput.value} has won the game!`;
      announceWinner.style.color = "green";
      announceWinner.style.fontSize = "1.2em";

      updateScoreHistory(player1, player2);
    } else if (
      player.score === winningScore &&
      player.score - opponent.score < 2
    ) {
      announceWinner.innerHTML =
        "Remember you are playing by two-point lead rule. Don't stop until you are +2 points ahead!";
      announceWinner.style.color = "blue";
      announceWinner.style.fontSize = "0.8em";
    }

    player.display.textContent = player.score;
  }
}

player1.button.addEventListener("click", function () {
  updateScores(player1, player2);
});

player2.button.addEventListener("click", function () {
  updateScores(player2, player1);
});

winningScoreSelect.addEventListener("change", function (e) {
  winningScore = parseInt(e.target.value);
  reset();
});

resetBtn.addEventListener("click", reset);

clearHistoryBtn.addEventListener("click", clearScoreHistory);

function reset(clearDisplay = true) {
  isGameOver = false;
  for (let p of [player1, player2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("text-success", "text-danger");
    p.button.disabled = false;
  }
  announceWinner.innerHTML = "";
}

function updateScoreHistory(p1, p2) {
  const playerOneName = playerOneInput.value;
  const playerTwoName = playerTwoInput.value;

  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item");
  listItem.innerHTML = `${playerOneName} <b>${p1.score}</b> - <b>${p2.score}</b> ${playerTwoName}`;

  scoreHistory.appendChild(listItem);
}

function clearScoreHistory() {
  scoreHistory.innerHTML = "";
}
