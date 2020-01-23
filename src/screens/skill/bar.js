const GAME_SCREEN_BAR_SKILL = {
	drawBar: () => {
		SKILL_SCREEN.drawButtonExit();
		SKILL_SCREEN.drawDemon();
		SKILL_SCREEN.drawBarsCompetence();
	},

	drawButtonExit: () => {
		fill(...COLORS.YELLOW);
		circle(...SKILL_BUTTON, DIAMETER_PAUSE_BUTTON + 75);
		fill(...COLORS.BLACK);
		textAlign(CENTER, CENTER);
		textSize(16);
		text('Revenir\nen jeu', ...SKILL_BUTTON);
	},

	drawDemon: () => {
		image(SKILL_SCREEN.image, 150, 400, 180, 200);
		fill(...COLORS.WHITE);
		textFont("Arial");
		textSize(20);
		text("Vos points de compétence: " + Math.floor(DEMON.xp) + " points", 400, 530);
		text("100 points pour améliorer une compétence", 400, 560);
	},

	drawBarsCompetence: () => {
		fill(...COLORS.RED_ATTACK);
		rect( 700, 510, 50 * DEMON.attack, 20);

		fill(...COLORS.BLUE_POSSESSION);
		rect( 700, 540, 50 * DEMON.possession, 20);

		fill(...COLORS.GREEN_SHIELD);
		rect( 700, 570, 50 * DEMON.defense, 20);
	},
};
