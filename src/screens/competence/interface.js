const CANVAS_ATTAQUE = [0,0,360,450];
const CANVAS_POSSESION = [360,0,360,450];
const CANVAS_DEFENSE = [720,0,360,450];

const GAME_SCREEN_INTERFACE = {
	drawInterface: () => {
		COMPETENCE_SCREEN.drawAttaque();
		COMPETENCE_SCREEN.drawPossesion();
		COMPETENCE_SCREEN.drawDefense();
},

	drawAttaque: () => {


		if (mouseInRect(...CANVAS_ATTAQUE)){
			fill(...COLORS.BLANC_TRANSPARENT);
			rect(...CANVAS_ATTAQUE);
		}
	},

	drawPossesion: () => {

		if (mouseInRect(...CANVAS_POSSESION)){
			fill(...COLORS.BLANC_TRANSPARENT);
			rect(...CANVAS_POSSESION);
		}
	},

	drawDefense: () => {

		if (mouseInRect(...CANVAS_DEFENSE)){
			fill(...COLORS.BLANC_TRANSPARENT);
			rect(...CANVAS_DEFENSE);
		}
	},


};
