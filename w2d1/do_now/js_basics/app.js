// boolean, string, null, number

// const x = 7
// console.log(x)

// let y = 9; 
// y = 10;
// console.log(y)

// let a = 8; 
// let z = a;

// let firstVariable = "Hello World"
// firstVariable = 10; 
// let secondVariable = firstVariable;
// secondVariable = "coding";
// console.log(firstVariable);

// const yourName = "Diana";
// const expression = "Hello, my name is " + yourName;
// console.log(expression);

// function myProduct(x, y) {
// 	const product = x + y; 
// 	return product;
// }

// const answer = myProduct(1, 10); 
// alert(answer);

// let x = 0; 
// while (x<5) {
// 	console.log(x); 
// 	x = x+1;
// }

// for (let i = 0; i <5; i = i + 1) {
// 	console.log(i);
// }

// for (let current = 100; current < 200; current++) {
// 	console.log('Testing ' + current); 
// 	if (current % 7 == 0) {
// 		console.log ('Found it! ' + current); 
// 	}
// }

// for (let current = 0; current <20; current++) {
// 	console.log('Testing ' + current); 
// 	if (current % 2 == 0) {
// 		console.log (current + ' is even');
// 	}
// 	else {
// 		console.log (current + ' is odd');
// 	}
// }

// for (let multiplier = 0; multiplier < 10; multiplier++) {
// 	for (let i = 0; i < 10; i++) {
// 		const product = multiplier * i;
// 		console.log(multiplier + "*" + i + "=" + product);
// 	}
// }

// function assignGrade(score) {
//     if (score > 90) {
//         return 'A';
//     } else if (score > 80) {
//         return 'B';
//     } else if (score > 70) {
//         return 'C';
//     } else if (score > 65) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }

// for (let i = 60; i <= 100; i++) {
// 	const grade = assignGrade(i);
// 	console.log("For " + i + " you got a " + grade);
// }

// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// for (let i=0; i <rainbowColors.length; i++) {
// 	console.log(rainbowColors[i]);
// }

// const topChoices = ['sushi', 'tacos', 'burger', 'cupcakes', 'icecream', 'pizza'] 
// for (let i = 0; i <topChoices.length; i++) {
// 	console.log("My #" + (i + 1)  + " choice is " + topChoices[i]);
// }
// const diana = {
// 	name: "Diana",
// 	age: 15, 
// 	cool: true
// };
// alert(diana.cool)

const me = {
	firstName: "Diana",
	lastName: "Bates",
	age: 15, 
}
console.log(me)
me.favoriteFood = "pizza"; 
console.log(me.favoriteFood)