console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;


const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

const playGameOverAudio = () => {
    gameover.play();
}