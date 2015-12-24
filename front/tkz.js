TKZ = function () {

	tasksC = _C(_M())([
		{title: 'game', prior: 3},
		{title: 'store', prior: 5},			
		{title: 'haha', prior: 3}
	])
	
	viw = $.ol.V({
	
		I: function () {this.all('all', 'R')},
		R: function (){return this.E().e(this.add1)},
		add1: function (tsk) {
			$.li.V({model: tsk, 
			I: function () {
				this.$h(this.get('title'))}
			}).$el.a2(this.$el)}, 
			cl: tsksC
	})
	viw.ren().$el.A()
	$.bt('add', function () {tsksC.add([{
			title: 'yooo',
			prior: 4}])})
}