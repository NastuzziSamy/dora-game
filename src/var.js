var loadKells_SD;

var HOUSES = shuffle([
	// Maison 0
	{
		position: [15, BAR_HEIGHT + 15, 200, 175],
		alive: 230 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.20 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 1
	{
		position: [275, BAR_HEIGHT + 15, 215, 175],
		alive: 670 + (Math.random() * 70) - 35,
		infected: 0,
		dead: 0,
		protection: 0.40 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 2
	{
		position: [550, BAR_HEIGHT + 15, 175, 100],
		alive: 140 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.60 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 3
	{
		position: [550, BAR_HEIGHT + 15 + 105, 175, 70],
		alive: 310 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.20 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 4
	{
		position: [730, BAR_HEIGHT + 15, 110, 175],
		alive: 260 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.15 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 5
	{
		position: [900, BAR_HEIGHT + 15, 165, 175],
		alive: 430 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.35 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 6
	{
		position: [625, BAR_HEIGHT + 250, 390, 285],
		alive: 940 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.70 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 7
	{
		position: [225, BAR_HEIGHT + 250, 340, 285],
		alive: 620 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.20 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 8
	{
		position: [15, BAR_HEIGHT + 250, 150, 285],
		alive: 130 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.80 + (Math.random() * 0.2) - 0.1,
	},
]);
