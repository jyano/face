TKZ = BCA = function () {
	App = {Models: {}, Views: {}, Collections: {}}
	App.Models.Task = Bb.M.x({})
	App.Views.Task = Bb.V.x({
		tagName: 'li',
		events: { //'click':' showAlert',
			'click .edit': 'editTask'
		},
		showAlert: function () {
			alert('you clicked me')
		},
		editTask: function () {//alert('you are edititing the task')
			newTaskTitle = prompt('what would you like to change the text to?', this.model.get('title'))
			this.model.set('title', newTaskTitle)
		},
		render: function () {
			this.$el.html(
					this.model.get('title')
			)
			return this
		}
	})
	App.Collections.Tasks = Bb.C.x({model: App.Models.Task})
	App.Views.Tasks = Bb.V.x({
		initialize: function () {
			var view = this
			this.collection.on('all', function () {
				view.render()
			})
		},
		tagName: 'ol',
		render: function () {
			this.$el.E()
			this.collection.each(this.addOne, this)
			return this
		},
		addOne: function (task) {
			var taskView = new App.Views.Task({model: task})
			this.$el.append(taskView.render().el)
		}
	})
	tasksCollection = tasks = new App.Collections.Tasks([
		{title: 'game', prior: 3},
		{title: 'store', prior: 5},
		{title: 'haha', prior: 3}
	])
	tasksView = new App.Views.Tasks({
		collection: tasksCollection
	})
	tasksView.render()
	$.A(tasksView.el)
	$.bt('add', function () {
		tasksCollection.add([
			{title: 'yooo', prior: 4}
		])
	})
}
TKZ = function () {
	tasksC = _C({model: _M()})([
		{title: 'game', prior: 3}, {title: 'store', prior: 5}, {title: 'haha', prior: 3}])
	$.A(_V({
		initialize: function () {
			var view = this;
			view.collection.on('all', function () {
				view.ren()
			})
		},
		tagName: 'ol', ren: function () {
			this.$el.E()
			this.collection.each(this.addOne, this)
			return this
		},
		addOne: function (task) {
			this.$el.A(_V({
				tagName: 'li',
				events: {'click .edit': 'editTask'},
				showAlert: function () {
					alert('click')
				},
				editTask: function () {//alert('you are edititing the task')
					newTaskTitle = prompt('what would you like to change the text to?',
							this.model.get('title'))
					this.model.set('title', newTaskTitle)
				},
				ren: function () {
					this.$el.html(this.model.get('title'))
					return this
				}
			})({model: task}).ren().el)
		}
	})({collection: tasksC}).ren().el)
	$.bt('add', function () {
		tasksC.add([{title: 'yooo', prior: 4}])
	})
}