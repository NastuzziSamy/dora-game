const ROOT_ROAD = [15, BAR_HEIGHT + 200, SCREEN_WIDTH - 30, 40];
const ROAD_BORDER = 4;
const SKILL_BUTTON = [SCREEN_HEIGHT/2 - 250, SCREEN_WIDTH/2,];

const GAME_SCREEN_WORLD = {
	mousePressed: () => {
		if (mouseInRect(...PAUSE_BUTTON, DIAMETER_PAUSE_BUTTON, DIAMETER_PAUSE_BUTTON, true)) {
			GAME_SCREEN.togglePause();
		} else if (mouseInRect(...SKILL_BUTTON, DIAMETER_SKILL_BUTTON,DIAMETER_SKILL_BUTTON,true)){
			Screens.setScreen(SCREEN_NAMES.SKILL);
		}else if (mouseInRect(...QUICK_BUTTON, DIAMETER_PAUSE_BUTTON, DIAMETER_PAUSE_BUTTON, true)) {
			GAME_SCREEN.toggleSpeed();
		} else {
			for (let i = 0; i < HOUSES.length; i++) {
				let house = HOUSES[i];

				if (mouseInRect(...house.position)) {
					ACTION_SCREEN.current_house = house;

					Screens.setScreen(SCREEN_NAMES.ACTION);

					break;
				}
			}
		}
	},

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
			let total = house.alive + house.infected + house.dead;
			let ratio_alive = house.alive / total;
			let ratio_infected = house.infected / total;
			let ratio_dead = house.dead / total;

			let color = [
				((COLORS.BEIGE[0] * ratio_alive) + (COLORS.RED[0] * ratio_infected) + (COLORS.BLACK[0] * ratio_dead)),
				((COLORS.BEIGE[1] * ratio_alive) + (COLORS.RED[1] * ratio_infected) + (COLORS.BLACK[1] * ratio_dead)),
				((COLORS.BEIGE[2] * ratio_alive) + (COLORS.RED[2] * ratio_infected) + (COLORS.BLACK[2] * ratio_dead)),
			];

			fill(...color);
			rect(...house.position);
		}
	},

	drawInfo: () => {
		for (let i = 0; i < HOUSES.length; i++) {
			let house = HOUSES[i];

			if (mouseInRect(...house.position)) {
				fill(...COLORS.GREYTRANSPARENT2)
				rect(400, BAR_HEIGHT + 60, 250,150)
				fill(...COLORS.WHITE);
				textSize(20);
				text("Vivants: " + Math.ceil(house.alive), 640, BAR_HEIGHT + 60 + 25);
				text("Infectés: " + Math.floor(house.infected), 640, BAR_HEIGHT + 60 + 50);
				text("Morts: " + Math.floor(house.dead), 640, BAR_HEIGHT + 60 + 75);
				fill(...COLORS.WHITE);
				textSize(20);
				text("Croyant: " + Math.floor(house.protection * 100) + "%", 640, BAR_HEIGHT + 60 + 100);

				break;
			}
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
