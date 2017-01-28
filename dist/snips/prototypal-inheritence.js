"use strict";

// Factory method

var Animal = function Animal(type, name, isveg) {

  var animal = {};

  animal.type = type; // animal.type = (type) ? type : 'carnivore';
  animal.name = name;
  animal.isveg = isveg;

  animal.getDetails = function () {
    console.log(this.type + "," + this.name + "," + this.isveg);
  };

  return animal;
};

var cat = Animal('carnivore', 'cat', false); // Returns new obj


// Constructor method

var AnimalConstructor = function AnimalConstructor(type, name, isveg) {
  this.type = type;
  this.name = name;
  this.isveg = isveg;

  this.getDetails = function () {
    console.log(this.type + "," + this.name + "," + this.isveg);
  };
};

AnimalConstructor.prototype.krish = "hello"; // Can be extended

var dog = new AnimalConstructor('carnivore', 'dog', false); // Returns this
console.log(dog instanceof AnimalConstructor);

// Difference between factory and constructor : Factories cannoted be extended
// but constructor can be extended using protoype
// And factory is just an assignment so it is not instanceof parent


// Prototype method

var AnimalPrototype = function AnimalPrototype() {
  this.iamAnimal = true;
}; // An empty function
AnimalPrototype.prototype.name = 'No name';
AnimalPrototype.prototype.type = 'No type';
AnimalPrototype.prototype.isveg = true;
AnimalPrototype.prototype.getDetails = function () {
  console.log(this.name + "," + this.type + "," + this.isveg + "," + this.iamAnimal);
};

var Herbivore = function Herbivore(name) {
  this.name = name;
  this.type = 'Herbivore';
};
Herbivore.prototype = new AnimalPrototype(); // Prototypal inheritence

console.log(Herbivore);

var Carnivore = function Carnivore(name) {
  this.name = name; // We can override
  this.type = 'Carnivore';
  this.isveg = false;
  this.iamAcarnivore = 'hehe';
};

Carnivore.prototype = new AnimalPrototype();

//console.log(Carnivore);


var cat = new Carnivore('cat'); // Creating instance
console.log(cat);
cat.getDetails(); // "cat,Carnivore,false,true"

var rabbit = new Herbivore('rabbit');
rabbit.getDetails(); // "rabbit,Herbivore,true,true"