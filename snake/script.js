const canvas = document.getElementById('stage');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');
const difficultySelect = document.getElementById('difficulty');
const eatSound = document.getElementById('eatSound');
const gameOverSound = document.getElementById('gameOverSound');
const startScreen = document.getElementById('startScreen');
const gameOverOverlay = document.getElementById('gameOverOverlay');
const finalScoreText = document.getElementById('finalScore');

const gridSize = 20;
let snake = [];
let direction = 'right';
let food = {};
let score = 0;
let isRunning = false;
let gameSpeed = parseInt(difficultySelect.value);
let animationFrame;

function init() {
  snake = [{ x: 5, y: 5 }];
  direction = 'right';
  score = 0;
  isRunning = true;
  gameSpeed = parseInt(difficultySelect.value);
  updateScore();
  placeFood();
  gameOverOverlay.style.display = 'none';
  if (animationFrame) cancelAnimationFrame(animationFrame);
  gameLoop();
}

function updateScore() {
  scoreDisplay.textContent = 'Score: ' + score;
}

function placeFood() {
  food = {
    x: Math.floor(Math.random() * (canvas.width / gridSize)),
    y: Math.floor(Math.random() * (canvas.height / gridSize))
  };
}

function drawCell(x, y, color = '#00796B') {
  ctx.fillStyle = color;
  ctx.fillRect(x * gridSize, y * gridSize, gridSize - 1, gridSize - 1);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw snake
  snake.forEach((segment, index) => {
    drawCell(segment.x, segment.y, index === 0 ? '#004d40' : '#00796B');
  });

  // Draw food
  drawCell(food.x, food.y, '#D32F2F');
}

function update() {
  const head = { ...snake[0] };

  switch (direction) {
    case 'right': head.x += 1; break;
    case 'left': head.x -= 1; break;
    case 'up': head.y -= 1; break;
    case 'down': head.y += 1; break;
  }

  // Wall collision
  if (
    head.x < 0 || head.x >= canvas.width / gridSize ||
    head.y < 0 || head.y >= canvas.height / gridSize
  ) {
    triggerGameOver();
    return;
  }

  // Self collision
  if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
    triggerGameOver();
    return;
  }

  snake.unshift(head);

  // Eating food
  if (head.x === food.x && head.y === food.y) {
    score++;
    eatSound.play();
    updateScore();
    placeFood();
  } else {
    snake.pop(); // move forward
  }
}

function gameLoop() {
  if (!isRunning) return;
  update();
  draw();
  setTimeout(() => {
    animationFrame = requestAnimationFrame(gameLoop);
  }, gameSpeed);
}

function triggerGameOver() {
  isRunning = false;
  gameOverSound.play();
  finalScoreText.textContent = 'Game Over! Your score: ' + score;
  gameOverOverlay.style.display = 'flex';
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (key === 'ArrowUp' && direction !== 'down') direction = 'up';
  if (key === 'ArrowDown' && direction !== 'up') direction = 'down';
  if (key === 'ArrowLeft' && direction !== 'right') direction = 'left';
  if (key === 'ArrowRight' && direction !== 'left') direction = 'right';
});

// UI controls
restartBtn.addEventListener('click', init);
document.getElementById('playAgainBtn').addEventListener('click', () => {
  document.getElementById('gameOverOverlay').style.display = 'none';
  init();
});

difficultySelect.addEventListener('change', () => {
  gameSpeed = parseInt(difficultySelect.value);
});

// Replaces window.onload with start screen interaction
document.getElementById('startBtn').addEventListener('click', () => {
  startScreen.style.display = 'none';
  init();
});
