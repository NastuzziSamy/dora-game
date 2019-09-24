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
	fill(50);
	rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

	Screens.getScreen().draw();
}
