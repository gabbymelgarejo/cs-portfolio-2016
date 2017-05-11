document.body.onload = function() { // when the document fully loads, execute the code below
	var submitButton = document.getElementById('submit'); // get the enter button
	submitButton.addEventListener('click', function() { // when clicked run code below
		var inpt1 = +document.getElementById('input1').value; // get user input1
		var inpt2 = +document.getElementById('input2').value; // get user input2
		var operation = document.getElementById('operation').value; // get the operation

		if (operation === '+') {
			alert(inpt1 + inpt2);
		}
		if (operation === '-') {
			alert(inpt1 - inpt2);
		} // etc etc.

		if (operation === '*') {
			alert(inpt1 * inpt2);
		}
		if (operation === '/') {
			alert(inpt1 / inpt2);
		}
		if (operation === 'sqrt') {
			alert(Math.pow(inpt1, 1 / inpt2));
		}

		if (operation === 'exponent') {
			alert(Math.pow(inpt1, inpt2));
		}

		return false;
	})
};
