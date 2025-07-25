// Stub function to fetch grade data
function fetchGradeData() {
    console.log("fetchGradeData() called.");
    // Future: fetch data from PostgreSQL
}

// Stub function to populate the table with grade data
function populateGradebook() {
    console.log("populateGradebook() called.");
    // Future: use data from fetchGradeData to fill the table
}

// Call stubs for testing
fetchGradeData();
populateGradebook();
// Step 1: Get data from the server
async function fetchGradeData() {
  try {
    const response = await fetch('/grades'); // Ask the server for the data
    const data = await response.json(); // Convert it to JSON format
    populateGradebook(data); // Call a function to show the data on the page
  } catch (error) {
    console.error('Error fetching grade data:', error);
  }
}

// Step 2: Display the data in the table
function populateGradebook(data) {
  const tableBody = document.querySelector('#gradebook tbody'); // Grab the table body
  tableBody.innerHTML = ''; // Clear any old data

  data.forEach(student => {
    const row = document.createElement('tr'); // Create a table row
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.course}</td>
      <td>${student.grade}</td>
    `;
    tableBody.appendChild(row); // Add the row to the table
  });
}

// Step 3: Run this when the page loads
window.onload = fetchGradeData;
