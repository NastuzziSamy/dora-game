/**
 * Défini l'affichage, le chargement et les actions du jeu.
 */

Screens.addScreen({
	name: SCREEN_NAMES.GAME,

	draw: () => {
		fill(255, 204, 100);
		rect(-1, -1, BAR_WIDTH + 2, BAR_HEIGHT + 2);
	},
})
