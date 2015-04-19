 var Base = enchant.Class.create(enchant.Sprite, {
     initialize: function(position, speed) {
         enchant.Sprite.call(this, 1000, 200);
         this.image = game.assets['res/base.png'];
         this.moveTo(0, 800);
         this.tl.delay(50).moveBy(0, position, speed); // set movement


         game.rootScene.addChild(this); // add to canvas
     }
 });

 var Top = enchant.Class.create(enchant.Sprite, {
     initialize: function(position, speed) {
         enchant.Sprite.call(this, 1000, 500);
         this.image = game.assets['res/top.png'];
         this.moveTo(0, -position);
         this.tl.delay(50).moveBy(0, position, speed); // set movement


         game.rootScene.addChild(this); // add to canvas
     }
 });
 var Block = enchant.Class.create(enchant.Sprite, {
     initialize: function(position, speed, row, col) {
         enchant.Sprite.call(this, 200, 200);
         this.image = game.assets['res/block' + randomInteger(5) + '.png'];
         this.moveTo(200 * col, 600 - (row * 200));
         this.tl.delay(50).moveBy(0, position, speed); // set movement
         game.rootScene.addChild(this); // add to canvas
     }
 });