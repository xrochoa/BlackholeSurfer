var SceneStart = enchant.Class.create(enchant.Scene, {
    initialize: function() {
        // 1 - Call superclass constructor
        Scene.apply(this); ///alows "this" to work







        var levels = 24; //min 2
        var gameLenght = 200 * levels - 300; //calculates space needed for blocks
        var gameSpeed = (200 / 3) * levels; //fps...change after gamelenght


        var base = new Base(gameLenght, gameSpeed);
        this.addChild(base); // add to canvas


        var top = new Top(gameLenght, gameSpeed);
        this.addChild(top); // add to canvas


        for (var row = 0; row < levels; row++) {
            for (var col = 0; col < 5; col++) {
                var block = new Block(gameLenght, gameSpeed, row, col);
                this.addChild(block); // add to canvas
            }
        }



        var player = new Player();
        this.addChild(player);



        // generate enemy every 60 frames
        this.tl.then(function() {
            var enemy = new Enemy(player.x, player.y);
            this.addChild(enemy); // add to canvas

        }).delay(10).loop(); // wait 60 frames and loop it!


        // add event listener (called when click/touch started)
        this.on('touchstart', function(evt) {
            if (axe !== 0) {
                var apple = new Apple(player.x, player.y);
                this.addChild(apple); // add to canvas
                axe--;
                if (axe == 0) {
                    this.removeChild(stats5); // add to canvas

                }
            }
        });





        // add event listener (called when click/touch moved)
        this.on(Event.RIGHT_BUTTON_DOWN, function() {
            player.moveRight();
        });
        this.on('leftbuttondown', function() {
            player.moveLeft();
        });

        var statusScene = new StatusScene();
        this.addChild(statusScene); // add to canvas

        var stats1 = new Stats(100, 1050, 1, 1.5, 32);
        this.addChild(stats1); // add to canvas

        var stats2 = new Stats(200, 1050, 2, 1.5, 32);
        this.addChild(stats2); // add to canvas

        var stats3 = new Stats(300, 1050, 3, 1.5, 32);
        this.addChild(stats3); // add to canvas

        var stats4 = new Stats(845, 1050, 4, 1.3, 100);
        this.addChild(stats4); // add to canvas

        var stats5 = new Stats(600, 1050, 5, 1.5, 32);
        this.addChild(stats5); // add to canvas




        this.on('enterframe', function() {
            var hits = Top.intersect(Enemy);
            for (var i = 0, len = hits.length; i < len; i++) {

                this.removeChild(hits[i][1]);
            }

        });

        this.on('enterframe', function() {

            player.y = player.y - (3 / levels);

        });

        this.on('enterframe', function() {

            var hits = Top.intersect(Player);
            for (var i = 0, len = hits.length; i < len; i++) {
                hits[i][1].tl.moveTo(400, 100, 100);
            }
        });


        this.on('enterframe', function() {
            var hits = Apple.intersect(Enemy);
            for (var i = 0, len = hits.length; i < len; i++) {
                //this.removeChild(hits[i][0]);
                this.removeChild(hits[i][1]);
            }
        });

        this.on('enterframe', function() {
            var hits = Player.intersect(Enemy);
            for (var i = 0, len = hits.length; i < len; i++) {
                this.removeChild(hits[i][0]);
                this.removeChild(hits[i][1]);
                game.stop();
                label = new Label('Fucking Over');
                label.x = (this.width / 2) - (label.width / 2);
                label.y = 400;
                label.backgroundColor = 'black';
                label.color = 'red';
                label.font = '60px strong';
                this.addChild(label); // add to canvas

            }
        });



    }
});