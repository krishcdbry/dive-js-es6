

/*

Every function will have __proto__ and prototype

Example : function one () {};

Here :
	1. one.__proto__  // function () {}
	2. one.prototype  // Object with constructor function one()

one.prototype :
	A function's prototype is an object but with an extra property called
	{
		constructor: funname(),
		__proto__ : Object
	}

one.proto :
	function.__proto == Object ... Object.__proto__ ... null
*/

var one = function () {
	// I am just a constructor function
}

console.log(one.__proto__);   // [Function]  function () {}
console.log(one.prototype);   // {}   -> An object with {constructor: one(), __proto__: Object}


/*
-----------------------------------------------------------------------------
-----------------------------------------------------------------------------
*/

// In JavaScript there is no concept called class but we can do with Constructor function

var Car = function(name) {
	console.log("Hey I am Car");
	this.name = name;
}

Car.prototype.km = 0;

Car.prototype.drive = function (drive) {
	this.km += drive;
}

var car1 = new Car('BMW');
console.log(car1);    // { name: 'BMW' }

/*
It effectively does 3 things here : When we use 'new'
1. It allocates memory to the car1
2. And then it calls the constructor ---> Car.call(car1, 'BMW'); Means it is passing the 'this' of the car1 with 'BMW' name
3. It assigned the car1.__proto__ = Car.prototype (Allocated the prototype)
*/

// TIP:  'this' is the context object

var car2 = new Car('AUDI');
console.log(car1);    // { name: 'AUDI' }

// As we said according to the three steps, both car1 & car2 has shared the Car's prototype

car1.drive(100);
console.log(car1.km);   // 100
console.log(car2.km);  // 0

/*
 As we observed here the prototype is shared but in JS get is deep and set is shallow
While getting any method it keeps going deep to it prototype but while setting it sets
only the upper level
*/

console.log(car1.hasOwnProperty('km'));  // True  (This is true because we set the this.km += dirve while calling the drive method)
console.log(car2.hasOwnProperty('km'));   // False  (It is in prototype but not it's own property)
console.log(car1.hasOwnProperty('drive'));  // False (It is in the prototype but no it's own method)
