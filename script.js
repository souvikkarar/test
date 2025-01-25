// Check if the button has been clicked before using localStorage
const buttonClicked = localStorage.getItem('buttonClicked');

const buttonContainer = document.getElementById('button-container');
const button1 = document.getElementById('button-1');
const newSection = document.getElementById('new-section');

if (buttonClicked === 'true') {
  // If the button was clicked before, hide Button 1 and show the new section
  buttonContainer.style.display = 'none';
  newSection.style.display = 'block';
} else {
  // If the button was not clicked before, show Button 1
  button1.addEventListener('click', () => {
    // Hide Button 1 and show the new section
    buttonContainer.style.display = 'none';
    newSection.style.display = 'block';

    // Store the click action in localStorage
    localStorage.setItem('buttonClicked', 'true');
  });
}
