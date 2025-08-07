const words: string[] = ["hue", "lab", "pan", "cat", "dog", "car", "sun", "run", "hat", "bat", "map", "fan", "tap", "net"];

let score: number = 0;
let time: number = 30;
let currentWord: string = "";

const wordElement = document.getElementById("word")!;
const inputElement = document.getElementById("input") as HTMLInputElement;
const scoreElement = document.getElementById("score")!;
const timerElement = document.getElementById("timer")!;
const gameOverElement = document.getElementById("game-over")!;

function setNewWord(): void {
  currentWord = words[Math.floor(Math.random() * words.length)];
  wordElement.textContent = currentWord;
  inputElement.value = "";
  inputElement.focus();
}

function updateScore(): void {
  score++;
  scoreElement.textContent = `Score: ${score}`;
}

function updateTimer(): void {
  time--;
  timerElement.textContent = `Time: ${time}`;
  if (time <= 0) {
    clearInterval(timerInterval);
    endGame();
  }
}

function endGame(): void {
  inputElement.disabled = true;
  gameOverElement.style.display = "block";
  wordElement.textContent = "";
}

inputElement.addEventListener("input", () => {
  if (inputElement.value.trim().toLowerCase() === currentWord) {
    updateScore();
    setNewWord();
  }
});

// Game start
setNewWord();
const timerInterval = setInterval(updateTimer, 1000);
