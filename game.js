// Game data
const gameData = {
    locations: [
        {
            id: "greetings-town",
            name: "Greetings Town",
            level: 1,
            description: "A friendly town where everyone greets each other.",
            backgroundImage: "https://source.unsplash.com/random/800x600/?town",
            npcName: "Carlos",
            npcAvatar: "https://robohash.org/2?set=set4",
            dialog: [
                { speaker: "Carlos", text: "¡Hola! Welcome to Greetings Town, traveler!" },
                { speaker: "Carlos", text: "I'm Carlos, your guide to learning basic Spanish greetings." },
                { speaker: "Carlos", text: "Are you ready to learn how to greet people in Spanish?" },
                { speaker: "Carlos", text: "Let's start with some challenges to practice!" }
            ],
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
            ],
            rewards: {
                xp: 100,
                item: { id: "basic_phrasebook", name: "Basic Phrasebook", icon: "📘" }
            }
        },
        {
            id: "food-district",
            name: "Food District",
            level: 2,
            description: "A delicious district full of food and restaurants.",
            backgroundImage: "https://source.unsplash.com/random/800x600/?restaurant",
            npcName: "Maria",
            npcAvatar: "https://robohash.org/3?set=set4",
            dialog: [
                { speaker: "Maria", text: "¡Bienvenido! Welcome to the Food District!" },
                { speaker: "Maria", text: "I'm Maria, a local chef and your guide to food vocabulary." },
                { speaker: "Maria", text: "Are you hungry? Let's learn how to order food in Spanish!" },
                { speaker: "Maria", text: "Try these challenges to practice your food vocabulary." }
            ],
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
            ],
            rewards: {
                xp: 150,
                item: { id: "food_dictionary", name: "Food Dictionary", icon: "🍽️" }
            }
        },
        {
            id: "travel-plaza",
            name: "Travel Plaza",
            level: 3,
            description: "A central plaza where travelers gather for directions.",
            backgroundImage: "https://source.unsplash.com/random/800x600/?plaza",
            npcName: "Miguel",
            npcAvatar: "https://robohash.org/4?set=set4",
            dialog: [
                { speaker: "Miguel", text: "¡Hola viajero! Hello traveler! Welcome to Travel Plaza." },
                { speaker: "Miguel", text: "I'm Miguel, your guide to learning directions in Spanish." },
                { speaker: "Miguel", text: "Getting lost is never fun. Let's learn how to ask for directions!" },
                { speaker: "Miguel", text: "Try these challenges to practice asking for and giving directions." }
            ],
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
            ],
            rewards: {
                xp: 200,
                item: { id: "travel_map", name: "Travel Map", icon: "🗺️" }
            }
        },
        {
            id: "shopping-market",
            name: "Shopping Market",
            level: 4,
            description: "A bustling market with various shops and vendors.",
            backgroundImage: "https://source.unsplash.com/random/800x600/?market",
            npcName: "Elena",
            npcAvatar: "https://robohash.org/5?set=set4",
            dialog: [
                { speaker: "Elena", text: "¡Bienvenido al mercado! Welcome to the market!" },
                { speaker: "Elena", text: "I'm Elena, your guide to shopping vocabulary in Spanish." },
                { speaker: "Elena", text: "Shopping in another language can be challenging but fun!" },
                { speaker: "Elena", text: "Let's practice with these shopping-related challenges." }
            ],
            challenges: [
                {
                    type: "translation",
                    content: "How much does this cost?",
                    correctAnswer: "¿Cuánto cuesta esto?",
                    hint: "Asking about the price of an item",
                    points: 20
                },
                {
                    type: "translation",
                    content: "That's too expensive",
                    correctAnswer: "Eso es muy caro",
                    hint: "Saying something costs too much",
                    points: 20
                },
                {
                    type: "translation",
                    content: "Do you have this in another size?",
                    correctAnswer: "¿Tiene esto en otra talla?",
                    hint: "When clothes don't fit right",
                    points: 30
                },
                {
                    type: "translation",
                    content: "I would like to buy this",
                    correctAnswer: "Me gustaría comprar esto",
                    hint: "Expressing interest in purchasing something",
                    points: 25
                },
                {
                    type: "translation",
                    content: "Can I pay with credit card?",
                    correctAnswer: "¿Puedo pagar con tarjeta de crédito?",
                    hint: "Asking about payment methods",
                    points: 25
                }
            ],
            rewards: {
                xp: 250,
                item: { id: "shopping_guide", name: "Shopping Guide", icon: "🛍️" }
            }
        },
        {
            id: "culture-museum",
            name: "Culture Museum",
            level: 5,
            locked: true,
            description: "A museum dedicated to Spanish culture and traditions.",
            backgroundImage: "https://source.unsplash.com/random/800x600/?museum",
            npcName: "Professor Lopez",
            npcAvatar: "https://robohash.org/6?set=set4",
            dialog: [
                { speaker: "Professor Lopez", text: "¡Bienvenido al Museo de Cultura! Welcome to the Culture Museum!" },
                { speaker: "Professor Lopez", text: "I'm Professor Lopez, your guide to understanding Spanish culture." },
                { speaker: "Professor Lopez", text: "Culture is an essential part of language learning." },
                { speaker: "Professor Lopez", text: "Let's explore some advanced cultural phrases and concepts." }
            ],
            challenges: [
                {
                    type: "translation",
                    content: "What is the history of this place?",
                    correctAnswer: "¿Cuál es la historia de este lugar?",
                    hint: "Asking about historical significance",
                    points: 30
                },
                {
                    type: "translation",
                    content: "This tradition is very interesting",
                    correctAnswer: "Esta tradición es muy interesante",
                    hint: "Expressing interest in cultural practices",
                    points: 25
                },
                {
                    type: "translation",
                    content: "When is this festival celebrated?",
                    correctAnswer: "¿Cuándo se celebra este festival?",
                    hint: "Asking about timing of cultural events",
                    points: 30
                },
                {
                    type: "translation",
                    content: "What does this symbol represent?",
                    correctAnswer: "¿Qué representa este símbolo?",
                    hint: "Inquiring about cultural meanings",
                    points: 35
                },
                {
                    type: "translation",
                    content: "I want to learn more about your customs",
                    correctAnswer: "Quiero aprender más sobre sus costumbres",
                    hint: "Showing interest in deeper cultural understanding",
                    points: 40
                }
            ],
            rewards: {
                xp: 300,
                item: { id: "cultural_encyclopedia", name: "Cultural Encyclopedia", icon: "📚" }
            }
        }
    ],
    items: [
        { id: "basic_phrasebook", name: "Basic Phrasebook", icon: "📘", description: "Contains common Spanish greetings.", effect: "Unlocks hint feature" },
        { id: "food_dictionary", name: "Food Dictionary", icon: "🍽️", description: "A guide to Spanish food terms.", effect: "Better hints for food-related phrases" },
        { id: "travel_map", name: "Travel Map", icon: "🗺️", description: "Map with Spanish directions vocabulary.", effect: "Reveals shortcuts on the world map" },
        { id: "shopping_guide", name: "Shopping Guide", icon: "🛍️", description: "Guide to shopping phrases in Spanish.", effect: "Discount on skipping challenges" },
        { id: "cultural_encyclopedia", name: "Cultural Encyclopedia", icon: "📚", description: "In-depth Spanish cultural information.", effect: "XP boost for all completed challenges" }
    ]
};

// Game state
let gameState = {
    player: {
        name: "Player",
        avatar: 1,
        level: 1,
        xp: 0,
        inventory: []
    },
    currentLocation: null,
    currentChallenge: 0,
    dialogIndex: 0,
    score: 0,
    hintsUsed: 0,
    correctAnswers: 0,
    skippedChallenges: 0,
    challengeStartTime: null,
    locationCompletionTime: null,
    unlockedLocations: ["greetings-town"]
};

// DOM Elements
const screens = {
    characterCreation: document.getElementById("character-creation"),
    worldMap: document.getElementById("world-map"),
    gameScreen: document.getElementById("game-screen"),
    levelComplete: document.getElementById("level-complete"),
    inventoryScreen: document.getElementById("inventory-screen")
};

const elements = {
    // Character Creation
    currentAvatar: document.getElementById("current-avatar"),
    prevAvatar: document.getElementById("prev-avatar"),
    nextAvatar: document.getElementById("next-avatar"),
    characterName: document.getElementById("character-name"),
    learningLevel: document.getElementById("learning-level"),
    startAdventure: document.getElementById("start-adventure"),
    
    // World Map
    playerAvatarImg: document.getElementById("player-avatar-img"),
    playerName: document.getElementById("player-name"),
    playerLevel: document.getElementById("player-level"),
    playerXP: document.getElementById("player-xp"),
    inventoryBtn: document.getElementById("inventory-btn"),
    mapLocations: document.querySelectorAll(".map-location"),
    
    // Game Screen
    backToMap: document.getElementById("back-to-map"),
    currentLocation: document.getElementById("current-location"),
    gameScore: document.getElementById("game-score"),
    healthFill: document.querySelector(".health-fill"),
    sceneBackground: document.querySelector(".scene-background"),
    playerCharImg: document.getElementById("player-char-img"),
    npcImg: document.getElementById("npc-img"),
    speakerName: document.getElementById("speaker-name"),
    dialogText: document.getElementById("dialog-text"),
    continueDialog: document.getElementById("continue-dialog"),
    challengeContainer: document.querySelector(".challenge-container"),
    dialogBox: document.querySelector(".dialog-box"),
    challengeTitle: document.getElementById("challenge-title"),
    challengePoints: document.getElementById("challenge-points"),
    challengeDescription: document.getElementById("challenge-description"),
    challengeContent: document.getElementById("challenge-content"),
    answerInput: document.getElementById("answer-input"),
    submitBtn: document.getElementById("submit-btn"),
    hintBtn: document.getElementById("hint-btn"),
    skipBtn: document.getElementById("skip-btn"),
    feedback: document.getElementById("feedback"),
    
    // Level Complete
    xpEarned: document.getElementById("xp-earned"),
    itemEarned: document.getElementById("item-earned"),
    correctAnswers: document.getElementById("correct-answers"),
    hintsUsed: document.getElementById("hints-used"),
    timeTaken: document.getElementById("time-taken"),
    continueAdventure: document.getElementById("continue-adventure"),
    
    // Inventory
    closeInventory: document.getElementById("close-inventory"),
    tabButtons: document.querySelectorAll(".tab-btn"),
    tabContents: document.querySelectorAll(".tab-content"),
    itemsGrid: document.querySelector(".items-grid"),
    phrasesList: document.querySelector(".phrases-list"),
    achievementsGrid: document.querySelector(".achievements-grid")
};

// Initialize the game
function initGame() {
    setupEventListeners();
    showScreen("character-creation");
    updateAvatarPreview();
}

// Setup event listeners
function setupEventListeners() {
    // Character Creation
    elements.prevAvatar.addEventListener("click", () => {
        gameState.player.avatar = (gameState.player.avatar - 1 + 10) % 10 || 10;
        updateAvatarPreview();
    });
    
    elements.nextAvatar.addEventListener("click", () => {
        gameState.player.avatar = (gameState.player.avatar % 10) + 1;
        updateAvatarPreview();
    });
    
    elements.startAdventure.addEventListener("click", startAdventure);
    
    // World Map
    elements.mapLocations.forEach(location => {
        location.addEventListener("click", () => {
            const locationId = location.id;
            if (!location.classList.contains("locked")) {
                selectLocation(locationId);
            }
        });
    });
    
    elements.inventoryBtn.addEventListener("click", () => showScreen("inventory-screen"));
    
    // Game Screen
    elements.backToMap.addEventListener("click", () => showScreen("world-map"));
    elements.continueDialog.addEventListener("click", advanceDialog);
    elements.submitBtn.addEventListener("click", checkAnswer);
    elements.hintBtn.addEventListener("click", showHint);
    elements.skipBtn.addEventListener("click", skipChallenge);
    elements.answerInput.addEventListener("keypress", e => {
        if (e.key === "Enter") checkAnswer();
    });
    
    // Level Complete
    elements.continueAdventure.addEventListener("click", () => showScreen("world-map"));
    
    // Inventory
    elements.closeInventory.addEventListener("click", () => showScreen("world-map"));
    elements.tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tabId = button.getAttribute("data-tab");
            switchInventoryTab(tabId);
        });
    });
}

// Update the avatar preview
function updateAvatarPreview() {
    elements.currentAvatar.src = `https://robohash.org/${gameState.player.avatar}?set=set4`;
}

// Start the adventure
function startAdventure() {
    const name = elements.characterName.value.trim() || "Player";
    gameState.player.name = name;
    
    // Update player info on the world map
    elements.playerAvatarImg.src = `https://robohash.org/${gameState.player.avatar}?set=set4`;
    elements.playerName.textContent = gameState.player.name;
    updatePlayerStats();
    
    showScreen("world-map");
}

// Update player stats display
function updatePlayerStats() {
    elements.playerLevel.textContent = `Level: ${gameState.player.level}`;
    elements.playerXP.textContent = `XP: ${gameState.player.xp}`;
}

// Select a location on the map
function selectLocation(locationId) {
    const location = gameData.locations.find(loc => loc.id === locationId);
    if (!location) return;
    
    gameState.currentLocation = location;
    gameState.currentChallenge = 0;
    gameState.dialogIndex = 0;
    gameState.correctAnswers = 0;
    gameState.hintsUsed = 0;
    gameState.skippedChallenges = 0;
    gameState.challengeStartTime = null;
    gameState.locationCompletionTime = null;
    
    // Setup location
    elements.currentLocation.textContent = location.name;
    elements.gameScore.textContent = `Score: ${gameState.score}`;
    elements.sceneBackground.style.backgroundImage = `url(${location.backgroundImage})`;
    elements.playerCharImg.src = `https://robohash.org/${gameState.player.avatar}?set=set4`;
    elements.npcImg.src = location.npcAvatar;
    
    // Setup dialog
    showDialog();
    
    showScreen("game-screen");
}

// Show dialog
function showDialog() {
    const location = gameState.currentLocation;
    if (!location) return;
    
    elements.dialogBox.classList.remove("hidden");
    elements.challengeContainer.classList.add("hidden");
    
    if (gameState.dialogIndex < location.dialog.length) {
        const dialog = location.dialog[gameState.dialogIndex];
        elements.speakerName.textContent = dialog.speaker;
        
        // Animate text typing effect
        typeText(elements.dialogText, dialog.text);
    } else {
        startChallenges();
    }
}

// Type text animation
function typeText(element, text, speed = 30) {
    element.textContent = "";
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Advance dialog
function advanceDialog() {
    gameState.dialogIndex++;
    showDialog();
}

// Start challenges
function startChallenges() {
    elements.dialogBox.classList.add("hidden");
    elements.challengeContainer.classList.remove("hidden");
    
    if (!gameState.challengeStartTime) {
        gameState.challengeStartTime = new Date();
    }
    
    loadChallenge();
}

// Load a challenge
function loadChallenge() {
    const location = gameState.currentLocation;
    if (!location) return;
    
    const challenge = location.challenges[gameState.currentChallenge];
    if (!challenge) return;
    
    // Update UI
    elements.challengeTitle.textContent = "Translation Challenge";
    elements.challengePoints.textContent = `+${challenge.points} XP`;
    elements.challengeDescription.textContent = "Translate the following phrase:";
    elements.challengeContent.textContent = challenge.content;
    elements.answerInput.value = "";
    elements.feedback.classList.add("hidden");
    
    // Animation for challenge appearance
    gsap.fromTo(elements.challengeContainer, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5 }
    );
    
    // Focus on the input field
    setTimeout(() => elements.answerInput.focus(), 500);
}

// Check the user's answer
function checkAnswer() {
    const location = gameState.currentLocation;
    if (!location) return;
    
    const challenge = location.challenges[gameState.currentChallenge];
    if (!challenge) return;
    
    const userAnswer = elements.answerInput.value.trim();
    
    if (userAnswer.toLowerCase() === challenge.correctAnswer.toLowerCase()) {
        // Correct answer
        gameState.score += challenge.points;
        gameState.player.xp += challenge.points;
        gameState.correctAnswers++;
        
        elements.gameScore.textContent = `Score: ${gameState.score}`;
        
        showFeedback(true, "¡Correcto! Great job!");
        
        // Animate success
        gsap.to(elements.answerInput, {
            borderColor: "#4caf50",
            boxShadow: "0 0 10px rgba(76, 175, 80, 0.5)",
            duration: 0.3
        });
        
        // Move to the next challenge after a delay
        setTimeout(() => {
            moveToNextChallenge();
            
            // Reset input styling
            gsap.to(elements.answerInput, {
                borderColor: "#ddd",
                boxShadow: "none",
                duration: 0.3
            });
        }, 1500);
    } else {
        // Incorrect answer
        showFeedback(false, "Not quite right. Try again!");
        
        // Animate failure
        gsap.to(elements.answerInput, {
            x: [-10, 10, -10, 10, 0],
            borderColor: "#f44336",
            boxShadow: "0 0 10px rgba(244, 67, 54, 0.5)",
            duration: 0.5
        });
        
        // Reset input styling after animation
        setTimeout(() => {
            gsap.to(elements.answerInput, {
                borderColor: "#ddd",
                boxShadow: "none",
                duration: 0.3
            });
        }, 1000);
    }
}

// Show feedback to the user
function showFeedback(isCorrect, message) {
    elements.feedback.textContent = message;
    elements.feedback.classList.remove("hidden", "correct", "incorrect");
    elements.feedback.classList.add(isCorrect ? "correct" : "incorrect");
    
    // Animate feedback appearance
    gsap.fromTo(elements.feedback, 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 0.3 }
    );
}

// Show a hint for the current challenge
function showHint() {
    const location = gameState.currentLocation;
    if (!location) return;
    
    const challenge = location.challenges[gameState.currentChallenge];
    if (!challenge) return;
    
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
    const location = gameState.currentLocation;
    if (!location) return;
    
    // Check if there are more challenges in this location
    if (gameState.currentChallenge < location.challenges.length - 1) {
        gameState.currentChallenge++;
        loadChallenge();
    } else {
        // Location complete
        gameState.locationCompletionTime = new Date();
        completeLocation();
    }
}

// Complete the current location
function completeLocation() {
    const location = gameState.currentLocation;
    if (!location) return;
    
    // Calculate time taken
    const timeInSeconds = Math.floor(
        (gameState.locationCompletionTime - gameState.challengeStartTime) / 1000
    );
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    
    // Update level complete screen
    elements.xpEarned.textContent = `${location.rewards.xp} XP`;
    elements.itemEarned.textContent = location.rewards.item.name;
    elements.correctAnswers.textContent = `${gameState.correctAnswers}/${location.challenges.length}`;
    elements.hintsUsed.textContent = gameState.hintsUsed;
    elements.timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Add rewards to player
    gameState.player.xp += location.rewards.xp;
    if (!gameState.player.inventory.includes(location.rewards.item.id)) {
        gameState.player.inventory.push(location.rewards.item.id);
    }
    
    // Update player level based on XP
    gameState.player.level = Math.floor(gameState.player.xp / 100) + 1;
    updatePlayerStats();
    
    // Unlock next location if this is newly completed
    if (!gameState.unlockedLocations.includes(location.id)) {
        const nextLocation = gameData.locations.find(loc => loc.level === location.level + 1);
        if (nextLocation && !gameState.unlockedLocations.includes(nextLocation.id)) {
            gameState.unlockedLocations.push(nextLocation.id);
            
            // Update UI to show unlocked location
            const locationElement = document.getElementById(nextLocation.id);
            if (locationElement) {
                locationElement.classList.remove("locked");
            }
        }
    }
    
    showScreen("level-complete");
}

// Switch inventory tab
function switchInventoryTab(tabId) {
    // Update tab buttons
    elements.tabButtons.forEach(button => {
        if (button.getAttribute("data-tab") === tabId) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    
    // Update tab content
    elements.tabContents.forEach(content => {
        if (content.id === `${tabId}-tab`) {
            content.classList.add("active");
        } else {
            content.classList.remove("active");
        }
    });
    
    // Load tab content
    if (tabId === "items") {
        renderInventoryItems();
    } else if (tabId === "phrases") {
        renderLearnedPhrases();
    } else if (tabId === "achievements") {
        renderAchievements();
    }
}

// Render inventory items
function renderInventoryItems() {
    elements.itemsGrid.innerHTML = "";
    
    // If inventory is empty
    if (gameState.player.inventory.length === 0) {
        elements.itemsGrid.innerHTML = `<p class="empty-message">No items in inventory yet.</p>`;
        return;
    }
    
    // Render each item
    gameState.player.inventory.forEach(itemId => {
        const item = gameData.items.find(i => i.id === itemId);
        if (!item) return;
        
        const itemElement = document.createElement("div");
        itemElement.className = "inventory-item";
        itemElement.innerHTML = `
            <div class="item-icon">${item.icon}</div>
            <div class="item-name">${item.name}</div>
        `;
        
        // Add tooltip with item description
        itemElement.title = `${item.description} Effect: ${item.effect}`;
        
        elements.itemsGrid.appendChild(itemElement);
    });
}

// Render learned phrases
function renderLearnedPhrases() {
    elements.phrasesList.innerHTML = "";
    
    // Get all learned phrases from completed locations
    const learnedPhrases = [];
    gameState.unlockedLocations.forEach(locId => {
        const location = gameData.locations.find(loc => loc.id === locId);
        if (location) {
            location.challenges.forEach(challenge => {
                learnedPhrases.push({
                    english: challenge.content,
                    spanish: challenge.correctAnswer
                });
            });
        }
    });
    
    // If no phrases learned
    if (learnedPhrases.length === 0) {
        elements.phrasesList.innerHTML = `<p class="empty-message">No phrases learned yet.</p>`;
        return;
    }
    
    // Render each phrase
    learnedPhrases.forEach(phrase => {
        const phraseElement = document.createElement("div");
        phraseElement.className = "phrase-item";
        phraseElement.innerHTML = `
            <div class="phrase-english">${phrase.english}</div>
            <div class="phrase-arrow">→</div>
            <div class="phrase-spanish">${phrase.spanish}</div>
        `;
        
        elements.phrasesList.appendChild(phraseElement);
    });
}

// Render achievements
function renderAchievements() {
    // Placeholder for future achievement system
    elements.achievementsGrid.innerHTML = `
        <p class="empty-message">Achievements will be added in future updates!</p>
    `;
}

// Show specific screen
function showScreen(screenId) {
    Object.keys(screens).forEach(key => {
        if (key === screenId) {
            screens[key].classList.add("active");
        } else {
            screens[key].classList.remove("active");
        }
    });
}

// Start the game when the page loads
window.addEventListener("load", initGame);