console.log("Welcome to Tic Tac Toe")
// let music = new Audio("music.mp3")
// let audioTurn = new Audio("ting.mp3")
// let gameover = new Audio("gameover.mp3")
let turn = "X"
// let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{

}

// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn; 
        }
    })
})












// console.log("Welcome")
// let turn = "X"

// const changeTurn = ()=>{
//     return turn === "X" ? "0": "X"
// }
// console.log(turn)
// const win = () => {

// }

// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).forEach(element => {
//     let textbox = element.getElementsByClassName('boxtext');
//     // console.log(textbox)
//     element.addEventListener('click', ()=>{
//         if (textbox.innerText === ''){
//             textbox.innerText = turn;
//             turn = changeTurn();
//             win();
//             document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
//         }
//     })
// })
// console.log(textbox)