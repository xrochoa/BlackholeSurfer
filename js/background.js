var blockData = {
    'list': [0, 1, 2, 3, 4, 5, 6],
    'weight': [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 1]
};

var weighedBlocks = generateWeighedList(blockData.list, blockData.weight);


var Base = enchant.Class.create(enchant.Sprite, {
    initialize: function(position, speed) {
        enchant.Sprite.call(this, 1000, 200);
        this.image = game.assets['res/base.png'];
        this.moveTo(0, 800);
        this.tl.delay(50).moveBy(0, position, speed); // set movement


    }
});

var Top = enchant.Class.create(enchant.Sprite, {
    initialize: function(position, speed) {
        enchant.Sprite.call(this, 1000, 500);
        this.image = game.assets['res/top.png'];
        this.moveTo(0, -position);
        this.tl.delay(50).moveBy(0, position, speed); // set movement


    }
});
var Block = enchant.Class.create(enchant.Sprite, {
    initialize: function(position, speed, row, col) {
        enchant.Sprite.call(this, 200, 200);
        this.image = game.assets['res/block' + weighedBlocks[randomInteger(0, weighedBlocks.length - 1)] + '.png'];
        this.moveTo(200 * col, 600 - (row * 200));
        this.tl.delay(50).moveBy(0, position, speed); // set movement
    }
});