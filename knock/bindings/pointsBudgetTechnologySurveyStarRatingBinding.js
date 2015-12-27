POINTBUDGET = BINDINGS = function () {
	$.h3().t$('question')
	$.p('Please distribute').A(
			$.B().t$('pointsBudget'), 'points btwn the following options: ')
	$.t().A($.tH().A($.tr().A($.th('Option'), $.th('Import'))),
			$.tB().e$('aw').A($.tr().A(
					$t.d().t$('awT'),
					$t.d().b('starRating', 'points')
			))
	)
	$.hr().b({
		fadeVisible: 'pointsUsed() > pointsBudget'
	}).A('You used too many points! Please remove some.')
	$.p('You have').A($.b().t$('pointsBudget - pointsUsed()'), 'points left to use')
	$.bt('Finished').b({
		jqBt: '{ enable: pointsUsed() <= pointsBudget }', $: 'save'
	})
	SurvVM = function (qu, pointsBdg, aws) {
		this.qu = qu;
		this.pointsBdg = pointsBdg
		this.aws = _.m(aws, function (tx) {
			Aw = function (text) {
				this.awText = text;
				this.points = $o(1)
			} // (was $.map, not _.m (is jquery's map different signature? (i thought yes))
			return new Aw(tx)
		})
		this.pointsUsed = $cO(function () {
			var tot = 0;
			for (var i = 0; i < this.aws.length; i++) {
				tot += this.aws[i].points()
			}
			return tot
		}, this)
		this.save = function () {
		}
	}
	ok(new SurvVM(
			"Which factors affect your technology choices?",
			10, [
				"Functionality, compatibility, pricing - all that boring stuff",
				"How often it is mentioned on Hacker News",
				"Number of gradients/dropshadows on project homepage",
				"Totally believable testimonials on project homepage"
			]))
}

POINTS = BINDINGS = function () {
	$.h3().bT('qu')
	$.p('Please distribute').A(
			$.b().b().t$('pointsBudget'),
			'points btwn the following options'
	)
	$.t($.tH().A($.tr().A($.th().A('Option'), $.th().A('Import'))),
			$.tB().bE('aw').A($.tr().A($t.d().bT('awT'), $t.d().b('starRating', 'points'))))
	$.hr().b({fadeVisible: 'pointsUsed() > pointsBudget'}).A(
			'You used too many points! Please remove some.')
	$.p('You have').A($.b().bT('pointsBudget - pointsUsed()'), 'points left to use')
	$.bt('Finished').b({jqBt: '{ enable: pointsUsed() <= pointsBudget }', $: 'save'})
	ok(new SurvVM("Which factors affect your technology choices?", 10, [
						"Functionality, compatibility, pricing - all that boring stuff",
						"How often it is mentioned on Hacker News",
						"Number of gradients/dropshadows on project homepage",
						"Totally believable testimonials on project homepage"
					]
			)
	)
}
ko.BH.jqBt = {
	init: function (el) {
		$(el).button();
	}, // Turns the el into a jQuery UI button
	update: function (el, valAcc) {
		var curVal = valAcc();
		$(el).button("option", "disabled", curVal.enable === false);
	}
}// Here we just update the "disabled" state, but you could update other properties too
STARRATING = function () {
	ko.BH.starRating = {
		init: function (el, valAcc) {
			$(el).addClass("starRating");
			for (var i = 0; i < 5; i++) {
				$.sp().appendTo(el)
			}
			$("span", el).each(function (index) {
				$(this).hv(// Handle mouse events on the stars
						function () {
							$(this).prevAll().add(this).K("hoverChosen")
						},
						function () {
							$(this).prevAll().add(this).removeClass("hoverChosen")
						})
						.click(function () {
							var observable = valAcc();
							observable(index + 1)
						})
			})
		},           // Get the associated observable// Write the new rating to it
		update: function (el, valAcc) {
			var observable = valAcc();
			$("span", el).each(function (index) {
				$(this).toggleClass("chosen", index < observable())
			})
		}, // Give the first x stars the "chosen" class, where x <= rating
		alt: function () {
			ko.BH.starRating = {
				init: function (el, valAcc) {
					$(el).addClass("starRating");
					for (var i = 0; i < 5; i++) {
						$.sp().appendTo(el)
					}
					$("span", el).each(function (index) {
						$(this).hv(// Handle mouse events on the stars
								function () {
									$(this).prevAll().add(this).K("hoverChosen")
								},
								function () {
									$(this).prevAll().add(this).removeClass("hoverChosen")
								})
								.click(function () {
									var observable = valAcc();
									observable(index + 1)
								})
					})
				},           // Get the associated observable// Write the new rating to it
				update: function (el, valAcc) {
					var observable = valAcc();
					$("span", el).each(function (index) {
						$(this).toggleClass("chosen", index < observable())
					})
				} // Give the first x stars the "chosen" class, where x <= rating
				,
				init: function (element, valueAccessor) {
					$(element).K("starRating");
					for (var i = 0; i < 5; i++) $.sp().a2(element);
					$("span", element).each(function (index) {
						$(this).hover(
								function () {
									$(this).prevAll()
											.add(this)
											.K("hoverChosen")
								},
								function () {
									$(this).prevAll()
											.add(this)
											.K("hoverChosen")
								}
						);
					})
				},
				update: function (element, valueAccessor) {
					// Give the first x stars the "chosen" class, where x <= rating
					var observable = valueAccessor();
					$("span", element).each(function (index) {
						$(this).toggleClass("chosen", index < observable());
					});
				}
			}
		}
	}
	str = '<h3 data-bind="text: question"></h3>'
	str += '<p>Please distribute <b data-bind="text: pointsBudget"></b> points between the following options.</p>'
	str += ' <table>'
	str += ' <thead><tr><th>Option</th><th>Importance</th></tr></thead>'
	str += '  <tbody data-bind="foreach: answers">'
	str += ' <tr>'
	str += '<td data-bind="text: answerText"></td>'
	str += '<td data-bind="starRating: points"></td>'
	str += ' </tr>'
	str += ' </tbody>'
	str += '  </table>'
	str += '<h3 data-bind="visible: pointsUsed() > pointsBudget">Youve used too many points! Please remove some.</h3>'
	str += '<p>Youve got <b data-bind="text: pointsBudget - pointsUsed()"></b>'
	str += 'points left to use.</p>'
	str += '<button data-bind="enable: pointsUsed() <= pointsBudget, click: save">Finished</button>  '
	$(str).A()
	function Answer(text) {
		this.answerText = text;
		this.points = $o(1);
	}
	
	function VM(question, pointsBudget, answers) {
		this.question = question
		this.pointsBudget = pointsBudget
		this.answers = $.map(answers, function (text) {
			return new Answer(text)
		})
		this.save = function () {
			alert('To do')
		}
		this.pointsUsed = ko.c(function () {
			var total = 0;
			for (var i = 0; i < this.answers.length; i++)
				total += this.answers[i].points();
			return total;
		}, this);
	}
	
	ok(new VM("Which factors affect your technology choices?", 10, [
		"Functionality, compatibility, pricing - all that boring stuff",
		"How often it is mentioned on Hacker News",
		"Number of gradients/dropshadows on project homepage",
		"Totally believable testimonials on project homepage"
	]))
}
