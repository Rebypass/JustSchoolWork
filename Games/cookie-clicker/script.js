// Initialize game data with score, clicks, cookies per click, and upgrade cost
let gameData = {
    score: 0,
    clicks: 0,
    cookiesPerClick: 1,  // Initial cookies per click
    cookiesPerSecond: 0,
    upgradeCost: 50,      // Initial cost of the upgrade
    upgradeCost2: 100,
  };
  
  // Load the game data from localStorage
  const savedData = localStorage.getItem("gameData");
  if (savedData) {
    gameData = JSON.parse(savedData);
  }
  
  // Display the loaded score and upgrade cost
  document.getElementById("score").innerText = `Score: ${gameData.score}`;
  document.getElementById("upgradeCost").innerText = `Upgrade Cost: ${gameData.upgradeCost}`;
  
  // Function to save game data to localStorage
  function saveGameData() {
    localStorage.setItem("gameData", JSON.stringify(gameData));
  }
  
  // Event listener for clicking the cookie
  document.getElementById("cookie").addEventListener("click", () => {
    gameData.score += gameData.cookiesPerClick;  // Add cookies based on cookiesPerClick
    gameData.clicks++;
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

  /*
  document.getElementById("upgradeBtn2").addEventListener("click", () => {
    if (gameData.score >= gameData.upgradeCost2) {  // Check if player has enough cookies
      gameData.score -= gameData.upgradeCost2;       // Deduct cost from score
      gameData.cookiesPerSecond++;                   // Increase cookies per click
      gameData.upgradeCost2 = Math.floor(gameData.upgradeCost2 * 1.5);  // Increase upgrade cost
  
      // Update the displayed score and upgrade cost
      document.getElementById("score").innerText = `Score: ${gameData.score}`;
      document.getElementById("upgradeCost").innerText = `Upgrade Cost: ${gameData.upgradeCost2}`;
      saveGameData();  // Save game data to localStorage
    }
  });

  setInterval(function() {
    if (gameData.cookiesPerSecond > 0) {
        return
    }

    gameData.score+=gameData.cookiesPerSecond;
    gameData.clicks+=gameData.cookiesPerSecond;
    document.getElementById("score").innerText = `Score: ${gameData.score}`;
    saveGameData();  // Save game data to localStorage
  },1000)*/