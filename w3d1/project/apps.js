console.log('Mad Libs'); 

const fillInBlank = function() {
	const text1 = document.getElementById("text1").value;
	const text2 = document.getElementById("text2").value;
	const text3 = document.getElementById("text3").value;
	const text4 = document.getElementById("text4").value;
	const text5 = document.getElementById("text5").value;
	const text6 = document.getElementById("text6").value;
	const text7 = document.getElementById("text7").value;
	const text8 = document.getElementById("text8").value;
	const text9 = document.getElementById("text9").value;
	const text10 = document.getElementById("text10").value;
	const text11 = document.getElementById("text11").value;
	const text12 = document.getElementById("text12").value;
	const para= document.getElementById("para");
	para.innerHTML = "Today I went to the zoo. I saw a(n) " + text1 + " " + text2 + " jumping up and down in its tree. He " +  text3 + " " + text4 + " through the large tunnel that led to its " + text5 + " " + text6 + ". I got some peanuts and passed them through the cage to a gigantic gray " + text7 + " towering above my head. Feeding that animal made me hungry. I went to get a " + text8 + " scoop of ice cream. It filled my stomach. Afterwards I had to " + text9 + " " + text10 + " to catch our bus. When I got home I " + text11 + " my mom for a " + text12 + " day at the zoo.";
	document.getElementById("input").style.visibility="hidden";
}
// const startOver = function {
// }