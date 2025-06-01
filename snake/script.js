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