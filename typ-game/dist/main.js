"use strict";
const words = ["hue", "lab", "pan", "cat", "dog", "car", "sun", "run", "hat", "bat", "map", "fan", "tap", "net"];
let score = 0;
let time = 30;
let currentWord = "";
const wordElement = document.getElementById("word");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const gameOverElement = document.getElementById("game-over");
function setNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordElement.textContent = currentWord;
    inputElement.value = "";
    inputElement.focus();
}
function updateScore() {
    score++;
    scoreElement.textContent = `Score: ${score}`;
}
function updateTimer() {
    time--;
    timerElement.textContent = `Time: ${time}`;
    if (time <= 0) {
        clearInterval(timerInterval);
        endGame();
    }
}
function endGame() {
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
