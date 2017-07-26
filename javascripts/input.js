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

	console.log("inputPhrase", inputPhrase);

	// inputPhrase = inputPhrase.toLowerCase();

	console.log("whichselected", whichselected);	

	console.log("inputPhrase.toLowerCase", inputPhrase);

	console.log("messageConverter", messageConverter);

	

	if (whichselected === "french") {
		var theMessage = messageConverter.translateToFrench(inputPhrase);
		console.log("French - theMessage", theMessage);
		document.getElementById("translatorOutput").innerHTML = `${theMessage}`;
	} else if (whichselected === "german") {
		var theMessage = messageConverter.translateToGerman(inputPhrase);
		console.log("German - theMessage", theMessage);
		document.getElementById("translatorOutput").innerHTML = `${theMessage}`;
	} else if (whichselected === "morseCode") {
		var theMessage = messageConverter.translateToMorse(inputPhrase);
		console.log("Morse - theMessage", theMessage);
		document.getElementById("translatorOutput").innerHTML = `${theMessage}`;
	}

});
