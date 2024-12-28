'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "change";

// document.querySelector('.label-score').textContent = 'Marks:';

// // document.getElementsByClassName(btn check).background-color === 'red';

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


// document.querySelector('.check').addEventListener('click',function(){
//     console.log(document.querySelector('.guess').value , typeof document.querySelector('.guess').value);
    

// });
let ans = Math.trunc(Math.random()*20)+1;
console.log(ans);
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;
// check
document.querySelector('.check').addEventListener('click',function(){
    
    //funn----------

    const input = Number(document.querySelector('.guess').value);
    if(score === 0){
        document.querySelector('.message').textContent = "GAME OVER";
        document.querySelector('.number').textContent = ans;
        document.querySelector('body').style.backgroundColor = '#bc0303';
    }else{
    if(input === ans){
        //highScore-----------

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        if(highScore === 20){
            document.querySelector('body').style.backgroundColor = '#d22c2c';
            document.querySelector('.number').textContent = 'AREEEY';
            document.querySelector('.message').textContent = "GAME OVER";
            document.querySelector('.number').style.width = '60rem';
        }else{

        document.querySelector('body').style.backgroundColor = '#079ded';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = ans;
        document.querySelector('.message').textContent = "EYYYYY";
        }
    }
    else if(input >= ans){
        document.querySelector('.message').textContent = "GO LOWER";
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if(input <= ans){
        document.querySelector('.message').textContent = "GO HIGHER";
        score--;
        document.querySelector('.score').textContent = score;
    }
}
})

// again
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    ans = Math.trunc(Math.random()*20)+1;
    console.log(ans);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = null;
})