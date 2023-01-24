//array to store questions
var questions = [
    {
        "question" : "What is the capital of france ?",
        "choices": ["Paris","London","Berlin","Rome"],
        "correctAnswer" : 0
    },
    {
        "question" : "What is the tallest mammal ?",
        "choices" :["Elephant","Giraffe","Kangaoo","Gorilla"],
        "correctAnswer" : 1
    },
    {
        "question" : "What is the currency of japan ?",
        "choices": ["Euro","Yen","Dollar","Pound"],
        "correctAnswer" : 1
    }
]
var currentQuestion = 0;
var score = 0;

//display the current question

function displayQuestion(){
    var question = questions[currentQuestion].question;
    var choices = questions[currentQuestion].choices;
    
    document.getElementById("question").innerHTML = question;

    var choicelist = "";
    for(var i = 0; i < choices.length; i++ ){
        choicelist += "<input type = radio name = 'choice' value ="+ i + " > " + choices[i] + "<br>"
    }

    document.getElementById("choices").innerHTML = choicelist;
    document.getElementById("submit").innerHTML = "<button style={} onclick = 'checkanswer()' value =''>submit</button>";

}

//check if the answer is correct
function checkanswer(){
    var choices = document.getElementsByName("choice");
    for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      var choice = choices[i].value;
    }
    }

    if (choice == questions[currentQuestion].correctAnswer) {
        score++;
    }

    //move to tne nexe question
    currentQuestion++;

    if(currentQuestion == questions.length){
        document.getElementById("quiz").innerHTML = "Your score is " + score + " out of " + questions.length; 
    }else{
        displayQuestion();
    }
}
displayQuestion();
