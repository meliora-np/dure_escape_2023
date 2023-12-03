document.getElementById("toggleDarkMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

function checkAnswer() {
    // Get the user's input
    var userAnswer = document.getElementById("answerInput").value;

    // Define correct answers (you can customize this array)
    var correctAnswers = ["answer1", "answer2", "answer3"];

    // Check if the user's answer is in the array of correct answers
    if (correctAnswers.includes(userAnswer)) {
        displayResult("Correct!");
    } else {
        displayResult("Incorrect. Please try again.");
    }
}

function displayResult(message) {
    // Display the result message
    document.getElementById("resultMessage").textContent = message;
}