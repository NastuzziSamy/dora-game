/**
 * Défini l'affichage, le chargement et les actions du jeu.
 */

const PAUSE_BUTTON = [(BAR_WIDTH / 2) - 55, BAR_HEIGHT / 2];
const QUICK_BUTTON = [(BAR_WIDTH / 2) + 55, BAR_HEIGHT / 2];
const DIAMETER_PAUSE_BUTTON = (BAR_HEIGHT - 10) / 2;
const SPEEDS = [5, 10, 25];  // increment final en 1 sec: 0.1 s / 100 intervals/s * 1s

const GAME_SCREEN = {
	name: SCREEN_NAMES.GAME,

	// Temps de base en 0.1 s.
	timer: 12 * 60 * 10,
	paused: false,
	speed: 0,
	stats: {
		total: 40,
		dead: 1,
		infected: 2,
		search: 3,
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
		} else {
			Screens.setScreen(SCREEN_NAMES.MENU);
		}
	},

	draw: () => {
		fill(...COLORS.YELLOW);
		rect(-1, -1, BAR_WIDTH + 2, BAR_HEIGHT + 2);

		GAME_SCREEN.drawDeath();
		GAME_SCREEN.drawInfected();
		GAME_SCREEN.drawTimer();
		GAME_SCREEN.drawResearch();
		GAME_SCREEN.drawAlive();
	},

	drawDeath: () => {
		const dead = Math.ceil(GAME_SCREEN.stats.dead * 100 / GAME_SCREEN.stats.total);

		fill(...COLORS.GREY);
		noStroke();
		textSize(22);
		textAlign(LEFT, CENTER);
		text('🕱 ' + dead + '% morts', 10, BAR_CENTER_HEIGHT);
	},

	drawInfected: () => {
		const infected = Math.ceil(GAME_SCREEN.stats.infected * 100 / GAME_SCREEN.stats.total);

		fill(...COLORS.GREY);
		noStroke();
		textSize(22);
		textAlign(LEFT, CENTER);
		text('🧟 ' + infected + '% infectés', 200, BAR_CENTER_HEIGHT);
	},

	drawResearch: () => {
		const search = Math.ceil(GAME_SCREEN.stats.search);

		fill(...COLORS.GREY);
		noStroke();
		textSize(22);
		textAlign(RIGHT, CENTER);
		text(search + '% trouvés 🚨', BAR_WIDTH - 200, BAR_CENTER_HEIGHT);
	},

	drawAlive: () => {
		const alive = Math.ceil((GAME_SCREEN.stats.total - GAME_SCREEN.stats.infected - GAME_SCREEN.stats.dead) * 100 / GAME_SCREEN.stats.total);

		fill(...COLORS.GREY);
		noStroke();
		textSize(22);
		textAlign(RIGHT, CENTER);
		text(alive + '% sains 👨', BAR_WIDTH - 10, BAR_CENTER_HEIGHT);
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

		noFill();
		stroke(...COLORS.GREY);
		circle(...PAUSE_BUTTON, DIAMETER_PAUSE_BUTTON);
		fill(...COLORS.GREY);
		textAlign(CENTER, CENTER);
		textSize(GAME_SCREEN.paused ? 14 : 10);
		text(GAME_SCREEN.paused ? '⏵' : '||', ...PAUSE_BUTTON);

		fill(...COLORS.GREY);
		noStroke();
		textSize(22);
		textAlign(CENTER, CENTER);
		text(min + ':' + sec, BAR_CENTER_WIDTH, BAR_CENTER_HEIGHT);

		noFill();
		stroke(...COLORS.GREY);
		circle(...QUICK_BUTTON, DIAMETER_PAUSE_BUTTON);
		fill(...COLORS.GREY);
		textAlign(CENTER, CENTER);
		textSize(10);
		text(['⏵⏵', '⏵⏵⏵', '⏴⏴'][GAME_SCREEN.speed], ...QUICK_BUTTON);
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
		if (GAME_SCREEN.speed) {
			GAME_SCREEN.startTimer();
		} else {
			GAME_SCREEN.pauseTimer();
		}

		GAME_SCREEN.paused = !GAME_SCREEN.paused;
	},

	toggleSpeed: () => {
		GAME_SCREEN.speed = (GAME_SCREEN.speed + 1) % SPEEDS.length
	}
}

Screens.addScreen(GAME_SCREEN);
