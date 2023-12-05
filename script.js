document.getElementById("toggleDarkMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

function navigateToStory(storyPage) {
    window.location.href = storyPage;
}

function checkAnswer() {
    var userInput = document.getElementById('answerInput').value.toLowerCase(); // assuming answers are case-insensitive
    if (userInput === 'correctanswer') {
        // Allow access to the next stage
        window.location.href = 'next-stage.html';
    } else {
        // Display an error message or take other actions
        alert('Incorrect answer. Try again.');
    }
}


function displayResult(message) {
    // Display the result message
    document.getElementById("resultMessage").textContent = message;
}

