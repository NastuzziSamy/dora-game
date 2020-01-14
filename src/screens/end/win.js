/**
 * Défini l'affichage des actions .
 */

const REPLAY_POSITION = [BUTTON_CENTER_X, (SCREEN_HEIGHT / 2) + 150, BUTTON_WIDTH, BUTTON_HEIGHT];

const WIN_SCREEN = {
	name: SCREEN_NAMES.WIN,

	init: () => {
			WIN_SCREEN.video = createVideo(MOVIE_MENU);
			WIN_SCREEN.video.loop();
			WIN_SCREEN.video.size(SCREEN_WIDTH, SCREEN_HEIGHT);
			WIN_SCREEN.video.hide();
		},

		exit: () => {

		},

		mousePressed: () => {
			if (mouseInRect(...REPLAY_POSITION)) {
				window.location.reload();
			}
		},

		draw: () => {
			WIN_SCREEN.drawVideo();
			WIN_SCREEN.drawTitle();
			WIN_SCREEN.drawStats();
			WIN_SCREEN.drawPlay();
		},

		drawVideo: () => {
			image(WIN_SCREEN.video, 0, 0);
		},

		drawTitle: () => {
			fill(...COLORS.WHITE);
			noStroke();
			textSize(72);
			textAlign(CENTER, CENTER);
			textFont(loadKells_SD);
			text("Vous les avez tous tués!", width / 2, height / 4);
		},

		drawStats: () => {
			fill(...COLORS.WHITE);
			noStroke();
			textSize(26);
			textAlign(CENTER, CENTER);
			textFont("Arial");
			text("Personnes tuées: " + Math.ceil(GAME_SCREEN.stats.dead), width / 2, (height / 2) - 25);
			text("Taux de recherche: " + Math.ceil(GAME_SCREEN.stats.search) + '%', width / 2, (height / 2) + 25);
		},

		drawPlay: () => {
			fill(...COLORS.GREYTRANSPARENT);
			rect(...REPLAY_POSITION, BUTTON_HEIGHT / 2);
			fill(...COLORS.LIGHT_GREY);
			textSize(36);
			textAlign(CENTER, CENTER);

			text("Rejouer !", width / 2, ((BUTTON_HEIGHT + SCREEN_HEIGHT) / 2) + 150);
		},
};

Screens.addScreen(WIN_SCREEN);