window.Pipes = (function() {
	'use strict';

	var Pipes = function(el, game){
		this.el = el;
		this.game = game;
	};

	/*Pipes.prototype.onFrame = function(delta) {

	};*/

	Pipes.prototype.drawPipes = function() {
		setInterval(function(){
			var WORLD_HEIGHT = 51.3;
			var GAP = 450;
			var bottomHeight = Math.floor(Math.random() * (430 - 200)) + 200;
			var upperHeight = WORLD_HEIGHT - bottomHeight + GAP;
			console.log(bottomHeight);
			var pipeBelow = $('<div class="pipe_lower" style="height:' + bottomHeight + 'px;">></div>');
			var pipeAbove = $('<div class="pipe_upper" style="height:' + upperHeight + 'px;"></div>');
			$('.Pipes').append(pipeBelow);
			$('.Pipes').append(pipeAbove);
		},2000);
	};
	return Pipes;
})();