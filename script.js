let button = document.querySelector('input');

function removeColor() {
	let dropdown = document.getElementById('colorSelect');
	dropdown.remove(dropdown.selectedIndex);
}

button.addEventListener("click", removeColor);

