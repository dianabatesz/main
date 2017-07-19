// function reverseString (str) {
// 	 var splitString = str.split("");
// 	 var reverseString = splitString.reverse();
// 	 var joinArray = reverseString.join("");
// 	 return joinArray;
// }

// const answer = reverseString("Hello I am Diana");
// alert(answer)

// REAL CODE IN SLACK 
// function medianArray(list1) {
// 	var sortArray = values.sort(list1);
// 	var half = (values.length/2);
// 	if (list1.length % 2 = 0) {
// 		return values(half);
// 	}
// 	else {
// 		return (values[half - 1] + values[half]) / 2;
// 	}
// 	}
// }
// }

// const list1 = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];
// median(list1)


// INCREASEBPM
// function increaseBPM(obj, x) {
// 	const addBPM = obj.bpm + x;
// 	return addBPM;
// }
// console.log(increaseBPM(heart, 30));

// DECREASE BPM
// function decrease(obj, x) {
// 	const subBPM = obj.bpm -x;
// 	return subBPM;
// }
// console.log(decrease(heart, 30));


// function changeColor(obj, str) {
// 	const color = obj.color = str; 
// 	return color;
// }
// console.log(changeColor(heart, "blue"));
// var heart = {
// 	bpm: 140, 
// 	color: "red"
// }

// function patientStable(obj) { 
// 	const beats = obj.bpm;
// 	if (beats > 0) {
// 		console.log("The patient is stable.");
// 	}
// 	else {
// 		console.log("The patient is not stable.");
// 	}
// }
// (patientStable(heart));

var dog = {
	sound: function dog() {
		alert("woof");
	}
}

var cat = {
	sound: function cat() {
		alert("meow");
	}
}

var cow = {
	sound: function cow() {
		alert("moo");
	}
}

var lamb = {
	sound: function lamb() {
		alert("baaaaa");
	}
}

var bird = {
	sound: function bird() {
		alert("tweet");
	}
}
dog.sound(); 
cat.sound();
cow.sound(); 
lamb.sound(); 
bird.sound();
