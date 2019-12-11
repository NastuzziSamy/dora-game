/**
 * Défini le jeu.
 */
var loadKells_SD;

function setup() {
	createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);

	Screens.getScreen().init();
}

function mousePressed() {
	Screens.getScreen().mousePressed();
}

function draw() {
	fill(...COLORS.GREY);
	rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

	Screens.getScreen().draw();
}


function preload() {
	// loadKells_SD = loadFont(KELLS_SD);
}
