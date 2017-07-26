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
        "santa": "Weihnachstmann",
        "please": "Bitte",
        "enjoy": "genießen Sie",
        "cookies": "die Kekse",
        "dear": "Liebe",
        "mom": "Mama",
        "mother": "Mama",
        "dad": "Papa",
        "father": "Papa",
        "grandchildren": "Enkel",
        "is": "ist",
        "the": "Die",
        "your": "Ihre",
        "those": "Diese",
        "these": "diese",
        "are": "sind",
        "for": "für",
        "still": "immer noch",
        "yet": "immer",
        "terrible": "schrecklich",
        "awful": "schrecklich",
        "I": "Ich",
        "am": "bin",
        "on": "im",
        "vacation": "Urlaub",
        "so": "also bin",
        "drunk": "betrunken",
        "every": "jeden",
        "all": "ganzen",
        "day": "Tag",
        "evening": "Abend",
        "toys": "die Spielzeug",
        "children": "die Kindern",
        "child": "das Kind",
        "tree": "Tannenbaum",
        "snowing": "Schneit",
        "snow": "schnee",
        "hot": "heiße",
        "chocolate": " Schokolade",
        "grandma": "Oma",
        "grandpa": "Opa",
        "reindeer": "das Rentier",
        "his": "seine",
        "hers": "ihres",
        "mine": "meins",
        "sled": "Schlitten",
        "car": "das Auto",
        "home": "Zuhause",
        "church": "Kirche",

    };
    // console.log("spit some german");

    messageConverter.translateToGerman = function(bucket) {
        var splitEnglish = bucket.split(" ");
        // console.log("splitEnglish", splitEnglish);
        var splitGerman = [];
        // console.log("splitGerman", splitGerman);

        splitEnglish.forEach(function(bucket2) {
            // console.log("for each started");
            splitGerman.push(germanWords[bucket2]);
            // console.log("pushed");
        });

        var outputSentence = splitGerman.join(" ");
        return outputSentence;
    };

    return msgGerman;

})(messageConverter);