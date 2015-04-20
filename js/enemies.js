// make new class for enemy
var Enemy = enchant.Class.create(enchant.Sprite, {
        initialize: function(x, y) {
            enchant.Sprite.call(this, 32, 32);
            this.image = game.assets['res/climber.png']; // set image
            this.frame = [8, 8, 8, 8, 8, 8, 11, 11, 11, 11, 11, 11]; // select sprite frame

            this.moveTo(randomInteger(0, 968), -32); // set position
            this.tl.moveTo(x + randomInteger(0, 500), y+ randomInteger(0, 100), 300).moveBy(0, 400, 100).and().fadeOut(15); // set movement

                //this.tl.moveBy(-125 + (randomInteger(0, 5) * 50), 900, 200 + (10 * randomInteger(0, 15))).moveBy(0, 400, 100).and().fadeOut(15); // set movement
            }
        });