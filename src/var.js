var loadKells_SD;

var HOUSES = shuffle([
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
		position: [625, BAR_HEIGHT + 250, 220, 195],
		alive: 340 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.70 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 7
	{
		position: [425, BAR_HEIGHT + 250, 140, 285],
		alive: 170 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.20 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 8
	{
		position: [15, BAR_HEIGHT + 250, 150, 85],
		alive: 45 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.80 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 9
	{
		position: [15, BAR_HEIGHT + 340, 150, 195],
		alive: 100 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.30 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 10
	{
		position: [850, BAR_HEIGHT + 250, 165, 90],
		alive: 314 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.10 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 11
	{
		position: [850, BAR_HEIGHT + 345, 165, 190],
		alive: 240 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.30 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 12
	{
		position: [625, BAR_HEIGHT + 450, 220, 85],
		alive: 90 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.70 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 13
	{
		position: [225, BAR_HEIGHT + 250, 195, 125],
		alive: 170 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.30 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 14
	{
		position: [225, BAR_HEIGHT + 380, 195, 155],
		alive: 220 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.20 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 15
	{
		position: [15, BAR_HEIGHT + 15, 130, 175],
		alive: 205 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.60 + (Math.random() * 0.2) - 0.1,
	},
	// Maison 16
	{
		position: [150, BAR_HEIGHT + 15, 65, 175],
		alive: 140 + (Math.random() * 100) - 50,
		infected: 0,
		dead: 0,
		protection: 0.20 + (Math.random() * 0.2) - 0.1,
	},
]);
