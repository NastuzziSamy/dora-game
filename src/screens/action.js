/**
* Défini l'affichage des actions .
*/

const QUIT_BUTTON = [SCREEN_HEIGHT/2, SCREEN_WIDTH/2,];
const ATTACK_BUTTON = [BUTTON_CENTER_X, SCREEN_HEIGHT / 2, BUTTON_WIDTH, BUTTON_HEIGHT];
const BRUME_ECRAN = [0,0,SCREEN_WIDTH, SCREEN_HEIGHT-BAR_HEIGHT];


const ACTION_SCREEN = {
 name: SCREEN_NAMES.ACTION,

 init: () => {

 },

 exit: () => {

 },

 mousePressed: () => {
   if (mouseInRect(...QUIT_BUTTON, DIAMETER_PAUSE_BUTTON, DIAMETER_PAUSE_BUTTON, true)) {
     Screens.setScreen(SCREEN_NAMES.GAME);
   } else if (mouseInRect(...ATTACK_BUTTON)){

     DEMON.maison=HOUSE1;
     DEMON.debut=GAME_SCREEN.timer;
     DEMON.in=true;
     VARHOUSE1.timer_debut=GAME_SCREEN.timer;
     VARHOUSE1.couleurs=COLORS.RED;
     toggleStart(VARHOUSE1);
     Screens.setScreen(SCREEN_NAMES.GAME);
   }
 },


 draw: () => {
 ACTION_SCREEN.drawAction();
 ACTION_SCREEN.drawQuit();
 },

 drawAction: () => {
   stroke(...COLORS.BLACK);
   strokeWeight(4);
   fill(...COLORS.WHITE);
   rect(...ATTACK_BUTTON, BUTTON_HEIGHT / 2);
   noStroke()
   fill(...COLORS.BLACK);
   textSize(36);
   textFont(loadKells_SD);
   textAlign(CENTER, CENTER);
   text("Rentrer dans la maison", width / 2, (BUTTON_HEIGHT + SCREEN_HEIGHT) / 2);
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
};

Screens.addScreen(ACTION_SCREEN);
