
$.fn.cm$ = function (bnd) {
	return this.b('component', bnd)
}
cm$  = function (name, params) {
	//= ko._
	var ob2s = function (ob) {
		ob = ob || {};
		var o = []
		_.e(ob, function (v, k) {
			o.push(k + ':"' + v + '"')
		})
		return o.join()
	}
	var _params = function (n, pam) {
		return $('<' + n + ' params = ' + (pam || '') + ' >')
	}
	if (name) {
		var q = $('<' + name + '>').A()
		if (params) {
			if (O(params)) {
				params = (   ob2s(params) )
			}
			q.at('params', params)
		}
		return q
	}
}
$rg = function (name, ob) {
	var $tpEl = function () {
		var g = G(arguments)
		var $q = $.sp().rm()
		_.e(g.A ? g.f : g, function (q) {
			$q.A(q)
		})
		return {element: $q[0]}
	}
	ob = ob || {}
	ob.viewModel = ob.viewModel || ob.vM
	ob.template = ob.template || ob.tp
	ob.template = $tpEl((ob.template))
	return ko.cm.rg(name, ob)
}
function classic(){
el2H = function (a, t) {
	var g = G(arguments)
	var $q = $('<template>')
	$q.A(d = $.d())
	d.A(A(g.s) ? g.s : g)
	return d.ch(0).h()
}}
REG = function () {
	$s({i:{w:40, h:40}})
	$rg('test', {vM: function(pm){
		this.text = $o(pm.name ,  'default')},
		tp: $.d(['hello, ', t$('text'), ' ! ', $.i('me')])
	})
	cm$('test')
	cm$('test', {name: "tesfadsafdst" })
	ok({})
}

EXA = function () {
	$.mar()
	
	$rg('editor', {
		
		vM: function (pm) {
			this.text = $o(pm.initText, '')
		},
		
		tp: ['Message: ', v$('text'),
			'[', 'length:', t$('text().length'),
			']']
	})
	
	$.h4('First instance, without parameters')
	cm$('editor')
	$.h4('Second instance, passing parameters')
	cm$('editor', {initText: "Heldflo, world!"})
	ok({})
	
}
LIKE = function () {$.mar(10)
	function Product(name, rating) {
		this.name = name;
		this.userRating = ko.observable(rating || null);
	}
	
	$rg('like', {
		vM: function (params) {
			// Data: value is either null, 'like', or 'dislike'
			this.chosenValue = params.value;
			// Behaviors
			this.like = function () {
				this.chosenValue('like')
			}.bind(this)
			this.dislike = function () {
				this.chosenValue('dislike')
			}.bind(this);
		},
		
		tp: $.d().A(
			vs$('!chosenValue()').A(
					cl$('like'),
					cl$('dislike')			).K("like-or-dislike"),
			  vs$('chosenValue').A('You ', t$('chosenValue'), ' it').K('result')
		
		).bor('4px solid yellow')
	})
	
	e$('products', $.d().A(
	
		t$('name'),
		 cm$('like', 'value:userRating')
	
	).C('g'))
	
	
	 ok({products: [
				 new Product('Garlic bread'),
				 new Product('Pain au chocolat'),
				 new Product('Seagull spaghetti', 'like') // This one was already 'liked'
			 ]}
	 )
}

