'use strict';


// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent ='Correct number!';
// document.querySelector('.number').textContent =12;
// document.querySelector('.score').textContent =10;

// document.querySelector('.guess').value =23;
// concole.log(document.querySelector('.guess').value);

let SecretNumber = Math.trunc(Math.random()*20)+1;

let GameScore = 20;

let highScore=0;

document.querySelector('.check').addEventListener('click',function(){

    const guess =Number( document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    if(!guess){
        document.querySelector('.message').textContent ='No Input !';
    }


    else if(guess == SecretNumber){
        document.querySelector('.message').textContent ='Correct ans';
        document.querySelector('.number').textContent = SecretNumber;


        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width='25rem';

        if(GameScore > highScore){
            highScore = GameScore;
            document.querySelector('.highscore').textContent= highScore;
        }
    }
    if(guess > 20){
        document.querySelector('.message').textContent ='guess between 1 to 20';
        GameScore--;
        document.querySelector('.score').textContent = GameScore;
    }

    else if(guess > SecretNumber){

      

        if(GameScore > 1){
            document.querySelector('.message').textContent ='too  high number';

            GameScore--;
            document.querySelector('.score').textContent = GameScore;
        }
        else{
            document.querySelector('.message').textContent ='you lost the game '; 
            // SecretNumber=1100;
            document.querySelector('.score').textContent = 0;
        }
       
    }
    else if(guess < SecretNumber){
        if(GameScore > 1){
            document.querySelector('.message').textContent ='too low';

            GameScore--;
            document.querySelector('.score').textContent = GameScore;
            

        }
        else{
            document.querySelector('.message').textContent ='you lost the game '; 
            // SecretNumber=1100;
            document.querySelector('.score').textContent = 0;
        }

        // document.querySelector('.message').textContent ='too low number !';
        // GameScore--;
        // document.querySelector('.score').textContent = GameScore;
    }
});

document.querySelector('.again').addEventListener('click',function(){

    GameScore = 20;
    SecretNumber = Math.trunc(Math.random()*20)+1;
    
    document.querySelector('.message').textContent='Start guessing...';

    document.querySelector('.score').textContent=GameScore;

    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';

    document.querySelector('body').style.backgroundColor='#222';

    document.querySelector('.number').style.width='15rem';
    
});