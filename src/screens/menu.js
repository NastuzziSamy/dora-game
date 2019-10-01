/**
 * Défini l'affichage, les actions du menu.
 */

const PLAY_POSITION = [BUTTON_CENTER_X, SCREEN_HEIGHT / 2, BUTTON_WIDTH, BUTTON_HEIGHT];

const MENU_SCREEN = {
	name: SCREEN_NAMES.MENU,

	init: () => {

	},

	exit: () => {

	},

	mousePressed: () => {
		if (mouseInRect(...PLAY_POSITION)) {
			Screens.setScreen(SCREEN_NAMES.GAME);
		}
	},

	draw: () => {
		MENU_SCREEN.drawTitle();
		MENU_SCREEN.drawPlay();
	},

	drawTitle: () => {
		fill(...COLORS.WHITE);
		noStroke();
		textSize(72);
		textAlign(CENTER, CENTER);
		text("Bienvenue dans Dora !", width / 2, height / 4);
	},

	drawPlay: () => {
		fill(...COLORS.BLACK);
		rect(...PLAY_POSITION, BUTTON_HEIGHT / 2);
		fill(...COLORS.LIGHT_GREY);
		textSize(36);
		textAlign(CENTER, CENTER);

		text("Jouer !", width / 2, (BUTTON_HEIGHT + SCREEN_HEIGHT) / 2);
	},
};

Screens.addScreen(MENU_SCREEN);
