/**
* Défini l'affichage de l'arbre des compétences .
*/
const IMAGE_DEMON = ['logo/demon.png'];
const DIAMETER_COMPETENCE_BUTTON = (BAR_HEIGHT- 10) / 2;

const EXIT_BUTTON = [SCREEN_HEIGHT/2 - 250, SCREEN_WIDTH/2,];
//const GAUCHE =
//const DROITE

const COMPETENCE_SCREEN = Object.assign({
	name: SCREEN_NAMES.COMPETENCE,


	init: () => {
		COMPETENCE_SCREEN.image = loadImage(IMAGE_DEMON);
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
	COMPETENCE_SCREEN.drawInterface();
	COMPETENCE_SCREEN.drawBar();
	}

}, GAME_SCREEN_INTERFACE, GAME_SCREEN_BAR_COMPETENCE);

Screens.addScreen(COMPETENCE_SCREEN);
