const listItems = document.querySelectorAll('.list-item');

listItems.forEach(item => item.addEventListener('click', handleClick));

// Function to mouse click event handler
function handleClick() {
	const color = this.textContent.toLowerCase();
	this.style.color = color;
}