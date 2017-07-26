console.log("AWgerman.js");

// let inputPhrase = "best wishes";


var messageConverter = (function(msgGerman) {
    // debugger;

    let germanWords = {
        "merry": "fröhlich",
        "christmas": "Weihnachten",
        "and": "und",
        "happy": "glücklich",
        "new": "neu",
        "year": "Jarhe",
        "from": "von",
        "my": "meiner",
        "family": "Familie",
        "to": "zu",
        "your": "deinem",
        "holiday": "Urlaub",
        "wishes": "wünscht sich",
        "best": "besten",
        "cheer": "jubeln",
        "health": "gesundheit",
        "go": "gehen",
        "roast": "braten",
        "a": "eine",
        "an": "eine",
        "chestnut": "Kastanie",
        "Santa": "Weihnachstmann",
        "Santa Claus": "Weihnachstmann",
        "Please": "Bitte",
        "enjoy": "genießen Sie",
        "the cookies": "die Kekse",
        "Dear": "Liebe",
        "mom and dad,": "Mama und Papa,",
        "grandchildren": "Enkel",
        "is": "ist",
        "the": "Die",
        "are": "sind",
        "still": "immer noch",
        "yet": "immer",
        "terrible": "schrecklich",
        "awful": "schrecklich",
        "I": "Ich",
        "am": "bin",
        "on": "im",
        "vacation": "Urlaub",
        "so I am": "Also bin ich",
        "drunk": "betrunken",
        "every": "jeden",
        "all": "ganzen",
        "day": "Tag",
        "evening": "Abend",

    };
    console.log("spit some german");

    messageConverter.translateToGerman = function(bucket) {
        var splitEnglish = bucket.split(" ");
        console.log("splitEnglish", splitEnglish);
        var splitGerman = [];
        console.log("splitGerman", splitGerman);

        splitEnglish.forEach(function(bucket2) {
            console.log("for each started");
            splitGerman.push(germanWords[bucket2]);
            console.log("pushed");
        });

        var outputSentence = splitGerman.join(" ");
        return outputSentence;
    };

    return msgGerman;

})(messageConverter);