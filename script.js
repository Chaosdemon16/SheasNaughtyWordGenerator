const generateBtn = document.getElementById('generate-btn');
const swearWordDisplay = document.getElementById('swear-word');
const agreeBtn = document.getElementById('agree-btn');
const warningDiv = document.querySelector('.warning');
const mainContentDiv = document.getElementById('main-content');

// List of extreme swear words (No censoring)
const swearWords = [
    "Cunt", "Bastard", "Fuck", "Shit", "Motherfucker", "Dickhead",
    "Asshole", "Bitch", "Cocksucker", "Tits", "Pussy", "Dick",
    "Fuckface", "Shithead", "Asshat", "Shitfaced", "Wanker", "Cock",
    "Titsucker", "Sweetiepie"
];

// Function to generate a random swear word
function generateSwearWord() {
    const randomIndex = Math.floor(Math.random() * swearWords.length);
    swearWordDisplay.innerText = swearWords[randomIndex];
}

// Event listener for button click (generate swear word)
generateBtn.addEventListener('click', generateSwearWord);

// Event listener for agreeing to the disclaimer
agreeBtn.addEventListener('click', () => {
    warningDiv.style.display = 'none';  // Hide the warning
    mainContentDiv.style.display = 'block';  // Show the main content
});
