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

// Function to check user progress and redirect accordingly
/* function checkUserProgress() {
    var userProgress = localStorage.getItem('userProgress');

    if (userProgress === null) {
        // User is at the beginning of the story
        window.location.href = 'index.html';
    } else if (userProgress === 'stage1') {
        // User has completed stage 1, redirect to the next stage
        window.location.href = 'stage2.html';
    } else if (userProgress === 'stage2') {
        // User has completed stage 2, redirect to the next stage
        window.location.href = 'stage3.html';
    } // Add more conditions as needed
}


// Function to update user progress
function updateUserProgress(nextStage) {
    localStorage.setItem('userProgress', nextStage);
} */


function displayResult(message) {
    // Display the result message
    document.getElementById("resultMessage").textContent = message;
}

function startLaptopStory() {
    console.log('startLaptopStory function called');
    window.location.href = 'laptop-story-1.html';
}

function submitAnswer() {
    // Logic to check the answer
    // If correct, navigate to the next stage
    window.location.href = 'laptop-story-2.html';
    // If incorrect, show a message or handle accordingly
}
