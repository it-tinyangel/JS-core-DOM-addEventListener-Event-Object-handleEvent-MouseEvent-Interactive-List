const listItems = document.querySelectorAll('.list-item');

// Add an event handler for each list item
listItems.forEach(listItem => listItem.addEventListener('click', () => changeColorOnClick(listItem)));

// Function to mouse click an event handler
function changeColorOnClick(listItem) {
	const color = listItem.textContent.toLowerCase();
	listItem.style.color = color;
};
