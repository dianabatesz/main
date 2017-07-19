console.log('Welcome to the Game')
console.log('Earth has been attacked by a horde of aliens! You are the captain of the USS Spaceship on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers. Your ship begins the battle with 100 health. If your ships health go down to zero, the game is over. If you destroy all the alien ships, the game is over. Start out with six alien ships.The aliens one weakness is that they are too logical and only attack one at a time. Silly aliens.');

let opening= prompt('What is your ship name?');
console.log(opening);

alert('Let the game begin! Good Luck!')

var you = {
	name: opening,
	health: 100, 
	attackdamage: 20,
	alive: true, 
	// reset: function() {
	// 	this.youhealth = ; 
	// 	this.alive = ;
	// }
}

const alien1 = {
	name: "Alien1",
	health: 20,
	attackdamage: 20,
	alive: true,
	// attack: function(USS) {
	// 	enemy.health = enemy.health - this.attackDamage;
	// 	console.log("Alien1 is attacking " + USSAllen.name);
	// }
}
const alien2 = {
	name: "Alien2",
	health: 20,
	attackdamage: 10,
	alive: true,
	// attack: function(USS) {
	// 	enemy.health = enemy.health - this.attackDamage;
	// 	console.log("Alien1 is attacking " + USSAllen.name);
	// }
}

const alien3 = {
	name: "Alien3",
	health: 20,
	attackdamage: 10,
	alive: true,
	// attack: function(USS) {
	// 	enemy.health = enemy.health - this.attackDamage;
	// 	console.log("Alien1 is attacking " + USSAllen.name);
	// }
}

const alien4 = {
	name: "Alien4",
	health: 20,
	attackdamage: 5,
	alive: true,
	// attack: function(USS) {
	// 	enemy.health = enemy.health - this.attackDamage;
	// 	console.log("Alien1 is attacking " + USSAllen.name);
	// }
}

const alien5 = {
	name: "Alien5",
	health: 20,
	attackdamage: 5,
	alive: true,
	// attack: function(USS) {
	// 	enemy.health = enemy.health - this.attackDamage;
	// 	console.log("Alien1 is attacking " + USSAllen.name);
	// }
}

const alien6 = {
	name: "Alien6",
	health: 20,
	attackdamage: 5,
	alive: true,
	// attack: function(USS) {
	// 	enemy.health = enemy.health - this.attackDamage;
	// 	console.log("Alien1 is attacking " + USSAllen.name);
	// }
}

const ships = [alien1, alien2, alien3, alien4, alien5, alien6]
//ROUND 1//
//YOU ATTACK ALIEN//
const function1 = function() {
	let whatShip= prompt('What ship would you like to attack?');
	const alienAttacks = ships[Math.floor(Math.random() * ships.length)];
	const ourTurn = function() {
		console.log(whatShip);
		if (whatShip === "1") {
			alien1.health = (alien1.health - you.attackdamage);
			alert("The health of Alien 1 is " + alien1.health);
		} 
		else if (whatShip === "2") {
			alien2.health = (alien2.health - you.attackdamage);
			alert("The health of Alien 2 is " + alien2.health);
		}

		else if (whatShip === "3") {
			alien3.health = (alien3.health - you.attackdamage);
			alert("The health of Alien 3 is " + alien3.health);
		}

		else if (whatShip === "4") {
			alien4.health = (alien4.health - you.attackdamage);
			alert("The health of Alien 4 is " + alien4.health);
		}

		else if (whatShip === "5") {
			alien5.health = (alien5.health - you.attackdamage);
			alert("The health of Alien 5 is " + alien5.health);
		}

		else if (whatShip === "6") {
			alien6.health = (alien6.health - you.attackdamage);
			alert("The health of Alien 6 is " + alien6.health);
		} 
		else {
			alert('Restart with a number 1 through 6');
		}
	}
	ourTurn();
	const aliensTurn = function() {
		if (alienAttacks == alien1) {
			alert("Alien 1 attacked you. You now have " + (you.health - alien1.attackdamage) + " health remaining.");
		}
		else if (alienAttacks == alien2) {
			alert("Alien 2 attacked you. You now have " + (you.health - alien2.attackdamage) + " health remaining.");
		}
		else if (alienAttacks == alien3) {
			alert("Alien 3 attacked you. You now have " + (you.health - alien3.attackdamage) + " health remaining.");
		}
		else if (alienAttacks == alien4) {
			alert("Alien 4 attacked you. You now have " + (you.health - alien4.attackdamage) + " health remaining.");
		}
		else if (alienAttacks == alien5) {
			alert("Alien 5 attacked you. You now have " + (you.health - alien5.attackdamage) + " health remaining.");
		}
		else if (alienAttacks == alien6) {
			alert("Alien 6 attacked you. You now have " + (you.health - alien6.attackdamage) + " health remaining.");
		}
	}
	aliensTurn()
	you.health = you.health - alienAttacks.attackdamage;

	//in between each round//
	const deadAlien1 = function() {
		if (alien1.health === 0) {
			alert("You killed Alien 1"); 
		}
	}
	deadAlien1();
	const deadAlien2 = function() {
		if (alien2.health === 0) {
			alert("You killed Alien 2");
		}
	}
	deadAlien2();
	const deadAlien3 = function() {
		if (alien3.health === 0) {
			alert("You killed Alien 3");
		}
	}
	deadAlien3();
	const deadAlien4 = function() {
		if (alien4.health === 0) {
			alert("You killed Alien 4");
		}
	}
	deadAlien4();
	const deadAlien5 = function() {
		if (alien5.health === 0) {
			alert("You killed Alien 5");
		}
	}
	deadAlien5();
	const deadAlien6 = function() {
		if (alien6.health === 0) {
			alert("You killed Alien 6");
		}
	}
	deadAlien6();
	
	ships.splice(whatShip);

	const condition = function() {
		if (alien1.health <= 0 && alien2.health <= 0 && alien3.health <= 0 && alien4.health <= 0 && alien5.health <= 0 && alien6.health <= 0) { 
			alert('Congratulations! You have beaten the horde of aliens and have saved planet Earth!');
			throw "exit";

		}
		else if (you.health <= 0) { 
			alert("KA BOOM! You have been overcome by the horde of aliens!");
			throw "exit";
		}
		else if (you.health > 0) {
			alert('Onto the next round!');
			console.log("Your health is " + you.health);
			console.log("The health of Alien 1 is " + alien1.health); 
			console.log("The health of Alien 2 is " + alien2.health);
			console.log("The health of Alien 3 is " + alien3.health);
			console.log("The health of Alien 4 is " + alien4.health);
			console.log("The health of Alien 5 is " + alien5.health);
			console.log("The health of Alien 6 is " + alien6.health);
		}
	}
	condition();
	function1();
}
function1();