var messageConverter = (function(originalMessageConverter) {

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
        "z": "--..",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "0": "-----"};

	messageConverter.translateToMorse = function(phrase) {
          
        var splitInput = phrase.split("");

        var splitMorse = [];
  
        splitInput.forEach(function(letter) {

            splitMorse.push(alphabet[letter]);
            
        });

        outputMorse = splitMorse.join(" ");
        
        return outputMorse;
        
       	}; 

    return originalMessageConverter;

})(messageConverter);




