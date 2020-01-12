const CANVAS_ATTACK = [0, 0, 360, 500];
const CANVAS_POSSESSION = [360, 0, 360, 500];
const CANVAS_DEFENSE = [720, 0, 360, 500];
const DIAMETER_SKILL_BUTTON = 40;

const GAME_SCREEN_INTERFACE = {


	drawInterface: () => {
		SKILL_SCREEN.drawAttaque();
		SKILL_SCREEN.drawPossession();
		SKILL_SCREEN.drawDefense();
	},

	drawAttaque: () => {

		fill(...COLORS.RED_ATTACK);
		textSize(40);
		textAlign(CENTER);
		textFont(loadKells_SD);
		text("ATTACK", 180, 35);


		fill(...COLORS.WHITE_TRANSPARENT);
		circle(...BUTTON_ATTACK.attack_one.position, DIAMETER_SKILL_BUTTON);
		fill(...BUTTON_ATTACK.attack_one.color);
		textAlign(CENTER, CENTER);
		textFont("Arial");
		textSize(22);
		text(['A'], ...BUTTON_ATTACK.attack_one.position);
		if (mouseInRect(...BUTTON_ATTACK.attack_one.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			SKILL_SCREEN.drawInformationCompetence("Attaque I - " + BUTTON_ATTACK.attack_one.xp + "/" + BUTTON_ATTACK.attack_one.max_xp);
		}

		fill(...COLORS.WHITE_TRANSPARENT);
		circle(...BUTTON_ATTACK.attack_two.position, DIAMETER_SKILL_BUTTON);
		fill(...BUTTON_ATTACK.attack_two.color);
		textAlign(CENTER, CENTER);
		textFont("Arial");
		textSize(22);
		text(['A'], ...BUTTON_ATTACK.attack_two.position);
		if (mouseInRect(...BUTTON_ATTACK.attack_two.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			SKILL_SCREEN.drawInformationCompetence("Attanquant II - " + BUTTON_ATTACK.attack_two.xp + "/" + BUTTON_ATTACK.attack_two.max_xp);
		}

		if (mouseInRect(...CANVAS_ATTACK)) {
			fill(...COLORS.WHITE_TRANSPARENT);
			rect(...CANVAS_ATTACK);
		}
	},

	drawPossession: () => {

		fill(...COLORS.BLUE_POSSESSION);
		textSize(40);
		textAlign(CENTER);
		textFont(loadKells_SD);
		text("POSSESSION", 540, 20);

		fill(...COLORS.WHITE_TRANSPARENT);
		circle(...BUTTON_POSSESSION.possession_one.position, DIAMETER_SKILL_BUTTON);
		fill(...BUTTON_POSSESSION.possession_one.color);
		textAlign(CENTER, CENTER);
		textFont("Arial");
		textSize(22);
		text(['P'], ...BUTTON_POSSESSION.possession_one.position);
		if (mouseInRect(...BUTTON_POSSESSION.possession_one.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			SKILL_SCREEN.drawInformationCompetence("Possession I - " + BUTTON_POSSESSION.possession_one.xp + "/" + BUTTON_POSSESSION.possession_one.max_xp);
		}

		fill(...COLORS.WHITE_TRANSPARENT);
		circle(...BUTTON_POSSESSION.possession_two.position, DIAMETER_SKILL_BUTTON);
		fill(...BUTTON_POSSESSION.possession_two.color);
		textAlign(CENTER, CENTER);
		textFont("Arial");
		textSize(22);
		text(['P'], ...BUTTON_POSSESSION.possession_two.position);
		if (mouseInRect(...BUTTON_POSSESSION.possession_two.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			SKILL_SCREEN.drawInformationCompetence("Possession II - " + BUTTON_POSSESSION.possession_two.xp + "/" + BUTTON_POSSESSION.possession_two.max_xp);
		}

		if (mouseInRect(...CANVAS_POSSESSION)) {
			fill(...COLORS.WHITE_TRANSPARENT);
			rect(...CANVAS_POSSESSION);
		}
	},

	drawDefense: () => {

		fill(...COLORS.GREEN_SHIELD);
		textSize(40);
		textAlign(CENTER);
		textFont(loadKells_SD);
		text("DEFENSE", 900, 20);


		fill(...COLORS.WHITE_TRANSPARENT);
		circle(...BUTTON_DEFENSE.defense_one.position, DIAMETER_SKILL_BUTTON);
		fill(...BUTTON_DEFENSE.defense_one.color);
		textAlign(CENTER, CENTER);
		textFont("Arial");
		textSize(22);
		text(['D'], ...BUTTON_DEFENSE.defense_one.position);
		if (mouseInRect(...BUTTON_DEFENSE.defense_one.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			SKILL_SCREEN.drawInformationCompetence("Défense I - " + BUTTON_DEFENSE.defense_one.xp + "/" + BUTTON_DEFENSE.defense_one.max_xp);
		}

		fill(...COLORS.WHITE_TRANSPARENT);
		circle(...BUTTON_DEFENSE.defense_two.position, DIAMETER_SKILL_BUTTON);
		fill(...BUTTON_DEFENSE.defense_two.color);
		textAlign(CENTER, CENTER);
		textSize(22);
		text(['D'], ...BUTTON_DEFENSE.defense_two.position);
		if (mouseInRect(...BUTTON_DEFENSE.defense_two.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			SKILL_SCREEN.drawInformationCompetence("Défense II - " + BUTTON_DEFENSE.defense_two.xp + "/" + BUTTON_DEFENSE.defense_two.max_xp);
		}



		fill(...COLORS.WHITE_TRANSPARENT);
		circle(...BUTTON_DEFENSE.resistance_one.position, DIAMETER_SKILL_BUTTON);
		fill(...BUTTON_DEFENSE.resistance_one.color);
		textAlign(CENTER, CENTER);
		textSize(22);
		text(['D'], ...BUTTON_DEFENSE.resistance_one.position);
		if (mouseInRect(...BUTTON_DEFENSE.resistance_one.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			SKILL_SCREEN.drawInformationCompetence("Réduit la resistance des croyants I - " + BUTTON_DEFENSE.resistance_one.xp + "/" + BUTTON_DEFENSE.resistance_one.max_xp);
		}

		fill(...COLORS.WHITE_TRANSPARENT);
		circle(...BUTTON_DEFENSE.resistance_two.position, DIAMETER_SKILL_BUTTON);
		fill(...BUTTON_DEFENSE.resistance_two.color);
		textAlign(CENTER, CENTER);
		textSize(22);
		text(['D'], ...BUTTON_DEFENSE.resistance_two.position);
		if (mouseInRect(...BUTTON_DEFENSE.resistance_two.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			SKILL_SCREEN.drawInformationCompetence("Réduit la resistance des croyants II - " + BUTTON_DEFENSE.resistance_two.xp + "/" + BUTTON_DEFENSE.resistance_two.max_xp);
		}

		if (mouseInRect(...CANVAS_DEFENSE)) {
			fill(...COLORS.WHITE_TRANSPARENT);
			rect(...CANVAS_DEFENSE);
		}
	},

	drawInformationCompetence: (texte) => {
		stroke(...COLORS.GREYTRANSPARENT2);
		fill(...COLORS.WHITE);
		textAlign(CENTER);
		textSize(26);
		text(texte, 560, 110);
	},


};