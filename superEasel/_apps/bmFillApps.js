$L()
GREY = function () {
	Q(function () {
		Q.b('me').a2($St().t())
				.fl($cMF($cM().s(-100)))
				.ca(0, 0, 1000, 1000)
	})
}
BF0 = HBF = function () {
	h = $St().h(300, 300)
	h.bf('me', function (h) {
		h.dc(300).dg()
	})
}
BF4 = TFM = function () {
	$.i('chicks', function (img) {
		h = $St().h(100, 100, '+').sC('b', 50)
		h.bf(img, null, $tMx(210, 230, .5, .5))
		h.dc(100, 100, 100)
	})
}
BF2 = LDB = function () {
	$Ld('me', function (ld) {
		$St().h(300, 200, '+').bf(ld.i('me')).dc(100)
		st.h(500, 100, '+').bf('me').dc(100)
	})
}
BF8 = BFH = function () {
	h = $St().h(300, 100, '+').bf({
		i: 'me',
		hs: [100, 300, 500, 700, 900],
		fn: function (x) {
			h.dc(x, 30, 120).es()
		}
	})
}
BF100 = BMC = function () {
	$St().h(300, 200).bmCir({
		circs: [{r: 100}, {x: 200, y: 200}, {}]
	})
}
BF101 = BCS = function () {
	$St()
	h = st.h(100, 300).dg()
	h.bmCir({circs: cirs})
	h2 = st.h(700, 300).dg()
	h2.bmCir({circs: vs})
}
QU = MF= MANIFEST = function () {
	Q(['me', 'guy'], function (q) {
		$St().A(me = q.bm('me'))
		st.A(guy = q.bm('guy'))
		guy.dg()
	})
}
QU0 = function () {
	Q(mf5, function () {
		$.A(Q.i('me'))
	})
}
QU1 = function () {
	$Ld(mf3, function (ld) {
		$St().A(ld.bm("me"), ld.bm("guy", 300, 300))
	})
}
QU2 = function () {
	$Ld(mf1, function (ld) {
		ld.bm("myImage", $St())
	})
}
QU3 = function () {
	$Ld(mf2, function (ld) {
		ld.bm("me", $St());
		ld.bm("guy", st)
	})
}

IT=QU4 = function () {
	$Ld(function (ld) {
		Q.bm("me", $St());
		Q.bm("guy", st, 300, 300)
	}).mf("me", guyIt)
}
 
	$Ldr('LAYS', function (q) {
		me = q.bm('me', $St()).scXY(3);
		guy = q.bm('guy', st).scXY(.5).dg()
		$t(function () {
			me.X(guy.x * 2.2 - 140).Y(guy.y * .2)
		})
	})
	$.bt('s.sXY(2)', function () {
		st.sXY(2)
	})
 

$Ldr('WINDG',function (ld) {
		ld.bm("chicks", $St($.c(960, 400).id("cv").id()), 470).dg()
				.mask = cjs.worldsMostInterestingShape().X(470).a2(st).same().dg()
	})
 
$Ldr('LBF', function (ld) {$St().h('+')
			.C('z').dr(0, 0, 40, 40)
			.bf(ld.get('me'),
			-100).dr(0, 0, 500, 200)
			.dr(100, 100, 500, 200)
})
$Ldr('HBS', function (ld) {
	$St(1000, 500).h(810, 410, '+').l(8)
			.bf(ld.get('chicks'),
			$Mx(1, 0, 0, 1, -800, -400)).rec(1600, 800)
	ch = ld.get('chicks')
	me = ld.get('me')
	function Ch(x, y) {
		var h = st.h(x, y).l(8)
		h.graphics.bf(ch)
		h.bs(me)
		cjs.SL(h)
		return h
	}
	
	Ch(200, 200).rec(200, 300)
	Ch(400, 250).rec(200, 300)
	Ch(600, 250).rec(200, 300)
	Ch(750, 350).rec(200, 300)
	Ch(900, 250).rec(200, 300)
})
$Ldr('BFS', function (ld) {
	$St().h('+').l(20).bf(ld.get('me')).bs(ld.get('chicks'))
			.rec(200, 200, 200, 300).rec(400, 250, 200, 300)
			.rec(600, 250, 200, 300).rec(750, 350, 200, 300)
			.rec(900, 250, 200, 300)
	var Ch = function () {
		var h = st.h('+').l(20)
				.bf(ld.get('chicks')).bs(ld.get('me'))
		// h.rec.apply(ch, arguments)
		return h
	}
	Ch().rec(200, 200, 200, 300)
	Ch().rec(400, 250, 200, 300)
	Ch().rec(600, 250, 200, 300)
	Ch().rec(750, 350, 200, 300)
	Ch().rec(900, 250, 200, 300)
})
$Ldr('PFC', function (ld) {
	$St()
	h.bf($(ld.get('me')).A()[0])
			.cir({x: 40, y: 289, r: 100}).mt(vs1).mt([[550, 20],
				[800, 100], [700, 300], [500, 120]]).mt([[750, 20],
				[900, 100], [900, 300], [700, 120]], 50, 200).mt([[550, 20],
				[800, 100], [700, 300], [500, 120]], 0, 50)
			.cir({x: 550, y: 20, r: 20, c: 'b'})
			.cir({x: 800, y: 100, r: 30, c: 'b'})
			.cir({x: 700, y: 300, r: 20, c: 'g'})
			.cir({x: 500, y: 120, r: 30, c: 'g'})
})
$Ldr('HBC', function (ld) {
	h = $St().h('+')
	h.bC({
		circs: [
			{x: 200, y: 100, r: 150},
			{r: 100}, {x: 300}
		]
	})
})
COOL =   function () {
 
	pt = 0
	h = $St().mO(1).h()
	h.graphics._ss('g', 40, 's', 'b', 1)
	st.MD(function () {
		pt = st.m()
	})
	st.MU(function () {
		pt = 0
	})
	st.MM(function () {
		if (pt) {
			h.line(pt, pt = st.m())
		}
	})
	st.bm('chicks', function (b) {
		b.XY(500, 300).al(.2)
	})
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
DISTRACT = function () {
	z()
	$.d().A($.c(960, 400).id("testCanvas"))
	cjs.sharedCode()
	cjs.utils()
	cjs.slider()
	examples.showDistractor()
	st = new cjs.Stage("testCanvas")
}
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
 function _pre(){
	 cjs.src = _.src
	 obX = function (o) { // ************
		 var g = G(arguments);
		 return !O(o) ? {}
				 : g.p ? o.clone()
				 : o
	 }
	 guyIt = {id: "guy", src: "/guy.png"}
	 myIt = {id: "myImage", src: "/me.png"}
	 mf1 = [myIt, guyIt];
 	mf2 = [$it("me"), $it(guyIt)]
	 mf3 = ["me", guyIt];
	 mf4 = [myIt, guyIt];
	 mf5 = ['guy', 'me']
//st.c = $(st.canvas) //s.bm('me', function(bb){b=bb })
//q.b('guy', st).XY(300, 300).spin()
//st.qB('guy').XY(300, 300).spin()
//Q('me', function () {$.A( Q.i('me') )})  
// ok: Q([{src: '/me.png', id: 'me'}], function () {$.A(Q.i('me'))})
cjs.worldsMostInterestingShape = function () {
	var h = cjs.shape()
	h.graphics.f("pink").dr(20, 20, 450, 360)
			.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
			.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
	return h
}
}

 