const CANVAS_ATTACK = [0, 0, 360, 500];
const CANVAS_POSSESSION = [360, 0, 360, 500];
const CANVAS_DEFENSE = [720, 0, 360, 500];
const DIAMETER_SKILL_BUTTON = 40;

const BUTTON_ATTACK = {
	attack_one: {
		position: [120, 405],
		color: COLORS.RED_ATTACK_DARK,
		xp: 4,
	},

	attack_two: {
		position: [120, 325],
		color: COLORS.RED_ATTACK_DARK,
		xp: 2,
	},
};

const BUTTON_POSSESSION = {
	possession_one: {
		position: [480, 475],
		color: COLORS.BLUE_POSSESSION_DARK,
		xp: 4,
	},

	possession_two: {
		position: [480, 405],
		color: COLORS.BLUE_POSSESSION_DARK,
		xp: 2,
	},
};

const BUTTON_DEFENSE = {
	defense_one: {
		position: [840, 405],
		color: COLORS.GREEN_SHIELD_DARK,
		xp: 4,
	},

	defense_two: {
		position: [840, 325],
		color: COLORS.GREEN_SHIELD_DARK,
		xp: 2,
	},

	resistance_one: {
		position: [1020, 165],
		color: COLORS.GREEN_SHIELD_DARK,
		xp: 2,
	},

	resistance_two: {
		position: [1020, 85],
		color: COLORS.GREEN_SHIELD_DARK,
		xp: 1,
	},
};

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
text("ATTACK", 180 , 35);


fill(...COLORS.WHITE_TRANSPARENT);
circle(...BUTTON_ATTACK.ATTACKUN, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_ATTACK.attackun);
textAlign(CENTER, CENTER);
textFont("Arial");
textSize(22);
text(['A'], ...BUTTON_ATTACK.ATTACKUN);
if (mouseInRect(...BUTTON_ATTACK.attackun,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("Attaque débutant - "+ DEMON.capacite_attack.attackun +"/"+BUTTON_ATTACK.attackun);
}

fill(...COLORS.WHITE_TRANSPARENT);
circle(...BUTTON_ATTACK.ATTACKDEUX, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_ATTACK.attackdeux);
textAlign(CENTER, CENTER);
textFont("Arial");
textSize(22);
text(['A'], ...BUTTON_ATTACK.ATTACKDEUX);
if (mouseInRect(...BUTTON_ATTACK.attackdeux,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("Attanquant confimé, il peut tuer - "+ DEMON.capacite_attack.attackdeux +"/"+BUTTON_ATTACK.attackdeux);
}

if (mouseInRect(...CANVAS_ATTACK)){
fill(...COLORS.WHITE_TRANSPARENT);
rect(...CANVAS_ATTACK);
}
},

drawPossession: () => {

fill(...COLORS.BLUE_POSSESSION);
textSize(40);
textAlign(CENTER);
textFont(loadKells_SD);
text("POSSESSION", 540 , 20);

fill(...COLORS.WHITE_TRANSPARENT);
circle(...BUTTON_POSSESSION.POSSESSIONUN, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_POSSESSION.possessionun);
textAlign(CENTER, CENTER);
textFont("Arial");
textSize(22);
text(['P'], ...BUTTON_POSSESSION.POSSESSIONUN);
if (mouseInRect(...BUTTON_POSSESSION.POSSESSIONUN,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("Apprenez à posséder - "+ DEMON.capacite_possession.possessionun+"/"+BUTTON_POSSESSION.npossessionun);
}

fill(...COLORS.WHITE_TRANSPARENT);
circle(...BUTTON_POSSESSION.POSSESSIONDEUX, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_POSSESSION.possessiondeux);
textAlign(CENTER, CENTER);
textFont("Arial");
textSize(22);
text(['P'], ...BUTTON_POSSESSION.POSSESSIONDEUX);
if (mouseInRect(...BUTTON_POSSESSION.POSSESSIONDEUX,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("possession niveau supérieur - "+ DEMON.capacite_possession.possessiondeux +"/"+BUTTON_POSSESSION.npossessiondeux);
}

if (mouseInRect(...CANVAS_POSSESSION)){
fill(...COLORS.WHITE_TRANSPARENT);
rect(...CANVAS_POSSESSION);
}
},

drawDefense: () => {

fill(...COLORS.GREEN_SHIELD);
textSize(40);
textAlign(CENTER);
textFont(loadKells_SD);
text("DEFENSE", 900 , 20);


fill(...COLORS.WHITE_TRANSPARENT);
circle(...BUTTON_DEFENSE.DEFENSEUN, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_DEFENSE.defenseun);
textAlign(CENTER, CENTER);
textFont("Arial");
textSize(22);
text(['D'], ...BUTTON_DEFENSE.DEFENSEUN);
if (mouseInRect(...BUTTON_DEFENSE.DEFENSEUN,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("Défence niveau 1 - "+ DEMON.capacite_defense.defenseun +"/"+BUTTON_DEFENSE.ndefenseun);
}

fill(...COLORS.WHITE_TRANSPARENT);
circle(...BUTTON_DEFENSE.DEFENSEDEUX, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_DEFENSE.defensedeux);
textAlign(CENTER, CENTER);
textSize(22);
text(['D'], ...BUTTON_DEFENSE.DEFENSEDEUX);
if (mouseInRect(...BUTTON_DEFENSE.DEFENSEDEUX,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("Défence niveau 2 - "+ DEMON.capacite_defense.defensedeux +"/"+BUTTON_DEFENSE.ndefensedeux);
}



fill(...COLORS.WHITE_TRANSPARENT);
circle(...BUTTON_DEFENSE.ZOMBIRESISTANCEUN, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_DEFENSE.zombiresistanceun);
textAlign(CENTER, CENTER);
textSize(22);
text(['D'], ...BUTTON_DEFENSE.ZOMBIRESISTANCEUN);
if (mouseInRect(...BUTTON_DEFENSE.ZOMBIRESISTANCEUN,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("Les zombie sont plus résistant - "+ DEMON.capacite_defense.zombiresistanceun +"/"+BUTTON_DEFENSE.nzombiresistanceun);
}

fill(...COLORS.WHITE_TRANSPARENT);
circle(...BUTTON_DEFENSE.ZOMBIRESISTANCEDEUX, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_DEFENSE.zombiresistancedeux);
textAlign(CENTER, CENTER);
textSize(22);
text(['D'], ...BUTTON_DEFENSE.ZOMBIRESISTANCEDEUX);
if (mouseInRect(...BUTTON_DEFENSE.ZOMBIRESISTANCEDEUX,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("Les zombie sont encore plus résistant - "+ DEMON.capacite_defense.zombiresistancedeux +"/"+BUTTON_DEFENSE.nzombiresistancedeux);
}

if (mouseInRect(...CANVAS_DEFENSE)){
fill(...COLORS.WHITE_TRANSPARENT);
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
