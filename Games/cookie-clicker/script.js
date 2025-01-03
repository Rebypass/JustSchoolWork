// Initialize game data with score, clicks, cookies per click, and upgrade cost
var gameData = {
  score: 0,
  clicks: 0,
  cookiesPerClick: 1,
  cookiesPerSecond: 0,
  upgradeCost: 50,
  upgradeCost2: 100,
  upgradeCost3: 1000,
  clickMultiplier: 1,
};

var startingScore = 0;
var csscore = 0;
var timeOpen = 0;

// Load the game data from localStorage
const savedData = JSON.parse(localStorage.getItem("gameData") || "{}");

// Merge saved data with default gameData, keeping any new properties in gameData
gameData = { ...gameData, ...savedData };
startingScore = gameData.score;

// Function to save gameData to localStorage
function saveGameData() {
  localStorage.setItem("gameData", JSON.stringify(gameData));
}

/*
if (gameData.banned) {
  alert("You've been banned.")
  while (true) {}
}

function ban() {
  gameData.banned = true
  saveGameData()
  alert("You've been banned.")
  while (true) {}
}*/
  
  // Display the loaded score and upgrade cost
  document.getElementById("score").innerText = `Score: ${gameData.score}`;
  document.getElementById("upgradeCost").innerText = `Upgrade Cost: ${gameData.upgradeCost}`;
  document.getElementById("upgradeCost2").innerText = `Upgrade Cost: ${gameData.upgradeCost2}`;
  document.getElementById("upgradeCost3").innerText = `Upgrade Cost: ${gameData.upgradeCost3}`;

  // Event listener for clicking the cookie
  document.getElementById("cookie").addEventListener("click", () => {
    gameData.score += (gameData.cookiesPerClick*gameData.clickMultiplier);  // Add cookies based on cookiesPerClick
    gameData.clicks++;
    csscore++;
    document.getElementById("score").innerText = `Score: ${gameData.score}`;
    saveGameData();  // Save game data to localStorage
  });
  
  // Event listener for clicking the upgrade button
  document.getElementById("upgradeBtn").addEventListener("click", () => {
    if (gameData.score >= gameData.upgradeCost) {  // Check if player has enough cookies
      gameData.score -= gameData.upgradeCost;       // Deduct cost from score
      gameData.cookiesPerClick++;                   // Increase cookies per click
      gameData.upgradeCost = Math.floor(gameData.upgradeCost * 1.5);  // Increase upgrade cost
  
      // Update the displayed score and upgrade cost
      document.getElementById("score").innerText = `Score: ${gameData.score}`;
      document.getElementById("upgradeCost").innerText = `Upgrade Cost: ${gameData.upgradeCost}`;
      saveGameData();  // Save game data to localStorage
    }
  });

  document.getElementById("upgradeBtn2").addEventListener("click", () => {
    if (gameData.score >= gameData.upgradeCost2) {  // Check if player has enough cookies
      gameData.score = gameData.score - gameData.upgradeCost2;       // Deduct cost from score
      gameData.cookiesPerSecond++;                   // Increase cookies per click
      gameData.upgradeCost2 = Math.floor(gameData.upgradeCost2 * 1.5);  // Increase upgrade cost
  
      // Update the displayed score and upgrade cost
      document.getElementById("score").innerText = `Score: ${gameData.score}`;
      document.getElementById("upgradeCost2").innerText = `Upgrade Cost: ${gameData.upgradeCost2}`;
      saveGameData();  // Save game data to localStorage
    }
  });

  document.getElementById("upgradeBtn3").addEventListener("click", () => {
    if (gameData.score >= gameData.upgradeCost3) {  // Check if player has enough cookies
      gameData.score = gameData.score - gameData.upgradeCost3;       // Deduct cost from score
      gameData.clickMultiplier++;
      gameData.upgradeCost3 = Math.floor(gameData.upgradeCost3 * 1.5);  // Increase upgrade cost
  
      // Update the displayed score and upgrade cost
      document.getElementById("score").innerText = `Score: ${gameData.score}`;
      document.getElementById("upgradeCost3").innerText = `Upgrade Cost: ${gameData.upgradeCost3}`;
      saveGameData();  // Save game data to localStorage
    }
  });

  setInterval(function() {
    
    timeOpen++;

    if (csscore != 0) {
      cps = csscore/timeOpen;
      changePerSecond = (gameData.score-startingScore)/timeOpen

      if (changePerSecond >= (10*gameData.cookiesPerClick)+(gameData.cookiesPerSecond)*gameData.clickMultiplier) {
        gameData.score=0
      } else if (cps >= 10) {
        gameData.score-=(250*gameData.cookiesPerClick)*gameData.clickMultiplier
      }

      console.log(changePerSecond)
    }

    if (parseInt(gameData.cookiesPerSecond) != 0) {
      console.log(gameData.cookiesPerSecond)
      gameData.score= gameData.score+(gameData.cookiesPerSecond*gameData.clickMultiplier);
      document.getElementById("score").innerText = `Score: ${gameData.score}`;
      saveGameData();  // Save game data to localStorage
    }
  },1000)