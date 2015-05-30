/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
// Game Variables
var gameLabel; // create a reference
function init() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // 20 times per frame
    createjs.Ticker.setFPS(60); // framerate for the game
    createjs.Ticker.on("tick", gameLoop); // Ticker is a static class
    main();
}
// The Main Game Loop - refreshed 60 fps
function gameLoop() {
    stage.update();
}
// The Main Game Function
function main() {
    console.log("Game is Running");
    gameLabel = new createjs.Text("Little Warrior", "40px Verdana", "#b200ff");
    gameLabel.regX = gameLabel.getMeasuredWidth() * 0.5; // best to multiply by 0.5 than divide by 2
    // gameLabel.regY = gameLabel.getMeasuredHeight() * 0.5;
    gameLabel.x = 160;
    //gameLabel.y = 220;
    stage.addChild(gameLabel);
}
//# sourceMappingURL=game.js.map