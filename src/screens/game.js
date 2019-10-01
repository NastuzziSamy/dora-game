/**
 * Défini l'affichage, le chargement et les actions du jeu.
 */

const GAME_SCREEN = {
	name: SCREEN_NAMES.GAME,

	// Temps de base en 0.1 s.
	timer: 12 * 60 * 10,
	defaultIncTimer: 1, // increment final en 1 sec: 0.1 s / 100 intervals/s * 1s

	init: () => {
		GAME_SCREEN.timerInterval = setInterval(() => GAME_SCREEN.incrementTimer(), 100);
	},

	exit: () => {
		GAME_SCREEN.timerInterval.stop();
	},

	draw: () => {
		fill(...COLORS.YELLOW);
		rect(-1, -1, BAR_WIDTH + 2, BAR_HEIGHT + 2);

		GAME_SCREEN.drawTimer();
	},

	drawTimer: () => {
		const timer = Math.ceil(GAME_SCREEN.timer / 10);
		let sec = timer % 60;
		let min = (timer - sec) / 60;

		if (sec < 10) {
			sec = '0' + sec;
		}

		if (min < 10) {
			min = '0' + min;
		}

		fill(...COLORS.GREY);
		noStroke();
		textSize(22);
		textAlign(CENTER, CENTER);
		text(min + ':' + sec, BAR_CENTER_WIDTH, BAR_CENTER_HEIGHT);
	},

	incrementTimer: (seconds=GAME_SCREEN.defaultIncTimer) => {
		GAME_SCREEN.timer = (GAME_SCREEN.timer + seconds) % (24 * 60 * 10);
	},
}

Screens.addScreen(GAME_SCREEN);
