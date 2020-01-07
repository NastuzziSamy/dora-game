/**
* Défini l'affichage de l'arbre des compétences .
*/
const DIAMETER_EXIT_BUTTON = 20;

const EXIT_BUTTON = [SCREEN_HEIGHT/2 - 250, 550,];
//const GAUCHE =
//const DROITE

const SKILL_SCREEN = Object.assign({
	name: SCREEN_NAMES.SKILL,


	init: () => {
		SKILL_SCREEN.image = loadImage(IMAGE_DEMON);
  },

	exit: () => {

	},

	mousePressed: () => {
		if (mouseInRect(...EXIT_BUTTON, DIAMETER_PAUSE_BUTTON+10, DIAMETER_PAUSE_BUTTON+10, true)) {
			Screens.setScreen(SCREEN_NAMES.GAME);
			}
		else if (mouseInRect(...BUTTON_DEFENSE.DEFENSEUN, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 2 && DEMON.capacite_defense.defenseun<BUTTON_DEFENSE.ndefenseun) {
			BUTTON_DEFENSE.defenseun=COLORS.GREEN_SHIELD;
			DEMON.capacite_defense.defenseun+=1;
			DEMON.xp-=2;
			DEMON.defense+=2;
		}
		else if (mouseInRect(...BUTTON_DEFENSE.DEFENSEDEUX, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 3 && DEMON.capacite_defense.defensedeux<BUTTON_DEFENSE.ndefensedeux && DEMON.capacite_defense.defenseun>=2) {
			BUTTON_DEFENSE.defensedeux=COLORS.GREEN_SHIELD;
			DEMON.capacite_defense.defensedeux+=1;
			DEMON.xp-=3;
			DEMON.defense+=3;
		}
		else if (mouseInRect(...BUTTON_DEFENSE.ZOMBIRESISTANCEUN, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 5 && DEMON.capacite_defense.zombiresistanceun<BUTTON_DEFENSE.nzombiresistanceun ) {
			BUTTON_DEFENSE.zombiresistanceun=COLORS.GREEN_SHIELD;
			DEMON.capacite_defense.zombiresistanceun+=1;
			DEMON.xp-=5;
			DEMON.defense+=5;
		}
		else if (mouseInRect(...BUTTON_DEFENSE.ZOMBIRESISTANCEDEUX, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 6 && DEMON.capacite_defense.zombiresistancedeux<BUTTON_DEFENSE.nzombiresistancedeux && DEMON.capacite_defense.zombiresistanceun>=1) {
			BUTTON_DEFENSE.zombiresistancedeux=COLORS.GREEN_SHIELD;
			DEMON.capacite_defense.zombiresistancedeux+=1;
			DEMON.xp-=6;
			DEMON.defense+=6;
		}
		else if (mouseInRect(...BUTTON_ATTACK.ATTACKUN, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 2 && DEMON.capacite_attack.attackun<BUTTON_ATTACK.nattackun) {
			BUTTON_ATTACK.attackun=COLORS.RED_ATTACK;
			DEMON.capacite_attack.attackun+=1;
			DEMON.xp-=2;
			DEMON.attack+=2;
		}
		else if (mouseInRect(...BUTTON_ATTACK.ATTACKDEUX, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 3 && DEMON.capacite_attack.attackdeux<BUTTON_ATTACK.nattackdeux && DEMON.capacite_attack.attackun>=2) {
			BUTTON_ATTACK.attackdeux=COLORS.RED_ATTACK;
			DEMON.capacite_attack.attackdeux+=1;
			DEMON.xp-=3;
			DEMON.attack+=3;
		}
		else if (mouseInRect(...BUTTON_POSSESSION.POSSESSIONUN, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 1 &&  DEMON.capacite_possession.possessionun<BUTTON_POSSESSION.npossessionun) {
			BUTTON_POSSESSION.possessionun=COLORS.BLUE_POSSESSION;
			DEMON.capacite_possession.possessionun+=1;
			DEMON.xp-=1;
			DEMON.possession+=1;
		}
		else if (mouseInRect(...BUTTON_POSSESSION.POSSESSIONDEUX, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 2 && DEMON.capacite_possession.possessiondeux<BUTTON_POSSESSION.npossessiondeux && DEMON.capacite_possession.possessionun>=2) {
			BUTTON_POSSESSION.possessiondeux=COLORS.BLUE_POSSESSION;
			DEMON.capacite_possession.possessiondeux+=1;
			DEMON.xp-=2;
			DEMON.possession+=2;
		}
	},


	draw: () => {
	SKILL_SCREEN.drawInterface();
	SKILL_SCREEN.drawBar();
	}

}, GAME_SCREEN_INTERFACE, GAME_SCREEN_BAR_SKILL);

Screens.addScreen(SKILL_SCREEN);
