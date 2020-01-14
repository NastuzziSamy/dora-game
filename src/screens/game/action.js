/**
 * Défini l'affichage des actions .
 */

const QUIT_BUTTON = [1000, 535, ];
const ATTACK_BUTTON = [450, 500, 360, 70];
const BRUME_ECRAN = [0, 0, SCREEN_WIDTH, SCREEN_HEIGHT - BAR_HEIGHT];

const ACTION_SCREEN = {
	name: SCREEN_NAMES.ACTION,

	current_house: null,

	init: () => {
		ACTION_SCREEN.video = createVideo(MOVIE_MENU);
		ACTION_SCREEN.video.loop();
		ACTION_SCREEN.video.size(SCREEN_WIDTH, SCREEN_HEIGHT);
		ACTION_SCREEN.video.hide();

		ACTION_SCREEN.image = loadImage(IMAGE_DEMON_ENTIER);
	},

	exit: () => {

	},

	mousePressed: () => {
		if (mouseInRect(...QUIT_BUTTON, DIAMETER_PAUSE_BUTTON, DIAMETER_PAUSE_BUTTON, true)) {
			Screens.setScreen(SCREEN_NAMES.GAME);
		} else if (mouseInRect(...ATTACK_BUTTON)) {
			DEMON.house_in = ACTION_SCREEN.current_house;
			DEMON.debut = GAME_SCREEN.timer;
			Screens.setScreen(SCREEN_NAMES.GAME);
		}
	},


	draw: () => {
		ACTION_SCREEN.drawVideo();
		ACTION_SCREEN.drawPersonnage();
		ACTION_SCREEN.drawAction();
		ACTION_SCREEN.drawQuit();
	},

	drawVideo: () => {
		image(ACTION_SCREEN.video, 0, 0);
	},

	drawPersonnage: () => {
		image(ACTION_SCREEN.image, -150, 50);
	},

	drawAction: () => {
		stroke(...COLORS.BLACK);
		strokeWeight(2);
		fill(...COLORS.GREYTRANSPARENT);
		rect(...ATTACK_BUTTON, BUTTON_HEIGHT / 2);
		noStroke()
		fill(...COLORS.WHITE);
		textSize(20);
		textFont(loadKells_SD);
		textAlign(CENTER, CENTER);
		text("Rentrer dans l'immeuble", 630, 535);
	},

	drawQuit: () => {
		fill(...COLORS.GREYTRANSPARENT);
		circle(...QUIT_BUTTON, DIAMETER_PAUSE_BUTTON + 10);
		fill(...COLORS.RED);
		textAlign(CENTER, CENTER);
		textFont("Arial");
		textSize(22);
		text(['X'], ...QUIT_BUTTON);
	},

	attack: () => {
		if (ACTION_SCREEN.current_house) {
			let house = ACTION_SCREEN.current_house;
			let ratio_protection = (1 - house.protection - (GAME_SCREEN.stats.search / 500));

			if (house.infected && ratio_protection > 0) {
				let ratio_dead = DEMON.attack * ((Math.random() * 0.8) + 0.4) * ratio_protection;
				
				if (ratio_dead > house.infected) {
					ratio_dead = house.infected;
					house.infected = 0;
				} else {
					house.infected -= ratio_dead;
				}

				if (house.infected < 0) {
					house.infected = 0;
				}

				house.dead += ratio_dead;
				ratio_protected = (ratio_dead / (house.alive + house.infected + house.dead)) * house.protection * 5;


				house.protection -= ratio_protected;
				
				GAME_SCREEN.incrementSearch(ratio_protected * 25 * ((Math.random() * 0.7) + 0.6));
			
				DEMON.xp += ratio_dead * ((Math.random() * 0.15) + 0.2);
			}

			if (house.alive) {
				let ratio_infected = DEMON.possession * ((Math.random() * 0.8) + 0.4) * ratio_protection;

				if (ratio_infected > house.alive) {
					ratio_infected = house.alive;
					house.alive = 0;
					house.infected += ratio_infected;
				}
				else if (ratio_infected < 0 && (- ratio_infected) > house.infected) {
					ratio_infected = house.infected;
					house.alive += ratio_infected;
					house.infected = 0;
				}
				else {
					house.infected += ratio_infected;
					house.alive -= ratio_infected;
				}

				if (house.alive < 0) {
					house.alive = 0;
				}

				if (ratio_protection >= 0) {
					DEMON.xp += ratio_infected * ((Math.random() * 0.25) + 0.3);
				}
			}
		}
	},
};

Screens.addScreen(ACTION_SCREEN);