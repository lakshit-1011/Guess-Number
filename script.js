'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;


document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);
  if (!inputNumber) {
    document.querySelector('.message').innerHTML = 'Please enter the Number';
  } 
  else if (inputNumber === secretNumber) {
    document.querySelector('.message').innerHTML = 'Yes, you are correct Buddy🙌';

    document.querySelector('.number').innerHTML = secretNumber;

    document.querySelector('body').style.backgroundColor= '#60b347';
    document.querySelector('.number').style.width='30rem';

    let currentHigh=document.querySelector('.highscore').innerHTML;
    if(score>=currentHigh){
        document.querySelector('.highscore').innerHTML=score;
    }
  } 
  else if (inputNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').innerHTML = 'Number is too high 🚀';
      document.querySelector('.score').innerHTML = score - 1;
      score=document.querySelector('.score').innerHTML ;
    } 
    else {
      document.querySelector('.message').innerHTML = 'You Lose';
      document.querySelector('.score').innerHTML = 0;
      document.querySelector('body').style.backgroundColor= 'red';
    }
  } 
  else if (inputNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').innerHTML = 'Number is too low 🌝';
      document.querySelector('.score').innerHTML = score - 1;
      score=document.querySelector('.score').innerHTML ;
    } 
    else {
      document.querySelector('.message').innerHTML = 'You Lose';
      document.querySelector('.score').innerHTML = 0;
      document.querySelector('body').style.backgroundColor= 'red';
    }
  }
});


document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').innerHTML = '20';
    score=20;
    document.querySelector('.message').innerHTML = 'Start guessing...';
    document.querySelector('.number').innerHTML = '?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor= '#222';
    document.querySelector('.number').style.width='15rem';
    // document.querySelector('.highscore').innerHTML='0';
})