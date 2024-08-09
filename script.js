// Get references to the table body and form elements (you'll need to add a form to your HTML later)
const leaderboardBody = document.getElementById('leaderboard-body');
const nameInput = document.getElementById('name'); // Replace 'name' with the actual ID of your name input field
const timeInput = document.getElementById('time'); // Replace 'time' with the actual ID of your time input field

// Function to add a new entry to the leaderboard
function addEntry(name, time) {
  const newRow = leaderboardBody.insertRow();
  const nameCell = newRow.insertCell();
  const timeCell = newRow.insertCell();
  nameCell.textContent = name;
  timeCell.textContent = time;

  // Store the updated leaderboard in localStorage
  const leaderboardData = Array.from(leaderboardBody.rows).map(row => ({
    name: row.cells[0].textContent,
    time: row.cells[1].textContent
  }));
  localStorage.setItem('leaderboard', JSON.stringify(leaderboardData));
}

// Function to load the leaderboard from localStorage
function loadLeaderboard() {
  const storedLeaderboard = localStorage.getItem('leaderboard');
  if (storedLeaderboard) {
    const leaderboardData = JSON.parse(storedLeaderboard);
    leaderboardData.forEach(entry => addEntry(entry.name, entry.time));
  }
}

// Load the leaderboard when the page loads
loadLeaderboard();

// Add an event listener to the form to handle new entries (you'll need to add this event listener after you create the form)
// ...
