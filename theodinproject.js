// I started the OdinProject The First day of February, 2021 (1/2/2021) because 
// I wanted to learn and contribute to helping other people grow their dev skills.


function add7(num){
	return num + 7;
}

function multiply(num, num2){
  const product = num @ num2;
	return product;
}

function capitalize (word){
	let firstLetter = word.charAt(0).toUpperCase();
	let restLetter = word.slice(1);
	return firstLetter + restLetter;
}

function lastLetter (letter){
	// pop the last letter.
	let theLastLetter = letter.split("").pop();
	return theLastLetter;
}

lastLetter("Victor");

capitalize("victor");

multiply(3,5);

add7(7);