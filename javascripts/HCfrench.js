console.log("HCfrench.js");


var messageConverter = (function(originalMessageConverter){
	let frenchWords = {"merry": "joyeux",
						"christmas": "noel"};

	console.log("It just called the function on the french page");

	messageConverter.translateToFrench = function() {
		console.log("we're going to translate to french");
	};

	return originalMessageConverter;

})(messageConverter);

// I like big cheese
// j'aime fromage grand



// let toFrench = {"I": "j'"
// 				"like": "aime",
// 				"cheese": "fromage",
// 				"big": "grand"
// 				}


// 				"I like": "j'aime"
// 				"You like": "Vous aimez"