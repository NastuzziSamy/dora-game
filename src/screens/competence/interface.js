const CANVAS_ATTAQUE = [0,0,360,500];
const CANVAS_POSSESSION = [360,0,360,500];
const CANVAS_DEFENSE = [720,0,360,500];
const DIAMETER_COMPETENCE_BUTTON = 40;

const BUTTON_ATTAQUE = {
		ATTAQUEUN: [120,405,],
		attaqueun: COLORS.RED_ATTACK_DARK
}

const BUTTON_POSSESSION = {
		POSSESSIONUN: [480, 475,],
		possessionun: COLORS.BLUE_POSSESSION_DARK,
}

const BUTTON_DEFENSE = {
		DEFENSEUN: [840,405,],
		defenseun:COLORS.GREEN_SHIEDL_DARK,
		DEFENSEDEUX: [840,325,],
		defensedeux:COLORS.GREEN_SHIEDL_DARK,

		ZOMBIRESISTANCEUN: [1020,165,],
		zombiresistanceun:COLORS.GREEN_SHIEDL_DARK,
		ZOMBIRESISTANCEDEUX: [1020,85,],
		zombiresistancedeux:COLORS.GREEN_SHIEDL_DARK,
}

const GAME_SCREEN_INTERFACE = {
	drawInterface: () => {
		COMPETENCE_SCREEN.drawAttaque();
		COMPETENCE_SCREEN.drawPossession();
		COMPETENCE_SCREEN.drawDefense();
},

	drawAttaque: () => {

		fill(...COLORS.RED_ATTACK);
		textSize(40);
		textAlign(CENTER);
		textFont(loadKells_SD);
		text("ATTAQUE", 180 , 35);


		fill(...COLORS.BLANC_TRANSPARENT);
	  circle(...BUTTON_ATTAQUE.ATTAQUEUN, DIAMETER_COMPETENCE_BUTTON);
	  fill(...BUTTON_ATTAQUE.attaqueun);
	  textAlign(CENTER, CENTER);
		textFont("Arial");
	  textSize(22);
	  text(['A'], ...BUTTON_ATTAQUE.ATTAQUEUN);

		if (mouseInRect(...CANVAS_ATTAQUE)){
			fill(...COLORS.BLANC_TRANSPARENT);
			rect(...CANVAS_ATTAQUE);
		}
	},

	drawPossession: () => {

		fill(...COLORS.BLUE_POSSESSION);
		textSize(40);
		textAlign(CENTER);
		textFont(loadKells_SD);
		text("POSSESSION", 540 , 20);

		fill(...COLORS.BLANC_TRANSPARENT);
	  circle(...BUTTON_POSSESSION.POSSESSIONUN, DIAMETER_COMPETENCE_BUTTON);
	  fill(...BUTTON_POSSESSION.possessionun);
	  textAlign(CENTER, CENTER);
		textFont("Arial");
	  textSize(22);
	  text(['P'], ...BUTTON_POSSESSION.POSSESSIONUN);

		if (mouseInRect(...CANVAS_POSSESSION)){
			fill(...COLORS.BLANC_TRANSPARENT);
			rect(...CANVAS_POSSESSION);
		}
	},

	drawDefense: () => {

		fill(...COLORS.GREEN_SHIEDL);
		textSize(40);
		textAlign(CENTER);
		textFont(loadKells_SD);
		text("DEFENSE", 900 , 20);


		fill(...COLORS.BLANC_TRANSPARENT);
	  circle(...BUTTON_DEFENSE.DEFENSEUN, DIAMETER_COMPETENCE_BUTTON);
	  fill(...BUTTON_DEFENSE.defenseun);
	  textAlign(CENTER, CENTER);
		textFont("Arial");
	  textSize(22);
	  text(['D'], ...BUTTON_DEFENSE.DEFENSEUN);

		fill(...COLORS.BLANC_TRANSPARENT);
	  circle(...BUTTON_DEFENSE.DEFENSEDEUX, DIAMETER_COMPETENCE_BUTTON);
	  fill(...BUTTON_DEFENSE.defensedeux);
	  textAlign(CENTER, CENTER);
	  textSize(22);
	  text(['D'], ...BUTTON_DEFENSE.DEFENSEDEUX);




		fill(...COLORS.BLANC_TRANSPARENT);
	  circle(...BUTTON_DEFENSE.ZOMBIRESISTANCEUN, DIAMETER_COMPETENCE_BUTTON);
	  fill(...BUTTON_DEFENSE.zombiresistanceun);
	  textAlign(CENTER, CENTER);
	  textSize(22);
	  text(['D'], ...BUTTON_DEFENSE.ZOMBIRESISTANCEUN);

		fill(...COLORS.BLANC_TRANSPARENT);
	  circle(...BUTTON_DEFENSE.ZOMBIRESISTANCEDEUX, DIAMETER_COMPETENCE_BUTTON);
	  fill(...BUTTON_DEFENSE.zombiresistancedeux);
	  textAlign(CENTER, CENTER);
	  textSize(22);
	  text(['D'], ...BUTTON_DEFENSE.ZOMBIRESISTANCEDEUX);

		if (mouseInRect(...CANVAS_DEFENSE)){
			fill(...COLORS.BLANC_TRANSPARENT);
			rect(...CANVAS_DEFENSE);
		}
	},


};
