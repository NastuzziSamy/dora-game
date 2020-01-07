const ROOT_ROAD = [15, BAR_HEIGHT + 200, SCREEN_WIDTH - 30, 40];
const ROAD_BORDER = 4;
const COMPETENCE_BUTTON = [SCREEN_HEIGHT/2 - 250, SCREEN_WIDTH/2,];

const HOUSE1 = [15, BAR_HEIGHT + 15, 200, 175];
const HOUSE2 = [275, BAR_HEIGHT + 15, 215, 175];
const HOUSE3 = [550, BAR_HEIGHT + 15, 175, 100];
const HOUSE4 = [550, BAR_HEIGHT + 15 + 105, 175, 70];
const HOUSE5 = [730, BAR_HEIGHT + 15, 110, 175];
const HOUSE6 = [900, BAR_HEIGHT + 15, 165, 175];
const HOUSE7 = [625, BAR_HEIGHT + 250,390, 285];
const HOUSE8 = [225, BAR_HEIGHT + 250, 340, 285];
const HOUSE9 = [15, BAR_HEIGHT + 250, 150, 285];


const GAME_SCREEN_WORLD = {
	drawWorld: () => {
		GAME_SCREEN.drawRoad();
		GAME_SCREEN.drawPersonnage();
},


	drawPersonnage: () =>{
		if (DEMON.in){
			const timer = Math.ceil(DEMON.timer);
			let xp=timer - DEMON.experience*PALIER_EXPERIENCE_DEMON;
			if (xp>PALIER_EXPERIENCE_DEMON){
				DEMON.experience +=1;
			}
			if (xp>PALIER_EXPERIENCE_DEMON || xp<70){
				GAME_SCREEN.drawInformation("Vous venez de gagner un point d'experience ");
			}
			if (DEMON.possesion>0)
				let 
		}
	},



	drawInformation: (texte) => {
			stroke(...COLORS.GREYTRANSPARENT2);
			fill(...COLORS.WHITE);
			textAlign(CENTER);
			textSize(26);
			text(texte, 560 , 110);
	},


	drawRoad: () => {
		stroke(...COLORS.BLACK);
		strokeWeight(4);
		fill(...COLORS.WHITE);
		rect(...ROOT_ROAD);

		rect(225, BAR_HEIGHT + 15, 40, ROOT_ROAD[1] - (BAR_HEIGHT + 15) + 20);
		rect(500, BAR_HEIGHT + 15, 40, ROOT_ROAD[1] - (BAR_HEIGHT + 15) + 20);
		rect(850, BAR_HEIGHT + 15, 40, ROOT_ROAD[1] - (BAR_HEIGHT + 15) + 20);

		rect(175, ROOT_ROAD[1] + 25, 40, SCREEN_HEIGHT - (ROOT_ROAD[1] + 40));
		rect(575, ROOT_ROAD[1] + 25, 40, SCREEN_HEIGHT - (ROOT_ROAD[1] + 40));
		rect(SCREEN_WIDTH - 15 - 40, ROOT_ROAD[1] + 25, 40, SCREEN_HEIGHT - (ROOT_ROAD[1] + 40));
		noStroke();
		rect(ROOT_ROAD[0] + (ROAD_BORDER / 2), ROOT_ROAD[1] + (ROAD_BORDER / 2), ROOT_ROAD[2] - ROAD_BORDER, ROOT_ROAD[3] - ROAD_BORDER);

		noStroke();

		GAME_SCREEN_WORLD.drawHouses();
		GAME_SCREEN_WORLD.drawInfo();
		GAME_SCREEN_WORLD.drawButtonCompetence();
	},

	drawHouses: () => {

		fill(...VARHOUSE1.couleurs);
		rect(...HOUSE1);

		fill(...VARHOUSE2.couleurs);
		rect(...HOUSE2);

		fill(...VARHOUSE3.couleurs);
		rect(...HOUSE3);

		fill(...VARHOUSE4.couleurs);
		rect(...HOUSE4);

		fill(...VARHOUSE5.couleurs);
		rect(...HOUSE5);

		fill(...VARHOUSE6.couleurs);
		rect(...HOUSE6);

		fill(...VARHOUSE7.couleurs);
		rect(...HOUSE7);

		fill(...VARHOUSE8.couleurs);
		rect(...HOUSE8);

		fill(...VARHOUSE9.couleurs);
		rect(...HOUSE9);/**/

	},

	drawInfo: () => {

			if (mouseInRect(...HOUSE1)){
				fill(...COLORS.GREYTRANSPARENT2)
				rect(400, BAR_HEIGHT + 60, 250,150)
				fill(...COLORS.WHITE);
				textSize(20);
				text("Nombre d'occupant :" + MAISON1.OCCUPANT, 640 , BAR_HEIGHT + 60+50);
				fill(...COLORS.WHITE);
				textSize(20);
				text("Croyant :" + MAISON1.CROYANT + "%",640,BAR_HEIGHT + 60+ 100);

			}

			if (mouseInRect(...HOUSE2)){
				fill(...COLORS.GREYTRANSPARENT2)
				rect(400, BAR_HEIGHT + 60, 250,150)
				fill(...COLORS.WHITE);
				textSize(20);
				text("Nombre d'occupant :" + MAISON2.OCCUPANT, 640 , BAR_HEIGHT + 60+50);
				fill(...COLORS.WHITE);
				textSize(20);
				text("Croyant :" + MAISON2.CROYANT + "%",640,BAR_HEIGHT + 60+ 100);

			}

			if (mouseInRect(...HOUSE3)){
				fill(...COLORS.GREYTRANSPARENT2)
				rect(400, BAR_HEIGHT + 60, 250,150)
				fill(...COLORS.WHITE);
				textSize(20);
				text("Nombre d'occupant :" + MAISON3.OCCUPANT, 640 , BAR_HEIGHT + 60+50);
				fill(...COLORS.WHITE);
				textSize(20);
				text("Croyant :" + MAISON3.CROYANT + "%",640,BAR_HEIGHT + 60+ 100);

			}

			if (mouseInRect(...HOUSE4)){
				fill(...COLORS.GREYTRANSPARENT2)
				rect(400, BAR_HEIGHT + 60, 250,150)
				fill(...COLORS.WHITE);
				textSize(20);
				text("Nombre d'occupant :" + MAISON4.OCCUPANT, 640 , BAR_HEIGHT + 60+50);
				fill(...COLORS.WHITE);
				textSize(20);
				text("Croyant :" + MAISON4.CROYANT + "%",640,BAR_HEIGHT + 60+ 100);

			}

			if (mouseInRect(...HOUSE5)){
				fill(...COLORS.GREYTRANSPARENT2)
				rect(400, BAR_HEIGHT + 60, 250,150)
				fill(...COLORS.WHITE);
				textSize(20);
				text("Nombre d'occupant :" + MAISON5.OCCUPANT, 640 , BAR_HEIGHT + 60+50);
				fill(...COLORS.WHITE);
				textSize(20);
				text("Croyant :" + MAISON5.CROYANT + "%",640,BAR_HEIGHT + 60+ 100);

			}

			if (mouseInRect(...HOUSE6)){
				fill(...COLORS.GREYTRANSPARENT2)
				rect(400, BAR_HEIGHT + 60, 250,150)
				fill(...COLORS.WHITE);
				textSize(20);
				text("Nombre d'occupant :" + MAISON6.OCCUPANT, 640 , BAR_HEIGHT + 60+50);
				fill(...COLORS.WHITE);
				textSize(20);
				text("Croyant :" + MAISON6.CROYANT + "%",640,BAR_HEIGHT + 60+ 100);

			}

			if (mouseInRect(...HOUSE7)){
				fill(...COLORS.GREYTRANSPARENT2)
				rect(400, BAR_HEIGHT + 60, 250,150)
				fill(...COLORS.WHITE);
				textSize(20);
				text("Nombre d'occupant :" + MAISON7.OCCUPANT, 640 , BAR_HEIGHT + 60+50);
				fill(...COLORS.WHITE);
				textSize(20);
				text("Croyant :" + MAISON7.CROYANT + "%",640,BAR_HEIGHT + 60+ 100);

			}

			if (mouseInRect(...HOUSE8)){
				fill(...COLORS.GREYTRANSPARENT2)
				rect(400, BAR_HEIGHT + 60, 250,150)
				fill(...COLORS.WHITE);
				textSize(20);
				text("Nombre d'occupant :" + MAISON8.OCCUPANT, 640 , BAR_HEIGHT + 60+50);
				fill(...COLORS.WHITE);
				textSize(20);
				text("Croyant :" + MAISON8.CROYANT + "%",640,BAR_HEIGHT + 60+ 100);

			}

			if (mouseInRect(...HOUSE9)){
				fill(...COLORS.GREYTRANSPARENT2)
				rect(400, BAR_HEIGHT + 60, 250,150)
				fill(...COLORS.WHITE);
				textSize(20);
				text("Nombre d'occupant :" + MAISON9.OCCUPANT, 640 , BAR_HEIGHT + 60+50);
				fill(...COLORS.WHITE);
				textSize(20);
				text("Croyant :" + MAISON9.CROYANT + "%",640,BAR_HEIGHT + 60+ 100);

			}
	},



	drawButtonCompetence: () => {
		fill(...COLORS.GREYTRANSPARENT);
		circle(...COMPETENCE_BUTTON, DIAMETER_PAUSE_BUTTON + 10);
		fill(...COLORS.YELLOW);
		textAlign(CENTER, CENTER);
		textSize(22);
		text(['C'], ...COMPETENCE_BUTTON);
	},


};
