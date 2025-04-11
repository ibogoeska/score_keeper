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

const resetBtn = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");
const announceWinner = document.querySelector(".winner-announcement");
let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score >= winningScore && player.score - opponent.score >= 2) {
      isGameOver = true;
      player.display.classList.add("text-success");
      opponent.display.classList.add("text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
      announceWinner.innerHTML = `Congrats! The player ${player.number} has won the game!`;
      announceWinner.style.color = "green";
      announceWinner.style.fontSize = "1.2em";
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
  const winner = prompt(
    `Player ${player.number} won the game! \n Write your name down to be part of the ScoreBoard`
  );
});

player2.button.addEventListener("click", function () {
  updateScores(player2, player1);
});

winningScoreSelect.addEventListener("change", function (e) {
  winningScore = parseInt(e.target.value);
  reset();
});

resetBtn.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [player1, player2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("text-success", "text-danger");
    p.button.disabled = false;
  }
  announceWinner.innerHTML = "";
}

function makeAScoreboard() {}
