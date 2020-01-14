/**
 * Défini les constantes du jeu.
 */
const KELLS_SD = ['police/Kells_SD.ttf'];

const [SCREEN_WIDTH, SCREEN_HEIGHT] = [1080, 600];
const [SCREEN_CENTER_WIDTH, SCREEN_CENTER_HEIGHT] = [SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2];

const [BAR_WIDTH, BAR_HEIGHT] = [1080, 50];
const [BAR_CENTER_WIDTH, BAR_CENTER_HEIGHT] = [BAR_WIDTH / 2, BAR_HEIGHT / 1.85];
const BAR_TEXT_SIZE = BAR_HEIGHT / 2;

const SCREEN_NAMES = {
	MENU: 'menu',
	GAME: 'game',
	SKILL: 'skill',
	ACTION: 'action',
}

const ACTION_STEP = 5;

const [BUTTON_WIDTH, BUTTON_HEIGHT] = [SCREEN_WIDTH / 1.5, 75];
const BUTTON_CENTER_X = (SCREEN_WIDTH - BUTTON_WIDTH) / 2;

const PALIER_EXPERIENCE_DEMON = 800;

const IMAGE_DEMON = ['logo/demon.png'];
const IMAGE_DEMON_ENTIER = ['logo/demon_entier.png'];
const MOVIE_MENU = ['src/screens/movie/fond_menu.mp4'];

const COLORS = {
	BLUE: [10, 10, 255],
	GREEN: [10, 255, 10],
	RED: [255, 10, 10],
	RED_ATTACK: [142, 51, 57],
	RED_ATTACK_DARK: [142, 51, 57, 40],
	BLUE_POSSESSION: [29, 116, 150],
	BLUE_POSSESSION_DARK: [29, 116, 150, 40],
	GREEN_SHIELD: [52, 141, 54],
	GREEN_SHIELD_DARK: [52, 141, 54,40],
	YELLOW: [255, 204, 100],
	WHITE: [255, 255, 255],
	LIGHT_GREY: [200],
	GREY: [50],
	BLACK: [5, 5, 5],
	WHITE_TRANSPARENT: [255,255,255,30],
	GREYTRANSPARENT: [0.5, 191, 255, 30],
	GREYTRANSPARENT2: [0, 0, 0, 90],
	BEIGE: [191, 170, 143],
};

const BUTTON_ATTACK = {
	attack_one: {
		position: [120, 405],
		color: COLORS.RED_ATTACK_DARK,
		xp: 0,
		max_xp: 4,
		power: ['attack', [0.25, 0.5, 1, 1.5]],
	},

	attack_two: {
		position: [120, 325],
		color: COLORS.RED_ATTACK_DARK,
		xp: 0,
		max_xp: 2,
		power: ['attack', [0.5, 1.25]],
	},
};

const BUTTON_POSSESSION = {
	possession_one: {
		position: [480, 275],
		color: COLORS.BLUE_POSSESSION_DARK,
		xp: 0,
		max_xp: 4,
		power: ['possession', [0.25, 0.5, 1, 1.5]],
	},

	possession_two: {
		position: [480, 205],
		color: COLORS.BLUE_POSSESSION_DARK,
		xp: 0,
		max_xp: 2,
		power: ['possession', [0.5, 1.25]],
	},
};

const BUTTON_DEFENSE = {
	defense_one: {
		position: [840, 405],
		color: COLORS.GREEN_SHIELD_DARK,
		xp: 0,
		max_xp: 4,
		power: ['defense', [0.25, 0.5, 1, 1.5]],
	},

	defense_two: {
		position: [840, 325],
		color: COLORS.GREEN_SHIELD_DARK,
		xp: 0,
		max_xp: 2,
		power: ['defense', [0.5, 1.25]],
	},

	resistance_one: {
		position: [1020, 195],
		color: COLORS.GREEN_SHIELD_DARK,
		xp: 0,
		max_xp: 2,
		power: ['search', [2.5, 5, 10, 15]],
	},

	resistance_two: {
		position: [1020, 115],
		color: COLORS.GREEN_SHIELD_DARK,
		xp: 0,
		max_xp: 1,
		power: ['search', [5, 12.5]],
	},
};