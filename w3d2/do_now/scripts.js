console.log('hello');
let counter = 0;

const clicky = function() {
	var para = document.getElementById("counter"); 
	const box = document.getElementById("box"); 
	if (counter % 2 == 0) {
		box.setAttribute("style", "background-color: teal");
	}
	else {
		box.setAttribute("style", "background-color: red");
	}
	para.innerHTML = counter++;
}