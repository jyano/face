BOOKVW = function () {
	$.dI('td')
	TdVw = $V({
		t: 'li',
		e: {
			'click .toggle': 'toggleCompleted',
			'dblclick label': 'edit',
			'keypress .edit': 'updateOnEnter',
			'click .destroy': 'clear',
			'blur .edit': 'close'
		},
		Item: function (o) {
			return $.d([
				$.cb().id('td_complete').at('checked', o.completed ? 'checked' : ''), o.tt])
		},
		i: function (ops) {
			this.ops = ops || {};
			this.model.on('change', _.b(this.r, this))
		}, //  access passed ops inyour view
		// Re-render tt of td item.
		r: function () {
			var v = this
			v.q.h(this.Item(this.md.J())) // this.md.atts ?
			v.input = v.$('.edit')
			return v
		},
		edit: function () {
		},    // executed when td label is double clicked
		close: function () {
		},  // executed when td loses focus
		updateOnEnter: function (e) {
		} // executed on each keypress when in td edit mode, but we'll wait for enter to get in action
	})
	ListVw = $V({
		r: function () {
			// Assume our md exposes items we will display in our list
			_.e(this.g('items'), function (i) {
				// Createnew instance of ItemVw, passing it spec md item
				// The itemVw's DOM el is appended after it
				// has been rendered. Here, 'return this' is helpful
				// as itemVw renders its md. Later, we ask for its output ("el")
				this.A(TdVw({md: i}).r().q)
			}, this)
		}
	})
	
	tdVw = new TdVw()
	// log reference toDOM el that corresponds to view instance
	$l(tdVw.el); // logs <li></li>
}