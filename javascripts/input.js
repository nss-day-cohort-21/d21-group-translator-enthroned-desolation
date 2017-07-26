console.log("input.js");

// ********** LISTEN FOR BUTTON AND CHECK LANGUAGE-SELECTOR BUTTONS ********* //

let translateBttn = document.getElementById("translateBttn");
translateBttn.addEventListener("click", function(){
	let whichselected;
	var radios = document.getElementsByName("pickLanguage");
	for (let i = 0; i < radios.length; i++){
		if (radios[i].checked){
			whichselected = radios[i].value;
			break;
		}
	}

// ********** GET INPUT TEXT FROM HTML PAGE AND CLEAN UP INPUTS ********* //	

	let inputPhrase = document.getElementById("inputPhrase").value.toLowerCase();

	var charsToRemove = [/\*/g, /@/g, /\(/g, /\)/g, /\!/g, /,/g, /\./g, /;/g, /:/g, /\?/g, /&/g, /\$/g, /%/g];

	for (var i = 0; i < charsToRemove.length; i++) {
		charCut = charsToRemove[i];
		inputPhrase = inputPhrase.replace(charCut, "");
	}

// ********** SEND TEXT TO TRANSLATOR BASED ON LANGUAGE, RETURN TRANSLATION, AND OUTPUT VOICE ********* //

	if (whichselected === "french") {
		var theMessage = messageConverter.translateToFrench(inputPhrase);
		document.getElementById("translatorOutput").innerHTML = `${theMessage}`;

		var msg = new SpeechSynthesisUtterance();
		msg.text = theMessage;
		msg.lang = 'fr';
		speechSynthesis.speak(msg);

	} else if (whichselected === "german") {
		var theMessage = messageConverter.translateToGerman(inputPhrase);
		document.getElementById("translatorOutput").innerHTML = `${theMessage}`

		var msg = new SpeechSynthesisUtterance();
		msg.text = theMessage;
		msg.lang = 'de';
		speechSynthesis.speak(msg);

	} else if (whichselected === "morseCode") {

        var theMessage = messageConverter.translateToMorse(inputPhrase);
        document.getElementById("translatorOutput").innerHTML = `${theMessage}`;

        var theNewMessage = theMessage.replace(/\./g, " dit ");
        theNewMessage = theNewMessage.replace(/-/g, " dah ");
        
        var msg = new SpeechSynthesisUtterance();
        msg.voiceURI = "Google UK English Female";
        msg.text = theNewMessage;
        msg.lang = "en-GB";
        msg.rate = 1; // 0.1 to 10
        speechSynthesis.speak(msg);
    }

});
