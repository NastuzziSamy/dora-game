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
	COMPETENCE: 'competence',
	ACTION: 'action',
}


const [BUTTON_WIDTH, BUTTON_HEIGHT] = [SCREEN_WIDTH / 1.5, 75];
const BUTTON_CENTER_X = (SCREEN_WIDTH - BUTTON_WIDTH) / 2;

const PALIER_EXPERIENCE_DEMON = 800;

const IMAGE_DEMON = ['logo/demon.png'];
const IMAGE_DEMON_ENTIER = ['logo/demon_entier.png'];
const MOVIE_MENU = ['src/screens/movie/fond_menu.mp4']


const MAISON1 = {
	OCCUPANT: 23,
	CROYANT: 10,
}

const MAISON2 = {
	OCCUPANT: 67,
	CROYANT: 40,
}

const MAISON3 = {
	OCCUPANT: 14,
	CROYANT: 60,
}

const MAISON4 = {
	OCCUPANT: 31,
	CROYANT: 20,
}

const MAISON5 = {
	OCCUPANT: 26,
	CROYANT: 10,
}

const MAISON6 = {
	OCCUPANT: 20,
	CROYANT: 10,
}

const MAISON7 = {
	OCCUPANT: 19,
	CROYANT: 5,
}

const MAISON8 = {
	OCCUPANT: 43,
	CROYANT: 25,
}

const MAISON9 = {
	OCCUPANT: 37,
	CROYANT: 15,
}


const COLORS = {
	BLUE: [10, 10, 255],
	GREEN: [10, 255, 10],
	RED: [255, 10, 10],
	RED_ATTACK: [142, 51, 57],
	RED_ATTACK_DARK: [142, 51, 57, 40],
	BLUE_POSSESSION: [29, 116, 150],
	BLUE_POSSESSION_DARK: [29, 116, 150, 40],
	GREEN_SHIEDL: [52, 141, 54],
	GREEN_SHIEDL_DARK: [52, 141, 54,40],
	YELLOW: [255, 204, 100],
	WHITE: [255],
	LIGHT_GREY: [200],
	GREY: [50],
	BLACK: [5],
	BLANC_TRANSPARENT: [255,255,255,30],
	GREYTRANSPARENT: [0.5, 191, 255, 30],
	GREYTRANSPARENT2: [0, 0, 0, 90],
	BEIGE: [191, 170, 143],
};
