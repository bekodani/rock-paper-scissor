//var rockElement = document.getElementById('rock');
//var papir = document.getElementById('papir');
//var ollo = document.getElementById('ollo');
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
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.id == 'rock') {
      newGame(stone)
      setTimeout(function () {
        yourSide.innerHTML = `<img src="./src/rock_white.png" class="oppImg">`;
      }, 50);
    } else if (event.target.id == 'paper') {
      newGame(paper)
      setTimeout(function () {
        yourSide.innerHTML = `<img src="./src/paper_white.png" class="oppImg">`;
      }, 50);
    } else if (event.target.id == 'scissor') {
      newGame(scissor)
      setTimeout(function () {
        yourSide.innerHTML = `<img src="./src/scissor_white.png" class="oppImg">`;
      }, 50);
    }
  });
});

var myScore = 0;
var opponentScore = 0;

var me = 'Me';
var comp = 'Comp';


function newGame(hand) {

  var random = opponent();

  if (
    hand === stone && random === 0 ||
    hand === paper && random === 1 ||
    hand === scissor && random === 2
  ) {
    messageElement.innerHTML = "Egyre gondoltunk";
    setTimeout(function () {
      opponentSide.classList.remove("win");
    }, 50);
    setTimeout(function () {
      yourSide.classList.remove("win2");
    }, 50);
  } else if (
    hand === stone && random === 1 ||
    hand === paper && random === 2 ||
    hand === scissor && random === 0
  ) {
    opponentScore += 1;
    messageElement.innerHTML = "Ez nem jött be ;)";
    setTimeout(function () {
      opponentSide.classList.add("win");
    }, 50);
    setTimeout(function () {
      yourSide.classList.remove("win2");
    }, 50);
    console.log(opponentScore)
  } else if (
    hand === stone && random === 2 ||
    hand === paper && random === 0 ||
    hand === scissor && random === 1
  ) {
    myScore += 1;
    messageElement.innerHTML = "Mázlista...";
    opponentSide.classList.remove("win");
    setTimeout(function () {
      yourSide.classList.add("win2");
    }, 50);
    console.log(myScore)
  }

  arr[0] = './src/rock_white.png';
  arr[1] = './src/paper_white.png';
  arr[2] = './src/scissor_white.png';

  score.innerHTML = myScore;
  score2.innerHTML = opponentScore;
  setTimeout(function () {
    opponentSide.innerHTML = `<img src="${arr[random]}" class="oppImg">`;
  }, 50);

  if (myScore > 4 && opponentScore < 5) {
    whoWon(me);
  } else if (opponentScore > 4 && myScore < 5) {
    whoWon(comp);
  }
}



function whoWon(arg) {
  setTimeout(function () {
    opponentSide.classList.remove("win");
  }, 50);
  setTimeout(function () {
    yourSide.classList.remove("win2");
  }, 50);

  setTimeout(function () {
    document.getElementById('play-side').style.display = 'none';
  })
  setTimeout(function () {
    document.querySelector('.hidden-btn').style.display = 'block';
  }, 1000)



  if (arg == me) {
    setTimeout(function () {
      document.getElementById('score').innerHTML = `<div class="golden-win">Győzelem!</div><div><span class="you2">${myScore}</span> - <span class="bot2">${opponentScore}<span></div>`
      messageElement.innerHTML = "Visszavágó?";
      opponentSide.innerHTML = `<img src="./src/lose_white.png" class="end-img">`;
      yourSide.innerHTML = `<img src="./src/win_white.png" class="end-img">`;
      yourSide.classList.add("end-win");
    }, 500)
  } else if (arg == comp) {
    setTimeout(function () {
      document.getElementById('score').innerHTML = `<div class="lost">Vereség...</div><div><span class="you2">${myScore}</span> - <span class="bot2">${opponentScore}<span></div>`
      messageElement.innerHTML = "...a részvétel a fontos";
      opponentSide.innerHTML = `<img src="./src/win_white.png" class="end-img">`;
      yourSide.innerHTML = `<img src="./src/lose_white.png" class="end-img">`;
      opponentSide.classList.add("end-win");
    }, 500)
  }
}