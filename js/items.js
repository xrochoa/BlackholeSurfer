        // make new class for apple
        var Apple = enchant.Class.create(enchant.Sprite, {
            initialize: function(){
                enchant.Sprite.call(this, 16, 16);
                this.image = game.assets['res/climber.png']; // set image
                this.moveTo(16, 8);       // move to the position
                this.tl.moveBy(320, 0, 30);        // set movement
                this.frame = 15;                   // set image data
                game.rootScene.addChild(this);     // add to canvas
            }
        });