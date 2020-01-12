const GAME_SCREEN_BAR_SKILL = {
	drawBar: () => {
		SKILL_SCREEN.drawButtonExit();
		SKILL_SCREEN.drawDemon();
		SKILL_SCREEN.drawBarsCompetence();
	},

	drawButtonExit: () => {
		fill(...COLORS.WHITE_TRANSPARENT);
		circle(...EXIT_BUTTON, DIAMETER_EXIT_BUTTON + 10);
		fill(...COLORS.RED);
		textAlign(CENTER, CENTER);
		textSize(22);
		text(['X'], ...EXIT_BUTTON);
	},

	drawDemon: () => {
		image(SKILL_SCREEN.image, 150, 400, 180, 200);
		fill(...COLORS.WHITE);
		textFont("Arial");
		textSize(20);
		text("Vos points de compétence: " + Math.floor(DEMON.xp), 400, 560);
	},

	drawBarsCompetence: () => {
		fill(...COLORS.RED_ATTACK);
		rect( 700, 510, 10 * DEMON.attack, 20);

		fill(...COLORS.BLUE_POSSESSION);
		rect( 700, 540, 10 * DEMON.possession, 20);

		fill(...COLORS.GREEN_SHIELD);
		rect( 700, 570, 10 * DEMON.defense, 20);
	},
};
