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