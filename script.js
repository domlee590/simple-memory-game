//Global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = []; //8 clues
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime;
var mistakes;
var timer;
var score = 0;

function generatePattern() {
  var min = 1;
  var max = 6;

  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random() * (max - min) + min);
  }
  console.log(pattern); //for testing
}

function timeLimit() {
  // setInterval(function () {document.getElementById("mistakes").innerHTML += "Hello"}, 1000);
  var timeLeft = 9;
  clearInterval(timer);
  timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer);
      loseGame();
    }
    updateTime(timeLeft);
    timeLeft -= 1;
  }, 1000);

}

function updateTime(timeLeft) {
  document.getElementById("time").innerHTML = "Seconds: " + timeLeft;
}

function startGame() {
  //initialize game variables
  mistakes = 0;
  document.getElementById("mistakes").innerHTML = "Mistakes: 0";
  clueHoldTime = 1000;
  generatePattern();
  progress = 0;
  gamePlaying = true;
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  document.getElementById("score").innerHTML = "Score: " + score;
  //game no longer play
  gamePlaying = false;
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  clearInterval(timer);
  document.getElementById("time").innerHTML = "Seconds: 10";
}

function loseGame() {
  score -= 1;
  stopGame();
  clearInterval(timer);
  alert("Game Over. You Lost!");
}

function winGame() {
  score += 1;
  stopGame();
  alert("Game Over. You Won!");
}


function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (btn == pattern[guessCounter]) {
    if (guessCounter == pattern.length - 1) {
      winGame();
    } else if (guessCounter == progress) {
      progress++;
      playClueSequence();
    } else {
      guessCounter++;
    }
  } else {
    mistakes += 1;
    document.getElementById("mistakes").innerHTML = "Mistakes: " + mistakes;
    if (mistakes > 2) loseGame();
  }
}

function disableButtons(){
  for(let i = 1; i<6; i++){
    document.getElementById("button" + i).disabled = true;
  }
}

function enableButtons(){
  for(let i = 1; i<6; i++){
    document.getElementById("button" + i).disabled = false;
  }
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
  document.getElementById("img" + btn).classList.remove("hidden");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
  document.getElementById("img" + btn).classList.add("hidden");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playAudio(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  clueHoldTime -= 65 * (progress / 2.5);
  guessCounter = 0; //reset player guess count
  let delay = nextClueWaitTime; //set delay to initial wait time
  disableButtons();
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  
  clearInterval(timer);
  document.getElementById("time").innerHTML = "Seconds: 10";
  setTimeout(timeLimit, delay);
  setTimeout(enableButtons, delay);
}

function playAudio(btn, len) {
  play(btn);
  setTimeout(function () {
    stop(btn);
  }, len);
}

function play(btn) {
  document.getElementById("sound" + btn).play();
}

function stop(btn) {
  document.getElementById("sound" + btn).pause();
  document.getElementById("sound" + btn).currentTime = 0;
}

/*
// Sound Synthesis Functions
const freqMap = {
  1: 271.6,
  2: 399.6,
  3: 402,
  4: 490.2,
  5: 530,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
*/
