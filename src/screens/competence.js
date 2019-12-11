/**
* Défini l'affichage de l'arbre des compétences .
*/
const DIAMETER_COMPETENCE_BUTTON = (BAR_HEIGHT- 10) / 2;

const EXIT_BUTTON = [SCREEN_HEIGHT/2 - 250, SCREEN_WIDTH/2,];
//const GAUCHE =
//const DROITE

const COMPETENCE_SCREEN = {
	name: SCREEN_NAMES.COMPETENCE,

	init: () => {

  },

	exit: () => {

	},

	mousePressed: () => {
		if (mouseInRect(...EXIT_BUTTON, DIAMETER_PAUSE_BUTTON+10, DIAMETER_PAUSE_BUTTON+10, true)) {
			Screens.setScreen(SCREEN_NAMES.GAME);
		//} else if (mouseInRect(...DROITE)) {

		//} else if (mouseInRect(...GAUCHE)) {

		}
	},


	draw: () => {
	COMPETENCE_SCREEN.drawPremier();
	COMPETENCE_SCREEN.drawDroite();
	COMPETENCE_SCREEN.drawGauche();
	COMPETENCE_SCREEN.drawButtonWorld();
	},

	drawPremier: () => {


	},

	drawDroite: () => {

	},

	drawGauche: () => {

	},

	drawButtonWorld: () => {

		fill(...COLORS.GREYTRANSPARENT);
		circle(...EXIT_BUTTON, DIAMETER_COMPETENCE_BUTTON + 10);
		fill(...COLORS.RED);
		textAlign(CENTER, CENTER);
		textSize(22);
		text(['X'], ...EXIT_BUTTON);
	},

};


Screens.addScreen(COMPETENCE_SCREEN);
