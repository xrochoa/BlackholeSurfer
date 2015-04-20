enchant(); // initialize

var resources = ['res/climber.png', 'res/base.png', 'res/top.png', 'res/block1.png', 'res/block2.png', 'res/block3.png', 'res/block4.png', 'res/block0.png', 'res/block5.png', 'res/block6.png', 'res/status.png', 'res/stats1.png', 'res/stats2.png', 'res/stats3.png', 'res/stats4.png', 'res/stats5.png', 'res/axe.png'];


var game = new Core(1000, 1200);
game.preload(resources); // preload image
game.fps = 60;
game.scale = 0.5;
game.rootScene.backgroundColor = '#5fbcd7';
game.onload = function() {

    var sceneStart = SceneStart();
    game.pushScene(sceneStart);



};

game.start(); // start your game!