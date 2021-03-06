const ROOT_ROAD = [15, BAR_HEIGHT + 200, SCREEN_WIDTH - 30, 40];
const ROAD_BORDER = 4;
const SKILL_BUTTON = [75, SCREEN_HEIGHT - 75];
const BLOCK_HEIGHT = BAR_HEIGHT + 150;

const GAME_SCREEN_WORLD = {
	mousePressed: () => {
		if (mouseInRect(...PAUSE_BUTTON, DIAMETER_PAUSE_BUTTON, DIAMETER_PAUSE_BUTTON, true)) {
			GAME_SCREEN.togglePause();
		} else if (mouseInRect(...SKILL_BUTTON, DIAMETER_SKILL_BUTTON + 50, DIAMETER_SKILL_BUTTON + 50, true)) {
			Screens.setScreen(SCREEN_NAMES.SKILL);
		} else if (mouseInRect(...QUICK_BUTTON, DIAMETER_PAUSE_BUTTON, DIAMETER_PAUSE_BUTTON, true)) {
			GAME_SCREEN.toggleSpeed();
		} else {
			for (let i = 0; i < HOUSES.length; i++) {
				let house = HOUSES[i];

				if (mouseInRect(...house.position)) {
					if (ACTION_SCREEN.current_house === house) {
						ACTION_SCREEN.current_house = null;
					} else {
						ACTION_SCREEN.current_house = house;
					}

					break;
				}
			}
		}
	},

	drawWorld: () => {
		GAME_SCREEN.drawRoad();
		GAME_SCREEN.drawPersonnage();
	},

	drawPersonnage: () => {
		const timer = Math.ceil(DEMON.timer);

		if (DEMON.xp > DEMON.xp_step) {
			GAME_SCREEN.drawInformation("Vous avez des points d'expériences non utilisés");
		}
	},

	drawInformation: (texte) => {
		stroke(...COLORS.GREYTRANSPARENT2);
		fill(...COLORS.WHITE);
		textAlign(CENTER);
		textSize(26);
		text(texte, 560, 110);
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

			if (ACTION_SCREEN.current_house === house && GAME_SCREEN.timer % 3) {
				stroke(...COLORS.YELLOW);
			}

			fill(...color);
			rect(...house.position);
			noStroke();
		}
	},

	drawInfo: () => {
		if (mouseInRect(...SKILL_BUTTON, DIAMETER_SKILL_BUTTON + 50, DIAMETER_SKILL_BUTTON + 50, true)) {
			stroke(...COLORS.YELLOW);
			fill(...COLORS.GREYTRANSPARENT2);
			rect(400, BLOCK_HEIGHT, 250, 150);
			noStroke();
			fill(...COLORS.WHITE);
			textSize(18);
			text("Arbre des compétences\nXP accumulés\n en compteur", 645, BLOCK_HEIGHT + 70);
			fill(...COLORS.RED);
			textSize(16);
			text("Cliquer pour ouvrir", 640, BLOCK_HEIGHT + 130);

			return;
		}

		if (mouseInRect(10, 10, 150, BAR_CENTER_HEIGHT)) {
			stroke(...COLORS.YELLOW);
			fill(...COLORS.GREYTRANSPARENT2);
			rect(400, BLOCK_HEIGHT, 250, 150);
			noStroke();
			fill(...COLORS.WHITE);
			textSize(18);
			text("Total des morts\nLa mort se fait\naprès infection", 645, BLOCK_HEIGHT + 80);
			fill(...COLORS.RED);
			textSize(16);
			text("Tuez tout le monde!", 640, BLOCK_HEIGHT + 130);

			return;
		}

		if (mouseInRect(200, 10, 150, BAR_CENTER_HEIGHT)) {
			stroke(...COLORS.YELLOW);
			fill(...COLORS.GREYTRANSPARENT2);
			rect(400, BLOCK_HEIGHT, 250, 150);
			noStroke();
			fill(...COLORS.WHITE);
			textSize(18);
			text("Cliquer sur une maison\n pour commencer\nl'infection", 645, BLOCK_HEIGHT + 80);

			return;
		}

		if (mouseInRect(BAR_WIDTH / 2 - 75, 10, 150, BAR_CENTER_HEIGHT)) {
			stroke(...COLORS.YELLOW);
			fill(...COLORS.GREYTRANSPARENT2);
			rect(400, BLOCK_HEIGHT, 250, 150);
			noStroke();
			fill(...COLORS.WHITE);
			textSize(18);
			text("Heure actuelle du jeu\nInflue sur l'infection", 645, BLOCK_HEIGHT + 80);
			fill(...COLORS.RED);
			textSize(16);
			text("Pause, accélérer x1, x2, x4", 640, BLOCK_HEIGHT + 130);

			return;
		}

		if (mouseInRect(BAR_WIDTH - 350, 10, 150, BAR_CENTER_HEIGHT)) {
			stroke(...COLORS.YELLOW);
			fill(...COLORS.GREYTRANSPARENT2);
			rect(400, BLOCK_HEIGHT, 250, 150);
			noStroke();
			fill(...COLORS.WHITE);
			textSize(18);
			text("Taux de résistance\net recherche à l'encontre\n de l'infection.", 645, BLOCK_HEIGHT + 80);
			fill(...COLORS.RED);
			textSize(16);
			text("A 100%, c'est perdu", 640, BLOCK_HEIGHT + 130);

			return;
		}

		if (mouseInRect(BAR_WIDTH - 160, 10, 150, BAR_CENTER_HEIGHT)) {
			stroke(...COLORS.YELLOW);
			fill(...COLORS.GREYTRANSPARENT2);
			rect(400, BLOCK_HEIGHT, 250, 150);
			noStroke();
			fill(...COLORS.WHITE);
			textSize(18);
			text("Personnes encore\nnon-infectées", 645, BLOCK_HEIGHT + 80);
			fill(...COLORS.RED);
			textSize(16);
			text("Tuez tout le monde !", 640, BLOCK_HEIGHT + 130);

			return;
		}

		for (let i = 0; i < HOUSES.length; i++) {
			let house = HOUSES[i];

			if (mouseInRect(...house.position)) {
				stroke(...COLORS.YELLOW);
				fill(...COLORS.GREYTRANSPARENT2);
				rect(400, BLOCK_HEIGHT, 250, 150);
				noStroke();
				fill(...COLORS.WHITE);
				textSize(20);
				text("Vivants: " + Math.ceil(house.alive), 640, BLOCK_HEIGHT + 25);
				text("Infectés: " + Math.floor(house.infected), 640, BLOCK_HEIGHT + 50);
				text("Morts: " + Math.floor(house.dead), 640, BLOCK_HEIGHT + 75);
				fill(...COLORS.WHITE);
				textSize(20);
				text("Croyant: " + Math.floor(house.protection * 100) + "%", 640, BLOCK_HEIGHT + 100);

				fill(...COLORS.RED);
				textSize(16);
				if (ACTION_SCREEN.current_house === house) {
					text("Cliquer pour arrêter", 640, BLOCK_HEIGHT + 130);
				} else {
					text("Cliquer pour infecter/tuer", 640, BLOCK_HEIGHT + 130);
				}

				break;
			}
		}
	},



	drawButtonCompetence: () => {
		fill(...COLORS.YELLOW);
		circle(...SKILL_BUTTON, DIAMETER_PAUSE_BUTTON + 75);
		fill(...COLORS.BLACK);
		textAlign(CENTER, CENTER);
		textSize(16);
		text(['Voir\nCompét.'], ...SKILL_BUTTON);
		noFill();
		stroke(...COLORS.BLUE);
		if (DEMON.xp >= 100) {
			arc(...SKILL_BUTTON, DIAMETER_PAUSE_BUTTON + 75, DIAMETER_PAUSE_BUTTON + 75, -HALF_PI, -HALF_PI);
			stroke(...COLORS.RED);
			if (DEMON.xp >= 200) {
				arc(...SKILL_BUTTON, DIAMETER_PAUSE_BUTTON + 75, DIAMETER_PAUSE_BUTTON + 75, -HALF_PI, -HALF_PI);
			} else {
				arc(...SKILL_BUTTON, DIAMETER_PAUSE_BUTTON + 75, DIAMETER_PAUSE_BUTTON + 75, -HALF_PI, ((2 * PI) * ((DEMON.xp - 100 + 0.01) / 100)) - HALF_PI);
			}
		} else {
			arc(...SKILL_BUTTON, DIAMETER_PAUSE_BUTTON + 75, DIAMETER_PAUSE_BUTTON + 75, -HALF_PI, ((2 * PI) * ((DEMON.xp + 0.01) / 100)) - HALF_PI);
		}
	},


};