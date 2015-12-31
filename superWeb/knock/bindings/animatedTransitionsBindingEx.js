planets= [
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
	this.planets = $oA(planets);
	this.typeToShow = $o("all");
	this.displayAdvancedOptions = $o(false);
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
PLANETS = CUSTOMBINDING = function () {
	 
	$.p().A($.lb().A($.cb().ch$('displayAdvancedOptions'),
	 'Display advanced options'))
	$.p().A('Show:',
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
			$.bt('add rocky plan')
					.b('click: addPlanet.bind($data, "rock")'),
			$.bt('add gas giant')
					.b('click: addPlanet.bind($data, "gasgiant")')
	).b('fadeVisible: displayAdvancedOptions')
	// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
	// Could be stored in a separate utility library
	ok(new Planets())
	
	 
}
PLAN = function () {
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
// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library
	ok(new Planets())
}

Ms = function (m) {
	return {m: $o(m || '')}
}
//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html
Prod = function (n, rating) {
//return {n: n, uRatg: ko.o(ratg || null)}
	this.name = n;
	this.userRating = ko.o(rating || null)
}
Feed = function () {
	this.ms = $o('pf!')
}
KOCL = function () {
	Per = function (n, ch) {
		var per = this
		per.n = n
		per.ch = ko.oa(ch)
		per.A = function () {
			per.ch.push('new ch')
		}
	}
	peep = [
		new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
		new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
		new Per("Charles", ["Cayenne", "Cleopatra"])
	]
	$.ul().e$('peep').A(
			$.li().A(
					$.d([
						$.sp().t$('n'), 'has',
						$.sp().t$('ch().length'),
						'children &nbsp;',
						$.a('New').ch$('A')]),
					$.ul().e$('ch').A(
							$.li([$.sp().t$(), $.sp().vs$('$root.showDT').A(
									' (child rendered at ',
									$.sp().t$('$Dt().getSeconds()'), ')')]))))
	$.cb().ch$('showDT').a2($.lb('Show time:'))
	ok({peep: peep, showDT: $o()})
}
VM = function () {
	this.feed = new Feed();
	this.feed2 = new Feed();
	this.VM2 = {ms: $o("!")}
}
//$.ul().bE('mDateTime').A( $.li().A( $.ul() ) )
//   <li>
// <ul data-bind="foreach: $root.matter.index.type()[$data]">
//  <li>
//components

VM = function (p) {
	this.somePop = p.smKey
}
VM.prototype.doSmg = function () {
}
AppVM = function () {
	this.items = [
		{
			binding: 'vs',
			desc: 'causes the assoc  DOM el to become hd or vs according to the v you pass to the bd'
		},
		{
			binding: 't',
			desc: 'causes the assoc DOM el to display the text value of your pam.'
		},
		{
			binding: 'cm',
			desc: 'injects a spec cm into an el, and optly passes pams to it.'
		}
	]
}
Feed = function () {
	this.ms = ko.o('pf!')
}
Ms = function (m) {
	return {m: ko.o(m || '')}
}
function tasks() {
	$task = function (d) {
		return {t: $o(d.t), iD: $o(d.iD)}
	}
	tasks = $oa([
		new Task('Find new desktop background', true),
		new Task('Put shiny stickers on laptop', false),
		new Task('Request more reggae music in the office', true)
	])
	$task = function (tt, done) {
		return {
			tt: ko.o(tt),
			done: ko.o(done)
		}
	}
	Task = function (title, done) {
		this.tt = this.title = $o(title)
		this.done = $o(done)
	}
}
Per = function (n, ch) {
	this.n = n
	this.ch = $oa(ch)
	this.A = function () {
		this.ch.p('new ch ' + $r())
	}
}
 
 