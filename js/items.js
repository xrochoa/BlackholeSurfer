        var axe = 1;


         // make new class for apple
        var Apple = enchant.Class.create(enchant.Sprite, {
            initialize: function(x, y) {
                enchant.Sprite.call(this, 32, 32);
                this.image = game.assets['res/axe.png']; // set image
                this.moveTo(x, y); // move to the position
                this.tl.moveBy(0, -1000, 120).and().rotateBy(360, 100); // set movement
            }
        });