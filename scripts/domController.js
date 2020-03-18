
import * as model from "./models.js";

//todo add a button within the resultPopup div and link it to the "loadNextQuestion" function
//todo math the id of the "DOM_resultPopup" variable
//todo implement the "showAnswer" function
//todo update/track the player score
//todo bind the options to relative keys
//todo implement the "endGame" function


let DOM_question  = document.getElementById("question");
let DOM_option1  = document.getElementById("answer1");
let DOM_option2  = document.getElementById("answer2");
let DOM_option3  = document.getElementById("answer3");
let DOM_resultPopup = document.getElementById("resultPopup");//todo match the id

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

    // DOM_resultPopup.classList.toggle("");  ///todo setup the current class name
    console.log(selectedAnswer === getSelectedQuestionData().answerIndex);

}
function loadNextQuestion() {
    CurrentQuestionDataIndex++;
    loadQuestionCard();
}
function endGame() {

}

InitializeRound();
loadQuestionCard();

