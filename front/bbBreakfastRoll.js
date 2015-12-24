Storage = function (name) {
	return $C({
		localStorage: new Bb.LocalStorage(name)
	})
}
$tp = window['$tp'] || {}
ROLL = function () {
	bbLocStorPLUG()
	store = $store('rcs')
	RecipeM = _M()
	RecipesC = _C({})
	
	
	Form = _V({
		tag: 'form',
		__: function () {this.ren()},
		ren: function () {
			this.$el.E(
					$.ip().val('name').id('name'),
					$.ip().val('ingredients')
							.id('ingredients'),
							 $.bt('submit'),
					$.bt('ok')
			)
			return this
		}
	})
	
	Index = _V({
		tp: function (ob) {
			var html = $.sp()
			html.A(count(ob))
			return html
			function count(ob) {
				return $.h1().A('there are ' + ob.num + ' recipes')
			}
		},
		initialize: function () {
			$l('index  init..')
			this.recipes = store
			this.recipes.on('all', this.ren, this)
			this.recipes.fetch()
		},
		ren: function () {
			// pass the view itself this time..
			$indexEl = this.tp({
				num: _.z(store)
			})//$tp[this.tp](this)
			this.$el.A($indexEl)
			var form = Form().ren()
			//this.$('.recipes').A(form.el)
			$('#root').A(form.el)
			return this
		}
	})
	$.d().id('breakfast-roll').K('root').C('o').A('loading...')
	$('#breakfast-roll').A(
			$.h1('Hi and welcome to BreakfastRoll Recipes!'),
			$.p().A($.a('"intro" (anchor tag)')),
			$.d().id('ct').C('b').A('.. #ct (the container) ..')
	)
	Router = $indexRoute($('#ct'), function () {
		$('#ct').A(
				Index({num: _.z(st)}).ren().$el
		)
	})
	Bb.h.start()
}
$indexRoute = function ($el, fn, add) {
	return $R({
		rts: {'': '_'},
		_: function (ev) {$l('router: ix page')
			$($el).E()
			fn(ev)
		}})}



$index = function ($el, arr) {
	var fn = function () {
		if (A(arr)) {
			_.e(arr, function (el) {
				$el.A(el)
			})
		}
	}
	var Router = $indexRoute($el, fn)
	return Router
}

ROLL = JUSTENDINGAT53_59 = function () {
	bbLocStorPLUG()
	Recipe = _M()
	Recipes = _C({
		localStorage: store = $store('recipes')
	})
	Index_ = _V({
		_: function () {
			var vw = this
			var rcs = vw.rcs = store
			rcs.on('all', vw.ren, vw)
			rcs.fet()
		},
		ren: function () {
			var vw = this
			vw.$el.E($.d([
						$.h1().A('there are ' + _.z(store) + ' recipes'),
						$.d().K('recipes').A('.. recipes will go here')
					]).C('g')
					//	$.h1('Hi and Welclcome to breakfast rollsz!/'),
					//	$.p().A($.a('"intro" anchor')),
					//	$.d().id('ct').C('b').A('.. #ct (the container) ..')
			)
			var f = Form_().ren().$el
			var rcs = vw.$('.rcs')
			recipes.A(f.el)
			// pass the view itself this time..
			// $indexEl = this.tp({num: _.z(store)})//$tp[this.tp](this)
			//	this.$el.A($indexEl)
			//	var form = Form().ren()
			//this.$('.recipes').A(form.el)
			//$('#root').A(form.el)
			return vw
		}
	})
	Form = _V({
		tag: 'form',
		_: function () {
			var vw = this
			vw.recs = Recs()
			vw.recs.on('all', vw.ren, vw)
			vw.recs.fet()
		},
		ev: {'mit': 'mit'},
		mit: function (ev) {
			$.pD(ev)
			Rec.create({
				name: this.$('#name').V(),
				name: this.$('#ing').V()
			}, function () {
			})
		},
		ren: function () {
			var vw = this
			var $d = $.d().C(
					$r()
			).css({padding: 10, margin: 10})
			vw.$el.E($d)
			$d.A(
					'name: ', $.ip().pH('name').id('name'),
					' ingredients : ', $.ip().pH('ingredients').id('ingredients'))
			$('<button type="submit">').A('mit').a2($d)
			$.hr().a2($d)
			return vw}})
	
	$.d().id('#breakfast-rolls').css({padding: 20, margin: 20}).C('o').A('loading .... .... ..')
	Router = $R({
		initialize: function () {$l('router init')},
		routes: {'': '_'},
		_: function (ev) {
			$l('router index')
			$('#breakfast-rolls').C('r').E(
					Index().ren().el).C('y')
		}
	})
	Bb.h.start()
}
function rollSolvedFromGithub() {
	//https://github.com/ngauthier/intro-to-backbone-js/blob/master/app/demo/solved.html
	store = new Store("recipes")
	////
	Recipe = M$({});
	Recipes = C$({localStorage: store})
	Index = V$({
		template: template('index'),
		initialize: function () {
			this.rcs = new Rcs();
			this.rcs.on('all', this.ren, this);
			this.rcs.fetch();
		},
		ren: function () {
			this.$el.h(this.template(this));
			this.rcs.e(this.addRc, this);
			var form = new Form({cl: this.rcs});
			this.$el.A(form.ren().el);
			return this;
		},
		addRecipe: function (recipe) {
			var view = new Rc({model: rc});
			this.$('.rcs').A(view.ren().el);
		},
		count: function () {
			return this.recipes.length;
		}
	})
	Recipe = V$({
		className: 'well',
		template: template('recipe'),
		events: {
			'click button': 'delete'
		},
		ren: function () {
			this.$el.h(this.template(this));
			return this;
		},
		name: function () {
			return this.md.g('name');
		},
		ingredients: function () {
			return this.md.g('ings');
		},
		delete: function () {
			this.md.destroy();
		}
	})
	Form = $V({
		tagName: 'form',
		className: 'form-horizontal',
		template: template('form'),
		events: {
			'submit': 'add'
		},
		ren: function () {
			this.$el.html(this.template(this));
			return this;
		},
		add: function (event) {
			event.preventDefault();
			this.cl.create({
				name: this.$('#name').val(),
				ingredients: this.$('#ings').val()
			})
			this.ren();
		}
	})
	boot = function (ct) {
		$R({rts: {"": "ix"},
			_: function (ops) {this.el = ops.el},
			ix: function () {this.$el.E( Index_().ren().el ) }
		})
		({el: $(ct)})
		
		Bb.h.start();
	}
	SOLVED = function () {
		
		/*
		
		 $.d().K('container').A(
		 $.d().K('hero-unit').A(
		
		 )  
		
		
		 $.h1().('Breakfast Roll Recipes')
		
		 $('<p>git clone https://github.com/ngauthier/intro-to-backbone-js.git</p>),
		 $('<p><a href="http://intro-to-backbone-js.herokuapp.com/"> http://intro-to-backbone-js.herokuapp.com/ </a></p>')
		 <p><a href="index.html">View unsolved version</a></p>
		 </div>
		 <div class='row'>
		 <div class='span12' id='breakfast-roll'>
		 Loading...
		 </div>
		 </div>
		 </div>
		
		 <script type="text/x-mustache-template" id="index-template">
		 <h2>There are {{ count }} recipes</h2>
		 <div class='recipes'></div>
		 </script>
		 <script type="text/x-mustache-template" id="recipe-template">
		 <h3>{{ name }}</h3>
		 <p>{{ ingredients }}</p>
		 <p>
		 <button class='btn btn-danger'>Delete</button>
		 </p>
		 </script>
		 <script type="text/x-mustache-template" id="form-template">
		 <legend>Add a recipe</legend>
		 <fieldset>
		 <div class='control-group'>
		 <label class='control-label' for='name'>Name</label>
		 <div class='controls'>
		 <input type='text' class='input-xlarge' id='name'>
		 </div>
		 </div>
		 <div class='control-group'>
		 <label class='control-label' for='ingredients'>Ingredients</label>
		 <div class='controls'>
		 <input type='text' class='input-xlarge' id='ingredients'>
		 </div>
		 </div>
		 <div class="form-actions">
		 <button type="submit" class="btn btn-primary">Add Recipe</button>
		 </div>
		 </fieldset>
		
		 */
		boot($('#breakfast-roll'))
	}
	function backupHMTL() {
		
		/*
		 <div class='container'>
		 <div class='hero-unit'>
		 <h1>Breakfast Roll Recipes</h1>
		 <p>git clone https://github.com/ngauthier/intro-to-backbone-js.git</p>
		 <p><a href="http://intro-to-backbone-js.herokuapp.com/">
		 http://intro-to-backbone-js.herokuapp.com/
		 </a></p>
		 <p><a href="index.html">View unsolved version</a></p>
		 </div>
		 <div class='row'>
		 <div class='span12' id='breakfast-roll'>
		 Loading...
		 </div>
		 </div>
		 </div>
		
		 <script type="text/x-mustache-template" id="index-template">
		 <h2>There are {{ count }} recipes</h2>
		 <div class='recipes'></div>
		 </script>
		 <script type="text/x-mustache-template" id="recipe-template">
		 <h3>{{ name }}</h3>
		 <p>{{ ingredients }}</p>
		 <p>
		 <button class='btn btn-danger'>Delete</button>
		 </p>
		 </script>
		 <script type="text/x-mustache-template" id="form-template">
		 <legend>Add a recipe</legend>
		 <fieldset>
		 <div class='control-group'>
		 <label class='control-label' for='name'>Name</label>
		 <div class='controls'>
		 <input type='text' class='input-xlarge' id='name'>
		 </div>
		 </div>
		 <div class='control-group'>
		 <label class='control-label' for='ingredients'>Ingredients</label>
		 <div class='controls'>
		 <input type='text' class='input-xlarge' id='ingredients'>
		 </div>
		 </div>
		 <div class="form-actions">
		 <button type="submit" class="btn btn-primary">Add Recipe</button>
		 </div>
		 </fieldset>
		 */
	}
}
function watchFrom2939to11120() {
//https://www.youtube.com/watch?v=PqtYcHyyWJA
// Introduction to Backbone.js by  Nick Gauthier
// BreakfastRoll Recipe Database
//project: just a recipe database for breakfast roles
// recipes have only name, ingredients list (but we'll cheat and make them both strings.. should be straightforward)
// goal:
//user can add/delete recipes
//use local storage
	//NOT edit/update, just create, distroy, list and SHOW
	//HAS A LEGIT REPO TO CLONE IF U WANT
	//(THIS IS DITPAGE WITH ONLY MESSAGES, BUT WITH A DELETE BT)
	//uses TWITTER BS
	//uses custom CSS
//nothing 3000
// 'COLLECTION VW PATTERN'
	//9 deps DONT LISTEN
	//10 model
	//1430 coll
//1708 TEMPLATES
//1619 DEFERREDS 
//3:40 rtr
//5:20 vw
// FALSE STARTS 2939 'ive got the code here'///////////////////////
// REAL START: 3013: 'this is the ENTRY POINT to our app'
// 0:30:17 .. shows the 'INDEX' template.. which just produces a one-line h2 the 'count'
//0:33:45 FORM VIEW
//35:39.. so that's how the ivew renders itself!  but how do we count and how do we fetch?
//3640 done with boiler to boot and list num items
// 37:00 so that's all the boiler plate.  questions???
// questions..come back only at 0:38:30
//  0:38:30: 'the first thing i want to do.. things to do..'
// 0:39:30 ???
// 0:42 asks funny ques !!!!!!
/// question goes until....... 
//4713 FINISHES FORM TEMPLATE
// 0:56 *** get recipes 'show'
// 0:57 smart point
// 1:9:10.. 'completed first part..'
// 1:9:45 del
// entry point? div with id of 'breakfast-roll'..
// yes THE ROOT IS BREAKFSAT=ROLL DIV!!!
// pass in $('#breakfast-roll') (root container) to boot
// boot receives an el and passes that ro the router Router({el: container) (
// so it can instatiate views on that container)
// index router:  container(this.el).E(   Index().render().el  )
// 'INDEX' template just produces a one-line h2 the 'count'   AND  $.dK('recipes')
// form view, on init, will instantiate recipes collection, set events on it, and tell it to fecth
//index page should add a subview for each recipe
// so actually, u put the form in the 'recipes' div which iis within:
// 'breakfast-roll div // (with indexPage div template) 
// SO AT THIS POINT, u should just have only that one h2 in the root (and hence on the page)
//////////////////////////////////////
//111:20 fin!!!!
//120 'i still churn a lot' (unit testing)
//
//121 another ques
//i27 'i use hb bc'
}

