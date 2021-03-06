/**
 * Défini l'affichage de l'arbre des compétences .
 */
const DIAMETER_EXIT_BUTTON = 20;

const EXIT_BUTTON = [SCREEN_HEIGHT / 2 - 250, 550];


const SKILL_SCREEN = Object.assign({
	name: SCREEN_NAMES.SKILL,


	init: () => {
		SKILL_SCREEN.image = loadImage(IMAGE_DEMON);
	},

	exit: () => {

	},

	mousePressed: () => {
		button = null;

		if (mouseInRect(...SKILL_BUTTON, DIAMETER_SKILL_BUTTON + 50, DIAMETER_SKILL_BUTTON + 50, true)) {
			Screens.setScreen(SCREEN_NAMES.GAME);
		} else if (mouseInRect(...BUTTON_DEFENSE.defense_one.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			button = BUTTON_DEFENSE.defense_one;
		} else if (mouseInRect(...BUTTON_DEFENSE.defense_two.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			if (BUTTON_DEFENSE.defense_one.xp === BUTTON_DEFENSE.defense_one.max_xp) {
				button = BUTTON_DEFENSE.defense_two;
			}
		} else if (mouseInRect(...BUTTON_DEFENSE.resistance_one.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			button = BUTTON_DEFENSE.resistance_one;
		} else if (mouseInRect(...BUTTON_DEFENSE.resistance_two.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			if (BUTTON_DEFENSE.resistance_one.xp === BUTTON_DEFENSE.resistance_one.max_xp) {
				button = BUTTON_DEFENSE.resistance_two;
			}
		} else if (mouseInRect(...BUTTON_POSSESSION.possession_one.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			button = BUTTON_POSSESSION.possession_one;
		} else if (mouseInRect(...BUTTON_POSSESSION.possession_two.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			if (BUTTON_POSSESSION.possession_one.xp === BUTTON_POSSESSION.possession_one.max_xp) {
				button = BUTTON_POSSESSION.possession_two;
			}
		} else if (mouseInRect(...BUTTON_ATTACK.attack_one.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			button = BUTTON_ATTACK.attack_one;
		} else if (mouseInRect(...BUTTON_ATTACK.attack_two.position, DIAMETER_SKILL_BUTTON, DIAMETER_SKILL_BUTTON, true)) {
			if (BUTTON_ATTACK.attack_two.xp === BUTTON_ATTACK.attack_two.max_xp) {
				button = BUTTON_ATTACK.attack_two;
			}
		}

		if (button && DEMON.xp >= DEMON.xp_step && button.xp < button.max_xp) {
			DEMON.xp -= DEMON.xp_step;
			DEMON[button.power[0]] += button.power[1][button.xp]
			button.xp += 1;
		}
	},


	draw: () => {
		SKILL_SCREEN.drawInterface();
		SKILL_SCREEN.drawBar();
	}

}, GAME_SCREEN_INTERFACE, GAME_SCREEN_BAR_SKILL);

Screens.addScreen(SKILL_SCREEN);