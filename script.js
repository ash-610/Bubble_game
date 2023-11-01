var timer = 60
var score = 0
var hit = 0
var timerInterval
var duration = 60

function makeBubbles(){
    var bubbles = "";
    var numbers = Math.floor(Math.random()*10)
    for(var i=1; i<=60; i++){
        var numbers = Math.floor(Math.random()*10)
        bubbles += `<div class="bubble">${numbers}</div>`;
    }
    document.querySelector("#btm").innerHTML = bubbles;
}



function runTimer(){
    timerInterval = setInterval(function(){
        if(timer<=0){
            clearInterval(timerInterval);
            document.querySelector("#btm").innerHTML = `<h1>Game Over! Your Score is: ${score}</h1>`
        }
        else{
            timer--
            document.querySelector("#timerval").textContent = timer;
            document.querySelector("#btm").addEventListener('click', (details) => {
                var clickedNum = Number(details.target.textContent)                        // target gives element clicked and "Number" converts to number
                if(clickedNum == hit){
                    incScore()
                    makeHit()
                    makeBubbles()
                }
            })
        }
    }, 1000)
}



function makeHit(){
    hit = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hit
}



function incScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}



function setTimer1(){
    duration = 60
}
function setTimer2(){
    duration = 120
}



function runGame(){
    clearInterval(timerInterval)
    makeBubbles()
    makeHit()
    score = 0
    document.querySelector("#scoreval").textContent = score;
    timer = duration
    runTimer()
}

