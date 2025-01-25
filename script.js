const button1 = document.getElementById('button-1');
const newSection = document.getElementById('new-section');

// Check if the URL contains a specific parameter (e.g., ?buttonClicked=true)
const urlParams = new URLSearchParams(window.location.search);
const buttonClicked = urlParams.get('buttonClicked');

if (buttonClicked === 'true') {
  // If the button was clicked before, hide Button 1 and show the new section
  button1.style.display = 'none';
  newSection.style.display = 'block';
}

// Add a click event listener to Button 1
button1.addEventListener('click', () => {
  // Dynamically load the new section's content
  newSection.innerHTML = `
    <p>This is the new section that appears after clicking Button 1!</p>
    <p>This content was not part of the initial page load.</p>
  `;

  // Show the new section
  newSection.style.display = 'block';

  // Hide Button 1
  button1.style.display = 'none';

  // Update the URL to include a query parameter
  window.history.pushState({}, '', '?buttonClicked=true');
});
