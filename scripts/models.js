

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


console.log(arr[0].question);
console.log(arr[1].getAnswer());
