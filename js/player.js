                 // make new class for player
                var Player = enchant.Class.create(enchant.Sprite, {
                    initialize: function() {
                        enchant.Sprite.call(this, 32, 32);
                        this.image = game.assets['res/climber.png'];
                        this.frame = [2, 2, 2, 2, 2, 2, 10, 10, 10, 10, 10, 10]; // select sprite frame
                        this.moveTo(500 - (this.width / 2), 850 - (this.width / 2));
                        this.tl.moveBy(0, -100, 50); // set position
                        // set image data

                    },
                    moveRight: function() {
                        if (this.x <= 936) {
                            this.tl.moveX(this.x + 40, 5);
                        }
                    },
                    moveLeft: function() {
                        if (this.x >= 32) {
                            this.tl.moveX(this.x - 40, 5);
                        }
                    }
                });