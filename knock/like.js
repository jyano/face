
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
LIKE = function () {
	ko.cm.register('like-widget', {
		viewModel: function (params) {
			// Data: value is either null, 'like', or 'dislike'
			this.chosenValue = params.value;
			// Behaviors
			this.like = function () {
				this.chosenValue('like');
			}.bind(this);
			this.dislike = function () {
				this.chosenValue('dislike');
			}.bind(this);
		},
		template: $.sp().A(
				$.dK('like-or-dislike')
						.vs$('!chosenValue()').A(cl$('like'), cl$('dislike')),
				$.dK('result')
						.vs$('chosenValue()').A('You', t$(' chosenValue'), 'it')).h()
	})
	e$('products', [t$('name'), $('<like-widget>').at('params', 'value: userRating')])
	// Source code: View model
	function Product(name, rating) {
		this.name = name;
		this.userRating = ko.observable(rating || null);
	}
	
	function MyViewModel() {
		this.products = [
			new Product('Garlic bread'),
			new Product('Pain au chocolat'),
			new Product('Seagull spaghetti', 'like') // This one was already 'liked'
		];
	}
	
	ok(new MyViewModel());
}
REG = function () {
	ko.components.register('test', {
		template: {element: $.sp().rm().A('hello', 'weirdo', $.i('me'))[0]}
	})
	cm$('test')
	cm$('test')
	cm$('test')
	$.sp().cm$('{ name: "test"}')
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
	//Source code: View model
	ok({})
}