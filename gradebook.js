// Fetch grade data from the server
async function fetchGradeData() {
  try {
    const response = await fetch('/grades');
    const data = await response.json();
    populateGradebook(data);
  } catch (error) {
    console.error('Error fetching grade data:', error);
  }
}

// Fill table with grade data
function populateGradebook(data) {
  const tableBody = document.querySelector('#gradebook tbody');
  tableBody.innerHTML = '';

  data.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.course}</td>
      <td>${student.grade}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Run this when the page loads
window.onload = fetchGradeData;
