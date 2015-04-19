enchant(); // initialize



var game = new Core(1000, 1000);
game.preload('res/climber.png', 'res/base.png', 'res/top.png', 'res/block1.png', 'res/block2.png', 'res/block3.png', 'res/block4.png', 'res/block0.png'); // preload image
game.fps = 60;
game.scale = 0.7;
game.onload = function() {



    game.rootScene.backgroundColor = '#5fbcd7';


    var levels = 4; //min 2
    var gameLenght = 200 * levels - 300; //calculates space needed for levels
    var gameSpeed = (200 / 3) * levels; //fps...change after gamelenght


    var base = new Base(gameLenght, gameSpeed);

    var top = new Top(gameLenght, gameSpeed);


    for (var row = 0; row < levels; row++) {
        for (var col = 0; col < 5; col++) {
            var block = new Block(gameLenght, gameSpeed, row, col);
        }
    }



    var player = new Player();

    // generate enemy every 60 frames
    game.rootScene.tl.then(function() {
        var enemy = new Enemy();
    }).delay(30).loop(); // wait 60 frames and loop it!

    // add event listener (called when click/touch started)
    game.rootScene.on('touchstart', function(evt) {
        player.y = evt.localY;
        rand = Math.floor(Math.random() * 6);
        player.frame = rand; // set image data

        // set position to touch-y position
        var apple = new Apple();
    });

    // add event listener (called when click/touch moved)
    game.rootScene.on('touchmove', function(evt) {
        player.y = evt.localY;
        player.x = evt.localX; // set position to touch-y position
    });
};

game.start(); // start your game!