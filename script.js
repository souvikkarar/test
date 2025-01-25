const button1 = document.getElementById('button-1');
const newSection = document.getElementById('new-section');

// Check if the button has been clicked before using localStorage
const buttonClicked = localStorage.getItem('buttonClicked');

if (buttonClicked === 'true') {
  // If the button was clicked before, load and show the new section automatically
  loadNewSection();
}

// Add a click event listener to Button 1
button1.addEventListener('click', () => {
  // Load and show the new section
  loadNewSection();

  // Store the click action in localStorage
  localStorage.setItem('buttonClicked', 'true');
});

// Function to load and show the new section
function loadNewSection() {
  // Dynamically load the new section's content
  newSection.innerHTML = `
    <p>This is the new section that appears after clicking Button 1!</p>
    <p>This content was not part of the initial page load.</p>
  `;

  // Show the new section
  newSection.style.display = 'block';

  // Optionally, hide Button 1 after it's clicked
  button1.style.display = 'none';
}
