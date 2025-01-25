const button1 = document.getElementById('button-1');
const newSection = document.getElementById('new-section');

// Add a click event listener to Button 1
button1.addEventListener('click', () => {
  // Dynamically load the new section's content
  newSection.innerHTML = `
    <p>This is the new section that appears after clicking Button 1!</p>
    <p>This content was not part of the initial page load.</p>
  `;

  // Show the new section
  newSection.style.display = 'block';

  // Optionally, hide Button 1 after it's clicked
  button1.style.display = 'none';
});
