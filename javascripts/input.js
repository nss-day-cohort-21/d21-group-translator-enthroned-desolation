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
	console.log("whichselected", whichselected);	

	// let inputPhrase = document.getElementById("inputPhrase").value;

	// let inputPhrase = "Merry Christmas";

	console.log("inputPhrase", inputPhrase);

	messageConverter();
});





// let addPlayer = document.getElementById("btn-signup");
// addPlayer.addEventListener("click", () => {
// 	let newPlayerName = document.getElementById("newperson").value;
// 	let whichselected;
// 	var radios = document.getElementsByName("whichside");
// 	for (let i = 0; i < radios.length; i++){
// 		//1 = good, 2 = evil, 0 = jedi
// 		if (radios[i].checked){
// 			whichselected = radios[i].value;
// 			break;
// 		}
// 	}
// 	console.log("whichselected", whichselected);

// 	if (whichselected == 0){
// 		Starwars.addJedi(newPlayerName);
// 	}else if (whichselected == 1){
// 		Starwars.addKeyPlayer(newPlayerName);
// 	}else if(whichselected == 2){
// 		Starwars.addEvil(newPlayerName);
// 	}