// /* Encapsulated Version */
// // Not sure how to make this work.


// // Cell

// function Cell(theRow, theCol) {
// 	this.value = "";
// 	this.row = theRow;
// 	this.col = theCol;
// 	this.output = "<div class='cell' row='" + this.row + "' col='" + this.col + "'></div>";
// }

// //  Board

// function Board() {
// 	this.setBoard = function() {
// 		for (var i=0; i<3; i++) {
// 			for (var j=0; j<3; j++) {
// 				var temp = new Cell(i,j);
// 				$('.display').append(temp.output);
// 			}
// 		} 		
// 	}
// 	this.setCell = function(playerPiece) {
// 		$(this).text(playerPiece);
// 	}
// }

// // Player 

// function Player(thePiece) {
// 	this.piece = thePiece;
// }

// // Game

// function Game(players, board) {
// 	this.round = 0;
// 	this.currentPlayer = players[0];
// 	this.otherPlayer = players[1];
// 	this.switchPlayers = function() {
// 		var temp = this.currentPlayer;
// 		this.currentPlayer = this.otherPlayer;
// 		this.otherPlayer = temp;
// 	}
// 	this.makeMove = function(playerPiece) {
// 		$('.cell').click(function(playerPiece) {
// 			board.setCell(playerPiece);
// 			this.switchPlayers();
// 			this.round++;
// 			console.log("hit");
// 		})
// 	}
// 	this.play = function() {
// 		board.setBoard();
// 		this.makeMove(this.currentPlayer.piece);


// 		// while (this.round < 9) {
// 		// 	board.setCell(this.currentPlayer.piece);
// 		// 	console.log('hit');
// 		// 	this.switchPlayers();
// 		// 	this.round++; 
// 		// }
// 	}

// }


// $(document).ready(function() {
// 	var playerX = new Player("X");
// 	var playerO = new Player("O");
// 	var players = [playerX, playerO];
// 	var board = new Board;
// 	var game = new Game(players, board).play();
// });





/* Un-Encapsulated Version */

/* Players */

function Player(thePiece) {
	this.piece = thePiece;
}

var playerX = new Player("X");
var playerO = new Player("O");

/* BOARD */
function Board() {
	this.setBoard = function() {
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				$('.display').append("<div class='cell' col='" + j + "' row='" + i + "'></div>");
			}
		}
	}
	this.checkWin = function(piece, move) {
		function column(piece, move) {
			return ($(".cell[col='" + move[0] + "']:contains('" + piece + "')").length === 3);
		}
		function row(piece, move) {
			return ($(".cell[row='" + move[1] + "']:contains('" + piece + "')").length === 3);
		}
		function diagonals(piece) {
			var diagOne = [$(".cell[col='0'][row='0']"), $(".cell[col='1'][row='1']"), $(".cell[col='2'][row='2']")];
			var diagTwo = [$(".cell[col='2'][row='0']"), $(".cell[col='1'][row='1']"), $(".cell[col='0'][row='2']")];
			var arrayDiagOne = [];
			var arrayDiagTwo = [];
			for (var i in diagOne) {
				if (diagOne[i].text() === piece) {
					arrayDiagOne.push(diagOne[i]);
				}
			}
			for (var i in diagTwo) {
				if (diagTwo[i].text() === piece) {
					arrayDiagTwo.push(diagTwo[i]);
				}
			}
			return (arrayDiagOne.length === 3 || arrayDiagTwo.length === 3);
		}
		if (round === 8) {
			gameOver("draw");
		} else if (round > 3) {
			if (column(piece, move) || row(piece, move) || diagonals(piece)) {
				gameOver(currentPlayer);
			}			
		}
	}
}

var board = new Board();
board.setBoard();

// game
var round = 0;
var currentPlayer = playerX;
var otherPlayer = playerO;


// playAgain: resets global variables and calls play(). 
function playAgain() {
	round = 0;
	currentPlayer = playerX;
	otherPlayer = playerO
	$('#play-again').remove();
	$('.cell').text("");
	$('.info-text').text("Current Player: " + currentPlayer.piece);
}

function switchPlayers() {
	var temp = currentPlayer;
	currentPlayer = this.otherPlayer;
	otherPlayer = temp;
}

// gameOver: displays winner and 'play again' button
function gameOver(winner) {
	if (winner === "draw") {
		$('.info-text').text("Game over! Cat's Game!(Draw)");		
	} else {
		$('.info-text').text("Game over! " + winner.piece + " wins!");
	}
	$('.info').append("<button id='play-again'>Play Again</button>");
	$('#play-again').click(function() {
		playAgain();
	});	
}

$(document).ready(function () {
	$('.cell').click(function() {
		$(this).text(currentPlayer.piece);
		var currentMove = [$(this).attr('col'), $(this).attr('row')];
		board.checkWin(currentPlayer.piece, currentMove)
		switchPlayers();
		round++;
	});
});