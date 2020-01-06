
const GAME_SCREEN_BAR_COMPETENCE = {
	drawBar: () => {
  	COMPETENCE_SCREEN.drawButtonExit();
		COMPETENCE_SCREEN.drawDemon();
    COMPETENCE_SCREEN.drawBarsCompetence();
},

drawButtonExit: () => {
  fill(...COLORS.BLANC_TRANSPARENT);
  circle(...EXIT_BUTTON, DIAMETER_COMPETENCE_BUTTON + 10);
  fill(...COLORS.RED);
  textAlign(CENTER, CENTER);
  textSize(22);
  text(['X'], ...EXIT_BUTTON);
},

drawDemon: () => {
	image(COMPETENCE_SCREEN.image, 150, 400, 180, 200);
	fill(...COLORS.WHITE);
	textSize(20);
	text("Vos point de compétence :" + DEMON.experience , 400 , 560);

},

drawBarsCompetence: () => {

}

};
