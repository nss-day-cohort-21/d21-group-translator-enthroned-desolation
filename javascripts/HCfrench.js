// console.log("HCfrench.js");

// var messageConverter = (function (originalMessageConverter) {
	
// 	let frenchWords = {"merry": "joyeux",
// 						"christmas": "noel"};

<<<<<<< HEAD
// 	originalMessageConverter.translateToFrench = function(english)
	
// })(messageConverter);
=======
var messageConverter = (function(originalMessageConverter){

	// Phrases: merry christmas and happy new year
	// 		 go roast a chestnut
	// 		 i love snow


	let frenchWords = {	"merry": "Joyeux",
						"christmas": "Noel",
						"and": "et",
						"happy": "Bonne",
						"new": "Nouvelle",
						"year": "Année",
						"go": "Aller",
						"roast": "Rôtir",
						"a": "un",
						"chestnut": "Marron",



						};
>>>>>>> 5f589ced28de13a98154ddd85beb62b2299388c5


<<<<<<< HEAD

=======
	messageConverter.translateToFrench = function(heresTheInput) {
		console.log("we're going to translate to french");
		console.log("Here's the inputPhrase from french page:", heresTheInput);

		var splitEnglish = heresTheInput.split(" ");
		console.log("splitEnglish", splitEnglish);
		var splitFrench = [];
>>>>>>> 5f589ced28de13a98154ddd85beb62b2299388c5



		var splitChar = heresTheInput.split("");
		console.log("splitChar", splitChar);

<<<<<<< HEAD
// var messageConverter = {};

// (function(originalMessageConverter) {
// 	let frenchWords = {"merry": "joyeux",
// 						"christmas": "noel"};

// 	console.log("It just called the function on the french page");

// 	originalMessageConverter.translateToFrench = function(english) {
// 		console.log("we're going to translate to french");
// 		return frenchWords [english];
// 	};

// })(messageConverter);

// // I like big cheese
// // j'aime fromage grand



// // let toFrench = {"I": "j'"
// // 				"like": "aime",
// // 				"cheese": "fromage",
// // 				"big": "grand"
// // 				}


// // 				"I like": "j'aime"
// // 				"You like": "Vous aimez"
=======
		var rejoined = splitChar.join("");
		console.log("rejoined", rejoined);

		splitEnglish.forEach(function(word) {
			console.log(word);
			console.log(frenchWords[word]);
			splitFrench.push(frenchWords[word]);
			console.log(splitFrench);
		});

		outputSentence = splitFrench.join(" ");
		console.log(outputSentence);

		// splitEnglish.forEach(translater);

		return outputSentence;

	};

	return originalMessageConverter;

})(messageConverter);

>>>>>>> 5f589ced28de13a98154ddd85beb62b2299388c5
