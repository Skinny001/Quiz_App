const questions =[
    {
        question: "What is the correct way to declare a JavaScript variable?",
        answers: [
            { text: "variable myVar", correct: false},
            { text: "v myVar", correct: false},
            { text: "var myVar", correct: true},
            { text: "myVar", correct: false},
        ]
    },

    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Microsoft", correct: false},
            { text: "Netscape", correct: true},
            { text: "Google", correct: false},
            { text: " Apple", correct: false},
        ]
    },

    {
        question: "How do you write a comment in JavaScript?",
        answers: [
            { text: "<!-- Comment -->", correct: false},
            { text: "// Comment", correct: true},
            { text: "/* Comment */", correct: false},
            { text: "** Comment *", correct: false},
        ]
    },

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
        ]
    },


];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}