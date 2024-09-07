// Event listener for form submission
document.querySelector("#masaiForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve form values
    var matchNum = document.querySelector("#matchNum").value;
    var teamA = document.querySelector("#teamA").value;
    var teamB = document.querySelector("#teamB").value;
    var date = document.querySelector("#date").value;
    var venue = document.querySelector("#venue").value;
    
    // Validate form fields
    if (!matchNum || teamA === "none" || teamB === "none" || !date || venue === "none") {
      alert("Please fill out all the fields.");
      return;
    }
    
    // Ensure team A and team B are not the same
    if (teamA === teamB) {
      alert("Team A and Team B cannot be the same.");
      return;
    }
  
    // Create a match object
    var match = {
      matchCount: matchNum,
      matchTeamA: teamA,
      matchTeamB: teamB,
      matchDate: date,
      matchCity: venue
    };
  
    // Get existing match data from localStorage or initialize a new array
    var matchList = JSON.parse(localStorage.getItem("matchList")) || [];
    
    // Add new match to the match list
    matchList.push(match);
    
    // Save updated match list to localStorage
    localStorage.setItem("matchList", JSON.stringify(matchList));
  
    // Clear the form after submission
    document.querySelector("#masaiForm").reset();
    alert("Match added successfully!");
  });
  