
const p1_display = document.querySelector("#p1-display");
const p2_display = document.querySelector("#p2-display");
const p1_button = document.querySelector("#p1-btn");
const p2_button = document.querySelector("#p2-btn");
const resetBtn = document.querySelector("#rest-btn")
const setWinningScore = document.querySelector("input");
let winningScoreDisplay = document.querySelector("#winnig-score");
const p1WinnerDispaly = document.querySelector("#p1-winnerDisplay");
const p2WinnerDispaly = document.querySelector("#p2-winnerDisplay");


let p1_score = 0;
let p2_score = 0;
let winningScore = 5;
let isGameOver = false;


p1_button.addEventListener('click',() => {
    if(!isGameOver){
        p1_score++;
        if(winningScore === p1_score){
            isGameOver = true;
            p1_display.classList.add('win');
            p1WinnerDispaly.classList.remove("winnerDisplay");
            
    }
    }
    p1_display.textContent = p1_score; 
});

p2_button.addEventListener('click',() => {
    if(!isGameOver){
        p2_score++;
        if(winningScore === p2_score){
            isGameOver = true;
            p2_display.classList.add('win');
            p2WinnerDispaly.classList.remove("winnerDisplay");


    }
    }
    p2_display.textContent = p2_score; 
});


resetBtn.addEventListener('click', () => {
   reset();
})

setWinningScore.addEventListener('change', function() {
    if(this.value < 0){
        alert("Please set the score in positive Number");
    } else{
        winningScoreDisplay.textContent = this.value;
        winningScore = Number(this.value); 
    }
     
});


function reset() {
    p1_score = 0;
    p2_score = 0;
    isGameOver = false;
    p1_display.textContent = p1_score; 
    p2_display.textContent = p2_score; 
    p1_display.classList.remove('win');
    p2_display.classList.remove('win');
    p1WinnerDispaly.classList.add("winnerDisplay");
    p2WinnerDispaly.classList.add("winnerDisplay");
}