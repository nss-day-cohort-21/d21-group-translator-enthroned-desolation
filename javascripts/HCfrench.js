// ********** SET UP IIFE ********* //

var messageConverter = (function(originalMessageConverter){

// ********** TRANSLATION LEXICON ********* //

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
						"is": "Est",
						"granny": "Grand-mère",
						"spry": "Alerte",
						"dashing": "Avancer",
						"through": "Par",
						"the": "la",
						"snow": "Niege",
						"santa": "Papa-Noel",
						"coming": "Arrivée",
						"to": "en",
						"town": "Ville"
						};

// ********** TRANSLATOR FUNCTION ********* //

	messageConverter.translateToFrench = function(heresTheInput) {

// ********** DIVIDE INPUT STRING INTO WORDS, REPLACE WITH TRANSLATION, AND RECOMBINE ********* //

		var splitEnglish = heresTheInput.split(" ");
		var splitFrench = [];

		splitEnglish.forEach(function(word) {
			splitFrench.push(frenchWords[word]);
		});

		outputSentence = splitFrench.join(" ");

		var outputSentence = splitFrench.join(" ");


		return outputSentence;

	};

	return originalMessageConverter;

})(messageConverter);




