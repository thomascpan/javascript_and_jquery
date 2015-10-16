// image iterator
var i = 0;

// initial setup
function setup() {
	$('#dot-0').addClass('selected');
	i++;
}

// set image
function setImage(input) {
	if (input === "left") {
		$('.display').animate({left: "+=630"}, 750);
	} else if (input === "right") {
		$('.display').animate({left: "-=630"}, 750);
	} else {
		$('.display').animate({left: ("-630" * input)}, 750);
	}
	i++;
}

// setSlider
function setSlider(count) {
	$('.selected').removeClass('selected');
	$("#dot-" + count).addClass('selected');
}

// change slide
function changeSlide() {
	if (i < 4) { 
		setSlider(i);
		setImage(i);
	} else {
		i = 0;
		setSlider(i);
		setImage("right");
		toFront();
	}
}

function toFront() {
	$('.display').animate({left: "0"}, 0);
}

function toBack() {
	$('.display').animate({left: "-1890px"}, 0);
}

$(document).ready(function() {
	setup();
	var int = setInterval(changeSlide, 5000);

	$('.dot').click(function(event) {
		i = Number($(this).attr('id').replace( /^\D+/g, ''));
		setSlider(i);
		setImage(i);
		clearInterval(int);
		int = setInterval(changeSlide, 5000);
	});

	$('.arrow-left').click(function() {
		if (i === 1) {
			i = 3;
			setSlider(i);
			setImage("left");
			toBack();	
		} else {
			i-=2;
			setSlider(i);
			setImage("left");			
		}
		clearInterval(int);
		int = setInterval(changeSlide, 5000);		
	});

	$('.arrow-right').click(function() {
		if (i === 4) {
			i = 0;
			setSlider(i);
			setImage("right");
			toFront();
		} else {
			setSlider(i);
			setImage("right");			
		}
		clearInterval(int);
		int = setInterval(changeSlide, 5000);
	});	
});

