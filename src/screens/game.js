/**
 * Défini l'affichage, le chargement et les actions du jeu.
 */



const DIAMETER_PAUSE_BUTTON = (BAR_HEIGHT - 10) / 2;
const SPEEDS = [5, 10, 25];  // increment final en 1 sec: 0.1 s / 100 intervals/s * 1s


const GAME_SCREEN = Object.assign({
	name: SCREEN_NAMES.GAME,

	// Temps de base en 0.1 s.
	timer: 12 * 60 * 10,
	paused: false,
	speed: 0,
	stats: {
		total: 40,
		dead: 0,
		infected: 0,
		search: 0,
	},

	init: () => {
		GAME_SCREEN.startTimer();
	},

	exit: () => {
		GAME_SCREEN.pauseTimer();
	},

	mousePressed: () => {
		if (mouseInRect(...PAUSE_BUTTON, DIAMETER_PAUSE_BUTTON, DIAMETER_PAUSE_BUTTON, true)) {
			GAME_SCREEN.togglePause();
		} else if (mouseInRect(...QUICK_BUTTON, DIAMETER_PAUSE_BUTTON, DIAMETER_PAUSE_BUTTON, true)) {
			GAME_SCREEN.toggleSpeed();
		} else if (mouseInRect(...COMPETENCE_BUTTON,  DIAMETER_PAUSE_BUTTON, DIAMETER_PAUSE_BUTTON, true)) {
			Screens.setScreen(SCREEN_NAMES.COMPETENCE);
		} else if (mouseInRect(...HOUSE1)) {
		Screens.setScreen(SCREEN_NAMES.ACTION);
	}
	},

	draw: () => {
		fill(...COLORS.YELLOW);
		rect(-1, -1, BAR_WIDTH + 2, BAR_HEIGHT + 2);

		GAME_SCREEN.drawBar();
		GAME_SCREEN.drawWorld();
	},

	incrementTimer: (seconds) => {
		if (seconds === undefined) {
			seconds = SPEEDS[GAME_SCREEN.speed];
		}

		GAME_SCREEN.timer = (GAME_SCREEN.timer + seconds) % (24 * 60 * 10);
	},

	startTimer: () => {
		GAME_SCREEN.timerInterval = setInterval(() => GAME_SCREEN.incrementTimer(), 100);
	},

	pauseTimer: () => {
		clearInterval(GAME_SCREEN.timerInterval);
	},

	togglePause: () => {
		if (GAME_SCREEN.paused) {
			GAME_SCREEN.startTimer();
		} else {
			GAME_SCREEN.pauseTimer();
		}

		GAME_SCREEN.paused = !GAME_SCREEN.paused;
	},

	toggleSpeed: () => {
		GAME_SCREEN.speed = (GAME_SCREEN.speed + 1) % SPEEDS.length
	}
}, GAME_SCREEN_BAR, GAME_SCREEN_WORLD );

Screens.addScreen(GAME_SCREEN);
