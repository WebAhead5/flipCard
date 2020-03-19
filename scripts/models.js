

export class questionData{
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

const easyQuestions=[
    new questionData("what is 2 + 2 ?", 0,"4","5", "2"),
    new questionData("what is 2 + 2 ?", 0,"4","5", "2"),
    new questionData("what is 2 + 2 ?", 0,"4","5", "2"),
    new questionData("what is 2 + 2 ?", 0,"4","5", "2"),
    new questionData("what is 2 + 2 ?", 0,"4","5", "2"),


];
const mediumQuestions= [
    new questionData("what is 2 + 2 ?", 0,"4","5", "2"),
    new questionData("what is the capital Italy?",1 ,"haifa","rome", "madrid"),
];

const hardQuestions= [
    new questionData("what is 2 + 2 ?", 0,"4","5", "2"),
    new questionData("what is the capital Italy?",1 ,"haifa","rome", "madrid"),
];

//-----------------------------------------------------------------------------------------
 var currentCountdown;
 var intervalID;
 function timer(seconds, func){
    currentCountdown = seconds;
    intervalID= setInterval(()=>{

        func();    //update the DOM
        currentCountdown--;

        if(currentCountdown < 0)
            clearInterval(intervalID);

    },1000)
}
//-----------------------------------------------------------------------------------------

export const playerObj ={
    playerName:"",
    playerScore: 0,

}
export const gameManagerObj={
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
    setRoundType(mode){
        this.roundType = mode;
    },
    getQuestionsData(){
        switch (this.roundType.toLowerCase()) {
            case "easy":
                return randomizeArray( easyQuestions);
            case "medium":
                return randomizeArray(mediumQuestions);
            case "hard":
                return randomizeArray(hardQuestions);
        }
    },

    /***
     * this function is used to show a countdown and update the DOM
     * @param seconds - the countdown in seconds
     * @param func - the function that will be called every second of the countdown
     */
    startTimer(seconds, func){
        timer(seconds,func);
    },
    calculateScoreForRound(){
    return currentCountdown * this.getScore();
    }

}

function randomizeArray(arr){
     let clone =arr.map(x=>x);
     let retArr=[];
     while(clone.length>0){
        let randomNum = Math.floor(Math.random() * clone.length);
        let cardData = clone.splice(randomNum,1)[0];

        //randomize the card options
         randomizeOptionsInQuestionData(cardData);

        retArr.push(cardData);
     }
     return retArr;
}

function randomizeOptionsInQuestionData(qData){
    let options = qData.options;
    let randomizedOptions=[];
    let correctAns = qData.getAnswer();

    while(options.length>0){
        let randomNum = Math.floor(Math.random() * options.length);
        randomizedOptions.push(...options.splice(randomNum,1));
    }
    qData.options = randomizedOptions;
    qData.answerIndex = qData.options.indexOf(correctAns);
 }


