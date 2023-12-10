function navigateToStory(storyPage) {
    window.location.href = storyPage;
}

function navigateToNextStory(nextStory) {
    window.location.href = nextStory;
}

function checkAnswer1() {
    var userInput = document.getElementById('answerInput').value.toLowerCase(); // assuming answers are case-insensitive
    if (userInput === 'correctanswer') {
        // Allow access to the next stage
        window.location.href = 'laptop-story-3.html';
    } else {
        // Display an error message or take other actions
        alert('비밀번호가 맞지 않습니다. 다시 입력해주세요.');
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
    window.location.href = 'laptop-story-1.html';
}

function startSpyStory() {
    window.location.href = 'spy-story-1.html'
}

function startExamStory() {
    window.location.href = 'exam-story-1.html'
}


function checkLoginls1() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Combine the username and password into a single string
    var combinedString = username + password;
  
    // Logic to check the answer
    if (combinedString === 'cafespace20201221') {
        // Allow access to the next stage
        navigateToNextStory('laptop-story-2.html');
    } else {
        // Display an error message or take other actions
        alert("아이디나 비밀번호가 잘못되었습니다.");
        // Clear the input fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}
