window.Player = (function() {
	'use strict';

	var Controls = window.Controls;

	// All these constants are in em's, multiply by 10 pixels
	// for 1024x576px canvas.
	//var SPEED = 20; // * 10 pixels per second
	var GRAVITY = 170;
	var JUMP_VELOCITY = 30;
	//var WIDTH = 5;
	var HEIGHT = 5;
	var INITIAL_POSITION_X = 15;
	var INITIAL_POSITION_Y = 25;

	var Player = function(el, game) {
		this.el = el;
		this.game = game;
		this.pos = { x: 0, y: 0 };
	};

	/**
	 * Resets the state of the player for a new game.
	 */
	Player.prototype.reset = function() {
		this.pos.x = INITIAL_POSITION_X;
		this.pos.y = INITIAL_POSITION_Y;
		this.vel = { x: 0, y: 0 };
	};

	Player.prototype.onFrame = function(delta) {
		// If jumping
		if(Controls.keys.space) {
			this.vel.y = -JUMP_VELOCITY;
		}

		// Gravity
		this.vel.y += GRAVITY * delta;
		this.pos.y += delta * this.vel.y;
		
		// Collision check
		this.checkCollisionWithBounds();
		
		// Update UI
		this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
	};

	Player.prototype.checkCollisionWithBounds = function() {
		if (this.pos.y + HEIGHT > this.game.WORLD_HEIGHT) {
			return this.game.gameover();
		}
		var lower = $('.pipe_lower').overlaps('.Player');
		var upper = $('.pipe_upper').overlaps('.Player');
		if(typeof lower[0] !== 'undefined'){
			//console.log(test[0]);
			return this.game.gameover();
		}

		if(typeof upper[0] !== 'undefined'){
			//console.log(test[0]);
			return this.game.gameover();
		}

	};
	return Player;
})();
