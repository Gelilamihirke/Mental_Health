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
