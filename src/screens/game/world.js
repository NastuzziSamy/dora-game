const ROOT_ROAD = [15, BAR_HEIGHT + 200, SCREEN_WIDTH - 30, 40];
const ROAD_BORDER = 4;

const GAME_SCREEN_WORLD = {
	drawWorld: () => {
		GAME_SCREEN.drawHouses();
	},
	
	drawHouses: () => {
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
		fill(...COLORS.RED);

		rect(15, BAR_HEIGHT + 15, 200, 175);
		rect(275, BAR_HEIGHT + 15, 215, 175);
		rect(550, BAR_HEIGHT + 15, 175, 100);
		rect(550, BAR_HEIGHT + 15 + 105, 175, 70);
		rect(730, BAR_HEIGHT + 15, 110, 175);
		rect(550, BAR_HEIGHT + 15, 175, 100);
	
		rect(15, BAR_HEIGHT + 250, 150, 285);
	},
};