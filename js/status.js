var statusData = {
    "energy": ['res/energyempty.png', 'res/energylow.png', 'res/energymedium.png', 'res/energyhigh.png'],
    "warmth": ['res/warmthempty.png', 'res/warmthlow.png', 'res/warmthmedium.png', 'res/warmthhigh.png'],
    "mind": ['res/mindempty.png', 'res/mindlow.png', 'res/mindmedium.png', 'res/mindhigh.png'],
    "health": ['res/healthfull.png']
};

// make new class for player
var StatusScene = enchant.Class.create(enchant.Sprite, {
    initialize: function() {
        enchant.Sprite.call(this, 1000, 200);
        this.image = game.assets['res/status.png'];
        this.moveTo(0, 1000); // set position
        // set image data
    }
});

var Stats = enchant.Class.create(enchant.Sprite, {
    initialize: function(x, y, number, scale, size) {
        enchant.Sprite.call(this, size, size);
        this.image = game.assets['res/stats' + number + '.png'];
        this.moveTo(x, y);
        this.tl.scaleTo(scale,scale); // set position
        // set image data
    }
});