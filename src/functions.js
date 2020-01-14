/**
 * Défini les constantes du jeu.
 */

const mouseInRect = (x, y, w, h, centered=false) => {
	if (centered) {
		return (mouseX >= x - (w / 2) && mouseX <= x + (w / 2)
			&& mouseY >= y - (h / 2) && mouseY <= y + (h / 2));
	}

	return (mouseX >= x && mouseX <= x + w
		&& mouseY >= y && mouseY <= y + h);
};

function shuffle(array) {
	let counter = array.length;

	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		let temp = array[counter].position;
		array[counter].position = array[index].position;
		array[index].position = temp;
	}

	return array;
}