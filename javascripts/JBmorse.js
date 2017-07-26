console.log("JBmorse.js");

// let inputPhrase = "pink";

var messageConverter = (function(taco) {

debugger;

	let alphabet = {
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "...",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",};

    console.log("It just called the function on the morse page");
    
	taco.translateToMorse = function(phrase) {

    //First, you have to slice the object.
    //Second, slice the words in order to separate all of the letters. 
    //Third, do your conversion into morse. 
    //Fourth jam letters back together.
    //Fifth jam words back together as well.

        console.log("we are slicing the phrase into words");
        console.log("Input running here", phrase);
        
        var splitInput = phrase.split("");

        console.log("splitInput", splitInput);

        var splitMorse = [];

        console.log("splitMorse", splitMorse)

        splitInput.forEach(function(letter) {
            console.log("letter", letter);
            console.log("alphabet[letter]", alphabet[letter]);
            splitMorse.push(alphabet[letter]);
            console.log(splitMorse);
            
        });

        outputMorse = splitMorse.join("");
        console.log("outputMorse", outputMorse);

        return outputMorse;
        
       	}; 
        

	console.log("we're going to translate to Morse");
    return taco;
        


})(messageConverter || {});

messageConverter.translateToMorse(inputPhrase);

//First, you have to slice the object.
//Second, slice the words in order to separate all of the letters. 
//Third, do your conversion into morse. 
//Fourth jam letters back together.
//Fifth jam words back together as well.