// Background Music
const gamemusic = new Audio ("music.mp3")
// Gameover Sound
const winningmusic = new Audio ("gameover.mp3")
// Turn change
const turnchange = new Audio ("ting.mp3")
let turn = "X";
let image = document.querySelector("#img").getElementsByTagName("img")[0]
// let image = document.querySelector("#img")
let box = document.querySelectorAll(".box")
// let box = document.getElementsByClassName("box");
let textbox = document.getElementsByClassName('boxtext');
let gamebox = document.getElementById("gamecontainer")
// console.log(image)
console.log(box)
let gameover = false;

const changeTurn = ()=>{
    return turn === "X" ? "O": "X"
};
// const draw = ()=> {
//     Array.from(textbox).forEach(e => {
//         if ((e.innerText !== "")){
//             document.getElementById("info").style.display="none"
//             document.getElementById("winmessage").style.display="block"
//             document.querySelector("#winmessage").innerText = "No one wins"
//         }
//     })
    // if ((textbox.innerText !== "")){
    //     document.querySelector("gamedraw").innerText = "No one wins"
    // }
// }
const checkwinner = () => {
    // let textbox = document.getElementsByClassName('boxtext');    
    const WINNING_COMBINATIONs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      WINNING_COMBINATIONs.some(e => {
          if((textbox[e[0]].innerText === textbox[e[1]].innerText) && (textbox[e[2]].innerText === textbox[e[1]].innerText) && (textbox[e[0]].innerText !== "")){
              document.getElementById("info").style.display="none"
              document.getElementById("winmessage").style.display="block"
              document.querySelector("#winmessage").innerText = textbox[e[0]].innerText + " Won";
              winningmusic.play()
              changedisplay()
              gameover = true;
            //   break;
            //   document.querySelector(".gamebox").style.display="none"
            //   box.removeChild(textbox)
            //   let box = document.querySelectorAll(".box")
          }
        //   else if ((textbox[e[0]].innerText !== "")) {
            // document.getElementById("info").classList.remove("info")
            // document.getElementById("info").classList.add("gamedraw")  
            // document.querySelector("gamedraw").innerText = "No one wins"
        //   }  
      })
}


const changedisplay = () => {
        image.classList.add("showimage")
        gamebox.classList.add("hidebox")
        let img = document.querySelector(".showimage")
        // console.log(img)
        // winningmusic.play()
        // let box = document.querySelectorAll(".box").style.display="none"              
};

// Game Logic
// background Music
// gamemusic.play();


let boxes = document.getElementsByClassName("box");
Array.from(boxes).some((element) => {
    // console.log(element)
    let textbox = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        Array.from(textbox).forEach(e => {
            if ((e.innerText !== "")){
                document.getElementById("info").style.display="none"
                document.getElementById("winmessage").style.display="block"
                document.querySelector("#winmessage").innerText = "No one wins"
            }
        // console.log(element)
        if (textbox.innerText === ''){
            textbox.innerText = turn;
            turn = changeTurn();
            turnchange.play();
            checkwinner();
            if (!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
            }
            //      if (textbox.innerText !== ""){
            //     document.getElementById("info").classList.remove("info")
            //     document.getElementById("info").classList.add("gamedraw")  
            //     document.querySelector("gamedraw").innerText = "No one wins"
            // }
        }
        // else{ 
        //     // let container = document.getElementsByClassName("container")
        //     // let gamebox = document.getElementById("gamecontainer")
        //     // console.log(container, gamebox)
        //     // container.removeChild(container.gamebox);
        //     // element.removeEventListener('click')
        // }
    })
})

     // Restart button
reset.addEventListener('click', ()=>{
    let textbox = document.querySelectorAll('.boxtext');
    console.log(textbox);
    image.classList.remove("showimage")
    document.getElementById("winmessage").style.display="none"
    document.getElementById("info").style.display="block"
    Array.from(textbox).forEach(element => {
        element.innerText = '';
        gameover = false;
        turn = "X"
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    });
})

    // if(gameover){
    //     break;

    // }

// let img = document.querySelector("#img")
// let box = document.querySelectorAll(".box")
// console.log(box)
// Array.from(box).forEach((box) => {
//     console.log(box)
//     if(gameover){
        // winningmusic.play()
        // box.style.display="none"
        // img.style.display="none"
//     }
//     else{
//         box.style.display="block"
//         img.style.display="block"
//     }
// })