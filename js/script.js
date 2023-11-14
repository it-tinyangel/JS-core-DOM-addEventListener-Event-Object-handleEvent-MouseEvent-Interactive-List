const listItems = document.querySelectorAll('.list-item');

listItems.forEach(item => item.addEventListener('click', () => {
	const color = item.textContent.toLowerCase();
	item.style.color = color;
}));