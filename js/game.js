const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 500;

let frame = 0;
let score = 0;
let lives = 3;
let isGameOver = false;

function drawUI() {
  ctx.fillStyle = "white";
  ctx.font = "18px Arial";
  ctx.fillText("Результат: " + score, 10, 25);
  ctx.fillText("Спроби: " + lives, 320, 25);
}

function gameOver() {
  isGameOver = true;
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText("GAME OVER", 100, 250);
  ctx.font = "18px Arial";
  ctx.fillText("Результат: " + score, 150, 290);

  restartBtn.style.display = "block"; 
}

function gameLoop() {
  if (isGameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  player.update();
  player.draw(ctx);

  if (frame % 60 === 0) {
    createEnemy();
  }

  updateEnemies();
  drawEnemies(ctx);
  drawUI();

  frame++;
  requestAnimationFrame(gameLoop);
}

gameLoop();

const restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", () => {
  // Скидаємо все
  score = 0;
  lives = 3;
  frame = 0;
  isGameOver = false;
  enemies.length = 0;  // якщо вороги зберігаються в масиві enemies
  player.x = canvas.width / 2 - player.width / 2;

  restartBtn.style.display = "none";  // ховаємо кнопку
  gameLoop();  // перезапускаємо гру
});
