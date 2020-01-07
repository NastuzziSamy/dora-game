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
		SKILL_SCREEN.drawExitButton();
		SKILL_SCREEN.drawCharacter();
	},

drawAttaque: () => {

fill(...COLORS.RED_ATTACK);
textSize(40);
textAlign(CENTER);
textFont(loadKells_SD);
text("ATTACK", 180 , 35);


fill(...COLORS.WHITE_TRANSPARENT);
circle(...BUTTON_ATTACK.attack_one.position, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_ATTACK.attack_one.color);
textAlign(CENTER, CENTER);
textFont("Arial");
textSize(22);
text(['A'], ...BUTTON_ATTACK.attack_one.position);
if (mouseInRect(...BUTTON_ATTACK.attack_one.position,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("Attaque débutant - "+ DEMON.skills.attack_one +"/"+BUTTON_ATTACK.attack_one.xp);
}

fill(...COLORS.WHITE_TRANSPARENT);
circle(...BUTTON_ATTACK.attack_two.position, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_ATTACK.attack_two.color);
textAlign(CENTER, CENTER);
textFont("Arial");
textSize(22);
text(['A'], ...BUTTON_ATTACK.attack_two.position);
if (mouseInRect(...BUTTON_ATTACK.attack_two.position,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("Attanquant confimé, il peut tuer - "+ DEMON.skills.attack_two +"/"+BUTTON_ATTACK.attack_two.xp);
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
circle(...BUTTON_POSSESSION.possession_one.position, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_POSSESSION.possession_one.color);
textAlign(CENTER, CENTER);
textFont("Arial");
textSize(22);
<<<<<<< HEAD
text(['P'], ...BUTTON_POSSESSION.possession_one.position);
if (mouseInRect(...BUTTON_POSSESSION.possession_one.position,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("Apprenez à posséder - "+ DEMON.skills.possession_one+"/"+BUTTON_POSSESSION.possession_one.xp);
=======
text(['P'], ...BUTTON_POSSESSION.POSSESSIONUN);
if (mouseInRect(...BUTTON_POSSESSION.POSSESSIONUN,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("Apprenez à posséder - "+ DEMON.capacite_possession.possessionun+"/"+BUTTON_POSSESSION.npossessionun);
>>>>>>> c3a8f15d7d3e29ce500dfdaf6dfeadd065bed0cc
}

fill(...COLORS.WHITE_TRANSPARENT);
circle(...BUTTON_POSSESSION.possession_two.position, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_POSSESSION.possession_two.color);
textAlign(CENTER, CENTER);
textFont("Arial");
textSize(22);
<<<<<<< HEAD
text(['P'], ...BUTTON_POSSESSION.possession_two.position);
if (mouseInRect(...BUTTON_POSSESSION.possession_two.position,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("possession niveau supérieur - "+ DEMON.skills.possession_two +"/"+ BUTTON_POSSESSION.possession_two.xp);
=======
text(['P'], ...BUTTON_POSSESSION.POSSESSIONDEUX);
if (mouseInRect(...BUTTON_POSSESSION.POSSESSIONDEUX,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("possession niveau supérieur - "+ DEMON.capacite_possession.possessiondeux +"/"+BUTTON_POSSESSION.npossessiondeux);
>>>>>>> c3a8f15d7d3e29ce500dfdaf6dfeadd065bed0cc
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
circle(...BUTTON_DEFENSE.defense_one.position, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_DEFENSE.defense_one.color);
textAlign(CENTER, CENTER);
textFont("Arial");
textSize(22);
text(['D'], ...BUTTON_DEFENSE.defense_one.position);
if (mouseInRect(...BUTTON_DEFENSE.defense_one.position,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("Défence niveau 1 - "+ DEMON.skills.defense_one +"/"+BUTTON_DEFENSE.defense_one.xp);
}

fill(...COLORS.WHITE_TRANSPARENT);
circle(...BUTTON_DEFENSE.defense_two.position, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_DEFENSE.defense_two.color);
textAlign(CENTER, CENTER);
textSize(22);
text(['D'], ...BUTTON_DEFENSE.defense_two.position);
if (mouseInRect(...BUTTON_DEFENSE.defense_two.position,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("Défence niveau 2 - "+ DEMON.skills.defense_two +"/"+BUTTON_DEFENSE.defense_two.xp);
}



fill(...COLORS.WHITE_TRANSPARENT);
circle(...BUTTON_DEFENSE.resistance_one.position, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_DEFENSE.resistance_one.color);
textAlign(CENTER, CENTER);
textSize(22);
text(['D'], ...BUTTON_DEFENSE.resistance_one.position);
if (mouseInRect(...BUTTON_DEFENSE.resistance_one.position,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("Les zombie sont plus résistant - "+ DEMON.skills.resistance_one +"/"+BUTTON_DEFENSE.resistance_one.xp);
}

fill(...COLORS.WHITE_TRANSPARENT);
circle(...BUTTON_DEFENSE.resistance_two.position, DIAMETER_SKILL_BUTTON);
fill(...BUTTON_DEFENSE.resistance_two.color);
textAlign(CENTER, CENTER);
textSize(22);
text(['D'], ...BUTTON_DEFENSE.resistance_two.position);
if (mouseInRect(...BUTTON_DEFENSE.resistance_two.position,DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
SKILL_SCREEN.drawInformationCompetence("Les zombie sont encore plus résistant - "+ DEMON.skills.resistance_two +"/"+BUTTON_DEFENSE.BUTTON_DEFENSE.resistance_two.xp);
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

drawCharacter: () => {
	image(SKILL_SCREEN.image, 100,400, 180, 200);
},

drawExitButton: () => {
	fill(...COLORS.GREYTRANSPARENT);
  circle(...QUIT_BUTTON, 30);
  fill(...COLORS.RED);
  textAlign(CENTER, CENTER);
  textFont("Arial");
  textSize(22);
  text(['X'], ...QUIT_BUTTON);
},

};
