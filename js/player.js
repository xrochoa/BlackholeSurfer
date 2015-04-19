            // make new class for player
           var Player = enchant.Class.create(enchant.Sprite, {
               initialize: function() {
                   enchant.Sprite.call(this, 32, 32);
                   this.image = game.assets['res/climber.png'];
                   this.frame = [2, 2, 2, 2, 2, 2,10, 10, 10,10, 10, 10]; // select sprite frame
                   this.moveTo(500 - 32 / 2, 850 - 32 / 2); // set position
                   // set image data
                   game.rootScene.addChild(this); // add to canvas

               }
           });