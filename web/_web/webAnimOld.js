old = function () {
	QUU = function () {
		$.x('x', 'quu')
		//  Qu   allow series fns to be execd asynch on an el
		//  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
		//
		// which levgs qus to build up   series of steps
		// that will transtn  1+ CSS vals thru/out the dur
		//  can pass a cb fn to  .an()  to exec on done
		$.d('r', 344, 500).A($.i('me')).K('x')
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
		x.qu('an', function (n) {
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
		//x.du('an')
	}
	$.fn.gFr = $.fn.getFrame
	$.fn.sFr = $.fn.setFrame
	$.anFr = $.aF = $.anf = function (n, w) {
		var c = 0;
		n = n || 10;
		w = w || 20;
		_.ev(
				function () {
					q.sFr(c, w);
					c = (c + 1) % n
				}
		)
	}
	//= $.fn.animateFrames
	q = $.fn
	anf = q.anFr = function (n, w) {
		var c = 0;
		n = n || 10;
		w = w || 20
		_.ev(
				function () {
					q.sFr(c, w);
					c = (c + 1) % n
				}
		)
	}
	q.bgI = function (url) {//set background image
		var toUrl = function (url) {
			return 'url("' + _.src(url) + '")'
		}
		q.bgI(toUrl(url))
		return q
	}
	q.stFr = function (n, w) {
		if (O(n)) {
			q.bp(n.n, n.w)
		}
		else {
			q.bp(n * w)
		}
		return q
	}
	anim = function (o) {
		o = o || {};
		return {
			u: o.u || 'chicks',
			n: o.n || 1,
			w: o.w || 64,
			r: o.r || 60,
			c: o.c || 0,
			l: o.l || false
		}
	}
	an = function (q, a) {
		if (q.han) {
			_.cI(q.han)
		}
		if (a.u) {
			q.bgI(a.u)
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
	ANF = function () {
		$.x('s', 'jqanim')
		a = $.dA().bgI('chicks').anFr()
		q.bgI = function (x, y) {
			var g = G(arguments), x = g[0], y = g[1]
			x = N(x) ? x : 0
			y = N(y) ? y : 0
			q.css(
					{
						bgP: x + 'px ' + y + 'px'
					}
			)
			return q
		}
	}
	animate$ = function (q, a) {
		if (q.han) {
			_.xI(q.han)
		}
		if (a.u) {
			q.bi(a.u)
		}
		if (a.n > 1) {
			q.han = _.sI(
					function () {
						a.c++
						if (!a.l && a.c > a.n) {
							_.xI(q.han);
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
}