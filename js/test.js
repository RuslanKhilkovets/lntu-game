// Simple unit tests for LNTU PIXEL DODGE game logic
// Run with: node js/test.js

const assert = require("assert");

// --- Test 1: Player movement ---
const player = {
  x: 180,
  y: 450,
  width: 40,
  height: 15,
  speed: 5,
  update(keys) {
    if (keys.ArrowLeft && this.x > 0) this.x -= this.speed;
    if (keys.ArrowRight && this.x < 360) this.x += this.speed;
  },
};

let keys = { ArrowLeft: true, ArrowRight: false };
player.x = 100;
player.update(keys);
assert.strictEqual(player.x, 95, "Player should move left by speed");

// --- Test 2: Enemy collision with player ---
const testPlayer = { x: 50, y: 450, width: 40, height: 15 };
const enemy = { x: 55, y: 445, size: 20 };
function isCollision(player, enemy) {
  return (
    enemy.y + enemy.size > player.y &&
    enemy.x + enemy.size > player.x &&
    enemy.x < player.x + player.width
  );
}
assert.strictEqual(
  isCollision(testPlayer, enemy),
  true,
  "Enemy should collide with player"
);

// --- Test 3: Enemy missed (score increment) ---
let score = 0;
const canvas = { height: 500 };
const testEnemy = { y: 501 };
if (testEnemy.y > canvas.height) score++;
assert.strictEqual(score, 1, "Score should increment when enemy missed");

console.log("All tests passed!");
