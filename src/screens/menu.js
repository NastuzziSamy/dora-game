/**
 * Défini l'affichage, les actions du menu.
 */

const PLAY_POSITION = [BUTTON_CENTER_X, SCREEN_HEIGHT / 2, BUTTON_WIDTH, BUTTON_HEIGHT];
const MOVIE_MENU = ['src/screens/movie/fond_menu.mp4']

const MENU_SCREEN = {
	name: SCREEN_NAMES.MENU,

	init: () => {
		MENU_SCREEN.video = createVideo(MOVIE_MENU);
		MENU_SCREEN.video.loop();
		MENU_SCREEN.video.size(SCREEN_WIDTH, SCREEN_HEIGHT);
		MENU_SCREEN.video.hide();

	},

	exit: () => {

	},

	mousePressed: () => {
		if (mouseInRect(...PLAY_POSITION)) {
			Screens.setScreen(SCREEN_NAMES.GAME);
		}
	},

	draw: () => {
		MENU_SCREEN.drawVideo();
		MENU_SCREEN.drawTitle();
		MENU_SCREEN.drawPlay();
	},

	drawVideo: () => {
		  image(MENU_SCREEN.video, 0, 0);
	},

	drawTitle: () => {
		fill(...COLORS.WHITE);
		noStroke();
		textSize(72);
		textAlign(CENTER, CENTER);
		// textFont(loadKells_SD);
		text("Real Agonie", width / 2, height / 4);
	},

	drawPlay: () => {
		fill(...COLORS.GREYTRANSPARENT);
		rect(...PLAY_POSITION, BUTTON_HEIGHT / 2);
		fill(...COLORS.LIGHT_GREY);
		textSize(36);
		textAlign(CENTER, CENTER);

		text("Jouer !", width / 2, (BUTTON_HEIGHT + SCREEN_HEIGHT) / 2);
	},
};

Screens.addScreen(MENU_SCREEN);
