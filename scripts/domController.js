
import * as model from "./models.js";

// add a button within the resultPopup div and link it to the "loadNextQuestion" function
// math the id of the "DOM_resultPopup" variable
// implement the "showAnswer" function
// update/track the player score
// bind the options to relative keys
// implement the "endGame" function


let DOM_question  = document.getElementById("question");
let DOM_option1  = document.getElementById("answer1");
let DOM_option2  = document.getElementById("answer2");
let DOM_option3  = document.getElementById("answer3");
let DOM_scorecard = document.querySelector("#currentScore");
let DOM_wrongResponses = document.querySelectorAll('.onWrongAnswer');
let DOM_correctResponses = document.querySelectorAll('.onCorrectAnswer');
let DOM_timer = document.getElementById("timerWidth");
let DOM_currentScoreValue = document.getElementById('currentScoreValue')
let DOM_correctAnswer = document.querySelector('#correctAnswer')
let DOM_endGame = document.getElementById("endGame");
let DOM_endGameText = document.getElementById("endGameText");
let DOM_spaceContinue = document.getElementById("spaceToContinue");


let hasAnswered = false;

let questionsDataArray ;
let CurrentQuestionDataIndex = 0;

function getSelectedQuestionData() {
    return questionsDataArray[CurrentQuestionDataIndex];
}
function initializeRound(){
    //take the player's name
    //initialize the score
    //select game difficulty (mode)
    hasAnswered = false;
    CurrentQuestionDataIndex=0;
    questionsDataArray = model.gameManagerObj.getQuestionsData();
    model.playerObj.playerScore=0;

    model.gameManagerObj.stopTimer();


  DOM_correctResponses.forEach(x => x.classList.remove('hidden'));
  DOM_wrongResponses.forEach(x => x.classList.remove('hidden'));
  DOM_correctResponses.forEach(x => x.classList.add('hidden'));
  DOM_wrongResponses.forEach(x => x.classList.add('hidden'));
  DOM_endGame.classList.remove("hidden");
  DOM_endGame.classList.add("hidden");

  DOM_currentScoreValue.textContent = model.playerObj.playerScore;

}


function loadQuestionCard(){

  if(questionsDataArray.length  === CurrentQuestionDataIndex)
  {
    DOM_endGame.classList.remove("hidden");
    DOM_endGameText.textContent = "the game has ended - you total score is " + model.playerObj.playerScore;
    hasAnswered = true;
    return;
  }
  hasAnswered = false;

  let currentQData= getSelectedQuestionData();
  DOM_question.textContent = currentQData.getQuestion();

  DOM_option1.textContent = currentQData.getOption(0);
  DOM_option1.parentElement.addEventListener("click",()=> showAnswer(0));

  DOM_option2.textContent = currentQData.getOption(1);
  DOM_option2.parentElement.addEventListener("click",()=> showAnswer(1));

  DOM_option3.textContent = currentQData.getOption(2);
  DOM_option3.parentElement.addEventListener("click",()=> showAnswer(2));

  model.gameManagerObj.startTimer(()=>{
    let currentCountdown = model.gameManagerObj.getCurrentCountDown();

    DOM_timer.style.width = `${100 * (model.gameManagerObj.getCountDownDuration() - currentCountdown)/model.gameManagerObj.getCountDownDuration()}%`;
    if(currentCountdown> model.gameManagerObj.getCountDownDuration())
    {
      model.gameManagerObj.stopTimer();

    }
  });

}
function showAnswer(selectedAnswer) {

  if(hasAnswered) return ;
  else  hasAnswered = true;


  model.gameManagerObj.stopTimer();


  DOM_scorecard.classList.replace('smallScore', 'bigScore') // change size
    //DOM_pressSpace.classList.toggle('hidden') // show/hide press space message
    //DOM_answertext.classList.toggle('hidden') // show/hide press Answer Text

    DOM_correctAnswer.textContent = "ANSWER IS: " + getSelectedQuestionData().options[getSelectedQuestionData().answerIndex]
  
  


    if (selectedAnswer === getSelectedQuestionData().answerIndex) {

      model.playerObj.playerScore += model.gameManagerObj.getScore();
      console.log("score is",model.playerObj.playerScore)
      

      //DOM_currentScoreValue.textContent += "current score: " + model.playerObj.playerScore;
      DOM_currentScoreValue.textContent = model.playerObj.playerScore;
      
      DOM_correctResponses.forEach(x => x.classList.remove('hidden'));
      DOM_wrongResponses.forEach(x => x.classList.remove('hidden'));
      DOM_wrongResponses.forEach(x => x.classList.add('hidden'));

      //message
      //correctclass



    } else {

      console.log("incorrect selected")

      //DOM_currentScoreValue.textContent += "current score: " + model.playerObj.playerScore;

      DOM_correctResponses.forEach(x => x.classList.remove('hidden'));
      DOM_correctResponses.forEach(x => x.classList.add('hidden'));
      DOM_wrongResponses.forEach(x => x.classList.remove('hidden')); 

      //message
      //incorrectclass
    }

    //show correct answer text
    spaceToContinue.classList.toggle("hidden")
    //show the popup
    //give the popup correct class - success or incorrect?

}


function loadNextQuestion() {
    CurrentQuestionDataIndex++;
    loadQuestionCard();
}
function endGame() {

}


//Need to prevent default of space button -     event.preventDefault();
//


window.addEventListener("keydown", somethingWasTyped)

function somethingWasTyped(key) {
  console.log(key)
  switch(key.keyCode) {
    case 49:
      console.log("key is 1");
      showAnswer(0);
      break;
    case 50:
      console.log("key is 2")
      showAnswer(1);
      break;
    case 51:
      console.log("key is 3");
      showAnswer(2);
      break;
    case 32:
      console.log("space hit");
      key.preventDefault()
      userPressedSpace();
      break;
  }
}

function userPressedSpace(){

  if(!hasAnswered)
    return;

  console.log(DOM_scorecard.classList, "this is the classList")
  
  if(DOM_scorecard.classList.contains('bigScore')){
    DOM_scorecard.classList.replace('bigScore', 'smallScore')
  }


  DOM_correctResponses.forEach(x => x.classList.remove('hidden'));
  DOM_wrongResponses.forEach(x => x.classList.remove('hidden'));
  spaceToContinue.classList.toggle("hidden")

  DOM_correctResponses.forEach(x => x.classList.add('hidden'));
  DOM_wrongResponses.forEach(x => x.classList.add('hidden'));


      loadNextQuestion();

  //setting limit on amount of questions in game
//   if (CurrentQuestionDataIndex <= 2) {
//     loadNextQuestion();
// } else {
//   console.log("GAME HAS ENDED")
//   DOM_scorecard.textContent = "GAME HAS ENDED"
// }

// //reset scroeboard at end of each question
// DOM_scorecard.textContent = "score:" + model.playerObj.playerScore
// DOM_scorecard.style.background = "green"
// DOM_scorecard.classList.remove("correct")
// DOM_scorecard.classList.remove("incorrect")

}


  

initializeRound();
loadQuestionCard();


