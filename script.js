const button1 = document.getElementById('button-1');
const newSection = document.getElementById('new-section');

// Check if a cookie exists to determine if the button was clicked
const buttonClicked = document.cookie.includes('buttonClicked=true');

if (buttonClicked) {
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

  // Set a cookie to remember the click
  document.cookie = 'buttonClicked=true; path=/; max-age=86400'; // Expires in 1 day
});
