// Create random word generator
var wordArray = [];
var randomWords = [ "Awkward", "Bagpipes", "Banjo", "Bungler", "Croquet", "Crypt", "Dwarves", "Fervid", "Fishhook", "Fjord", "Gazebo", "Gypsy", "Haiku", "Haphazard", "Hyphen", "Ivory", "Jazzy", "Jiffy", "Jinx", "Jukebox", "Kayak", "Memento", "Oxygen", "Pajama", "Pixel", "Zombie", "Tomato", "Shark", "Elephant", "Island",]

// Start function picks random word

function start() {
	var number = Math.floor((Math.random() * 29) + 1);
	var word = randomWords[number];
	length();

// Calculates length of word

	function length() { 
		var printLetter = word.length;
		// Prints out number of letters
		console.log(printLetter);

		// Push each letter into an array
		for (var i = 0; i < word.length; i++) {
			wordArray.push(word[i]);
		}
		console.log(wordArray);
	}
// Receives letter input from player
	function guess(input) {
		// Loop if input letter is same as letters in array
		for (var j = 0; j < word.length; j++) {
			if (input == word[j]) {
				console.log("yep");
			} else {
				console.log("nope");
			}
		}
		
	}

 guess("e");
}




