/**
* Défini l'affichage de l'arbre des compétences .
*/

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
		else if (mouseInRect(...BUTTON_DEFENSE.DEFENSEUN, DIAMETER_COMPETENCE_BUTTON, DIAMETER_COMPETENCE_BUTTON, true) && DEMON.experience >= 2 && DEMON.capacite_defense.defenseun<BUTTON_DEFENSE.ndefenseun) {
			BUTTON_DEFENSE.defenseun=COLORS.GREEN_SHIEDL;
			DEMON.capacite_defense.defenseun+=1;
			DEMON.experience-=2;
			DEMON.defense+=2;
		}
		else if (mouseInRect(...BUTTON_DEFENSE.DEFENSEDEUX, DIAMETER_COMPETENCE_BUTTON, DIAMETER_COMPETENCE_BUTTON, true) && DEMON.experience >= 3 && DEMON.capacite_defense.defensedeux<BUTTON_DEFENSE.ndefensedeux && DEMON.capacite_defense.defenseun>=2) {
			BUTTON_DEFENSE.defensedeux=COLORS.GREEN_SHIEDL;
			DEMON.capacite_defense.defensedeux+=1;
			DEMON.experience-=3;
			DEMON.defense+=3;
		}
		else if (mouseInRect(...BUTTON_DEFENSE.ZOMBIRESISTANCEUN, DIAMETER_COMPETENCE_BUTTON, DIAMETER_COMPETENCE_BUTTON, true) && DEMON.experience >= 5 && DEMON.capacite_defense.zombiresistanceun<BUTTON_DEFENSE.nzombiresistanceun ) {
			BUTTON_DEFENSE.zombiresistanceun=COLORS.GREEN_SHIEDL;
			DEMON.capacite_defense.zombiresistanceun+=1;
			DEMON.experience-=5;
			DEMON.defense+=5;
		}
		else if (mouseInRect(...BUTTON_DEFENSE.ZOMBIRESISTANCEDEUX, DIAMETER_COMPETENCE_BUTTON, DIAMETER_COMPETENCE_BUTTON, true) && DEMON.experience >= 6 && DEMON.capacite_defense.zombiresistancedeux<BUTTON_DEFENSE.nzombiresistancedeux && DEMON.capacite_defense.zombiresistanceun>=1) {
			BUTTON_DEFENSE.zombiresistancedeux=COLORS.GREEN_SHIEDL;
			DEMON.capacite_defense.zombiresistancedeux+=1;
			DEMON.experience-=6;
			DEMON.defense+=6;
		}
		else if (mouseInRect(...BUTTON_ATTAQUE.ATTAQUEUN, DIAMETER_COMPETENCE_BUTTON, DIAMETER_COMPETENCE_BUTTON, true) && DEMON.experience >= 2 && DEMON.capacite_attaque.attaqueun<BUTTON_ATTAQUE.nattaqueun) {
			BUTTON_ATTAQUE.attaqueun=COLORS.RED_ATTACK;
			DEMON.capacite_attaque.attaqueun+=1;
			DEMON.experience-=2;
			DEMON.attaque+=2;
		}
		else if (mouseInRect(...BUTTON_ATTAQUE.ATTAQUEDEUX, DIAMETER_COMPETENCE_BUTTON, DIAMETER_COMPETENCE_BUTTON, true) && DEMON.experience >= 3 && DEMON.capacite_attaque.attaquedeux<BUTTON_ATTAQUE.nattaquedeux && DEMON.capacite_attaque.attaqueun>=2) {
			BUTTON_ATTAQUE.attaquedeux=COLORS.RED_ATTACK;
			DEMON.capacite_attaque.attaquedeux+=1;
			DEMON.experience-=3;
			DEMON.attaque+=3;
		}
		else if (mouseInRect(...BUTTON_POSSESSION.POSSESSIONUN, DIAMETER_COMPETENCE_BUTTON, DIAMETER_COMPETENCE_BUTTON, true) && DEMON.experience >= 1 &&  DEMON.capacite_possession.possessionun<BUTTON_POSSESSION.npossessionun) {
			BUTTON_POSSESSION.possessionun=COLORS.BLUE_POSSESSION;
			DEMON.capacite_possession.possessionun+=1;
			DEMON.experience-=1;
			DEMON.possession+=1;
		}
		else if (mouseInRect(...BUTTON_POSSESSION.POSSESSIONDEUX, DIAMETER_COMPETENCE_BUTTON, DIAMETER_COMPETENCE_BUTTON, true) && DEMON.experience >= 2 && DEMON.capacite_possession.possessiondeux<BUTTON_POSSESSION.npossessiondeux && DEMON.capacite_possession.possessionun>=2) {
			BUTTON_POSSESSION.possessiondeux=COLORS.BLUE_POSSESSION;
			DEMON.capacite_possession.possessiondeux+=1;
			DEMON.experience-=2;
			DEMON.possession+=2;
		}
	},


	draw: () => {
	COMPETENCE_SCREEN.drawInterface();
	COMPETENCE_SCREEN.drawBar();
	}

}, GAME_SCREEN_INTERFACE, GAME_SCREEN_BAR_COMPETENCE);

Screens.addScreen(COMPETENCE_SCREEN);
