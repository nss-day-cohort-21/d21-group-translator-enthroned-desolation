console.log("HCfrench.js");


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
						"chestnut": "Marron"

						};

	console.log("It just called the function on the french page");

	messageConverter.translateToFrench = function(heresTheInput) {
		console.log("we're going to translate to french");
		console.log("Here's the inputPhrase from french page:", heresTheInput);

		var splitEnglish = heresTheInput.split(" ");
		console.log("splitEnglish", splitEnglish);
		var splitFrench = [];



		// var splitChar = heresTheInput.split("");
		// console.log("splitChar", splitChar);

		// var rejoined = splitChar.join("");
		// console.log("rejoined", rejoined);

		splitEnglish.forEach(function(word) {
			console.log(word);
			console.log(frenchWords[word]);
			splitFrench.push(frenchWords[word]);
			console.log(splitFrench);
		});

		var outputSentence = splitFrench.join(" ");
		console.log(outputSentence);

		// splitEnglish.forEach(translater);

		return outputSentence;

	};

	return originalMessageConverter;

})(messageConverter);

