 
JQ1 = MAG = FRIDGEMAG = function () {
	z();
	word = function (text, c1, c2) {
		var s = $.sp(text).C(c1, c2).A().drag()
		return s
	}
	w = word('hello', 'b', 'g');
	word('sicko', 'g', 'b');
	word('why, i oughta..', 'p', 'x');
	word('it was raining..', 'j', 'k');
	word('who ya gonna call?', 'h', 'i');
	word('dag nabit!', 'f', 'g');
	word('i like', 'd', 'e');
	word('tomorrow', 'a', 'c');
	word('me', 'r', 'b')
}
JQ2 = BOR = BORDERS = function () {
	 
	$.fn.an = $.fn.animate
	_.t(10, change)
	function change() {
		$.i('me', 100).A().C('g')
				.css(
				{
					borderStyle: 'dashed', borderWidth: '20px'
				}
		)
				.animate(
				{
					"border-top-width": 10
				}, 1000
		)
				.an({"border-bottom-width": 10}, 1000)
				.an({"border-left-width": 10}, 1000)
				.an({"border-right-width": 10}, 1000)
				.an({"padding-top": 10}, 1000)
				.an({"padding-bottom": 10}, 1000)
				.an({"padding-left": 10}, 1000)
				.an({"padding-right": 10}, 1000)
				.an({"margin-top": 10}, 1000)
				.an({"margin-bottom": 10}, 1000)
				.an({"margin-left": 10}, 1000)
				.an({"margin-right": 10}, 1000)
				.an({"margin-top": 0}, 1000)
				.an({"margin-bottom": 0}, 1000)
				.an({"margin-left": 0}, 1000)
				.an({"margin-right": 0}, 1000)
				.an({"padding-top": 0}, 1000)
				.an({"padding-bottom": 0}, 1000)
				.an({"padding-left": 0}, 1000)
				.an({"padding-right": 0}, 1000)
				.an({"border-top-width": 0}, 1000)
				.an({"border-bottom-width": 0}, 1000)
				.an({"border-left-width": 0}, 1000)
				.an({"border-right-width": 0}, 1000)
	}
	
	/*
	 $.img('me').WH(100).A().C('g').bs('-')  //bs??
	
	 .j({bt: 40}, 1000)
	
	 .j({bb: 40}, 1000)
	 .j({bl: 40}, 1000)
	 .j({br: 40}, 1000)
	 .j({gt: 40}, 1000)
	 .j({gb: 40}, 1000)
	 .j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
	 .j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
	 .j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
	 .j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
	 .j({bt: 0}, 1000)
	 .j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
	 };
	 */
	 function alt(){
		 BORDERS = function () {
			 z()
			 change = function () {
				 $.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
						 .J({"border-top-width": 10}, 1000)
						 .J({"border-bottom-width": 10}, 1000)
						 .J({"border-left-width": 10}, 1000)
						 .J({"border-right-width": 10}, 1000)
						 .J({"padding-top": 10}, 1000)
						 .J({"padding-bottom": 10}, 1000)
						 .J({"padding-left": 10}, 1000)
						 .J({"padding-right": 10}, 1000)
						 .J({"margin-top": 10}, 1000)
						 .J({"margin-bottom": 10}, 1000)
						 .J({"margin-left": 10}, 1000)
						 .J({"margin-right": 10}, 1000)
						 .J({"margin-top": 0}, 1000)
						 .J({"margin-bottom": 0}, 1000)
						 .J({"margin-left": 0}, 1000)
						 .J({"margin-right": 0}, 1000)
						 .J({"padding-top": 0}, 1000)
						 .J({"padding-bottom": 0}, 1000)
						 .J({"padding-left": 0}, 1000)
						 .J({"padding-right": 0}, 1000)
						 .J({"border-top-width": 0}, 1000)
						 .J({"border-bottom-width": 0}, 1000)
						 .J({"border-left-width": 0}, 1000)
						 .J({"border-right-width": 0}, 1000)
			 }
			 $.$$(
					 function () {
						 z();
						 _.times(10, change)
					 }
			 )
			 _.times(10, change)
		 }
		 BORDERS1 = function () {
			 change = function () {
				 $.img('me').WH(100).A().C('g').bs('-')  //bs??
						 .j({bt: 40}, 1000)
						 .j({bb: 40}, 1000)
						 .j({bl: 40}, 1000)
						 .j({br: 40}, 1000)
						 .j({gt: 40}, 1000)
						 .j({gb: 40}, 1000)
						 .j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
						 .j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
						 .j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
						 .j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
						 .j({bt: 0}, 1000)
						 .j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
			 }
			 m$$(function () {
				 z();
				 _.times(10, change)
			 })
			 _.times(10, change)
		 }
	 }
}
JQ3 = TANGLE = function () {
	z()
	a = $.divA('r', 50, 50).XY(50).A().pad(10)
	b = $.divA('b', 100, 100).XY(100).A().pad(10)
	c = $.divA('g', 200, 200).XY(200).A().pad(10)
	d = $.divA('y', 400, 400).XY(400).A().pad(10)
	y = function (aa, bb, cc, dd) {
		if (aa && U(bb)) {
			aa.A().P('a')
		}
		if (bb) {
			bb.A(aa.P('static'))
		}
		if (dd) {
			dd.A(cc.P('s'))
		}
	}
}
JQ4 = HOVERBOX = function () {
	z();
	d = $.d('o', 500, 500, '+').id('test')
	y = $.c('p', 400).K('box').hd();
	d.A(y);
	$('#test').hover(function () {
		$('.box').stop().fadeTo(200, 1)
	}, function () {
		$('.box').stop().fadeTo(200, 0)
	})
}
 
JQ4 =NOTANIM = function () {
	$.x()
	var s = 1000, m = function (n) {
				return {marginLeft: n}
			},
			n = 0;
	d = $.d().id('test').A().A(y = $.can('x', 40).K('box'));
	d2 = $.d().id('debug');
	$('#test').$(function () {
		$.notAn($('.box')).an({marginLeft: -10}, s,
				function () {
					$('#debug').A($.p('start..' + n++))
				})
				.an({marginLeft: 10}, s)
				.an({marginLeft: -10}, s)
				.an({marginLeft: 10}, s)
				.an({marginLeft: -10}, s)
				.an({marginLeft: -10}, s)
				.an({marginLeft: 0}, s,
				function () {
					$('#debug').A($.p('fin'))
				})
	})
}
JQ4 =ANL = ANIMLOOP = function () {
	$.fn.anL = function () {
		var q = this
		this.sh("slow")
		this.an({"marginLeft": "300px"}, 2000)
				.an({"marginLeft": "0px"}, 2000)
		this.hd("slow", function () {
			q.anL()
		})
	}
	$.d('b', 100, 300).anL()
}
JQ4 =COOLSEL = function () {
	$.x()
	// rather than worry about synchronization between each panel
	//we will take last li in ul.k(panels) and position it to top right
	//of ul - this way,  when he sum width of all the panels occasionally
	//adds to greater than 100 percent of the ul as they animate..
	//the last li never breaks to the next line
	$.coolSelector = function () {
		var s = 200
		d = $.dK('container').A(
				$.dK('panels').A($.sp('1'), $.sp('2'), $.sp('3'), $.sp('4'), $.sp('5')),
				$.dK('panels').A($.sp('A'), $.sp('B'), $.sp('C'), $.sp('D'), $.sp('E'))
		).A()
		$('span').css({width: '100px', fontSize: '40px'})
		if ($('div.panels').length) {
			$('div.panels span:last-child').K('last')
			$('div.panels span').hv(
					function () {
						$(this).st().an({width: '110px', fontSize: '50px'}, s)
								.sib('span').st().an({width: '90px', fontSize: '30px'})
					},
					function () {
						$(this).st().an({width: '90px', fontSize: '30px'})
					})
		}
	}
	$.coolSelector()
}
JQ4 =FLASH = function () {
	z();
	timeline = $.dA('+').WH('auto');
	timeline.A($.c('b', 500, 500), $.br());
	_.t(24, function (x) {
		timeline.A(
				$.d('r', 100, 100)
						.css({display: 'inline-block'}).H((x * 10) + 100)
		)
	})
}
JQ4 =COLANIM = function () {
	COLANIM = function () {
		$.x()
		$CSS(
				{
					$el: {C: '#aaa', c: '#006', fz: 25, ta: 'center', pad: '1em'}
				}
		)
		$.d(['color anims']).id('el')
		$.bt('anim cols').id('tog')
		$('#tog').$(
				function () {
					$("#el").an({c: 'g', C: "rgb(20,20,20)"})
				}
		)
		/*
		 Color Animation
		 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
		
		 The following properties are supported:
		
		 backgroundColor
		 borderBottomColor
		 borderLeftColor
		 borderRightColor
		 borderTopColor
		 color
		 columnRuleColor
		 outlineColor
		 textDecorationColor
		 textEmphasisColor
		 Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
		
		 Class Animations
		 While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.
		
		 link
		 */
	}
	$.x()
	$CSS({
		$el: {C: '#aaa', c: '#006', fz: 25, ta: 'center', pad: '1em'}
	})
	$.d(['color anims']).id('el')
	$.bt('anim cols').id('tog')
	$('#tog').$(function () {
		$("#el").an({c: 'g', C: "rgb(20,20,20)"})
	})
	/*
	 Color Animation
	 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
	
	 The following properties are supported:
	
	 backgroundColor
	 borderBottomColor
	 borderLeftColor
	 borderRightColor
	 borderTopColor
	 color
	 columnRuleColor
	 outlineColor
	 textDecorationColor
	 textEmphasisColor
	 Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
	
	 Class Animations
	 While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.
	
	 link
	 */
}
JQ44 =CORNERS = function () {
	$.fn.grow = function () {
		originalWidth = this.W()
		originalHeight = this.H()
		this.on('mousedown', function (e) {
			mx = e.clientX
			my = e.clientY
			$.mouseMove(function (e) {
				this.WH(originalWidth + e.clientX - mx,
						originalHeight + e.clientY - my)
			})
			$.mouseUp(function () {
				$(this).off()
			})  //mouseUp anything?
			this.children().on('mousedown', function (e) {
				e.stopPropagation()
			})
		})
	}
	$.divF = $.div
	//  dva(2, 2, 2, 2 )
	div = $.divA(200, 200).XY(200)
	div.A(
			$.divA('red', 20, 20).top(-10).left(-10),
			$.divA('yellow', 20, 20).bottom(-10).right(-10),
			$.divA('green', 20, 20).top(-10).right(-10),
			$.divA('blue', 20, 20).bottom(-10).left(-10)
	)
	i = $.divF('purple').col('white').fontSize(20).al(.2).textAlign('center')
			.width('100%').top(100)
	i.H(W() + ' * ' + H())
	Z(function () {
		i.H(W() + ' * ' + H())
	})
	$.$(function () {
		rat(function () {
			co()
		}, 10)
	})
	i.grow()
}
JQ4 =QUU = function () {
	QUU = function () {
		$.x('x', 'quu')
		//  Qu   allow series fns to be execd asynch on an el
		//  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
		//
		// which levgs qus to build up   series of steps
		// that will transtn  1+ CSS vals thru/out the dur
		//  can pass a cb fn to  .an()  to exec on done
		x = $('.x')
		x.an(
				{height: 20}, "slow",
				function () {
					$("#title").html("in cb")
				}
		)
		//   *Ques As Cbs
		// Instead of passing a cb as an argument,
		// we can add another function to the queue
		// that will act as our cb
		// This will execute
		// after all of the steps in the
		// anim  have completed.
		x.an(
				{height: 20},
				"slow"
		).qu(
				function () {
					$("#title").h("in anim")
					$(this).dq()
				}
		)
			//  tells jQ  to continto N-item in  que
			//    queued fn will exec   after the anim
			//  jQuery does not have any insight into
			// how the queue items function,
			// so we need to call .dequeue(),
			// which tells jQuery when to move to the n item in the queue.
			//  Another way of dequeuing
			// is by calling the fn that is passed to your cb
			// That fn will auto  call .dq() for you
				.qu(
				function (n) {
					$l("I fired!");
					n()
				}
		)
		//  *Custom Queues
		// Up to this point all of our anim
		// and qu   ex  have been using the def qu  n  which is fx.
		// Elements can have multiple queues
		// attached to them,
		// and we can give each of these qusa dif  name.
		// We can specify a custom queue name as
		// the 1st arg  to the .qu() method.
		x.qu(
				'an', function (n) {
					$l("Step 1");
					n()
				}
		).qu(
				'an', function (n) {
					$l("Step 2");
					n()
				}
		).dq('an');
		//  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.
		//   Clearing The Que
		//  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.
		x.qu(
				'an', function (n) {
					$l("nev log (qu clrd)");
					n()
				}
		)
				.clrQ('an').dq('an')
		//   In this example, nothing will happen as we removed everything from the steps queue.
		//   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.
		//  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.
		x.qu(
				'an',
				function (n) {
					$l("nev fire (qu replaced)");
					n()
				}
		)
				.qu(
				'an', [
					function (n) {
						$l("fired!");
						n()
					}
				]
		).dq('an')
		//
		// You can also call .queue() without passing it functions, which will return the queue of that element as an array.
		x.qu(
				'an', function (n) {
					$l("fired!");
					n()
				}
		)
		$l(x.qu('an'))
		x.du('an') //?
	}
	$.x('x', 'quu')
	//  Qu   allow series fns to be execd asynch on an el
	//  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
	//
	// which levgs qus to build up   series of steps
	// that will transtn  1+ CSS vals thru/out the dur
	//  can pass a cb fn to  .an()  to exec on done
	x = $('.x')
	x.an({height: 20}, "slow",
			function () {
				$("#title").html("in cb")
			})
	//   *Ques As Cbs
	// Instead of passing a cb as an argument,
	// we can add another function to the queue
	// that will act as our cb
	// This will execute
	// after all of the steps in the
	// anim  have completed.
	x.an(
			{height: 20},
			"slow").qu(function () {
				$("#title").h("in anim")
				$(this).dq()
			})
		//  tells jQ  to continto N-item in  que
		//    queued fn will exec   after the anim
		//  jQuery does not have any insight into
		// how the queue items function,
		// so we need to call .dequeue(),
		// which tells jQuery when to move to the n item in the queue.
		//  Another way of dequeuing
		// is by calling the fn that is passed to your cb
		// That fn will auto  call .dq() for you
			.qu(function (n) {
				$l("I fired!");
				n()
			})
	//  *Custom Queues
	// Up to this point all of our anim
	// and qu   ex  have been using the def qu  n  which is fx.
	// Elements can have multiple queues
	// attached to them,
	// and we can give each of these qusa dif  name.
	// We can specify a custom queue name as
	// the 1st arg  to the .qu() method.
	x.qu('an', function (n) {
		$l("Step 1");
		n()
	}).qu('an', function (n) {
		$l("Step 2");
		n()
	}).dq('an');
	//  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.
	//   Clearing The Que
	//  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.
	x.qu('an', function (n) {
		$l("nev log (qu clrd)");
		n()
	})
			.clrQ('an').dq('an')
	//   In this example, nothing will happen as we removed everything from the steps queue.
	//   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.
	//  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.
	x.qu(
			'an',
			function (n) {
				$l("nev fire (qu replaced)");
				n()
			})
			.qu(
			'an', [
				function (n) {
					$l("fired!");
					n()
				}
			]).dq('an')
	//
	// You can also call .queue() without passing it functions, which will return the queue of that element as an array.
	x.qu('an', function (n) {
		$l("fired!");
		n()
	})
	$l(x.qu('an'))
	x.du('an')
}
JQ4 =ANF = function () {
	ANF = function () {
		z()
		a = $.dA().bgI('chicks').anf()
		anim = function (o) {
			o = o || {};
			return {
				u: o.u || 'chicks',
				n: o.n || 1, w: o.w || 64, r: o.r || 60, c: o.c || 0, l: o.l || false
			}
		}
		an = function (q, a) {
			if (q.han) {
				_.cI(q.han)
			}
			if (a.u) {
				q.bi(a.u)
			}
			if (a.n > 1) {
				q.han = _.sI(
						function () {
							a.c++;
							if (!a.l && a.c > a.n) {
								_.cI(q.han);
								q.han = false
							}
							else {
								a.c %= a.n
							}
							q.sFr(a)
						}, a.r
				)
			}
		}
	}//call stack
	z()
	a = $.dA().bgI('chicks').anf()
	anim = function (o) {
		o = o || {};
		return {
			u: o.u || 'chicks',
			n: o.n || 1, w: o.w || 64, r: o.r || 60, c: o.c || 0, l: o.l || false
		}
	}
	an = function (q, a) {
		if (q.han) {
			_.cI(q.han)
		}
		if (a.u) {
			q.bi(a.u)
		}
		if (a.n > 1) {
			q.han = _.sI(function () {
				a.c++;
				if (!a.l && a.c > a.n) {
					_.cI(q.han);
					q.han = false
				}
				else {
					a.c %= a.n
				}
				q.sFr(a)
			}, a.r)
		}
	}
}
JQ4 =JQANIMZ = function () {
	JQANIMZ = function () {
		$.x('s', 'jqanim')
		/*
		 setBackgroundImage = q.bi = function(url){//set background image
		 var toUrl =function(url){
		 return 'url("'+ src(url) +'")'}
		 q.backgroundImage(toUrl(url))
		 return q}
		
		 bp=q.positionBackgroundImage=function(x,y){
		 var g=G(arguments),x=g[0],y=g[1]
		 x=N(x)?x:0
		 y=N(y)?y:0
		 q.css({backgroundPos:x+'px '+y+'px'})
		 return q}
		 fr=q.stFr=function(n,w){
		 if(O(n)){q.bp(n.n,n.w)}
		 else{q.bp(n*w)}
		 return q}
		
		 anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
		 $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}
		
		 a= $.dA().bgImg('chicks').anf()
		
		 */
	}
	$.x('s', 'jqanim')
	/*
	 setBackgroundImage = q.bi = function(url){//set background image
	 var toUrl =function(url){
	 return 'url("'+ src(url) +'")'}
	 q.backgroundImage(toUrl(url))
	 return q}
	
	 bp=q.positionBackgroundImage=function(x,y){
	 var g=G(arguments),x=g[0],y=g[1]
	 x=N(x)?x:0
	 y=N(y)?y:0
	 q.css({backgroundPos:x+'px '+y+'px'})
	 return q}
	 fr=q.stFr=function(n,w){
	 if(O(n)){q.bp(n.n,n.w)}
	 else{q.bp(n*w)}
	 return q}
	
	 anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
	 $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}
	
	 a= $.dA().bgImg('chicks').anf()
	
	 */
}
JQ4 =LETTERING = function () {
	z()
	LETTERINGPLUG = function () {
		function injector(t, splitter, klass, after) {
			var text = t.text()
					, a = text.split(splitter)
					, inject = '';
			if (a.length) {
				$(a).each(function (i, item) {
					inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
				});
				t.attr('aria-label', text)
						.empty()
						.append(inject)
			}
		}
		
		var methods = {
			init: function () {
				return this.each(function () {
					injector($(this), '', 'char', '');
				});
			},
			words: function () {
				return this.each(function () {
					injector($(this), ' ', 'word', ' ');
				});
			},
			lines: function () {
				return this.each(function () {
					var r = "eefec303079ad17405c889e092e105b0";
					// Because it's hard to split a <br/> tag consistently across browsers,
					// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
					// (of the word "split").  If you're trying to use this plugin on that
					// md5 hash string, it will fail because you're being ridiculous.
					injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
				});
			}
		};
		$.fn.lettering = function (method) {
			// Method calling logic
			if (method && methods[method]) {
				return methods[method].apply(this, [].slice.call(arguments, 1));
			} else if (method === 'letters' || !method) {
				return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
			}
			$.error('Method ' + method + ' does not exist on jQuery.lettering');
			return this;
		};
	};
	LETTERINGPLUG()
	span = $.sp('hello').A()
	span.lettering() // wrap <span class="charx"/ > around each character within header
	$spans = span.find('span')
	$('.dropped span').css({transition: 'all 0.3s ease-in'})
}
JQ4 =FALLING = function () {
	FALLING = function () {
		z();
		//this goes in css
		$header2 = $.sp('hello').A();
		$header2.lettering(); // wrap <span class="charx"/ > around each character within header
		$spans = $header2.fi('span');
		delay = 0;
		$header2.$(
				function () {
					$spans.e(
							function () {
								$(this).css({transitionDelay: delay + 's'}); // apply sequential trans delay to each character
								delay += 0.1
							}
					);
					$header2.K('dropped'); // Add "dropped" class to header to apply transition
					setTimeout(
							function () { // reset header code
								$spans.e(
										function () {
											$(this).css({transitionDelay: '0ms'})
										}
								);
								// set transition delay to 0 so when 'dropped' class is removed,
								// letter appears instantly
								$header2.removeClass('dropped'); // remove class at the "end" to reset header.
								delay = 0
							}, 1800
					); // 1800 is just rough estimate of time transition will finish, not the best way
				}
		)
	}
	z()
	//this goes in css
	$header2 = $.span('hello').A()
	$header2.lettering() // wrap <span class="charx"/ > around each character within header
	$spans = $header2.find('span')
	delay = 0
	$header2.on('click', function () {
		$spans.each(function () {
			$(this).css({transitionDelay: delay + 's'}) // apply sequential trans delay to each character
			delay += 0.1
		})
		$header2.K('dropped') // Add "dropped" class to header to apply transition
		setTimeout(function () { // reset header code
			$spans.each(
					function () {
						$(this).css({
							transitionDelay: '0ms'
						})
					})
			// set transition delay to 0 so when 'dropped' class is removed,
			// letter appears instantly
			$header2.removeClass('dropped') // remove class at the "end" to reset header.
			delay = 0
		}, 1800) // 1800 is just rough estimate of time transition will finish, not the best way
	})
}
JQ4 =TXPLUG = function () {
	z();
	d = $.d('r', 100).A('abc');
	e = $.d(100).col('r').A('abc');
	f = $.d('r', 100).col('b').A('abc');
	g = $.d('b', 500, 500)
}
// rulesApps: -> :
RU1=BORDR = function () {
	$.x('x', 'bordered')
	$CSS(
			{
				_bordered: {
					'border-top': 'dotted 1px black',
					'border-bottom': 'solid 2px black'
				},
				//And we want to use these properties inside other rule-sets. Well, we just have to drop in the name of the class where we want the properties, like so:
				'#menu a': {
					ex: '_bordered',
					c: 'r'
				},
				'.post a': {
					c: 'r',
					ex: '_bordered'
				}
			}
	)
	// $CSS()
}
RU1 =SIZE = function () {
	$.x('x', 'size')
	$CSS(
			{
				d: {
					C: 'z', c: 'w',
					mx: {
						size: [1250]
					}
				}
			}
	)
	$.d(['hello'])
	$CSS()
}
RU1 =EXT = function () {
	$.x('x', 'ext')
	$CSS(
			{
				d: {
					ex: 'icon',
					C: 'y', c: 'o', mx: {size: [250]}
				}
			}
	)
	$.d(['hello'])
	$CSS()
}

$.dS=function(cssOb){
	return $.d().css(cssOb)
}

FL1=FLEX = function () {
 
	$S({
		_sB: {d: '$', $D: 'r', $W: 'w', $J: 'sB'},
		_sA: {d: '$', $D: 'r', $W: 'w', $J: 'sA'}
	})
	
	d = $.dS({
	
		'display': 'flex',
		
		'justify-content': 'space-between'
	
	}).A(
	
		$.d('b', 400, 500).K('sB').A(
				$.d('y', 40, 150),
				$.d('z', 200, 50),
				$.d('r', 40, 150),
				$.d('y', 40, 150),
				$.d('z', 200, 50),
				$.d('r', 40, 150)
		),
		$.d('B', 400, 500).K('sB').A(
				$.d('y', 40, 150), $.d('z', 200, 50), $.d('r', 140, 150),
				$.d('y', 40, 150), $.d('z', 300, 50), $.d('r', 40, 50)
		),
		
		$.i('me'),
		
		$.d('w', 400, 500).K('sA').A(
				$.d('y', 40, 150), $.d('z', 1000, 50), $.d('r', 140, 150),
				$.d('y', 40, 150), $.d('z', 10, 50), $.d('r', 40, 50)
		),
		$.d('p', 400, 500).K('sA').A(
				$.d('y', 40, 150), $.d('z', 300, 50), $.d('r', 140, 150),
				$.d('y', 40, 150), $.d('z', 200, 50), $.d('r', 40, 50)
		)
	)
	
}
FL2 =GRAIL = function () {
	
	
	css = {
		bd: {f: '24px Helvetica', C: 'a', c: 'b'},
		'header, footer': {C: 'x', d: 'b', M: 4, P: 5, h_: 100, B: ['bor', 'r'], bRd: '7pt'},
		$main: {h_: 800, M: 0, P: 0, d: '$', $D: 'r'},
		'$main > article': {M: 4, P: 5, B: ['bor', 'p'], bRd: '7pt', C: 'g', _: 2, $: '3 1 50%'},
		'$main > nav': {C: 'o', M: 4, P: 5, B: ['bor', 'g'], bRd: '7pt', $: '1 6 30%', $O: -1},
		'$main > aside': {M: 4, P: 5, B: ['bor', 'g'], bRd: '7pt', C: 'x', $: '1 6 20%', $O: 3},
		"@media all and (max-width:640px)": $subRules({
			"#main, #page": {$D: 'c'},
			"#main>article, #main>nav, #main>aside": {$O: 0},
			"#main>nav, #main>aside,  header,  footer": {h_: 50, _h: 50}
		})
	}
	
	$S(css)
	$.hdr( ' heeeeader!!!' ) 
	$.dI('main').A(
			$.ac('article'),
		$.nv().A('nav'),
		 $.as('aside')
	)
	$.ftr('footer') 
}
FL3 =BASIS = function () {

str= 'This is a bit longer lineThis is a bit longer lineThis is a bit longer' + ' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer' +
' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer lineThis ' + 'is a bit longer lineThis is a bit longer lineThis is a bit longer line'
	
	
	$.x('o', 'basis')
	// http://jsfiddle.net/jakub_g/s5jAB/
	// Both items have flex-basis: 200px defined.
// In 'equilibrium situation' they'll get those widths exactly.
	$S({
		_ch: {c: 'w', P: 10, M: 10},
		
		_ct: {
			C: 'y', P: 10,
			d: '$'
		},
		
		_ch1: {
			C: "u",
			$: '8 1 600px'
		},// If there's more space, the first one grows 5x faster than the second.
		
		_ch2: {
			C: 'g',
			d: '$', $: '1 2 400px', $W: 'w'
		}, // If there's less space, the second one shrinks 3x faster than the first.
		
		d: {B: ['bor', 'b']}
	})
	
	
	$.dK('ct').A(
	
			$.dK('ch ch1').A($.h3('Child One'), $.p('Lorem ipsum'), $.p('dolor sit amet'), $.p(str	)),
			div = $.dK('ch ch2').A('Two')
	)
	
	_.t(20, function () {
		$.d($r(), 40, 40).K('ch1').a2(div)
	})
	
	$S()
	
	/*
	
	 div { border:8px solid Blue; }
	 .ct { display:flex; padding:10px; background-color:Yellow; }
	 .ch { padding:10px; margin:10px; color:White; }
	 .ch1 { flex:8 1 600px; background-color:Purple; }
	 .ch2 { display:flex; flex-wrap:true; flex:1 2 400px; background-color:green; }
	
	
	
	 */
}
FL4 =FLEXCT = function () {
 
	$S({
		'.flex-container': {
			display: 'flex', 'flex-direction': 'row',
			$W: 'w', 'justify-content': 'space-around',
			'align-content': 'flex-start', 'align-items': 'stretch'
		},
		'.flex-items-default': {
			width: '300px', height: '250px',
			'flex-grow': 0, 'flex-shrink': 0, 'flex-basis': 0
		},
		'.flex-item-1': {width: '100px', height: '100px', 'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'},
		'.flex-item-2': {
			width: '100px', height: '100px',
			'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'
		},
		'.flex-item-3': {
			width: '100px', height: '100px',
			'flex-grow': 1, 'flex-shrink': 0,
			'flex-basis': '200px'
		},
		'.flex-item-4': {
			width: '100px', height: '100px',
			'flex-grow': 1, 'flex-shrink': 0,
			'flex-basis': '200px'
		},
		'.flex-item-5': {
			width: '100px', height: '100px',
			'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'
		}
	})
	d = $.dK('flex-container').A(
			Item(1), Item(2), Item(3), Item(4), Item(5)
	)
	function Item(n) {
		return $.dK('.flex-item-' + (n || 1)).A(
				$.i('me')
		).css({margin: 20}).C('b')
	}
}
FL5 =GME = function () {
	$.x('y', 'gme');
	$CSS({
		'html, body': {w: '100%', h: '100%', M: 0, P: 0},
		'body.box': {d: $, flD: 'column'},
		'body > *': {P: '.5em'},
		header: {C: 'b'},
		article: {C: 'r', $: 1},
		footer: {C: 'g'},
		'header.cnt': {'-moz-column-count': 3},
		'header:not(.cnt)': {'-moz-column-width': 100}
	})
	$.hdr().A('Click', $.br(), 'to change', $.br(),
			'header {column-…}').A()
	$.ac().A('Click',
			$.br(),
			'to', $.br(), 'change', $.br(), 'body {display: …}').A()
	$.ftr().A()
	$("header").$(function () {
		$(this).toggleClass("cnt");
		logClass();
	});
	$("article").$(function () {
		$.bd().toggleClass("box");
		logClass()
	})
	logClass()
	function logClass() {
		var logTxt = "Header: "
		if ($("header").hasClass("cnt")) {
			logTxt += "column-count"
		} else {
			logTxt += "column-width"
		}
		logTxt += "; Body: ";
		if ($("body").hasClass("box")) {
			logTxt += "flex-box"
		}
		else {
			logTxt += "block"
		}
		$("footer").text(logTxt)
	}
}
FL6 =FB = function () {
	$.x('o', 'flex')
	$CSS({
		_ct: {
			d: '$',
			//  define  flow dir
			// and
			// if we allow the items to wrap
			//  Remember this is the same as:
			$D: 'r',
			$W: 'w',
			//      'flex-flow' : 'row wrap',
			// Then we define how is distributed the remaining space
			flJC: 'space-around'
		}
	})
	d = $.dK('flex-container').A(
			Item(1), Item(2), Item(3), Item(4), Item(5)
	)
	function Item(n) {
		return $.dK('.flex-item-' + (n || 1)).A(
				$.i('me')
		).css({margin: 20}).C('b')
	}
}

 
 
	$.fn.animloop = function () {
		var that = this
		this.show("slow")
		this.animate({"marginLeft": "300px"}, 2000)
				.animate({"marginLeft": "0px"}, 2000)
		this.hide("slow", function () {
			that.animloop()
		})
	}
	
	CORNERS = function () {
		$.fn.grow = function () {
			originalWidth = this.W()
			originalHeight = this.H()
			this.on('mousedown', function (e) {
				mx = e.clientX
				my = e.clientY
				$.mouseMove(function (e) {
					this.WH(originalWidth + e.clientX - mx,
							originalHeight + e.clientY - my)
				})
				$.mouseUp(function () {
					$(this).off()
				})  //mouseUp anything?
				this.children().on('mousedown', function (e) {
					e.stopPropagation()
				})
			})
		}
		//  dva(2, 2, 2, 2 )
		div = $.divA(200, 200).XY(200)
		div.A(
				$.divA('red', 20, 20).top(-10).left(-10),
				$.divA('yellow', 20, 20).bottom(-10).right(-10),
				$.divA('green', 20, 20).top(-10).right(-10),
				$.divA('blue', 20, 20).bottom(-10).left(-10)
		)
		i = $.divF('purple').col('white').fontSize(20).opacity(.2).textAlign('center')
				.width('100%').top(100)
		i.H(W() + ' * ' + H())
		Z(function () {
			i.H(W() + ' * ' + H())
		})
		$.$(function () {
			rat(function () {
				co()
			}, 10)
		})
		i.grow()
	}
GRID = function () {
	z()
	stage = s = createjs.stage(1000, 1000).tick().A()
	container = c = new createjs.Container()
	stage.A(container)
	cjs.bindSlide(container)
	rows = 5;
	cols = 6;
	sqP = 12;
	sqS = 80
	sqSP = sqS + sqP
	_.times(rows * cols, function (i) {
		drawSquare(container,
				sqSP * (i % cols),
				sqSP * Math.floor(i / cols)
		)
	})
	function drawSquare(container, x, y) {
		var rectangle = new createjs.Shape()
		container.A(rectangle)
		rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
		if (x) {
			rectangle.X(x)
		}
		if (y) {
			rectangle.Y(y)
		}
		return rectangle
	}
}
TXSH = function () {
	z()
	stage = createjs.stage(600).tick().A()
	shape = new createjs.Shape()
	stage.A(shape)
	shape.graphics.f('red').s('black').dc(400, 400, 200).dr(100, 0, 200, 200)
}
TANGLE = function () {
	z()
	a = $.divA('r', 50, 50).XY(50).A().pad(10)
	b = $.divA('b', 100, 100).XY(100).A().pad(10)
	c = $.divA('g', 200, 200).XY(200).A().pad(10)
	d = $.divA('y', 400, 400).XY(400).A().pad(10)
	y = function (aa, bb, cc, dd) {
		if (aa && U(bb)) {
			aa.A().P('a')
		}
		if (bb) {
			bb.A(aa.P('static'))
		}
		if (dd) {
			dd.A(cc.P('s'))
		}
	}
}
ZX = function () {
	a = $.editDiv().A().C('a')
	b = $.editDiv().A().C('b')
}
BORDERS = function () {
	z()
	change = function () {
		$.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
				.J({"border-top-width": 10}, 1000)
				.J({"border-bottom-width": 10}, 1000)
				.J({"border-left-width": 10}, 1000)
				.J({"border-right-width": 10}, 1000)
				.J({"padding-top": 10}, 1000)
				.J({"padding-bottom": 10}, 1000)
				.J({"padding-left": 10}, 1000)
				.J({"padding-right": 10}, 1000)
				.J({"margin-top": 10}, 1000)
				.J({"margin-bottom": 10}, 1000)
				.J({"margin-left": 10}, 1000)
				.J({"margin-right": 10}, 1000)
				.J({"margin-top": 0}, 1000)
				.J({"margin-bottom": 0}, 1000)
				.J({"margin-left": 0}, 1000)
				.J({"margin-right": 0}, 1000)
				.J({"padding-top": 0}, 1000)
				.J({"padding-bottom": 0}, 1000)
				.J({"padding-left": 0}, 1000)
				.J({"padding-right": 0}, 1000)
				.J({"border-top-width": 0}, 1000)
				.J({"border-bottom-width": 0}, 1000)
				.J({"border-left-width": 0}, 1000)
				.J({"border-right-width": 0}, 1000)
	}
	$.$$(
			function () {
				z();
				_.times(10, change)
			}
	)
	_.times(10, change)
}
BORDERS1 = function () {
	change = function () {
		$.img('me').WH(100).A().C('g').bs('-')  //bs??
				.j({bt: 40}, 1000)
				.j({bb: 40}, 1000)
				.j({bl: 40}, 1000)
				.j({br: 40}, 1000)
				.j({gt: 40}, 1000)
				.j({gb: 40}, 1000)
				.j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
				.j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
				.j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
				.j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
				.j({bt: 0}, 1000)
				.j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
	}
	m$$(function () {
		z();
		_.times(10, change)
	})
	_.times(10, change)
}
CORNERS = function () {
	$.fn.grow = function () {
		originalWidth = this.W()
		originalHeight = this.H()
		this.on('mousedown', function (e) {
			mx = e.clientX
			my = e.clientY
			$.mouseMove(function (e) {
				this.WH(originalWidth + e.clientX - mx,
						originalHeight + e.clientY - my)
			})
			$.mouseUp(function () {
				$(this).off()
			})  //mouseUp anything?
			this.children().on('mousedown', function (e) {
				e.stopPropagation()
			})
		})
	}
	//  dva(2, 2, 2, 2 )
	div = $.divA(200, 200).XY(200)
	div.A(
			$.divA('red', 20, 20).top(-10).left(-10),
			$.divA('yellow', 20, 20).bottom(-10).right(-10),
			$.divA('green', 20, 20).top(-10).right(-10),
			$.divA('blue', 20, 20).bottom(-10).left(-10)
	)
	i = $.divF('purple').col('white').fontSize(20).opacity(.2).textAlign('center')
			.width('100%').top(100)
	i.H(W() + ' * ' + H())
	Z(function () {
		i.H(W() + ' * ' + H())
	})
	$.$(function () {
		rat(function () {
			co()
		}, 10)
	})
	i.grow()
}
CONNECT = function () {
	z();//m$$('location=location')
	stage = createjs.stage(1000).tick().A()
	pink = cjs.circle(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
	stage.A(pink)
	container = new createjs.Container()
	stage.A(container)
	green = cjs.circle(200, 'green', 'purple').XY(320, 300)//.rXY(100)
	yellow = cjs.circle(100, 'yellow', 'purple').XY(250)
	red = cjs.circle(40, 'red', 'purple').XY(200, 100)
	orange = cjs.circle(20, 'orange', 'purple').XY(300)
	container.A(green, yellow, red, orange)
	LS(yellow, container)
	SL(green)
	SL(green, pink)
	SL(yellow)
	SL(red, container)
	SL(orange, red)
}
CONNECT = function () {
	z();//m$$('location=location')
	stage = createjs.stage(1000).tick().A()
	pink = cjs.circle(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
	stage.A(pink)
	container = new createjs.Container()
	stage.A(container)
	green = cjs.circle(200, 'green', 'purple').XY(320, 300)//.rXY(100)
	yellow = cjs.circle(100, 'yellow', 'purple').XY(250)
	red = cjs.circle(40, 'red', 'purple').XY(200, 100)
	orange = cjs.circle(20, 'orange', 'purple').XY(300)
	container.A(green, yellow, red, orange)
	LS(yellow, container)
	SL(green)
	SL(green, pink)
	SL(yellow)
	SL(red, container)
	SL(orange, red)
}
//brilliant demo
MATRIX1 = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
	z()
	$.div('b', 50, 50).A()
	stage = s = cjs.stage(1600, 1000).tick().A()
	// on stage enter, change background color, though you
	// cant see it here because stage fills screen
	// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
	stage.on('e', co)
	//make a container
	stage.ct(function (c, s) {
		
		//the little me clicks do not hit the 'big' me underneath it.  that's normal.
		//but it does hit the container.  but this example shows off 'remove', so it only hits once
		//however, it continues to propogate on to the container. hmmm..
		c.bm('me',
				function (b) {
					b.sXY(.2).XY(100, 80)
					b.on(click, function () {
						$l('lit')
					}, '/')  //on click, log('lit'), just once (remove listener)!
				})
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
		c.bm('me', function (bm) {
			bm.sXY(.4).XY(100, 180)
			bm.on('click', function () {
				$l('mid')
			}, '-')  //on click, log('mid'), and stop prop
		})
		c.bm('me', function (bm) {
			bm.sXY(1.5)
			bm.on('click', function () {
				$l('big')
			})  //on click, log('big')
		})
		//on click, log('con')
		c.on('click', function () {
			$l('con')
		})
	})
	stage.ct(function (c) {
				var vn = 0,
						rvn = 0,
						on = 0,
						ron = 0
				c.X(200)
				c.mug(
						function (b) {
							b.sXY(.8).XY(200, 80)
						})
				c.mug(
						function (b) {
							b.sXY(.8).XY(100, 280)
						})
				c.mg(
						function (b) {
							b.sXY(.8).XY(340, 180)
						})
				//this shows over/out vs rollover/rollout
				//over/out get retriggered when switching between connected sprites
				//rollover/rollout does not because it is still touching 'something'
				c.on('mouseover', function () {
					c.X(10, '+');
					$l('v: ' + vn++)
				})
				c.on('rollover', function () {
					c.X(20, '-');
					$l('rv: ' + rvn++)
				})
				c.on('mouseout', function () {
					c.Y(10, '+');
					$l('o: ' + on++)
				})
				c.on('rollout', function () {
					c.Y(20, '-');
					$l('ro: ' + ron++)
				})
			}
	).MV(40)
	stage.container(function (container, stage) {
		container.X(700)
		container.mug(function (bm) {
			bm.sXY(.8).XY(200, 80)
		})
		container.mug(function (bm) {
			bm.sXY(.8).XY(100, 280)
		})
		container.mug(function (bm) {
			bm.sXY(.8).XY(340, 180)
		})
		//this example shows which sprites are acted upon with over/rollover
		//over only affects one
		//rollover affects ALL
		//if you enter a sprite from outside, they all grow (via rollover),
		//and the one sprite grows double (via over)
		container.on('mouseover', function () {
			$l('mouseover')
			this.sXY(.01, '+')
		})
		container.on('rollover', function () {
			$l('rv')
			this.sXY(.01, '+')
		})
		container.on('mouseout', function () {
		})
		container.on('rollout', function () {
		})
		// in summary,
		// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
		// BUT, they will all recieve events separately
	}).MV(40) //??? mouse events? speed for some mouse checking thing
	stage.container(function (container, stage) {
		container.x = 1400
		container.bm('me', function (bm) {
			
			
			//make the little me slide the entire container
			//it acts as a handle! (for its container)
			lit = bm.sXY(.2).XY(100, 80)
			SL(bm, container)
			container.bm('me', function (bm) {
//big me will scale the little me
				big = bm.sXY(2).XY(100, 180)
				SC(bm, lit)
				container.bm('me', function (bm) {
					bm.sXY(.6).XY(150, 180)
					SL(bm)
					RT(bm, big)
				})
			})
		})
//guy slides stage
		container.bm('guy', function (bm) {
			bm.sXY(.4).XY(100, 180)
			SL(bm, stage)
		})
	})
}
MATRIX0 = function () {

// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
	z()
	$l('matrix')
	$.div('blue', 50, 50).A()
	stage = s = createjs.stage(1600, 1000).A().tick()
	// on stage enter, change background color, though you
	// cant see it here because stage fills screen
	// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
	stage.on('mouseenter', function () {
		$('body').C($r())
	})
	stage.A(container = c = new createjs.Container())
	container.bm('me', function (bm) {
		//b.sxy(.2).xy(100,80)
		//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
	})
	//make a container
	stage.ct(function (c, s) {
		
		//the little me clicks do not hit the 'big' me underneath it.  that's normal.
		//but it does hit the container.  but this example shows off 'remove', so it only hits once
		//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
		c.bm('me', function (b) {
			b.sXY(.4).XY(100, 180)
			//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
		})
		c.b('me', function (b) {
			b.sXY(1.5)
			// b.o('$',fL('big'))  //on click, log('big')
		})
		//on click, log('con')
		//c.o('$',  fL('con'))
	})
	stage.ct(function (c) {
		var vn = 0,
				rvn = 0,
				on = 0,
				ron = 0
		c.X(200)
		c.mug(
				function (b) {
					b.sXY(.8).XY(200, 80)
				})
		c.mug(
				function (b) {
					b.sXY(.8).XY(100, 280)
				})
		c.mg(
				function (b) {
					b.sXY(.8).XY(340, 180)
				})
		//this shows over/out vs rollover/rollout
		//over/out get retriggered when switching between connected sprites
		//rollover/rollout does not because it is still touching 'something'
		// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
		//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
		// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
		//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
	})//.MV(40)
	stage.ct(function (c, s) {
		c.x(700)
		c.mg(function (b) {
			b.sxy(.8).xy(200, 80)
		})
		c.mg(function (b) {
			b.sxy(.8).xy(100, 280)
		})
		c.mg(function (b) {
			b.sxy(.8).xy(340, 180)
		})
		//this example shows which sprites are acted upon with over/rollover
		//over only affects one
		//rollover affects ALL
		//if you enter a sprite from outside, they all grow (via rollover),
		//and the one sprite grows double (via over)
		c.o('v', function (g, e) {
			$l('v')
			g.sxy(.01, '+')
		})
		c.o('rv', function (g, e) {
			$l('rv')
			g.sxy(.01, '+')
		})
		c.o('o', function (q, e, g) {
		})
		c.o('ro', function (q, e, g) {
		})
		// in summary,
		// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
		// BUT, they will all recieve events separately
	}).MV(40)
	stage.ct(function (container, stage) {
		container.X(1400)
		container.bm('me', function (bm) {
			
			//make the little me slide the entire container
			//it acts as a handle! (for its container)
			lit = bm.sXY(.2).XY(100, 80)
			SL(bm, container)
			container.bm('me', function (bm) {
//big me will scale the little me
				big = bm.sXY(2).XY(100, 180)
				SC(bm, lit)
				container.bm('me', function (bm) {
					bm.sXY(.6).XY(150, 180)
					SL(bm)
					RT(bm, big)
				})
			})
		})
//guy slides stage
		container.bm('guy', function (bm) {
			bm.sXY(.4).XY(100, 180)
			createjs.bindSlide(bm, stage)
		})
	})
}
MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
	z()
	$l('matrix')
	stage = s = createjs.stage(1600, 1000).A().tick()
	// on stage enter, change background color, though you
	// cant see it here because stage fills screen
	// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
	stage.on('mouseenter', function () {
		$('body').C($r())
	})
	stage.A(container = c = new createjs.Container())
	container.bm('me', function (bm) {
		bm.sXY(.2).XY(100, 80)
		bm.on('click', function () {
			$l('lit')
		}, this, true) //just once
	})
	//make a container
	stage.container(function (container, stage) {
		
		//the little me clicks do not hit the 'big' me underneath it.  that's normal.
		//but it does hit the container.  but this example shows off 'remove', so it only hits once
		//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
		container.bm('me', function (bm) {  //future: c.bm('me', .4, function(bm){})
			bm.sXY(.4).XY(100, 180)
			bm.on('click', function (e) {
				$l('mid')
				e.stopPropagation()
			})
		})
		container.bm('me', function (bm) {
			bm.sXY(1.5)
					.on('click', function () {
						$l('big')
					})
		})
		container.on('click', function () {
			$l('con')
		})
	})
}
TWOSTAGES = function () {
	z()
	$.hdr().K("EaselJS").A(
			$.h1('nextStage'),
			$.p("This is an example")).A()
	c1 = $.c('y', 540, 260).id('canvasOne').P('a').top(0)
			.right(0).bor('1px solid grey').A() // background: 'none',
	c2 = $.c('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
	$.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
	bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
	//bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
	bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
	topStage = stageSetup("canvasTwo", handleEvt)
			.N("topStage").eMO()
			.A(makeSquare(375, 30, "pink", handleEvt))
			.next(bottomStage)
	topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
	function stageSetup(canvasName, handler) {
		s = stage = new cjs.Stage(canvasName).tick()
		//stage.addEventListener("stagemousemove", handler);	// too noisy
		_.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
			s.on(ev, handler)
		})
		s.log = []
		return s
	}
	
	function makeSquare(x, y, color, handler) {
		var shape = cjs.shape().N('square').XY(x, y)
		shape.graphics.f(color).dr(0, 0, 135, 135)
		var cont = cjs.ct().N('container').A(shape)
		_.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
			cont.on(ev, handler)
		})
		cont.cursor = "pointer"
		return cont
	}
	
	function handleEvt(evt) {
		var target = evt.target,
				stage = target.getStage(),
				log = stage.log
		log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
		+ " y:" + evt.stageY.toFixed(0))
		while (log.length > 12) {
			log.shift()
		}
		stage.text.text = log.join("\n")
		if (evt.type == "mouseover") {
			target.alpha = 0.5
		}
		if (evt.type == "mouseout") {
			target.alpha = 1
		}
	}
}
FMTX = FORMATTX = function () {
	z()
	$.fm()
	s1.A($.imgResponsive('chicks'))
	s2.A($.i('me'), $.i('guy'))
}
PROMOTE = function () {
	z()
	cjs.utils()
	function ClassA(name) {
		this.name = name
	}
	
	ClassA.prototype.greet = function () {
		return "Hello " + this.name
	} //a = new ClassA('john')
	function ClassB(name, punctuation) {
		this.ClassA_constructor(name)
		this.punctuation = punctuation
	}
	
	cjs.extend(ClassB, ClassA)
	ClassB.prototype.greet = function () {
		return this.ClassA_greet() + this.punctuation
	}
	cjs.promote(ClassB, "ClassA")
	b = new ClassB("World", "!?!")
	$l(b.greet())  // Hello World!?!
}
DISTRACT = function () {
	z()
	$.d().A($.c(960, 400).id("testCanvas"))
	cjs.sharedCode()
	cjs.utils()
	cjs.slider()
	examples.showDistractor()
	st = new cjs.Stage("testCanvas")
}
//awesome:
WINDING = function () {
	cjs.Shape.prototype.same = function () {
		return $h(this)
	} //h.copy
	cjs.manifest = function (func) {
		var q = cjs.loadQueue()
		q.complete(
				function () {
					func(function (getResult) {
						return q.getResult(getResult)
					})
				})
				.manifest([{
					id: "chicks", src: "/chicks.png"
				},
					{id: "me", src: "/me.png"},
					{id: "guy", src: "/guy.png"},
					{id: "sun", src: "/sun.png"}])
	}
	z()
	cjs.worldsMostInterestingShape = function () {
		var h = cjs.shape()
		h.graphics.f("pink").dr(20, 20, 450, 360)
				.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
				.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
		return h
	}
	cjs.manifest(function (q) {
		$.hdr().A($.h1('grahics winding')).A()
		$.d().A($.c(960, 400)
				.id("testCanvas"))
		st = s = stage = $St(["testCanvas"])
		h = shape = cjs.worldsMostInterestingShape().a2(stage).drag()
		cjs.bm = function (img) {
			var g = G(arguments), img = g[0],
					bm = new cjs.Bitmap(img)
			if (g.N) {
				bm.rC()
			}
			return bm
		} //warning: can't yet change to $Bm!!
		bm = cjs.bm(q("chicks"), '-')
				.a2(s).X(470).drag()
		bm.mask = h.same().X(470)
	})
} //Uncaught TypeError: Cannot read property 'image' of undefined
POPSPIN = function () {
	z()
	angle = 0
	img = $.img('me', handleImageLoad)[0]
	function stop() {
		cjs.Ticker.removeEventListener("tick", tick)
	}
	
	function handleImageLoad() {
		canvas = $.c('p', 960, 400).id("testCanvas").A()
		stage = $St(canvas)
		stage.autoClear = true;
		bmp = new cjs.Bitmap(img)
				.rXY(img.width >> 1, img.height >> 1)
				.XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
		stage.A(bmp).update();
		cjs.Ticker.timingMode = cjs.Ticker.RAF
		cjs.tick(tick)
	}
	
	function tick(event) {
		angle += 0.01
		var value = Math.sin(angle) * 360
		bmp.rt(value).sXY(value / 360)
		stage.update(event)
	}
}