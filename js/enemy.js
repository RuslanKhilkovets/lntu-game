const enemies = [];

function createEnemy() {
  enemies.push({
    x: Math.random() * (canvas.width - 20),
    y: -20,
    size: 20,
    speed: 3
  });
}

function updateEnemies() {
  enemies.forEach((enemy, index) => {
    enemy.y += enemy.speed;

    // collision with player
    if (
      enemy.y + enemy.size > player.y &&
      enemy.x + enemy.size > player.x &&
      enemy.x < player.x + player.width
    ) {
      enemies.splice(index, 1);
      lives--;
      if (lives <= 0) {
        gameOver();
      }
    }

    // enemy missed → score++
    if (enemy.y > canvas.height) {
      enemies.splice(index, 1);
      score++;
    }
  });
}

function drawEnemies(ctx) {
  ctx.fillStyle = "red";
  enemies.forEach(enemy => {
    ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
  });
}
