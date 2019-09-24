/**
 * Défini l'affichage, les actions du menu.
 */

Screens.addScreen({
	name: SCREEN_NAMES.MENU,

	mousePressed: () => {
		Screens.current = SCREEN_NAMES.GAME;
	},

	draw: () => {
		fill(255);
		noStroke();
		textSize(72);
		textAlign(CENTER, CENTER);
		text("Bienvenue dans Dora !", width / 2, height / 4);

		fill(0);
		rect(BUTTON_CENTER_X, SCREEN_HEIGHT / 2, BUTTON_WIDTH, BUTTON_HEIGHT, BUTTON_HEIGHT / 2);
		fill(200);
		textSize(36);
		textAlign(CENTER, CENTER);

		text("Jouer !", width / 2, (BUTTON_HEIGHT + SCREEN_HEIGHT) / 2);
	},
})
