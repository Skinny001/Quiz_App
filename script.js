const questions = [
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
            // { text: "<!-- Comment -->", correct: false},
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
               
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        answers: [
            { text: "//", correct: true},
            { text: "<!-- -->", correct: false},
            { text: "##", correct: false},
            { text: "%%", correct: false},
        ]
    },

    {
        question: "Which JavaScript method is used to find an HTML element by ID?",
        answers: [
            { text: "getElementById()", correct: true},
            { text: "getElementByName()", correct: false},
            { text: "getElementByClass()", correct: false},
            { text: "querySelector()", correct: false},
        ]
    },

    {
        question: "What does 'typeof' operator return for null?",
        answers: [
            { text: "object", correct: true},
            { text: "null", correct: false},
            { text: "Jundefined", correct: false},
            { text: "string", correct: false},
        ]
    },

    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: "function myFunction() {}", correct: true},
            { text: "function:myFunction {}", correct: false},
            { text: "function = myFunction {}", correct: false},
            { text: "function(myFunction) {}", correct: false},
        ]
    },

    {
        question: "Which of the following is not a JavaScript data type?",
        answers: [
            { text: "Undefined", correct: false},
            { text: "Boolean", correct: false},
            { text: "Float", correct: true},
            { text: "JString", correct: false},
        ]
    },

    {
        question: "Which statement is used to stop a loop?",
        answers: [
            { text: "break", correct: true},
            { text: "exit", correct: false},
            { text: "stop", correct: false},
            { text: "end", correct: false},
        ]
    },

    {
        question: "Which of the following is a JavaScript framework?",
        answers: [
            { text: "Django", correct: false},
            { text: " React", correct: true},
            { text: "Laravel", correct: false},
            { text: "Flask", correct: false},
        ]
    },

    {
        question: "How do you write (Hello World) in an alert box?",  
        answers: [
            { text: "msgBox(Hello World)", correct: false},
            { text: "Jalert(Hello World)", correct: true},
            { text: "alertBox(Hello World)", correct: false},
            { text: "showAlert(Hello World)", correct: false},
        ]
    },
                    // next
    {
        question: "Which method is used to parse a JSON string?", 
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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


    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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

    {
        question: "Which method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true},
            { text: "JSON.stringify()", correct: false},
            { text: "JSON.convert()", correct: false},
            { text: "JSON.decode()", correct: false},
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
// const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start-btn");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let intervalId;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    nextButton.innerHTML = "Next";
    showQuestion();
    startTimer();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + ". " + currentQuestion.question;

    // Clear the answerButton element
    answerButton.innerHTML = '';

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.index = index;
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButton.appendChild(button);
    });
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function resetState(){
    nextButton.style.display = "none";
    answerButton.innerHTML = '';
}

function handleNextButton(){
    if (nextButton.innerHTML === "Play Again") {
        startQuiz();
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }
}

function startTimer(){
    intervalId = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Time left: ${timeLeft} seconds`;
        if (timeLeft === 0) {
            clearInterval(intervalId);
            showScore();
        }
    }, 1000);
}

nextButton.addEventListener("click", handleNextButton);
startButton.addEventListener("click", startQuiz);

startQuiz();
