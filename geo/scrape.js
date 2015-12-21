b.dff = function (b2) {
	var b = this
	var p = Math.poly(b.V())
	return p.difference(Math.poly(b2.V()))
}
b.DIFF = function (b2) {
	var g = G(arguments),
			b2 = g[0],
			b = this, f = b.fixt(),
			dffV = b.dff(b2).verts()
	b2d.conc(b,
			_.map(dffV, function (v) {
				return V(v[0] - b.X(), v[1] - b.Y())
			}))
	f.kill()
	b.rot(0)
	if (g.n) {
		b2.kill()
	}
	return this
}
b.DIF = function (b2) {
	var g = G(arguments),
			b2 = g[0]
	this.eachFixt(function (f) {
		f.DIFF(b2)
	})
	if (g.n) {
		b2.kill()
	}
	return this
}
b.minusPolyCirc = function (x, y, rad, sides) {
	var b = this
	poly = Math.poly(_.map(b2d.polyCirc(rad, sides),
			function (v) {
				return [v.x + x, v.y + y]
			}))
	verts = b.rel(b.polyVerts().difference(poly))
	b.clear().conc(verts)
	return this
}
b.union = function () {
	var num = this.num(),
			fs = this.fixts()
	if (num == 0) {
		return
	}
	if (num == 1) {
		return fs[0].polyVerts()
	}
	return fs[0].union(_.rest(fs))
}
b.minus = function (fOrB) {
	return this.rel(
			this.polyVerts().difference(fOrB.polyVerts())
	)
}
b.sub = function (a) {
	var p = this.minus(a)
	this.clear()
	this.conc(p)
}
b.subtract = function (a) {
	var g = G(arguments), a = g[0]
	_.each(this.fixts(),
			function (f) {
				f.sub(a)
			})
	if (g.n) {
		a.kill()
	}
	return this
}
b.rel = function (gPoly) {
	var b = this
	//my poly operations can only work with POSITIVE vertices
	//but box2d needs fixt vertices specified relative to a body
	//so this allows the body that the operation was based on to take responsibility
	//for converting them back
	//you can pass in the verts, or the gPoly itself!
	var verts = b2d.isGPoly(gPoly) ? gPoly.verts() : gPoly
	return _.map(verts,
			function (v) {
				return V(v[0] - b.X(), v[1] - b.Y())
			})
}
b2d.ptsMinus = b2d.vertsMinus = b2d.sub = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).sub(p)
	})
}

b.gPolWithout = b.gPolWo = function (pD) {
	this.fs(function (f) {
		pD = pD.D(f)
	})
	return pD
	function doc() {
		// =b.cutPol = b.difFromPol = b.difPol = b.subMe = b.scrapeMeWithPol = b.pDWo
	}
}

f.dif = function () {
	var f = this, b = f.B(), g = G(arguments)
	var pD = f.GP()
	g.e(function (ob) {
		pD = bx.iB(ob) ? ob.gPolWithout(pD) :
				pD.D(ob)})
	if (!pD.hasAtLeastOnePoly()) {
		alert('f.dif (scrape.js?)')}
	var toBeRegged= g.n ? b : f
	return pD.reg(f).reg(toBeRegged)
	if(g.n){
		_.in(function(){
			f.kill()
		})
	}
	function doc() {
		//can take a body.. or a poly
		//   what about fixts? answer: p.D can consume a fixt
	}
}


f.difKill = function (difWhat) {
	var f = this

	var difdFxt = f.dif(difWhat) //vs is f minus something
	f.kill() //then f goes away
	return difdFxt
	//difdFxt = f.dif(g.f, '-') //vs is f minus something
	//f.kill() //then f goes away
}


f.scrapeWith = f.sub = function () {var f = this, b = f.B(), g = G(arguments); var  what = g.f
	 
	 
	//f.sub uses f.dif and replaces itself on a body
	// with its (potentially) 'slimmer' self
	//lets begin:
	// we get the dif of the this and the thing we are subtracting from it...
	// then we kill THIS fixt
	
	var difdFxt = f.difKill(what)

	//otionally put a min size to allow it to be replaced
	//i guess if it's too small, don't bother
	//but calculating area could also be bottleneck?

	
	function bigEnough(f) {
		return M.p(f).getArea() > 2000
	}

	if (!bigEnough(difdFxt)) {
		return
	}
	
	//here, body makes a new f from the dif (hence, it might be slimmer)
	//again... it is fixtizing the result of the gPol subtraction operation
	// it subtracted something from this... killed itself..
	// .. and now is adding a NEW fixture to replace itself..
	//but the new fixture is the difference result of subtracting something else, from it
	//so after that subtraction, it killed itself, and and now 
	// we are replacing the body that held that fixt, replaces it with the resutl
	// of the difference between it and another fixt

	b.pol(difdFxt)

	//now that other thing that we subtracted from our fixt before it was killed and replaced..
	//..letst talk about that thing
	//we can optionally kill that thing too!!
	//it may have been a real manufactured body or fixt
	//... though there should be a better way than that!!! !!!! :=)(+
	
	if (g.n) {
		what.kill()
	}
	
	//and  aparently we can also optionally dynamize it!
	
	if (g.p) {
		what.dyn()
	}
	
	return f

}


b.without = b.dif = function (o) {
	var b = this, g = G(arguments),
			f = b.f(), fs = b.fs(), p
	if (b.n() == 1) {
		return b.f().dif(o, '-')
	}
	p = $dif(b, o).reg(b)
	if (g.n) {
		if (b2d.iB(o) || b2d.iF(o)) {
			o.kill()
		}
		else {
			b.kill()
		}
	}
	return p
}

b.scrapeWith = b.subFrom = function (fromWhat) {

var b=this

	b.fs(function (f) {
		fromWhat.sub(f)
	})
	
	
	return b
}

f.scrapeBodWith = f.subFromBod = function (bod) {
	bod.fs(function (f) {
		f.sub(bod)
	})
}

b.scrapeWithFxt = b.subFxt = b.subF = b._sub = function (f) {
	var b = this
	b.fs(function (fxt) {
		fxt.sub(f)
	})
	return b
}


b.scrapeWithBod = b.subBod = b.subB = function (b) {
	return this.subFrom(bod)
}

b.scrape = b.sub = function () {

/// hhi im here ///////////////////////////////////////////////////////
	var b = this, g = G(arguments), col = g.f
	g.e(function (ob) {
		b2d.iF(ob) ? b.subF(ob) : b2d.iB(ob) ? b.subB(ob) : null
		if (g.n) {
			ob.kill()
		}
	})
	if (col !== 0) {
		b.C(col || b.c())
	}
	return b
}

