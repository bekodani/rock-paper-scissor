var ko = document.getElementById('ko');
var papir = document.getElementById('papir');
var ollo = document.getElementById('ollo');
var score = document.querySelector('.you2');
var score2 = document.querySelector('.bot2');
var opponentSide = document.getElementById('opponent-side');
var yourSide = document.getElementById('your-side');
var messageElement = document.querySelector('.message-container');
var newGameElement = document.getElementById('new-game');
var hiddenContainer = document.getElementById('hidden-container');

newGameElement.addEventListener('click', (ev) => {
  ev.target.style.display = 'none';
  document.getElementById('container').style.display = 'inline-block';
});

document.querySelector('.hidden-btn').addEventListener('click', () => {
  location.reload();
return false;
})

var stone = "Kő"
var paper = "Papír"
var scissor = "Olló"


var arr = ['Kő', 'Papír', 'Olló'];

function opponent() {
  return Math.floor(Math.random() * 3);
}

let buttons = document.querySelectorAll('.btn')
 buttons.forEach((btn) => { btn.addEventListener("click", (event) => {
    if (event.target.id == 'ko') {
      newGame(stone)
      setTimeout(function(){
      yourSide.innerHTML = `<img src="./src/rock_white.png" class="oppImg">`;
      },50);
    } else if (event.target.id == 'papir') {
      newGame(paper)
      setTimeout(function(){
      yourSide.innerHTML = `<img src="./src/paper_white.png" class="oppImg">`;
      },50);
    } else if (event.target.id == 'ollo') {
      newGame(scissor)
      setTimeout(function(){
      yourSide.innerHTML = `<img src="./src/scissor_white.png" class="oppImg">`;
      },50);
    }
  }); 
});

var myScore = 0;
var opponentScore = 0;

var array = [];
var array2 = [];

function newGame(hand) {

  var random = opponent();

  if ( 
        hand === stone && random === 0 ||
        hand === paper && random === 1 ||
        hand === scissor && random === 2
      ) {
    console.log(arr[random]);
    console.log('Döntetlen');
    messageElement.innerHTML = "Egyre gondoltunk";
    setTimeout(function(){
      opponentSide.classList.remove("win");
      },50);
      setTimeout(function(){
        yourSide.classList.remove("win2");
        },50);
  } else if 
      (
        hand === stone && random === 1 ||
        hand === paper && random === 2 ||
        hand === scissor && random === 0
      ) {
      console.log(arr[random]);
      console.log('Vereség');
      opponentScore += 1;
      array2.push('one');
      messageElement.innerHTML = "Ez nem jött be ;)";
      setTimeout(function(){
      opponentSide.classList.add("win");
      },50);
      setTimeout(function(){
        yourSide.classList.remove("win2");
        },50);
  } else if 
  (            
        hand === stone && random === 2 ||
        hand === paper && random === 0 ||
        hand === scissor && random === 1
      ) {
      console.log(arr[random]);
      console.log('Győzelem');
      myScore += 1;
      array.push('one');
      messageElement.innerHTML = "Mázlista...";
        opponentSide.classList.remove("win");
      setTimeout(function(){
        yourSide.classList.add("win2");
        },50);
  }
  
  arr[0] = './src/rock_white.png';
  arr[1] = './src/paper_white.png';
  arr[2] = './src/scissor_white.png';

  score.innerHTML = myScore;
  score2.innerHTML = opponentScore;
  setTimeout(function(){
  opponentSide.innerHTML = `<img src="${arr[random]}" class="oppImg">`;
  },50);

  if (array.length > 4) {
    youWin(array)
  } else if (array2.length > 4) {
    youWin(array2)
  }
}



function youWin(arr) {
/*   document.querySelectorAll('button.btn').forEach(elem => {
    elem.disabled = true;
},300) */
setTimeout(function(){
  opponentSide.classList.remove("win");
  },50);
  setTimeout(function(){
    yourSide.classList.remove("win2");
    },50);

setTimeout(function() {
document.getElementById('play-side').style.display = 'none';
})
setTimeout(function(){
document.querySelector('.hidden-btn').style.display = 'block';
//document.querySelector('.hiddenscore').style.display = 'block';
},1000)



   if (arr == array) {
    setTimeout(function() {
    document.getElementById('score').innerHTML = `<div class="golden-win">Győzelem!</div><div><span class="you2">${array.length}</span> - <span class="bot2">${array2.length}<span></div>`
    messageElement.innerHTML = "Visszavágó?";
    opponentSide.innerHTML = `<img src="./src/lose_white.png" class="end-img">`;
    yourSide.innerHTML = `<img src="./src/win_white.png" class="end-img">`;
    yourSide.classList.add("end-win");
    },500)
  } else if (arr == array2) {
    setTimeout(function() {
    document.getElementById('score').innerHTML = `<div class="lost">Vereség...</div><div><span class="you2">${array.length}</span> - <span class="bot2">${array2.length}<span></div>`
    messageElement.innerHTML = "...a részvétel a fontos";
    opponentSide.innerHTML = `<img src="./src/win_white.png" class="end-img">`;
    yourSide.innerHTML = `<img src="./src/lose_white.png" class="end-img">`;
    opponentSide.classList.add("end-win");
    },500)
  } 
}

















 /* ko.addEventListener('click', () => {
  newGame(stone)
})

papir.addEventListener('click', () => {
  newGame(paper)
})

ollo.addEventListener('click', () => {
  newGame(scissor)
}) 

var arr = ['Kő', 'Papír', 'Olló'];


var myScore = 0;
var opponentScore = 0;


var stone = 'Kő';
var paper = 'Papaír';
var scissor = 'Olló';

function opponent() {
    return Math.floor(Math.random() * 3);
  }

  function newGame(hand) {
    var random = opponent();



     if (
            hand === stone && random === 0 ||
            hand === paper && random === 1 ||
            hand === scissor && random === 2
        ){
      //console.log(arr[random])
      myScore += 0;
      opponentScore += 0;
      count += 1
      //return arr[random];
    } else if (
            hand === stone && random === 1 ||
            hand === paper && random === 2 ||
            hand === scissor && random === 0
            ){
    //console.log(arr[random])
      opponentScore += 1;
      count += 1   
      //return arr[random];
    } else if (
            hand === stone && random === 2 ||
            hand === paper && random === 0 ||
            hand === scissor && random === 1
            ){
    //console.log(arr[random])
      myScore += 1;
      count += 1      
     // return arr[random];
    } else {
        console.log('Something went wrong')
    }



    var opp =  arr[random];

    score.innerHTML = myScore;
    score2.innerHTML = opponentScore;
    opponentSide.innerHTML = opp;
//console.log(opp)
//console.log(count)
}



for (var i = 0; i < div.length; i++) {
    result = div[i];
    result.addEventListener('click', () => {
        eredmeny()
    });
}

function eredmeny() {
  if (myScore == 5 && opponentScore == 5) {
      console.log('Vége')
  } else if (myScore > 4) {
      console.log('Nyertél')
  } else if (opponentScore > 4) {
      console.log('Vesztettél')
  }
  return
}  */
















