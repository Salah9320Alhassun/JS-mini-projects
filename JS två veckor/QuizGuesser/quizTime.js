const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const scoreText = document.getElementById("score");
const messageText = document.getElementById("message");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

let quizData = [];

function startQuiz() {
    fetch('quizdata.json')
        .then(response => response.json())
        .then(data => {
            quizData = data;
            loadQuestion(currentQuestionIndex);
        })
        .catch(error => {
            console.error('Fel vid inläsning av JSON-filen:', error);
        });
}

function loadQuestion(index) {
    if (index < quizData.length) {
        const question = quizData[index];
        questionText.textContent = question.question;
        optionsList.innerHTML = "";

        question.options.forEach((option, i) => {
            const optionButton = document.createElement("button");
            optionButton.textContent = option;
            optionButton.classList.add("option");
            optionButton.addEventListener("click", () => checkAnswer(option, question.correctAnswer));
            optionsList.appendChild(optionButton);
        });
    } else {
        showResult();
    }
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
        scoreText.textContent = `Score: ${score}`;
        messageText.textContent = "Correct!";
    } else {
        messageText.textContent = "Wrong!";
    }

    // Inaktivera klick på svarsalternativ efter att ett svar har valts
    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach(button => button.disabled = true);

    // Aktivera "Next" knappen
    nextButton.disabled = false;
}

function showResult() {
    questionText.textContent = "Quiz Completed!";
    optionsList.innerHTML = "";
    messageText.textContent = `You scored ${score} out of ${quizData.length}.`;
    nextButton.disabled = true;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
    messageText.textContent = "";
    nextButton.disabled = true;

    // Återaktivera klick på svarsalternativ
    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach(button => button.disabled = false);

    if (currentQuestionIndex === quizData.length - 1) {
        nextButton.textContent = "Finish";
    }

    if (currentQuestionIndex === quizData.length) {
        showResult();
    }
});

startQuiz();
