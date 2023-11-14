const listItems = document.querySelectorAll('.list-item');

// Add an event handler 'сlick' to each list item
listItems.forEach(listItem => {
	listItem.addEventListener('click', () => {
		const color = listItem.textContent.toLowerCase();
		listItem.style.color = color;
	});
});
