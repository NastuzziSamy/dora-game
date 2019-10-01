/**
 * Défini la classe rassemblant les différentes pages.
 */

const Screens = {
	screens: {},
	current: SCREEN_NAMES.MENU,

	setScreen: (screenName) => {
		Screens.getScreen().exit();

		Screens.current = screenName;

		Screens.getScreen().init();
	},

	getScreen: () => {
		return Screens.screens[Screens.current];
	},

	addScreen: (screenData) => {
		Screens.screens[screenData.name] = screenData;
	}
}
