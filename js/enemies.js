// make new class for enemy
var Enemy = enchant.Class.create(enchant.Sprite, {
    initialize: function() {
        enchant.Sprite.call(this, 32, 32);
        this.image = game.assets['res/climber.png']; // set image
        this.frame = [8, 8, 8, 8, 8, 8, 11, 11, 11, 11, 11, 11]; // select sprite frame

        this.moveTo(randomInteger(968), -32); // set position
        this.tl.moveBy(-125 + (randomInteger(5) * 50), 1032, 200 + (10 * randomInteger(15))); // set movement
        game.rootScene.addChild(this); // canvas
    }
});