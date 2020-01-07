const ROOT_ROAD = [15, BAR_HEIGHT + 200, SCREEN_WIDTH - 30, 40];
const ROAD_BORDER = 4;
const SKILL_BUTTON = [SCREEN_HEIGHT/2 - 250, SCREEN_WIDTH/2,];

const GAME_SCREEN_WORLD = {
	drawWorld: () => {
		GAME_SCREEN.drawRoad();
		GAME_SCREEN.drawPersonnage();
	},

	drawPersonnage: () =>{
		if (DEMON.in){
			const timer = Math.ceil(DEMON.timer);
			let xp = timer - DEMON.xp * DEMON.xp_step;
			if (xp > DEMON.xp_step){
				DEMON.xp++;
			}

			if (xp > DEMON.xp_step || xp < 100){
				GAME_SCREEN.drawInformation("Vous venez de gagner un point d'expérience ");
			}
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
		for (let i = 0; i < HOUSES.length; i++) {
			let house = HOUSES[i];

			fill(...COLORS.BEIGE);
			rect(...house.position);
		}
	},

	drawInfo: () => {
		if (mouseInRect(...HOUSE1)){
			fill(...COLORS.GREYTRANSPARENT2)
			rect(400, BAR_HEIGHT + 60, 250,150)
			fill(...COLORS.WHITE);
			textSize(20);
			text("Nombre d'occupant :" + MAISON1.PEOPLE, 640 , BAR_HEIGHT + 60+50);
			fill(...COLORS.WHITE);
			textSize(20);
			text("Croyant :" + MAISON1.PROTECTION + "%",640,BAR_HEIGHT + 60+ 100);

		}

		if (mouseInRect(...HOUSE2)){
			fill(...COLORS.GREYTRANSPARENT2)
			rect(400, BAR_HEIGHT + 60, 250,150)
			fill(...COLORS.WHITE);
			textSize(20);
			text("Nombre d'occupant :" + MAISON2.PEOPLE, 640 , BAR_HEIGHT + 60+50);
			fill(...COLORS.WHITE);
			textSize(20);
			text("Croyant :" + MAISON2.PROTECTION + "%",640,BAR_HEIGHT + 60+ 100);

		}

		if (mouseInRect(...HOUSE3)){
			fill(...COLORS.GREYTRANSPARENT2)
			rect(400, BAR_HEIGHT + 60, 250,150)
			fill(...COLORS.WHITE);
			textSize(20);
			text("Nombre d'occupant :" + MAISON3.PEOPLE, 640 , BAR_HEIGHT + 60+50);
			fill(...COLORS.WHITE);
			textSize(20);
			text("Croyant :" + MAISON3.PROTECTION + "%",640,BAR_HEIGHT + 60+ 100);

		}

		if (mouseInRect(...HOUSE4)){
			fill(...COLORS.GREYTRANSPARENT2)
			rect(400, BAR_HEIGHT + 60, 250,150)
			fill(...COLORS.WHITE);
			textSize(20);
			text("Nombre d'occupant :" + MAISON4.PEOPLE, 640 , BAR_HEIGHT + 60+50);
			fill(...COLORS.WHITE);
			textSize(20);
			text("Croyant :" + MAISON4.PROTECTION + "%",640,BAR_HEIGHT + 60+ 100);

		}

		if (mouseInRect(...HOUSE5)){
			fill(...COLORS.GREYTRANSPARENT2)
			rect(400, BAR_HEIGHT + 60, 250,150)
			fill(...COLORS.WHITE);
			textSize(20);
			text("Nombre d'occupant :" + MAISON5.PEOPLE, 640 , BAR_HEIGHT + 60+50);
			fill(...COLORS.WHITE);
			textSize(20);
			text("Croyant :" + MAISON5.PROTECTION + "%",640,BAR_HEIGHT + 60+ 100);

		}

		if (mouseInRect(...HOUSE6)){
			fill(...COLORS.GREYTRANSPARENT2)
			rect(400, BAR_HEIGHT + 60, 250,150)
			fill(...COLORS.WHITE);
			textSize(20);
			text("Nombre d'occupant :" + MAISON6.PEOPLE, 640 , BAR_HEIGHT + 60+50);
			fill(...COLORS.WHITE);
			textSize(20);
			text("Croyant :" + MAISON6.PROTECTION + "%",640,BAR_HEIGHT + 60+ 100);

		}

		if (mouseInRect(...HOUSE7)){
			fill(...COLORS.GREYTRANSPARENT2)
			rect(400, BAR_HEIGHT + 60, 250,150)
			fill(...COLORS.WHITE);
			textSize(20);
			text("Nombre d'occupant :" + MAISON7.PEOPLE, 640 , BAR_HEIGHT + 60+50);
			fill(...COLORS.WHITE);
			textSize(20);
			text("Croyant :" + MAISON7.PROTECTION + "%",640,BAR_HEIGHT + 60+ 100);

		}

		if (mouseInRect(...HOUSE8)){
			fill(...COLORS.GREYTRANSPARENT2)
			rect(400, BAR_HEIGHT + 60, 250,150)
			fill(...COLORS.WHITE);
			textSize(20);
			text("Nombre d'occupant :" + MAISON8.PEOPLE, 640 , BAR_HEIGHT + 60+50);
			fill(...COLORS.WHITE);
			textSize(20);
			text("Croyant :" + MAISON8.PROTECTION + "%",640,BAR_HEIGHT + 60+ 100);

		}

		if (mouseInRect(...HOUSE9)){
			fill(...COLORS.GREYTRANSPARENT2)
			rect(400, BAR_HEIGHT + 60, 250,150)
			fill(...COLORS.WHITE);
			textSize(20);
			text("Nombre d'occupant :" + MAISON9.PEOPLE, 640 , BAR_HEIGHT + 60+50);
			fill(...COLORS.WHITE);
			textSize(20);
			text("Croyant :" + MAISON9.PROTECTION + "%",640,BAR_HEIGHT + 60+ 100);

		}
	},



	drawButtonCompetence: () => {
		fill(...COLORS.GREYTRANSPARENT);
		circle(...SKILL_BUTTON, DIAMETER_PAUSE_BUTTON + 10);
		fill(...COLORS.YELLOW);
		textAlign(CENTER, CENTER);
		textSize(22);
		text(['C'], ...SKILL_BUTTON);
	},


};
