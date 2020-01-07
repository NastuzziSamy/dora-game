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
		else if (mouseInRect(...BUTTON_DEFENSE.defense_one.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 2 && DEMON.skills.defense_one<BUTTON_DEFENSE.defense_one.xp) {
			BUTTON_DEFENSE.defense_one.color=COLORS.GREEN_SHIELD;
			DEMON.skills.defense_one+=1;
			DEMON.xp-=2;
			DEMON.defense+=2;
		}
		else if (mouseInRect(...BUTTON_DEFENSE.defense_two.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 3 && DEMON.DEMON.skills.defense_two<BUTTON_DEFENSE.defense_two.xp && DEMON.skills.defense_one>=2) {
			BUTTON_DEFENSE.defense_two.color=COLORS.GREEN_SHIELD;
			DEMON.skills.defense_two+=1;
			DEMON.xp-=3;
			DEMON.defense+=3;
		}
		else if (mouseInRect(...BUTTON_DEFENSE.resistance_one.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 5 && DEMON.skills.resistance_one<BUTTON_DEFENSE.resistance_one.xp ) {
			BUTTON_DEFENSE.resistance_one.color=COLORS.GREEN_SHIELD;
			DEMON.skills.resistance_one+=1;
			DEMON.xp-=5;
			DEMON.defense+=5;
		}
		else if (mouseInRect(...BUTTON_DEFENSE.resistance_two.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 6 && DEMON.skills.resistance_two<BUTTON_DEFENSE.resistance_two.xp && DEMON.DEMON.skills.resistance_one>=1) {
			BUTTON_DEFENSE.resistance_one.color=COLORS.GREEN_SHIELD;
			DEMON.skills.resistance_two+=1;
			DEMON.xp-=6;
			DEMON.defense+=6;
		}
		else if (mouseInRect(...BUTTON_ATTACK.attack_one.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 2 && DEMON.skills.attack_one<BUTTON_ATTACK.attack_one.xp) {
			BUTTON_ATTACK.attack_one.color=COLORS.RED_ATTACK;
			DEMON.skills.attack_one+=1;
			DEMON.xp-=2;
			DEMON.attack+=2;
		}
		else if (mouseInRect(...BUTTON_ATTACK.attack_two.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 3 && DEMON.skills.attack_two<BUTTON_ATTACK.attack_two.xp && DEMON.skills.attack_one>=2) {
			BUTTON_ATTACK.attack_two.color=COLORS.RED_ATTACK;
			DEMON.skills.attack_two+=1;
			DEMON.xp-=3;
			DEMON.attack+=3;
		}
		else if (mouseInRect(...BUTTON_POSSESSION.possession_one.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 1 &&  DEMON.skills.possession_one<BUTTON_POSSESSION.possession_one.xp) {
			BUTTON_POSSESSION.possession_one.color=COLORS.BLUE_POSSESSION;
			DEMON.skills.possession_one+=1;
			DEMON.xp-=1;
			DEMON.possession+=1;
		}
		else if (mouseInRect(...BUTTON_POSSESSION.possession_two.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true) && DEMON.xp >= 2 && DEMON.skills.possession_two<BUTTON_POSSESSION.possession_two.xp && DEMON.skills.possession_one>=2) {
			BUTTON_POSSESSION.possession_two.color=COLORS.BLUE_POSSESSION;
			DEMON.skills.possession_two+=1;
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
