

class questionData{
    constructor(question,answerIndex,...options){
        this.question = question;
        this.answerIndex = answerIndex;
        this.options = options;
    }
    getAnswer(){
        return this.options[this.answerIndex];
    }
    getOption(index){
        return this.options[index];
    }
    getQuestion(){
        return this.question;
    }

}
let arr=[
    new questionData("what is 2 + 2 ?", 0,"4","5", "2"),
    new questionData("what is the capital Italy?",1 ,"haifa","rome", "madrid"),
];



//-----------------------------------------------------------------------------------------
var currentCountdown;
var intervalID;
/***
 * this function is used to show a countdown and update the DOM
 * @param seconds - the countdown in seconds
 * @param func - the function that will be called every second of the countdown
 */
function timer(seconds, func){
    currentCountdown = seconds;
    intervalID= setInterval(()=>{

        func();    //update the DOM
        currentCountdown--;

        if(currentCountdown < 0)
            clearInterval(intervalID);

    },1000)
}
function calculateScoreForRound(){
    return currentCountdown *gameRulesObj.getScore();
}
//-----------------------------------------------------------------------------------------

let playerObj ={
    playerName:"",
    playerScore: 0,

}
let gameRulesObj={
    scorePerRound_easyMode: 10,
    scorePerRound_mediumMode: 20,
    scorePerRound_hardMode: 30,
    roundType:"easy",
    getScore(){
        switch (this.roundType.toLowerCase()) {
            case "easy":
                return this.scorePerRound_easyMode;
            case "medium":
                return this.scorePerRound_mediumMode;
            case "hard":
                return this.scorePerRound_hardMode;

        }
    },
    setModeType(mode){
        this.roundType = mode;
    }


}


gameRulesObj.setModeType("hard");
