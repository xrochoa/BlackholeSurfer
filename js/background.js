var blockData = {
    'list': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    'weight': [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 1, 0.1, 1, 1]
};

var bgData = {
    top: {
        asset: function() {
            return 'res/top.png'
        },
        x: 1000,
        y: 500
    },
    block: {
        asset: function() {
            return 'res/block' + weighedBlocks[randomInteger(0, weighedBlocks.length - 1)] + '.png'
        },
        x: 200,
        y: 200,
    },
    base: {
        asset: function() {
            return 'res/base.png'
        },
        x: 1000,
        y: 200,
    }
};

var weighedBlocks = generateWeighedList(blockData.list, blockData.weight);



var Block = enchant.Class.create(enchant.Sprite, {
    initialize: function(x, y, asset, position, speed) {
        enchant.Sprite.call(this, x, y);
        this.image = game.assets[asset];
        this.tl.delay(50).moveBy(0, position, speed); // set movement
    },
    blockOrigin: function(row, col) {
        this.moveTo(200 * col, 600 - (row * 200));
    },
    topOrigin: function(position) {
        this.moveTo(0, -position);
    },
    baseOrigin: function() {
        this.moveTo(0, 800);
    }

});