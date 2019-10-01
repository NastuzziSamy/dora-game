/**
 * Défini les constantes du jeu.
 */

const mouseInRect = (x, y, w, h) => {
	return (mouseX >= x && mouseX <= x + w
		&& mouseY >= y && mouseY <= y + h);
};