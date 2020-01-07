const CANVAS_ATTAQUE = [0,0,360,500];
const CANVAS_POSSESSION = [360,0,360,500];
const CANVAS_DEFENSE = [720,0,360,500];
const DIAMETER_COMPETENCE_BUTTON = 40;

const BUTTON_ATTAQUE = {
		ATTAQUEUN: [120,405,],
		attaqueun: COLORS.RED_ATTACK_DARK,
		nattaqueun:4,

		ATTAQUEDEUX: [120,325,],
		attaquedeux: COLORS.RED_ATTACK_DARK,
		nattaquedeux:2,

}

const BUTTON_POSSESSION = {
		POSSESSIONUN: [480, 475,],
		possessionun: COLORS.BLUE_POSSESSION_DARK,
		npossessionun:4,

		POSSESSIONDEUX: [480, 405,],
		possessiondeux: COLORS.BLUE_POSSESSION_DARK,
		npossessiondeux:2,
}

const BUTTON_DEFENSE = {
		DEFENSEUN: [840,405,],
		defenseun:COLORS.GREEN_SHIEDL_DARK,
		ndefenseun: 4,
		DEFENSEDEUX: [840,325,],
		defensedeux:COLORS.GREEN_SHIEDL_DARK,
		ndefensedeux: 2,

		ZOMBIRESISTANCEUN: [1020,165,],
		zombiresistanceun:COLORS.GREEN_SHIEDL_DARK,
		nzombiresistanceun:2,
		ZOMBIRESISTANCEDEUX: [1020,85,],
		zombiresistancedeux:COLORS.GREEN_SHIEDL_DARK,
		nzombiresistancedeux:1,
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
		if (mouseInRect(...BUTTON_ATTAQUE.ATTAQUEUN,DIAMETER_COMPETENCE_BUTTON,DIAMETER_COMPETENCE_BUTTON,true)){
			COMPETENCE_SCREEN.drawInformationCompetence("Attaque débutant - "+ DEMON.capacite_attaque.attaqueun +"/"+BUTTON_ATTAQUE.nattaqueun);
		}

		fill(...COLORS.BLANC_TRANSPARENT);
	  circle(...BUTTON_ATTAQUE.ATTAQUEDEUX, DIAMETER_COMPETENCE_BUTTON);
	  fill(...BUTTON_ATTAQUE.attaquedeux);
	  textAlign(CENTER, CENTER);
		textFont("Arial");
	  textSize(22);
	  text(['A'], ...BUTTON_ATTAQUE.ATTAQUEDEUX);
		if (mouseInRect(...BUTTON_ATTAQUE.ATTAQUEDEUX,DIAMETER_COMPETENCE_BUTTON,DIAMETER_COMPETENCE_BUTTON,true)){
			COMPETENCE_SCREEN.drawInformationCompetence("Attanquant confimé, il peut tuer - "+ DEMON.capacite_attaque.attaquedeux +"/"+BUTTON_ATTAQUE.nattaquedeux);
		}

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
		if (mouseInRect(...BUTTON_POSSESSION.POSSESSIONUN,DIAMETER_COMPETENCE_BUTTON,DIAMETER_COMPETENCE_BUTTON,true)){
			COMPETENCE_SCREEN.drawInformationCompetence("Apprenez à posséder - "+ DEMON.capacite_possesion.possessionun+"/"+BUTTON_POSSESSION.npossessionun);
		}

		fill(...COLORS.BLANC_TRANSPARENT);
	  circle(...BUTTON_POSSESSION.POSSESSIONDEUX, DIAMETER_COMPETENCE_BUTTON);
	  fill(...BUTTON_POSSESSION.possessiondeux);
	  textAlign(CENTER, CENTER);
		textFont("Arial");
	  textSize(22);
	  text(['P'], ...BUTTON_POSSESSION.POSSESSIONDEUX);
		if (mouseInRect(...BUTTON_POSSESSION.POSSESSIONDEUX,DIAMETER_COMPETENCE_BUTTON,DIAMETER_COMPETENCE_BUTTON,true)){
			COMPETENCE_SCREEN.drawInformationCompetence("Possesion niveau supérieur - "+ DEMON.capacite_possesion.possessiondeux +"/"+BUTTON_POSSESSION.npossessiondeux);
		}

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
		if (mouseInRect(...BUTTON_DEFENSE.DEFENSEUN,DIAMETER_COMPETENCE_BUTTON,DIAMETER_COMPETENCE_BUTTON,true)){
			COMPETENCE_SCREEN.drawInformationCompetence("Défence niveau 1 - "+ DEMON.capacite_defense.defenseun +"/"+BUTTON_DEFENSE.ndefenseun);
		}

		fill(...COLORS.BLANC_TRANSPARENT);
	  circle(...BUTTON_DEFENSE.DEFENSEDEUX, DIAMETER_COMPETENCE_BUTTON);
	  fill(...BUTTON_DEFENSE.defensedeux);
	  textAlign(CENTER, CENTER);
	  textSize(22);
	  text(['D'], ...BUTTON_DEFENSE.DEFENSEDEUX);
		if (mouseInRect(...BUTTON_DEFENSE.DEFENSEDEUX,DIAMETER_COMPETENCE_BUTTON,DIAMETER_COMPETENCE_BUTTON,true)){
			COMPETENCE_SCREEN.drawInformationCompetence("Défence niveau 2 - "+ DEMON.capacite_defense.defensedeux +"/"+BUTTON_DEFENSE.ndefensedeux);
		}



		fill(...COLORS.BLANC_TRANSPARENT);
	  circle(...BUTTON_DEFENSE.ZOMBIRESISTANCEUN, DIAMETER_COMPETENCE_BUTTON);
	  fill(...BUTTON_DEFENSE.zombiresistanceun);
	  textAlign(CENTER, CENTER);
	  textSize(22);
	  text(['D'], ...BUTTON_DEFENSE.ZOMBIRESISTANCEUN);
		if (mouseInRect(...BUTTON_DEFENSE.ZOMBIRESISTANCEUN,DIAMETER_COMPETENCE_BUTTON,DIAMETER_COMPETENCE_BUTTON,true)){
			COMPETENCE_SCREEN.drawInformationCompetence("Les zombie sont plus résistant - "+ DEMON.capacite_defense.zombiresistanceun +"/"+BUTTON_DEFENSE.nzombiresistanceun);
		}

		fill(...COLORS.BLANC_TRANSPARENT);
	  circle(...BUTTON_DEFENSE.ZOMBIRESISTANCEDEUX, DIAMETER_COMPETENCE_BUTTON);
	  fill(...BUTTON_DEFENSE.zombiresistancedeux);
	  textAlign(CENTER, CENTER);
	  textSize(22);
	  text(['D'], ...BUTTON_DEFENSE.ZOMBIRESISTANCEDEUX);
		if (mouseInRect(...BUTTON_DEFENSE.ZOMBIRESISTANCEDEUX,DIAMETER_COMPETENCE_BUTTON,DIAMETER_COMPETENCE_BUTTON,true)){
			COMPETENCE_SCREEN.drawInformationCompetence("Les zombie sont encore plus résistant - "+ DEMON.capacite_defense.zombiresistancedeux +"/"+BUTTON_DEFENSE.nzombiresistancedeux);
		}

		if (mouseInRect(...CANVAS_DEFENSE)){
			fill(...COLORS.BLANC_TRANSPARENT);
			rect(...CANVAS_DEFENSE);
		}
	},

	drawInformationCompetence: (texte) => {
			stroke(...COLORS.GREYTRANSPARENT2);
			fill(...COLORS.WHITE);
			textAlign(CENTER);
			textSize(26);
			text(texte, 560 , 110);
	},


};
