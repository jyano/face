PLANS = [
	{name: "Mercury", type: "rock"},
	{name: "Venus", type: "rock"},
	{name: "Earth", type: "rock"},
	{name: "Mars", type: "rock"},
	{name: "Jupiter", type: "gasgiant"},
	{name: "Saturn", type: "gasgiant"},
	{name: "Uranus", type: "gasgiant"},
	{name: "Neptune", type: "gasgiant"}
]
Planets = function () {
	this.planets = $oa(PLANS)
	this.typeToShow = $o("all");
	this.displayAdvancedOptions = $o(false);
	this.addPlanet = function (type) {
		this.planets.push({name: "New planet", type: type})
	}
	this.planetsToShow = ko.pc(function () {// Represents a filtered list of planets
		// i.e., only those matching the "typeToShow" condition
		var desiredType = this.typeToShow()
		if (desiredType == "all") return this.planets()
		return ko.utils.arrayFilter(this.planets(), function (planet) {
			return planet.type == desiredType
		});
	}, this);
	// Animation callbacks for the planets list
	this.showPlanetElement = function (el) {
		if (el.nodeType === 1) {
			$(el).hide().slideDown()
		}
	}
	this.hidePlanetElement = function (el) {
		if (el.nodeType === 1) {
			$(el).slideUp(function () {
				$(el).rm()
			})
		}
	}
}
PLAN = function () {
	$.x('g', 'Plan')
	$.p().A(
			$.lb().A(
					$.cC('displayAdvancedOptions'),
					'Display advanced options'
			)
	)
	$.p().A(
			'Show:',
			$.lb([$.ip()]),
			$.lb([$.ip()]),
			$.lb([$.ip()])
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
	$.p().A(
			$.bt('add rocky plan').b('click: addPlanet.bind($data, "rock")'),
			$.bt('add gas giant').b('click: addPlanet.bind($data, "gasgiant")')
	).b('fadeVisible: displayAdvancedOptions')
	// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
	// Could be stored in a separate utility library
	ok(new Planets())
}
PLANS = [
	{name: "Mercury", type: "rock"},
	{name: "Venus", type: "rock"},
	{name: "Earth", type: "rock"},
	{name: "Mars", type: "rock"},
	{name: "Jupiter", type: "gasgiant"},
	{name: "Saturn", type: "gasgiant"},
	{name: "Uranus", type: "gasgiant"},
	{name: "Neptune", type: "gasgiant"}
]
Planets = function () {
	this.planets = $oa(PLANS)
	this.typeToShow = $o("all");
	this.displayAdvancedOptions = $o(false);
	this.addPlanet = function (type) {
		this.planets.push({name: "New planet", type: type})
	}
	this.planetsToShow = ko.pc(function () {// Represents a filtered list of planets
		// i.e., only those matching the "typeToShow" condition
		var desiredType = this.typeToShow()
		if (desiredType == "all") return this.planets()
		return ko.utils.arrayFilter(this.planets(), function (planet) {
			return planet.type == desiredType
		});
	}, this);
	// Animation callbacks for the planets list
	this.showPlanetElement = function (el) {
		if (el.nodeType === 1) {
			$(el).hide().slideDown()
		}
	}
	this.hidePlanetElement = function (el) {
		if (el.nodeType === 1) {
			$(el).slideUp(function () {
				$(el).rm()
			})
		}
	}
}
 