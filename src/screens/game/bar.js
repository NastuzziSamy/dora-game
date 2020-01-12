const PAUSE_BUTTON = [(BAR_WIDTH / 2) - 55, BAR_HEIGHT / 2];
const QUICK_BUTTON = [(BAR_WIDTH / 2) + 55, BAR_HEIGHT / 2];

const GAME_SCREEN_BAR = {
	drawBar: () => {
		GAME_SCREEN.drawDeath();
		GAME_SCREEN.drawInfected();
		GAME_SCREEN.drawTimer();
		GAME_SCREEN.drawResearch();
		GAME_SCREEN.drawAlive();
	},

	drawDeath: () => {
		const dead = Math.floor(GAME_SCREEN.stats.dead * 100 / GAME_SCREEN.stats.total);

		fill(...COLORS.GREY);
		noStroke();
		textSize(22);
		textAlign(LEFT, CENTER);
		text('🕱 ' + dead + '% morts', 10, BAR_CENTER_HEIGHT);
	},

	drawInfected: () => {
		const infected = Math.floor(GAME_SCREEN.stats.infected * 100 / GAME_SCREEN.stats.total);

		fill(...COLORS.GREY);
		noStroke();
		textSize(22);
		textAlign(LEFT, CENTER);
		text('🧟 ' + infected + '% infectés', 200, BAR_CENTER_HEIGHT);
	},

	drawResearch: () => {
		const search = Math.floor(GAME_SCREEN.stats.search);

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
		//retourne le plus petit entier supérieur ou égal au nombre donné.
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
		text(['⏵⏵', '⏵⏵⏵', '<'][GAME_SCREEN.speed], ...QUICK_BUTTON);
	},
};
