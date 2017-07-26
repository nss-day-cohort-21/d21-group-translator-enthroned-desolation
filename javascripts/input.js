console.log("input.js");

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

	// let inputPhrase = "Merry Christmas and Happy New Year";

	let inputPhrase = document.getElementById("inputPhrase").value.toLowerCase();

	var charsToRemove = [/\*/g, /@/g, /\(/g, /\)/g, /\!/g, /,/g, /\./g, /;/g, /:/g, /\?/g, /&/g, /\$/g, /%/g];

	for (var i = 0; i < charsToRemove.length; i++) {
		charCut = charsToRemove[i];
		inputPhrase = inputPhrase.replace(charCut, "");
	}

	console.log("inputPhrase", inputPhrase);

	// inputPhrase = inputPhrase.toLowerCase();

	console.log("whichselected", whichselected);	

	console.log("inputPhrase.toLowerCase", inputPhrase);

	console.log("messageConverter", messageConverter);

	

	if (whichselected === "french") {

		var theMessage = messageConverter.translateToFrench(inputPhrase);
		console.log("French - theMessage", theMessage);
		document.getElementById("translatorOutput").innerHTML = `${theMessage}`;

		var msg = new SpeechSynthesisUtterance();
		msg.text = theMessage;
		msg.lang = 'fr';
		speechSynthesis.speak(msg);


	} else if (whichselected === "german") {

		var theMessage = messageConverter.translateToGerman(inputPhrase);
		console.log("German - theMessage", theMessage);
		document.getElementById("translatorOutput").innerHTML = `${theMessage}`

		var msg = new SpeechSynthesisUtterance();
		msg.text = theMessage;
		msg.lang = 'de';
		speechSynthesis.speak(msg);


	} else if (whichselected === "morseCode") {

        var theMessage = messageConverter.translateToMorse(inputPhrase);
        console.log("Morse - theMessage", theMessage);
        document.getElementById("translatorOutput").innerHTML = `${theMessage}`;

        var theNewMessage = theMessage.replace(/\./g, " dit ");
        theNewMessage = theNewMessage.replace(/-/g, " dah ");
        console.log("not sure how this broke..", theNewMessage);
        
        var msg = new SpeechSynthesisUtterance();
        msg.voiceURI = "Google UK English Female";
        msg.text = theNewMessage;
        msg.lang = "en-GB";
        msg.rate = 1; // 0.1 to 10

        speechSynthesis.speak(msg);
    }

});



// var msg = new SpeechSynthesisUtterance();
// var voices = window.speechSynthesis.getVoices();
// msg.voice = voices[10]; // Note: some voices don't support altering params
// msg.voiceURI = 'native';
// msg.volume = 1; // 0 to 1
// msg.rate = 1; // 0.1 to 10
// msg.pitch = 2; //0 to 2
// msg.text = theMessage;
// msg.lang = 'en-US';

// msg.onend = function(e) {
//   console.log('Finished in ' + event.elapsedTime + ' seconds.');
// };
