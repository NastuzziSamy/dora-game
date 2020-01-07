/**
* Défini l'affichage de l'arbre des compétences .
*/
const IMAGE_DEMON = ['logo/demon.png'];
const DIAMETER_EXIT_BUTTON = 20;

const EXIT_BUTTON = [SCREEN_HEIGHT/2 - 250, 550,];
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
			}
		else if (mouseInRect(...BUTTON_DEFENSE.DEFENSEUN, DIAMETER_COMPETENCE_BUTTON, DIAMETER_COMPETENCE_BUTTON, true) && DEMON.experience > 2) {
			BUTTON_DEFENSE.defenseun=COLORS.GREEN_SHIEDL;
			DEMON.experience-=2;
			DEMON.defense+=2;
		}
		else if (mouseInRect(...BUTTON_ATTAQUE.ATTAQUEUN, DIAMETER_COMPETENCE_BUTTON, DIAMETER_COMPETENCE_BUTTON, true) && DEMON.experience > 2) {
			BUTTON_ATTAQUE.attaqueun=COLORS.RED_ATTACK;
			DEMON.experience-=2;
			DEMON.attaque+=2;
		}
		else if (mouseInRect(...BUTTON_POSSESSION.POSSESSIONUN, DIAMETER_COMPETENCE_BUTTON, DIAMETER_COMPETENCE_BUTTON, true) && DEMON.experience > 1) {
			BUTTON_POSSESSION.possessionun=COLORS.BLUE_POSSESSION;
			DEMON.experience-=2;
			DEMON.possesion+=1;
		}
	},


	draw: () => {
	COMPETENCE_SCREEN.drawInterface();
	COMPETENCE_SCREEN.drawBar();
	}

}, GAME_SCREEN_INTERFACE, GAME_SCREEN_BAR_COMPETENCE);

Screens.addScreen(COMPETENCE_SCREEN);
