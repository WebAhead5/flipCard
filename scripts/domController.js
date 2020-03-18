
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

InitializeRound();
loadQuestionCard();