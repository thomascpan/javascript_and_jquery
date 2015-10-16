var my_max = function(array) {
	var max = array[0];
	for (var i = 0; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	console.log(max);
}

var vowel_count = function(string) {
	var vowels = ["a", "e", "i", "o", "u"];
	var count = 0;
	for (var i = 0; i < string.length; i++) {
		for (var j = 0; j < vowels.length; j++) {
			if (vowels[j] === string[i]) {
				count++;
				break;
			}
		}
	}
	console.log(count);
};


var reverse = function(phrase) {
	var reversed = "";
	for (var i = phrase.length-1; i >= 0; i--) {
		reversed += phrase[i];
	}
	console.log(reversed);
}


var list = [1, 5, 3, 6, 3, 3];

my_max(list);

var word = "pineapple"

vowel_count(word);

var phrase = "this is a string";

reverse(phrase);
