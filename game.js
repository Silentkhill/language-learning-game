// Game data - levels, challenges, etc.
const gameData = {
    levels: [
        {
            id: 1,
            title: "Basic Greetings",
            challenges: [
                {
                    type: "translation",
                    content: "Hello",
                    correctAnswer: "Hola",
                    hint: "This is how you greet someone in Spanish",
                    points: 10
                },
                {
                    type: "translation",
                    content: "Good morning",
                    correctAnswer: "Buenos días",
                    hint: "Think about what you say when you see someone in the early part of the day",
                    points: 15
                },
                {
                    type: "translation",
                    content: "How are you?",
                    correctAnswer: "¿Cómo estás?",
                    hint: "A common question when meeting someone",
                    points: 15
                },
                {
                    type: "translation",
                    content: "Thank you",
                    correctAnswer: "Gracias",
                    hint: "What you say when someone helps you",
                    points: 10
                },
                {
                    type: "translation",
                    content: "Goodbye",
                    correctAnswer: "Adiós",
                    hint: "What you say when leaving",
                    points: 10
                }
            ]
        },
        {
            id: 2,
            title: "Food & Dining",
            challenges: [
                {
                    type: "translation",
                    content: "I would like water, please",
                    correctAnswer: "Quisiera agua, por favor",
                    hint: "What you might say to a waiter when you're thirsty",
                    points: 20
                },
                {
                    type: "translation",
                    content: "The menu, please",
                    correctAnswer: "El menú, por favor",
                    hint: "What you ask for to see food options",
                    points: 15
                },
                {
                    type: "translation",
                    content: "I am hungry",
                    correctAnswer: "Tengo hambre",
                    hint: "Describing your empty stomach",
                    points: 15
                },
                {
                    type: "translation",
                    content: "The bill, please",
                    correctAnswer: "La cuenta, por favor",
                    hint: "What you ask for when finished eating",
                    points: 15
                },
                {
                    type: "translation",
                    content: "This food is delicious",
                    correctAnswer: "Esta comida está deliciosa",
                    hint: "Complimenting the taste of the food",
                    points: 25
                }
            ]
        },
        {
            id: 3,
            title: "Directions & Places",
            challenges: [
                {
                    type: "translation",
                    content: "Where is the bathroom?",
                    correctAnswer: "¿Dónde está el baño?",
                    hint: "A common question when you need facilities",
                    points: 20
                },
                {
                    type: "translation",
                    content: "Turn left at the corner",
                    correctAnswer: "Gire a la izquierda en la esquina",
                    hint: "Giving directions to go not-right",
                    points: 25
                },
                {
                    type: "translation",
                    content: "Go straight ahead",
                    correctAnswer: "Siga derecho",
                    hint: "Telling someone to continue forward",
                    points: 20
                },
                {
                    type: "translation",
                    content: "How far is the hotel?",
                    correctAnswer: "¿Qué tan lejos está el hotel?",
                    hint: "Asking about distance to accommodations",
                    points: 25
                },
                {
                    type: "translation",
                    content: "Is there a pharmacy nearby?",
                    correctAnswer: "¿Hay una farmacia cerca?",
                    hint: "Looking for a place to buy medicine",
                    points: 25
                }
            ]
        }
    ]
};

// Game state
let gameState = {
    currentLevel: 1,
    currentChallenge: 0,
    score: 0,
    username: "Player",
    hintsUsed: 0,
    correctAnswers: 0,
    skippedChallenges: 0
};

// DOM elements
const elements = {
    username: document.getElementById("username"),
    score: document.getElementById("score"),
    level: document.getElementById("level"),
    challengeTitle: document.getElementById("challenge-title"),
    challengeDescription: document.getElementById("challenge-description"),
    challengeContent: document.getElementById("challenge-content"),
    answerInput: document.getElementById("answer-input"),
    submitBtn: document.getElementById("submit-btn"),
    hintBtn: document.getElementById("hint-btn"),
    skipBtn: document.getElementById("skip-btn"),
    feedback: document.getElementById("feedback"),
    levelComplete: document.getElementById("level-complete"),
    pointsEarned: document.getElementById("points-earned"),
    nextLevelBtn: document.getElementById("next-level-btn"),
    sceneImage: document.getElementById("scene-image")
};

// Initialize the game
function initGame() {
    // Set username (could be from a login or prompt)
    gameState.username = "Player";
    elements.username.textContent = gameState.username;
    
    // Load the first challenge
    loadChallenge();
    
    // Set up event listeners
    elements.submitBtn.addEventListener("click", checkAnswer);
    elements.hintBtn.addEventListener("click", showHint);
    elements.skipBtn.addEventListener("click", skipChallenge);
    elements.nextLevelBtn.addEventListener("click", nextLevel);
    elements.answerInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });
}

// Load a challenge
function loadChallenge() {
    // Get the current level and challenge
    const level = gameData.levels.find(lvl => lvl.id === gameState.currentLevel);
    const challenge = level.challenges[gameState.currentChallenge];
    
    // Update UI
    elements.level.textContent = `Level: ${gameState.currentLevel}`;
    elements.challengeTitle.textContent = level.title;
    
    if (challenge.type === "translation") {
        elements.challengeDescription.textContent = "Translate the following phrase:";
    }
    
    elements.challengeContent.textContent = challenge.content;
    elements.answerInput.value = "";
    elements.feedback.classList.add("hidden");
    
    // Set scene image (placeholder - in a real game, this would be an actual image)
    elements.sceneImage.textContent = `Scene for: ${level.title} - Challenge ${gameState.currentChallenge + 1}`;
    
    // Focus on the input field
    elements.answerInput.focus();
}

// Check the user's answer
function checkAnswer() {
    const level = gameData.levels.find(lvl => lvl.id === gameState.currentLevel);
    const challenge = level.challenges[gameState.currentChallenge];
    const userAnswer = elements.answerInput.value.trim();
    
    if (userAnswer.toLowerCase() === challenge.correctAnswer.toLowerCase()) {
        // Correct answer
        gameState.score += challenge.points;
        gameState.correctAnswers++;
        elements.score.textContent = `Score: ${gameState.score}`;
        
        showFeedback(true, "Correct! Great job!");
        
        // Move to the next challenge after a delay
        setTimeout(() => {
            moveToNextChallenge();
        }, 1500);
    } else {
        // Incorrect answer
        showFeedback(false, "Not quite right. Try again!");
    }
}

// Show feedback to the user
function showFeedback(isCorrect, message) {
    elements.feedback.textContent = message;
    elements.feedback.classList.remove("hidden", "correct", "incorrect");
    elements.feedback.classList.add(isCorrect ? "correct" : "incorrect");
}

// Show a hint for the current challenge
function showHint() {
    const level = gameData.levels.find(lvl => lvl.id === gameState.currentLevel);
    const challenge = level.challenges[gameState.currentChallenge];
    
    showFeedback(true, `Hint: ${challenge.hint}`);
    gameState.hintsUsed++;
}

// Skip the current challenge
function skipChallenge() {
    gameState.skippedChallenges++;
    moveToNextChallenge();
}

// Move to the next challenge or complete the level
function moveToNextChallenge() {
    const level = gameData.levels.find(lvl => lvl.id === gameState.currentLevel);
    
    // Check if there are more challenges in this level
    if (gameState.currentChallenge < level.challenges.length - 1) {
        gameState.currentChallenge++;
        loadChallenge();
    } else {
        // Level complete
        completeLevel();
    }
}

// Complete the current level
function completeLevel() {
    // Calculate points earned in this level
    const level = gameData.levels.find(lvl => lvl.id === gameState.currentLevel);
    let pointsEarned = 0;
    
    level.challenges.forEach(challenge => {
        pointsEarned += challenge.points;
    });
    
    // Show level complete modal
    elements.pointsEarned.textContent = pointsEarned;
    elements.levelComplete.classList.remove("hidden");
}

// Move to the next level
function nextLevel() {
    // Hide the level complete modal
    elements.levelComplete.classList.add("hidden");
    
    // Check if there are more levels
    if (gameState.currentLevel < gameData.levels.length) {
        gameState.currentLevel++;
        gameState.currentChallenge = 0;
        loadChallenge();
    } else {
        // Game complete
        alert("Congratulations! You've completed all levels!");
        // Here you could show a game complete screen or restart the game
    }
}

// Start the game when the page loads
window.addEventListener("load", initGame());