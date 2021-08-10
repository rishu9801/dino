const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");
const curScore = document.querySelector(".curScore");
const highScore = document.querySelector(".highScore");
let score = 0;
let hScore = 0;

function startGame() {
  cactus.classList.add("move");
  scoreCounter = setInterval(setScore, 600);
}

function gameOver() {
  cactus.classList.remove("move");
  if (score > hScore) {
      hScore = score;
      highScore.innerHTML = `HighScore:${hScore}`;
    }
    clearInterval(scoreCounter);
    score = 0;
    curScore.innerHTML = `Score:${score}`;
    alert("Game Over 😵");
}

function setScore() {
  score = score + 1;
  curScore.innerHTML = `Score:${score}`;
}

function jump() {
  if (dino.classList != "jump") dino.classList.add("jump");
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 400);
}

let isAlive = setInterval(function () {
  let dinTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusLeft < 50 && cactusLeft > 0 && dinTop >= 140) {
    gameOver();
  }
}, 10);

document.addEventListener("keydown", function () {
  jump();
});
document.addEventListener("touchstart",function () {
    jump();
  })