var XOR = function(arr1, arr2) {
	return arr1
					.map((e,i) => ( e && !arr2[i] ) || ( !e && arr2[i] ))
					.filter(e => e === true)
					.length > 0;
};

var checkValidation = function(temp, binResults) {
	let valid = true;
	if(binResults.length === 0)
		return valid;

	binResults.forEach(function(e) {
		if(!XOR(e, temp))
			valid = false;
	}, this);

	return valid;
};


var bananas = function(s) {
  // Your code here!
  console.log(s);

  let word = ["b", "a", "n", "a", "n", "a"];
  let input = s.split('');
	let results = [];
  let binResults = [];
  
	//@TODO: forEach
	let a = input.length;
	let firstLetters = [];

	// find how many first letter
	input.forEach(function(e, i) {
		if(e === word[0]) 
			firstLetters.push(i);
	}, this);

	if(firstLetters.length === 0) {
		return [];
	}


	do {
		let temp = [];
		let index = 0;
		input.map((e, i, arr) => {
      if(word[index] === e && i != a && i >= firstLetters[firstLetters.length - 1]) {
        temp.push(1)
        index++;
      } else {
        temp.push(0);
      }
		});
		
		let isValid = checkValidation(temp, binResults) && index === word.length ? true : false;
		if(isValid) binResults.push(temp);
		
		a = a - 1;
		if(a === 0) {
			firstLetters.pop();
			if(firstLetters.length > 0) {
				a = input.length;
			}
		}
	} while (a !== 0 && firstLetters.length !== 0);

	console.log(binResults);

	results = binResults.map(e => {
		return e.map((d,i) => {
			return d === 1 ? input[i] : '-';
		}).join('');
	});

	console.log(results);

  return results;
};

bananas("banananana");

module.exports = bananas;
