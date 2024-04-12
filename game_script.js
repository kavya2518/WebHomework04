const card = document.querySelectorAll('.cell')
const front = document.querySelectorAll('.front')
const container = document.querySelector('.container')
const container_10 = document.querySelector('.container-10')
const container_12 = document.querySelector('.container-12')
const score = document.querySelector('.score span')
let elapsedTime = 0;
const myDiv = document.getElementById('count');
const value = myDiv.getAttribute('data-value');

startTimer();

shuffleImage()
clicking()

function startTimer() {
    const timer = document.getElementById('timer');

    setInterval(() => {
      elapsedTime++;

      if(value == 8){
        timer.textContent = `Time: ${elapsedTime} seconds up out of 120 seconds!`;

        if(score.innerHTML == 8){
          alert('Congratulations, you have completed the game in '+elapsedTime+ ' seconds.');
          window.location.reload();

        }

        if (elapsedTime > 120) {

            endGame();
        }
      } else if(value == 10){
        timer.textContent = `Time: ${elapsedTime} seconds up out of 150 seconds!`;

        if(score.innerHTML == 10){
          alert('Congratulations, you have completed the game in '+elapsedTime+ ' seconds.');
          window.location.reload();

        }

        if (elapsedTime > 150) {
            endGame();
        }
      } else if(value == 12){
        timer.textContent = `Time: ${elapsedTime} seconds up out of 180 seconds!`;

        if(score.innerHTML == 12){
          alert('Congratulations, you have completed the game in '+elapsedTime+ ' seconds.');
          window.location.reload();

        }

        if (elapsedTime > 180) {
            endGame();
        }
      }

    }, 1000);
  }
  
  
function shuffleImage(){


    card.forEach(c=>{

        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]
    })
}


function clicking(){
    for(let i =0; i<card.length; i++){
        front[i].classList.add('show')
        setInterval(() => {
            front[i].classList.remove('show')
        }, 2000);
        card[i].addEventListener('click' ,()=>{
            front[i].classList.add('flip')
           const filppedCard = document.querySelectorAll('.flip')
           if(value == 8){
            if(filppedCard.length == 2){
                container.style.pointerEvents ='none'
                setInterval(() => {
                    
                    container.style.pointerEvents ='all'
                }, 1000);
 
                match(filppedCard[0] , filppedCard[1])
            }
           } else if(value == 10){
            if(filppedCard.length == 2){

                container_10.style.pointerEvents ='none'
                
                setInterval(() => {
                    
                    container_10.style.pointerEvents ='all'
                }, 1000);
 
                match(filppedCard[0] , filppedCard[1])
            }
           } else if(value == 12){
            if(filppedCard.length == 2){

                container_12.style.pointerEvents ='none'
                
                setInterval(() => {
                    
                    container_12.style.pointerEvents ='all'
                }, 1000);
 
                match(filppedCard[0] , filppedCard[1])
            }
           }


        })
    }
}




function match(cardOne , cardTwo){

    if(cardOne.dataset.index == cardTwo.dataset.index){

        score.innerHTML = parseInt(score.innerHTML) + 1
       
        cardOne.classList.remove('flip') 
        cardTwo.classList.remove('flip') 


        cardOne.classList.add('match')
        cardTwo.classList.add('match')


    }else{

        setTimeout(() => {
            
            cardOne.classList.remove('flip') 
            cardTwo.classList.remove('flip') 
        }, 1000);
    }
}

function endGame() {
    if (confirm("Time up, reload page to play again")) {
        window.location.reload();

    }
    card.forEach(c => {
      c.style.pointerEvents = 'none';
    });
  }
  