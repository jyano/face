JQ11 = QUU = function () {
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
JQ12 = ANF = function () {
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
JQ123 = JQANIMZ = function () {
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
JQ14 = LETTERING = function () {
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
JQ15 = FALLING = function () {
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