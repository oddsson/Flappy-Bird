window.Pipes = (function() {
	'use strict';

	var Pipes = function(el){
		this.el = el;
	};

	Pipes.prototype.onFrame = function() {
		var GAP = 450;
		var WORLD_HEIGHT = 51.3;
		var bottomHeight = Math.floor(Math.random() * (320 - 90)) + 90;
		var upperHeight = WORLD_HEIGHT - bottomHeight + GAP;
		console.log(bottomHeight);
		var pipeBelow = $('<div class="pipe_lower" style="height:' + bottomHeight + 'px;">></div>');
		var pipeAbove = $('<div class="pipe_upper" style="height:' + upperHeight + 'px;"></div>');
		$('.Pipes').append(pipeBelow);
		$('.Pipes').append(pipeAbove);
	};
	return Pipes;
})();