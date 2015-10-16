// Math Functions

var add = function (x, y) {
	return x + y;
}

var subtract = function (x, y) {
	return x - y;
}

var multiply = function (x, y) {
	return x * y;
}

var divide = function (x, y) {
	return x / y;
}

var equals = function() {
	if (operator === "+") {
		var result = add(parseFloat(firstInput), parseFloat(secondInput));
	}
}

var result = null;

// Variables 

var firstInput = [];
var secondInput = [];
var operator = null; 

// Input Variables

var myDisplay = document.querySelector("h1");
var myOne = document.querySelector(".btn-1");
var myTwo = document.querySelector(".btn-2");
var myThree = document.querySelector(".btn-3");
var myFour = document.querySelector(".btn-4");
var myFive = document.querySelector(".btn-5");
var mySix = document.querySelector(".btn-6");
var mySeven = document.querySelector(".btn-7");
var myEight = document.querySelector(".btn-8");
var myNine = document.querySelector(".btn-9");
var myZero = document.querySelector(".btn-0");
var myDivide = document.querySelector(".btn-divide");
var myMultiply = document.querySelector(".btn-multiply");
var mySubtract = document.querySelector(".btn-subtract");
var myAdd = document.querySelector(".btn-add");
var myClear = document.querySelector(".btn-clear");
var myEqual = document.querySelector(".btn-equal");
var myDecimal = document.querySelector(".btn-period");

// Input Click Event

myOne.onclick = function() {
	if (operator === null) {
		firstInput.push(this.innerHTML);
	} else {
		secondInput.push(this.innerHTML); 
	}
	setDisplay();
}
myTwo.onclick = function() {
	if (operator === null) {
		firstInput.push(this.innerHTML);
	} else {
		secondInput.push(this.innerHTML); 
	}
	setDisplay();
}
myThree.onclick = function() {
	if (operator === null) {
		firstInput.push(this.innerHTML);
	} else {
		secondInput.push(this.innerHTML); 
	}
	setDisplay();
}
myFour.onclick = function() {
	if (operator === null) {
		firstInput.push(this.innerHTML);
	} else {
		secondInput.push(this.innerHTML); 
	}
	setDisplay();
}
myFive.onclick = function() {
	if (operator === null) {
		firstInput.push(this.innerHTML);
	} else {
		secondInput.push(this.innerHTML); 
	}
	setDisplay();
}
mySix.onclick = function() {
	if (operator === null) {
		firstInput.push(this.innerHTML);
	} else {
		secondInput.push(this.innerHTML); 
	}
	setDisplay();
}
mySeven.onclick = function() {
	if (operator === null) {
		firstInput.push(this.innerHTML);
	} else {
		secondInput.push(this.innerHTML); 
	}
	setDisplay();
}
myEight.onclick = function() {
	if (operator === null) {
		firstInput.push(this.innerHTML);
	} else {
		secondInput.push(this.innerHTML); 
	}
	setDisplay();
}
myNine.onclick = function() {
	if (operator === null) {
		firstInput.push(this.innerHTML);
	} else {
		secondInput.push(this.innerHTML); 
	}
	setDisplay();
}
myZero.onclick = function() {
	if (operator === null) {
		firstInput.push(this.innerHTML);
	} else {
		secondInput.push(this.innerHTML); 
	}
	setDisplay();
}
myDecimal.onclick = function() {
	if (operator === null) {
		firstInput.push(this.innerHTML);
	} else {
		secondInput.push(this.innerHTML); 
	}
	setDisplay();
}

myDivide.onclick = function() {
	operator = this.innerHTML;
	setDisplay();
}
myMultiply.onclick = function() {
	operator = this.innerHTML;
	setDisplay();
}
mySubtract.onclick = function() {
	operator = this.innerHTML;
	setDisplay();
}
myAdd.onclick = function() {
	operator = this.innerHTML;
	setDisplay();
}
myClear.onclick = function() {
	clearAll();
}
myEqual.onclick = function() {
	var x = parseFloat(firstInput.join(''));
	var y = parseFloat(secondInput.join(''));
	switch(operator) {
		case "/":
			result = divide(x, y);
			break;
		case "*":
			result = multiply(x, y);
			break;
		case "-":
			result = subtract(x, y);
			break;
		case "+":
			result = add(x, y);
			break;
		default:
			clearAll();
	}
	setDisplay();
	clearMost();
}

// Display 

function setDisplay() {

	if (firstInput) {
		if (operator) {
			if (secondInput) {
				if (result !== null) {
					myDisplay.innerHTML = result;
				} else {
					myDisplay.innerHTML = firstInput.join('') + operator + secondInput.join('');		
				}
			} else {
				myDisplay.innerHTML = firstInput.join('') + operator;
			}
		} else {
			myDisplay.innerHTML = firstInput.join('');
		}
	} 
}

function clearAll() {
	firstInput = [];
	secondInput = [];
	operator = null;
	myDisplay.innerHTML = '';
	result = null;
}

function clearMost() {
	firstInput = [];
	secondInput = [];
	operator = null;
	result = null;	
}