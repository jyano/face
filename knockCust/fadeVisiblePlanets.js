PLAN = function () {
	$.z().h1('Plan!')
	$.p().A($.lb().A(
					$.cC('displayAdvancedOptions'), 'Display advanced options'
			)
	)
	$.p().A('Show:',
			$.lb([$.ip()]), $.lb([$.ip()]), $.lb([$.ip()])
	)
	/*
	 <p data-bind='fadeVisible: displayAdvancedOptions'>
	 Show:
	 <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
	 <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
	 <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
	 </p>*/
	$.d([$.d([$.d()])])
	/*
	
	 <div data-bind='template: { foreach: planetsToShow,
	 beforeRemove: hidePlanetElement,
	 afterAdd: showPlanetElement }'>
	 <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
	 </div>
	
	 */
	$.p([$.bt(), $.bt()])
	/*
	 <p data-bind='fadeVisible: displayAdvancedOptions'>
	 <button data-bind='click: addPlanet.bind($data, "rock")'>Add rocky planet</button>
	 <button data-bind='click: addPlanet.bind($data, "gasgiant")'>Add gas giant</button>
	 </p>
	 */
	Planets = function () {
		this.planets = ko.oa([
			{name: "Mercury", type: "rock"},
			{name: "Venus", type: "rock"},
			{name: "Earth", type: "rock"},
			{name: "Mars", type: "rock"},
			{name: "Jupiter", type: "gasgiant"},
			{name: "Saturn", type: "gasgiant"},
			{name: "Uranus", type: "gasgiant"},
			{name: "Neptune", type: "gasgiant"}
		]);
		this.typeToShow = ko.o("all");
		this.displayAdvancedOptions = ko.o(false);
		this.addPlanet = function (type) {
			this.planets.push({
				name: "New planet",
				type: type
			})
		}
		this.planetsToShow = ko.pc(function () {
			// Represents a filtered list of planets
			// i.e., only those matching the "typeToShow" condition
			var desiredType = this.typeToShow();
			if (desiredType == "all") return this.planets();
			return ko.utils.arrayFilter(this.planets(), function (planet) {
				return planet.type == desiredType;
			});
		}, this);
		// Animation callbacks for the planets list
		this.showPlanetElement = function (el) {
			if (el.nodeType === 1) $(el).hide().slideDown()
		}
		this.hidePlanetElement = function (el) {
			if (el.nodeType === 1) $(el).slideUp(function () {
				$(el).remove();
			})
		}
	}
// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library
	ko.bh.fadeVisible = {
		init: function (el, valAcc) {
			// Initially set the el to be instantly visible/hidden depending on the value
			var value = valAcc();
			$(el).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
		},
		update: function (el, valAcc) {
			// Whenever the value subsequently changes, slowly fade the el in or out
			var value = valAcc();
			ko.unwrap(value) ? $(el).fadeIn() :
					$(el).fadeOut();
		}
	}
	ok(new Planets())
}
PLAN = function () {
	$.z().h1('Plan!')
	$.p().A($.lb().A(
					$.cC('displayAdvancedOptions'), 'Display advanced options'
			)
	)
	$.p().A('Show:',
			$.lb([$.ip()]), $.lb([$.ip()]), $.lb([$.ip()])
	)
	/*
	 <p data-bind='fadeVisible: displayAdvancedOptions'>
	 Show:
	 <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
	 <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
	 <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
	 </p>*/
	$.d([$.d([$.d()])])
	/*
	
	 <div data-bind='template: { foreach: planetsToShow,
	 beforeRemove: hidePlanetElement,
	 afterAdd: showPlanetElement }'>
	 <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
	 </div>
	
	 */
	$.p([$.bt(), $.bt()])
	/*
	 <p data-bind='fadeVisible: displayAdvancedOptions'>
	 <button data-bind='click: addPlanet.bind($data, "rock")'>Add rocky planet</button>
	 <button data-bind='click: addPlanet.bind($data, "gasgiant")'>Add gas giant</button>
	 </p>
	 */
	Planets = function () {
		this.planets = ko.oa([
			{name: "Mercury", type: "rock"},
			{name: "Venus", type: "rock"},
			{name: "Earth", type: "rock"},
			{name: "Mars", type: "rock"},
			{name: "Jupiter", type: "gasgiant"},
			{name: "Saturn", type: "gasgiant"},
			{name: "Uranus", type: "gasgiant"},
			{name: "Neptune", type: "gasgiant"}
		]);
		this.typeToShow = ko.o("all");
		this.displayAdvancedOptions = ko.o(false);
		this.addPlanet = function (type) {
			this.planets.push({
				name: "New planet",
				type: type
			})
		}
		this.planetsToShow = ko.pc(function () {
			// Represents a filtered list of planets
			// i.e., only those matching the "typeToShow" condition
			var desiredType = this.typeToShow();
			if (desiredType == "all") return this.planets();
			return ko.utils.arrayFilter(this.planets(), function (planet) {
				return planet.type == desiredType;
			});
		}, this);
		// Animation callbacks for the planets list
		this.showPlanetElement = function (el) {
			if (el.nodeType === 1) $(el).hide().slideDown()
		}
		this.hidePlanetElement = function (el) {
			if (el.nodeType === 1) $(el).slideUp(function () {
				$(el).remove();
			})
		}
	}
// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library
	ko.bh.fadeVisible = {
		init: function (el, valAcc) {
			// Initially set the el to be instantly visible/hidden depending on the value
			var value = valAcc();
			$(el).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
		},
		update: function (el, valAcc) {
			// Whenever the value subsequently changes, slowly fade the el in or out
			var value = valAcc();
			ko.unwrap(value) ? $(el).fadeIn() :
					$(el).fadeOut();
		}
	}
	ok(new Planets())
}