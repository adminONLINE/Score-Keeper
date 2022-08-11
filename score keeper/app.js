const p1Button = document.querySelector('#p1button');
const p2Button = document.querySelector('#p2button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1');
const p2Display = document.querySelector('#p2');
const playTo = document.querySelector('#con');
const whowon = document.querySelector('#winner');
var p1gif = document.createElement("img");
var p2gif = document.createElement("img");

let p1Score = 0;
let p2Score = 0;
let WinCon = 5;
let GameOver = false;

p1gif.src = "player1.gif"
p2gif.src = "player2.gif"





p1Button.addEventListener('click', function() {
    if(!GameOver){
    p1Score ++;
    p1Display.textContent = p1Score;

    if(p1Score === WinCon){
        GameOver = true;
        p1Display.classList.add("winner")
        p2Display.classList.add("loser")
        whowon.innerText = "Player 1 Won!";
        document.getElementById('p1won').appendChild(p1gif)
        
    }
}
    })


    p2Button.addEventListener('click', function() {
        if(!GameOver){
        p2Score ++;
        p2Display.textContent = p2Score;
    }
    if(p2Score === WinCon){
        GameOver = true;
        p1Display.classList.add("loser")
        p2Display.classList.add("winner")
        whowon.innerText = "Player 2 Won!";
        document.getElementById('p2won').appendChild(p2gif)
        
    }
        })

        function reset() {
            GameOver = false;
            p1Score = 0;
            p2Score = 0;
            p1Display.textContent = p1Score;
            p2Display.textContent = p2Score;
            p1Display.classList.remove("winner", "loser");
            p2Display.classList.remove("winner", "loser");
            whowon.innerText = "";
            p1gif.remove();
            p2gif.remove();

        }

    resetButton.addEventListener('click', function() {
    reset();

    })

    playTo.addEventListener("change", function() {
        WinCon = parseInt(this.value); 
        reset();
    })