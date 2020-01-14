/**
 * Défini l'affichage des actions .
 */

const OVER_SCREEN = {
	name: SCREEN_NAMES.OVER,

	init: () => {
			OVER_SCREEN.video = createVideo(MOVIE_MENU);
			OVER_SCREEN.video.loop();
			OVER_SCREEN.video.size(SCREEN_WIDTH, SCREEN_HEIGHT);
			OVER_SCREEN.video.hide();
		},

		exit: () => {

		},

		mousePressed: () => {
			if (mouseInRect(...REPLAY_POSITION)) {
				window.location.reload();
			}
		},

		draw: () => {
			OVER_SCREEN.drawVideo();
			OVER_SCREEN.drawTitle();
			OVER_SCREEN.drawStats();
			OVER_SCREEN.drawPlay();
		},

		drawVideo: () => {
			image(OVER_SCREEN.video, 0, 0);
		},

		drawTitle: () => {
			fill(...COLORS.WHITE);
			noStroke();
			textSize(72);
			textAlign(CENTER, CENTER);
			textFont(loadKells_SD);
			text("Vous avez perdu !", width / 2, height / 4);
		},

		drawStats: () => {
			fill(...COLORS.WHITE);
			noStroke();
			textSize(26);
			textAlign(CENTER, CENTER);
			textFont("Arial");
			text("Personnes non tuées: " + Math.ceil(GAME_SCREEN.stats.alive), width / 2, (height / 2) - 25);
			text("Personnes tuées: " + Math.ceil(GAME_SCREEN.stats.dead), width / 2, (height / 2) + 25);
		},

		drawPlay: () => {
			fill(...COLORS.GREYTRANSPARENT);
			rect(...REPLAY_POSITION, BUTTON_HEIGHT / 2);
			fill(...COLORS.LIGHT_GREY);
			textSize(36);
			textAlign(CENTER, CENTER);

			text("Réessayer !", width / 2, ((BUTTON_HEIGHT + SCREEN_HEIGHT) / 2) + 150);
		},
};

Screens.addScreen(OVER_SCREEN);