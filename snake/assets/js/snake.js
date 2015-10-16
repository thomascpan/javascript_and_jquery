var left = 37;
var up = 38;
var right = 39;
var down = 40;
var snake = [];

// set board
function setBoard() {
	for (var i=0; i<40; i++) {
		for (var j=0; j<40; j++) {
			$('#board').append("<div class='cell' col='" + j + "' row='" + i +"''></div>");
		}
	}
}

// set snake
function setSnake() {
	$("div[col='20'][row='20']").addClass('snake-head');
	snake.push([20,20]);
}

// play function
function play() {
	setFruit();
	moveSnake();
}

// set fruit
function setFruit() {
	var x = Math.floor((Math.random() * 40));
	var y = Math.floor((Math.random() * 40));
	if ($("div[col='" + x + "'][row='" + y + "']").is('#snake-head')) {
		setFruit();
	} else {
	$("div[col='" + x + "'][row='" + y + "']").attr('id', 'fruit');
	}
}

// move snake
function moveSnake() {
	var direction = '';

	setInterval(function() {
		if (direction !== ''){
			move(direction);
		}
	}, 100);
	
	//  user control input
	$(document).keydown(function(event) {
		if (event.keyCode === left) {
			direction = 'l';
		} else if (event.keyCode === up) {
			direction = 'u';
		} else if (event.keyCode === right) {
			direction = 'r';
		} else if (event.keyCode === down) {
			direction = 'd';
		}
	});

	function move(direction) {
		var currentPosition = snake[snake.length-1];

		switch(direction) {
			case 'l':
				var nextPosition = [currentPosition[0]-1, currentPosition[1]];
				break;
			case 'u':
				var nextPosition = [currentPosition[0], currentPosition[1]-1];
				break;
			case 'r': 
				var nextPosition = [currentPosition[0]+1, currentPosition[1]];
				break;
			case 'd':
				var nextPosition = [currentPosition[0], currentPosition[1]+1];
				break;
		}

		var tail = 0;
		var nextCell = $("div[col='" + nextPosition[0] + "'][row='" + nextPosition[1] + "']");

		// check  if snake hit fruit
		if (nextCell.is('#fruit')) {
			tail = snake[0];
			nextCell.removeAttr('id');
			setFruit();
		}
		// check if snake hit self or edge
		if (nextCell.hasClass('snake') || !nextCell.hasClass('cell')) {
			alert('Game over!');
			for (var i = 0; i<snake.length; i++) {
				$("div[col='" + snake[i][0] + "'][row='" + snake[i][1] + "']").removeClass('snake');
			}
			snake = [];
			direction = '';
		}

		// update snake
		snake.push(nextPosition); 
		nextCell.addClass('snake-head');
		$("div[col='" + currentPosition[0] + "'][row='" + currentPosition[1] + "']").removeClass('snake-head');

		if (tail === 0) {
			$("div[col='" + snake[0][0] + "'][row='" + snake[0][1] + "']").removeClass('snake');
			snake.shift();
		}

		for (var i = 0; i<snake.length-1; i++) {
			$("div[col='" + snake[i][0] + "'][row='" + snake[i][1] + "']").addClass('snake');
		}
	}
}


$(document).ready(function() {
	setBoard();
	setSnake();
	play();
});