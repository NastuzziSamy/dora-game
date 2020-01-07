/**
 * Défini l'affichage des actions .
 */

const QUIT_BUTTON = [1000,535 ,];
const ATTACK_BUTTON = [450, 500, 360, 70];
const BRUME_ECRAN = [0,0,SCREEN_WIDTH, SCREEN_HEIGHT-BAR_HEIGHT];


const ACTION_SCREEN = {
 name: SCREEN_NAMES.ACTION,


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
   } else if (mouseInRect(...ATTACK_BUTTON) && MAISON_ACTUELLE === HOUSE1){

     DEMON.maison=HOUSE1;
     DEMON.debut=GAME_SCREEN.timer;
     DEMON.in=true;
     VARHOUSE1.timer_debut=GAME_SCREEN.timer;
     VARHOUSE1.couleurs=COLORS.RED;
     toggleStart(VARHOUSE1);
     GAME_SCREEN.stats.infected += VARHOUSE1.occupant;
     Screens.setScreen(SCREEN_NAMES.GAME);

   }  else if (mouseInRect(...ATTACK_BUTTON) && MAISON_ACTUELLE === HOUSE2){

     DEMON.maison=HOUSE2;
     DEMON.debut=GAME_SCREEN.timer;
     DEMON.in=true;
     VARHOUSE2.timer_debut=GAME_SCREEN.timer;
     VARHOUSE2.couleurs=COLORS.RED;
     toggleStart(VARHOUSE2);
     GAME_SCREEN.stats.infected += VARHOUSE2.occupant;
     Screens.setScreen(SCREEN_NAMES.GAME);

 } else if (mouseInRect(...ATTACK_BUTTON) && MAISON_ACTUELLE === HOUSE3){

   DEMON.maison=HOUSE3;
   DEMON.debut=GAME_SCREEN.timer;
   DEMON.in=true;
   VARHOUSE3.timer_debut=GAME_SCREEN.timer;
   VARHOUSE3.couleurs=COLORS.RED;
   toggleStart(VARHOUSE3);
     GAME_SCREEN.stats.infected += VARHOUSE3.occupant;
   Screens.setScreen(SCREEN_NAMES.GAME);

} else if (mouseInRect(...ATTACK_BUTTON) && MAISON_ACTUELLE === HOUSE4){

  DEMON.maison=HOUSE4;
  DEMON.debut=GAME_SCREEN.timer;
  DEMON.in=true;
  VARHOUSE4.timer_debut=GAME_SCREEN.timer;
  VARHOUSE4.couleurs=COLORS.RED;
  toggleStart(VARHOUSE4);
     GAME_SCREEN.stats.infected += VARHOUSE4.occupant;
     Screens.setScreen(SCREEN_NAMES.GAME);

}else if (mouseInRect(...ATTACK_BUTTON) && MAISON_ACTUELLE === HOUSE5){

  DEMON.maison=HOUSE5;
  DEMON.debut=GAME_SCREEN.timer;
  DEMON.in=true;
  VARHOUSE5.timer_debut=GAME_SCREEN.timer;
  VARHOUSE5.couleurs=COLORS.RED;
  toggleStart(VARHOUSE5);
     GAME_SCREEN.stats.infected += VARHOUSE5.occupant;
     Screens.setScreen(SCREEN_NAMES.GAME);

}else if (mouseInRect(...ATTACK_BUTTON) && MAISON_ACTUELLE === HOUSE6){

  DEMON.maison=HOUSE6;
  DEMON.debut=GAME_SCREEN.timer;
  DEMON.in=true;
  VARHOUSE6.timer_debut=GAME_SCREEN.timer;
  VARHOUSE6.couleurs=COLORS.RED;
  toggleStart(VARHOUSE6);
     GAME_SCREEN.stats.infected += VARHOUSE6.occupant;
  Screens.setScreen(SCREEN_NAMES.GAME);

}else if (mouseInRect(...ATTACK_BUTTON) && MAISON_ACTUELLE === HOUSE7){

  DEMON.maison=HOUSE7;
  DEMON.debut=GAME_SCREEN.timer;
  DEMON.in=true;
  VARHOUSE7.timer_debut=GAME_SCREEN.timer;
  VARHOUSE7.couleurs=COLORS.RED;
  toggleStart(VARHOUSE7);
     GAME_SCREEN.stats.infected += VARHOUSE7.occupant;
     Screens.setScreen(SCREEN_NAMES.GAME);

}else if (mouseInRect(...ATTACK_BUTTON) && MAISON_ACTUELLE === HOUSE8){

  DEMON.maison=HOUSE8;
  DEMON.debut=GAME_SCREEN.timer;
  DEMON.in=true;
  VARHOUSE8.timer_debut=GAME_SCREEN.timer;
  VARHOUSE8.couleurs=COLORS.RED;
     GAME_SCREEN.stats.infected += VARHOUSE8.occupant;
     toggleStart(VARHOUSE8);
  Screens.setScreen(SCREEN_NAMES.GAME);

}else if (mouseInRect(...ATTACK_BUTTON) && MAISON_ACTUELLE === HOUSE9){

  DEMON.maison=HOUSE9;
  DEMON.debut=GAME_SCREEN.timer;
  DEMON.in=true;
  VARHOUSE9.timer_debut=GAME_SCREEN.timer;
  VARHOUSE9.couleurs=COLORS.RED;
     GAME_SCREEN.stats.infected += VARHOUSE9.occupant;
     toggleStart(VARHOUSE9);
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
   textAlign(CENTER,CENTER);
   text("Rentrer dans l'himeuble",630,535);
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
