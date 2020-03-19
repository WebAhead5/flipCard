
import * as model from "./models.js";

let DOM_question  = document.getElementById("question");
let DOM_option1  = document.getElementById("answer1");
let DOM_option2  = document.getElementById("answer2");
let DOM_option3  = document.getElementById("answer3");

let questionsDataArray ; 
let CurrentQuestionDataIndex = 0;

function InitializeRound(){
    //take the player's name
    //initialize the score
    //select game difficulty (mode)
    CurrentQuestionDataIndex=0;
    questionsDataArray = model.gameManagerObj.getQuestionsData();
}

function loadQuestionCard(){
  let currentQData= questionsDataArray[CurrentQuestionDataIndex];
  DOM_question.textContent = currentQData.getQuestion();
  DOM_option1.textContent = currentQData.getOption(0);
  DOM_option2.textContent = currentQData.getOption(1);
  DOM_option3.textContent = currentQData.getOption(2);

}


//Need to prevent default of space button -     event.preventDefault();
//


window.addEventListener("keydown", somethingWasTyped)

function somethingWasTyped(key) {
  console.log(key)
  switch(key.keyCode) {
    case 49:
      console.log("key is 1");
      userChoseOption(1);
      break;
    case 50:
      console.log("key is 2")
      userChoseOption(2);
      break;
    case 51:
      console.log("key is 3");
      UserChoseOption(3);
      break;
    case 32:
      console.log("space hit");
      key.preventDefault()
      userPressedSpace();
      break;
  }
}

let DOM_scorecard = document.querySelector("#currentScore");

function userPressedSpace(){
  console.log(DOM_scorecard.classList, "this is the classList")
  
  if(DOM_scorecard.classList.contains('bigscore')){
    DOM_scorecard.classList.replace('bigScore', 'smallScore')
  }
}

function UserChoseOption(optionNumber){
  DOM_scorecard.classList.replace('smallScore', 'bigScore')
  //Need to change inner text to say correct or incorrect
}

InitializeRound();
loadQuestionCard();