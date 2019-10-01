/**
 * Défini le jeu.
 */

function setup() {
	createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
}

function mousePressed() {
	Screens.getScreen().mousePressed();
}

function draw() {
	fill(...COLORS.GREY);
	rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

	Screens.getScreen().draw();
}
