/*

Modular JavaScript :
	1. Self contained module
		- Everything to do with module is in that module
		- No global variables
		- A module should manage only one thing if it does more then it need to be splitted up
	2. Seperation of concerns  - Like bindinds, retrieving DOM
	3. No Code repetation
	4. Efficient DOM Usage
	5. No memory leaks
*/

// Example

var personModule = {
	name : 'Person',
	age: 20,
	setName : ((name) => {
		this.name = name;
	}),
	getName : (() => {
		console.log(this.name);
	}),
	setAge : ((age) => {
		this.age = age;
	}),
	getAge : ((age) => {
		console.log(this.age);
	}),
	getPersonDetails : (() => {
		console.log(`Hey I am ${this.name} and I am ${this.age}`);
	})
}

// If you observe above my Object literal Pattern (Modular Pattern): Which is my personModule Have properties and getters, setters according so normally these method were accessble to others so they are called API's

personModule.setName('Mohana Krishna');
personModule.setAge(24);
personModule.getPersonDetails();   // Hey I am Mohana Krishna and I am 24


personModule.setName('Krishcdbry');
personModule.setAge(21);
personModule.getPersonDetails();   // Hey I am Mohana Krishna and I am 24
