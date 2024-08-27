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
            // { text: "<!-- -->", correct: false},
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
        question: "Which array method adds an element to the end of an array?", 
        answers: [
            { text: "push()", correct: true},
            { text: "Jpop()", correct: false},
            { text: "shift()", correct: false},
            { text: "Junshift()", correct: false},
        ]
    },

    {
        question: "How do you remove the first element of an array?",
        answers: [
            { text: "Jarray.pop()", correct: false},
            { text: "array.shift()", correct: true},
            { text: "Jarray.slice(1)", correct: false},
            { text: "array.splice(0, 1)", correct: false},
        ]
    },

    {
        question: "Which keyword is used to define a constant in JavaScript?",
        answers: [
            { text: "let", correct: false},
            { text: "Jvar", correct: false},
            { text: "const", correct: true},
            { text: "final", correct: false},
        ]
    },

    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "*", correct: false},
            { text: "=", correct: true},
            { text: "x", correct: false},
            { text: "=>", correct: false},
        ]
    },

    {
        question: "Which of the following is used to iterate over an array?",
        answers: [
            { text: "forEach", correct: false},
            { text: "map", correct: false},
            { text: "filter", correct: false},
            { text: "Both A and B", correct: true},
        ]
    },


    {
        question: "What is the result of 2 + '2' in JavaScript?",
        answers: [
            { text: "22", correct: true},
            { text: "4", correct: false},
            { text: "NaN", correct: false},
            { text: "undefined", correct: false},
        ]
    },


    {
        question: "What does the 'this' keyword refer to in a regular function?",
        answers: [
            { text: "The current object", correct: true},
            { text: "The global object", correct: false},
            { text: "The function itself", correct: false},
            { text: "The parent object", correct: false},
        ]
    },


    {
        question: "What is Git?",
        answers: [
            { text: " A programming language", correct: false},
            { text: "A version control system", correct: true},
            { text: "A text editor", correct: false},
            { text: "A web framework", correct: false},
        ]
    },


    {
        question: "Which command is used to initialize a new Git repository?",
        answers: [
            { text: "git init", correct: true},
            { text: "git start", correct: false},
            { text: "git create", correct: false},
            { text: "git new", correct: false},
        ]
    },


    {
        question: "How do you check the status of your Git repository?",
        answers: [
            { text: "git log", correct: false},
            { text: "git status", correct: true},
            { text: "git check", correct: false},
            { text: "git inspect", correct: false},
        ]
    },


    {
        question: "How do you stage files for a commit?",
        answers: [
            { text: "git stage", correct: false},
            { text: "git add", correct: true},
            { text: "git push", correct: false},
            { text: "git commit", correct: false},
        ]
    },


    {
        question: "Which command is used to commit changes?",
        answers: [
            { text: "git commit -m 'message'", correct: true},
            { text: "git save -m 'message'", correct: false},
            { text: "git push -m 'message'", correct: false},
            { text: "Jgit upload -m 'message'", correct: false},
        ]
    },


    {
        question: "How do you create a new branch in Git?",
        answers: [
            { text: "git branch new-branch", correct: true},
            { text: "git create new-branch", correct: false},
            { text: "git checkout new-branch", correct: false},
            { text: "git switch new-branch", correct: false},
        ]
    },


    {
        question: "Which command is used to merge branches?",
        answers: [
            { text: "git join", correct: false},
            { text: "git merge", correct: true},
            { text: "git combine", correct: false},
            { text: "git unite", correct: false},
        ]
    },


    {
        question: "How do you delete a branch in Git?",
        answers: [
            { text: "git branch -d branch-name", correct: true},
            { text: "git remove branch-name", correct: false},
            { text: "git delete branch-name", correct: false},
            { text: "git drop branch-name", correct: false},
        ]
    },


    {
        question: "What does git pull do?",
        answers: [
            { text: "Pushes changes to the remote repository", correct: false},
            { text: "Fetches and merges changes from the remote repository", correct: true},
            { text: " Deletes the local branch", correct: false},
            { text: "Removes untracked files", correct: false},
        ]
    },


    {
        question: "Which file is used to ignore certain files from being tracked in Git?",
        answers: [
            { text: ".gitignore)", correct: true},
            { text: ".gitconfig", correct: false},
            { text: ".gittrack", correct: false},
            { text: ".gitkeep", correct: false},
        ]
    },


    {
        question: "What is React?",
        answers: [
            { text: " A database", correct: false},
            { text: "A JavaScript library for building user interfaces", correct: true},
            { text: " A CSS framework", correct: false},
            { text: " A backend framework", correct: false},
        ]
    },


    {
        question: "What is a component in React?",
        answers: [
            { text: "A part of the UI", correct: true},
            { text: "A database entity", correct: false},
            { text: "A CSS class", correct: false},
            { text: " A JavaScript object", correct: false},
        ]
    },


    {
        question: "How do you create a functional component in React?",
        answers: [
            { text: "function MyComponent() {}", correct: true},
            { text: "class MyComponent extends React.Component {}", correct: false},
            { text: "component MyComponent() {}", correct: false},
            { text: "createComponent MyComponent() {}", correct: false},
        ]
    },


    {
        question: "Which hook is used to manage state in a functional component?",
        answers: [
            { text: "JuseEffect", correct: false},
            { text: "useState", correct: true},
            { text: "useContext", correct: false},
            { text: "useReducer", correct: false},
        ]
    },


    {
        question: "What is JSX?",
        answers: [
            { text: "A syntax extension for JavaScript", correct: true},
            { text: "A database query language", correct: false},
            { text: "A CSS preprocessor", correct: false},
            { text: "A markup language", correct: false},
        ]
    },


    {
        question: "How do you pass data from parent to child component in React?",
        answers: [
            { text: " Using state", correct: false},
            { text: "Using props", correct: true},
            { text: "Using context", correct: false},
            { text: "Using refs", correct: false},
        ]
    },


    {
        question: "What does the useEffect hook do?",
        answers: [
            { text: " Manages state in a component", correct: false},
            { text: "Triggers side effects in a component", correct: true},
            { text: "Handles component rendering", correct: false},
            { text: "Fetches data from APIs", correct: false},
        ]
    },


    {
        question: "How can you conditionally render a component in React?",
        answers: [
            { text: " Using an 'if' statement", correct: false},
            { text: "Using the 'map' function", correct: false},
            { text: "Using the 'return' statement", correct: false},
            { text: "Using a ternary operator", correct: true},
        ]
    },


    {
        question: "What is the purpose of the 'key' prop in React?",
        answers: [
            { text: "To set a unique identifier for list items", correct: true},
            { text: "To pass data between components", correct: false},
            { text: "To manage component state", correct: false},
            { text: "To define component styles", correct: false},
        ]
    },


    {
        question: "How do you handle events in React?",
        answers: [
            { text: "By adding event listeners in the componentDidMount lifecycle method", correct: false},
            { text: "By passing functions as props", correct: false},
            { text: "By using inline event handlers like 'onClick' ", correct: true},
            { text: "By directly modifying the DOM", correct: false},
        ]
    },


    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Computer Style Sheets", correct: false},
            { text: "Cascading Style Sheets", correct: true},
            { text: "Colorful Style Sheets", correct: false},
            { text: "Creative Style Sheets", correct: false},
        ]
    },


    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            { text: "text-color'", correct: false},
            { text: "color", correct: true},
            { text: "font-color", correct: false},
            { text: "background-color", correct: false},
        ]
    },


    {
        question: "Which property is used to change the background color of an element?",
        answers: [
            { text: "color", correct: false},
            { text: "bgcolor", correct: false},
            { text: "background-color", correct: true},
            { text: "background", correct: false},
        ]
    },


    {
        question: "How do you make the text bold in CSS?",
        answers: [
            { text: "font-weight: bold;", correct: true},
            { text: "font-style: bold;", correct: false},
            { text: "text-weight: bold;", correct: false},
            { text: "text-style: bold;", correct: false},
        ]
    },


    {
        question: "Which property is used to change the font of an element?",
        answers: [
            { text: "font-family", correct: true},
            { text: "font-style", correct: false},
            { text: "font-weight", correct: false},
            { text: "font-type", correct: false},
        ]
    },


    {
        question: "What is the correct CSS syntax to make all <p> elements bold?",
        answers: [
            { text: "p {text-size: bold;}", correct: false},
            { text: "p {font-weight: bold;}", correct: true},
            { text: "p {text-weight: bold;}", correct: false},
            { text: "p {font-style: bold;}", correct: false},
        ]
    },


    {
        question: "How do you center a block element horizontally in CSS?",
        answers: [
            { text: "text-align: center;", correct: false},
            { text: "margin: auto;", correct: true},
            { text: "display: inline-block;", correct: false},
            { text: "float: center;", correct: false},
        ]
    },


    {
        question: "Which CSS property controls the text size?",
        answers: [
            { text: "font-size", correct: true},
            { text: "text-style", correct: false},
            { text: "text-size", correct: false},
            { text: "font-style", correct: false},
        ]
    },


    {
        question: "Which property is used to change the space between characters in CSS?",
        answers: [
            { text: "spacing", correct: false},
            { text: "character-spacing", correct: false},
            { text: "letter-spacing", correct: true},
            { text: "word-spacing", correct: false},
        ]
    },


    {
        question: "How do you make an element take up the full width of its parent container?",
        answers: [
            { text: "width: 100%;", correct: true},
            { text: "width: auto;", correct: false},
            { text: "width: inherit;", correct: false},
            { text: "width: full;", correct: false},
        ]
    },

    {
        question: "Which property is used to add spacing between the content and the border of an element?",
        answers: [
            { text: "margin", correct: false},
            { text: "padding", correct: true},
            { text: "border-spacing", correct: false},
            { text: "spacing", correct: false},
        ]
    },

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");


let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 200;
let intervalId;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 200;
    nextButton.innerHTML = "Next";
    showQuestion();
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

     if (currentQuestionIndex === 0){   
        startTimer();
    }
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
        if (timeLeft <= 0) {
            clearInterval(intervalId);
            timeLeft = 0; 
            timerElement.innerText = `Time left: ${timeLeft} seconds`;
            showScore();
        }
    }, 1000);
}

nextButton.addEventListener("click", handleNextButton);

startQuiz();
