
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

let questionsDataArray ; 
let CurrentQuestionDataIndex = 0;

function getSelectedQuestionData() {
    return questionsDataArray[CurrentQuestionDataIndex];
}
function InitializeRound(){
    //take the player's name
    //initialize the score
    //select game difficulty (mode)
    CurrentQuestionDataIndex=0;
    questionsDataArray = model.gameManagerObj.getQuestionsData();
}


function loadQuestionCard(){
  let currentQData= getSelectedQuestionData();
  DOM_question.textContent = currentQData.getQuestion();

  DOM_option1.textContent = currentQData.getOption(0);
  DOM_option1.addEventListener("click",()=> showAnswer(0));

  DOM_option2.textContent = currentQData.getOption(1);
  DOM_option2.addEventListener("click",()=> showAnswer(1));

  DOM_option3.textContent = currentQData.getOption(2);
  DOM_option3.addEventListener("click",()=> showAnswer(2));

}
function showAnswer(selectedAnswer) {

    DOM_scorecard.classList.replace('smallScore', 'bigScore')

    //add text to scorecard - messgae press space bar (class or DOM)


    if (selectedAnswer === getSelectedQuestionData().answerIndex) {
      //correct

      //message
      //correctclass



    } else {

      //incorrect

      //message
      //incorrectclass
    }

    //show correct answer text

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
<<<<<<< HEAD
      showAnswer(0)
=======
      showAnswer(0);
>>>>>>> master
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
  console.log(DOM_scorecard.classList, "this is the classList")
  
  if(DOM_scorecard.classList.contains('bigscore')){
    DOM_scorecard.classList.replace('bigScore', 'smallScore')
    // call next card function
  }

  if (CurrentQuestionDataIndex <= 2) {
    loadNextQuestion()
} else {
  console.log("GAME HAS ENDED")
    //end game screen
}


}


InitializeRound();
loadQuestionCard();

