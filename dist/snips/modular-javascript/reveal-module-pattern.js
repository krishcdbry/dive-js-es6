'use strict';

/*

So now we can write a simple modulear pattern example

*/

(function () {
	'use strict';

	var person = {
		name: 'No name',
		init: function init() {
			person.cacheDOM(); // We can cache all the DOM elements we need
			person.bindEvents(); // We can attaching the events to the elements in this
			person.render(); // Simply render them
		},
		cacheDom: function cacheDom() {
			// this.$nameElem = document.getElementById('name-input')
			// Some DOM related stuff here
		},
		bindEvents: function bindEvents() {
			// this.$nameElem.addEventListener('click', this.doSomething.bind(this));
			// Only binding events
		},
		render: function render() {
			// Only rendering operating.... adding elements to DOM
		},
		doSomething: function doSomething(e) {
			console.log(e.target);
			// And the remaining stuff
		},
		setName: function setName(name) {
			person.name = name;
		},
		getName: function getName() {
			console.log(person.name);
		}
	};

	person.setName('Krishcdbry');
	person.getName();

	// Here we are doing stuff but all the methods in person is getting exposed and I don't to expose all my API methos like cacheDOM, bindEvents, render etc.. So we can follow revealing module pattern
})();

// This we can write in more awesome way in Pure JS


var person = function () {
	'use strict';

	function _cacheDOM() {
		// Private method
	}

	function _init() {
		// Private method
	}

	function setName(name) {
		this.name = name;
	}

	function getName() {
		console.log('' + this.name);
	}

	return {
		setName: setName,
		getName: getName
	};
}();

/* Here if we observe I am returning only 2 months which are accessble from outside
and remaning stuff were encapsulated (Abstraction layer)
*/

person.setName('Krishcdbry');
person.getName();