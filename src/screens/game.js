/**
 * Défini l'affichage, le chargement et les actions du jeu.
 */



const DIAMETER_PAUSE_BUTTON = (BAR_HEIGHT - 10) / 2;
const SPEEDS = [5, 10, 25];  // increment final en 1 sec: 0.1 s / 100 intervals/s * 1s


const GAME_SCREEN = Object.assign({
	name: SCREEN_NAMES.GAME,

	// Temps de base en 0.1 s.
	timer: 12 * 60 * 10,
	timer_last_step: 12 * 60,
	paused: false,
	speed: 0,
	stats: {
		total: 0,
		alive: 0,
		infected: 0,
		dead: 0,
		search: 0,
	},

	init: () => {
		GAME_SCREEN.startTimer();
		GAME_SCREEN.loadStats();
	},

	exit: () => {
		GAME_SCREEN.pauseTimer();
	},

	draw: () => {
		fill(...COLORS.YELLOW);
		rect(-1, -1, BAR_WIDTH + 2, BAR_HEIGHT + 2);

		GAME_SCREEN.loadStats();
		GAME_SCREEN.drawBar();
		GAME_SCREEN.drawWorld();
	},

	loadStats: () => {
		GAME_SCREEN.stats = Object.assign(GAME_SCREEN.stats, {
			total: HOUSES.reduce((acc, house) => acc + house.alive + house.infected + house.dead, 0),
			alive: HOUSES.reduce((acc, house) => acc + house.alive, 0),
			infected: HOUSES.reduce((acc, house) => acc + house.infected, 0),
			dead: HOUSES.reduce((acc, house) => acc + house.dead, 0),
		});
	},

	executeOneStep: () => {
		if (DEMON.search) {
			if (DEMON.search > GAME_SCREEN.stats.search) {
				DEMON.search = GAME_SCREEN.stats.search;
				GAME_SCREEN.stats.search = 0;
			} else {
				GAME_SCREEN.stats.search -= DEMON.search;
				DEMON.search = 0;
			}
		}

		GAME_SCREEN.incrementSearch((GAME_SCREEN.stats.search / 100) * (Math.random() * 0.1));
		ACTION_SCREEN.attack();
	},

	incrementTimer: (seconds) => {
		if (seconds === undefined) {
			seconds = SPEEDS[GAME_SCREEN.speed];
		}

		GAME_SCREEN.timer = (GAME_SCREEN.timer + seconds) % (24 * 60 * 10);

		let timer_diff = Math.floor(GAME_SCREEN.timer / ACTION_STEP) - GAME_SCREEN.timer_last_step;
		GAME_SCREEN.timer_last_step += timer_diff;

		for (let i = 0; i < timer_diff; i++) {
			GAME_SCREEN.executeOneStep();
		}
	},

	startTimer: () => {
		GAME_SCREEN.paused = false;

		GAME_SCREEN.timerInterval = setInterval(() => GAME_SCREEN.incrementTimer(), 100);
	},

	pauseTimer: () => {
		GAME_SCREEN.paused = true;

		clearInterval(GAME_SCREEN.timerInterval);
	},

	togglePause: () => {
		if (GAME_SCREEN.paused) {
			GAME_SCREEN.startTimer();
		} else {
			GAME_SCREEN.pauseTimer();
		}
	},

	toggleSpeed: () => {
		GAME_SCREEN.speed = (GAME_SCREEN.speed + 1) % SPEEDS.length
	},

	incrementSearch: (search) => {
		GAME_SCREEN.stats.search += search - (DEMON.defense * 0.001 * Math.random());
	},
}, GAME_SCREEN_BAR, GAME_SCREEN_WORLD);

Screens.addScreen(GAME_SCREEN);
