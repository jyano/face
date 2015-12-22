cjs=createjs;
T = cjs.Ticker
T.t = cjs.t = cjs.tick = function (fn) {
    var g = G(arguments)
    if (g.F_) {
        if (!g.n) {
            fn()
        }
        return T.on('tick', fn) // T.addEventListener? return T?
    }
    return g.n ? T.t('+') - T.t() :
        Number((T.getTime(g.p ? false : true) / 1000).toFixed(2))
}
T.p = function () {
    T.setPaused(false);
    return T
}
T.P = T.s = function () {
    T.setPaused(true);
    return T
}
T.s = cjs.xL =function () {T.removeAllEventListeners()}
T.$ = function () {
    T.setPaused(T.getPaused() == false ? true : false)
    return T
}
T.i = function () {
    //indicates the target time (in ms) between ticks
    //default is 50 (20 fps)
    //Note: actual time between ticks may be more than specified,
    //  depending on CPU load. (but this property is ignored if the ticker is using the RAF timing mode)
    return T.interval
}
T.f = function (numTicks) {
    var g = G(arguments)  //numTicks:   optional: The number of previous ticks over which to measure the actual frames
// / ticks per second.Defaults to the number of ticks per second.
    if (N(numTicks)) {
        T.setFPS(numTicks);
        return T
    }
    return g.n ?
        T.getFPS() :
        T.getMeasuredFPS() //returns *ACTUAL* frames
    // / ticks per second//
    // Depending on performance,
    // this may differ from the target frames per second.
}
T.e = function (runTimePropReturnedInsteadOfTime) {
    //Similar to getTime(), but returns the time on the most recent tick event object.
// returns the time or runTime property from the most recent tick event or -1.
    T.getEventTime(runTimePropReturnedInsteadOfTime)//df: false ( If true, the runTime property will be returned instead of time  )
}
T.m = function (ticks) {
    return T.getMeasuredTickTime(ticks)
} //ticks: // optional The number of previous ticks over which to measure the average time spent in a tick.Defaults to the number of ticks per second.To get only the last tick's time, pass in 1.
z = function(fn){
    var g = G(arguments)
    if (g.F_) { T.t(fn) }
    else {
        $('body').empty()
    }
}

h = cjs.Shape.prototype
gx = cjs.Graphics.prototype
ob = i = cjs.DisplayObject.prototype
s = st = cjs.Stage.prototype
ct = cjs.Container.prototype
q = cjs.LoadQueue.prototype
t = cjs.Text.prototype

cjs.m2d = function (a, b, c, d, e, f) {
    if (U(c)) {return new cjs.Matrix2D(1, 0, 0, 1, N(a, 0), N(b, 0))}
    return new cjs.Matrix2D(N(a, 1), N(b, 0), N(c, 0), N(d, 1), N(e, 0), N(f, 0))
}
P = cjs.P = $Pt = cjs.Pt = function (x, y) {

    if (U(x)) {
        return new C$.Point}
    if (O(x) && O(y)) {
        return new C$.Point(x.x + y.mx() >> 1, x.y + y.my() >> 1)
    }
    if (O(x)) {
        return new cjs.Point(
            x.mx(),
            x.my()
        )
    }
    return new cjs.Point(x, y)
}
q = cjs.LoadQueue.prototype
q.f= q.l= function(fn){var q=this
    q.on("fileload", fn)
    return q}
q.c= function (fn) {var q=this
    if(F(fn)){ q.on("complete", fn) }
    return q
}
q.b=  q.bm =function(i, ct, x, y){
    var bm = $Bm( this.r(i) );
    if(ct){bm.a2(ct,x,y)}; return bm
}
q.i=  q.r= function(i){
    i  = this.getResult(i); i.w= i.width;i.h = i.height; return i}
q.$= function(i){return $(this.i(i))}
q.m = q.mf= function(){var q=this, g=G(arguments), _mf, mf
    // q.m:
// protosig:
//
// 'me',..
//
// {src:'me', id:'him'},..
//
// [ {src:*, id:*}, 'me',.. ]

    if(g.u){return q}
    _mf = g.A ? g.f : g
    mf = _.m(_mf,  function(item){
        return S(item)? {src: _.src(item),id:item} : item
    })
    q.loadManifest( mf )
    return q
}
Q=function(){  var g=G(arguments),  o
    //starts off as a fn (obviously)
    //but ends up as an obj
    // (can use his info to test if its been ran)
    o=g.F? {c:g.f}:  {m:g.f,c:g.s}
    o.m = o.m || _MF
    Q=(new cjs.LoadQueue).c(o.c).m(o.m)
}
WQ = function(){var g = G(arguments), o
    o = _.x({ob:g.f||{}},
        F(g.t)?{fn0: g.s, fn: g.t}: {fn: g.s})
    o.fn = o.fn || function(){}
    w = W(o.ob)
    if (o.fn0) {o.fn0(w)}
    Q(o.ob.I||_MF , function(){o.fn(w)})
}
i.X = function (x, dur) {
    var i = this, g = G(arguments)
    if (U(x)) {
        return i.x
    }
    i.x = g.p ? i.x + x
        : g.n ? i.x - x
        : g.m ? i.x * x
        : g.d ? i.x / x
        : x

    return i
    //if (N(dur)) {tw([i], [{x: x}, dur]); return i}
}
i.Y = function (y, dur) {
    var i = this, g = G(arguments)
    if (U(y)) {
        return this.y
    }
    if (g.p) {
        y = this.y + y
    }
    else if (g.n) {
        y = this.y - y
    }
    else if (g.m) {
        y = this.y * y
    }
    else if (g.d) {
        y = this.y / y
    }


    if (N(dur)) {
        tw([this], [{y: y}, duration])
    }

    else {
        this.y = y
    }
    return this
}
i.XY = function (x, y) {
    var i = this, g = G(arguments), v
    if (g.u) {
        return {x: i.x, y: i.y}
    }
    v = V(g.f, g.s)
    x = v.x
    y = N(v.y, v.x)
    return i.X(x).Y(y)
}
i.W = function (a) {
    var i = this
    if (U(a)) {
        return i.getBounds().width * i.scaleX
    }

    i.sX(i.scaleX * a / i.W())

    return i
}
i.H = function (a) {
    var i = this

    if (U(a)) {
        return this.getBounds().height * this.scaleY
    }

    this.sY(this.scaleY * a / this.H())

    return this

}
i.WH = function (w, h) {
    var i = this
    return this.W(w).H(h || w)
}
i.sX = function (n) {
    var i = this
    if (U(n)) {
        return i.scaleX
    }
    i.scaleX = n
    return i
}
i.sY = function (n) {
    var i = this
    if (U(n)) {
        return i.scaleY
    }
    i.scaleY = n
    return i
}
i.sXY = function (x, y) {

    var i = this,
        g = G(arguments), v

    if (U(g[0])) {
        return i
        return {x: i.sX(), y: i.sY()}
    }

    v = V(g[0], g[1])
    x = _.tN(v.x)
    y = _.tN(v.y, v.x)
    i.sX(x)
    i.sY(y)
    return i
}
i.rX = function () {
    var i = this, g = G(arguments), rX = g[0]
    if (U(rX)) {
        return i.regX
    }
    i.regX = g.p ? i.regX + rX : rX
    return i
}
i.rY = function () {
    var i = this, g = G(arguments), rY = g[0]
    if (g.p) {
        i.Y(i.y + (rY - i.regY))
    }
    if (U(rY)) {
        return i.regY
    }
    i.regY = rY
    return i
}
i.rXY = function () {
    var i = this, g = G(arguments),
        x = _.tN(g[0]),
        y = _.tN(g[1], x)
    return i.rX(x).rY(y)
}
i.kX = function (skewX) {
    if (U(skewX)) {
        return this.skewX
    }
    this.skewX = skewX;
    return this
}
i.kY = function (skewY) {
    if (U(skewY)) {
        return this.skewY
    }
    this.skewY = skewY;
    return this
}
i.kXY = function (x, y) {

    y = N(y) ? y : x

    return this.kX(x).kY(y)
}
i.rt = function () {
    var i = this, g = G(arguments), a = g[0]
    if (g.p) {
        return i.rT(i.rotation + _.tN(a, 1))
    }
    if (g.n) {
        return i.rT(i.rotation - _.tN(a, 1))
    }
    if (U(a)) {
        return i.rotation
    }
    i.rotation = a
    return i
}
i.cX = function (a) {
    var i = this
    if (U(a)) {
        return i.x + i.W() / 2
    }
    return i.X(a - i.W() / 2)
}
i.cY = function (a) {
    var i = this,
        hH = i.H() / 2
    return U(a) ? i.y + hH : i.Y(a - hH)
}
i.dg = i.drag = function () {
    var i = this;
    SL(i);
    return i
} // ~ scroll
i.$ = function (fn) {
    return this.on('click', fn)
}
i.$$ = function (fn) {
    return this.on('dblclick', fn)
}

i.n = function (name) {
    if (U(name)) {return this.name}
    this.name = name; return this}
cjs.iDO= function(i){return O(i)&&F(i.getStage)} //cjs.isOb = function (s) {return O(s) && s.parent}
i.al = function (al) {
    var i = this
    if (U(al)) {
        return i.alpha
    }
    i.alpha = al;
    return i
}
i.a2 = function (ct, x, y) {
    ct.A(this)
    if (N(x)) {
        this.X(x)
    }
    if (N(y)) {this.Y(y)}
    return this}
i.of = function (k) {
    this._K = this._K || []
    return !k || this == k || _.ct(this._K, k)
}
i.K = function () {
    var i = this, g = G(arguments)
    this._K = this._K || []
    if (g.u) {
        return this._K.join(' ')
    }
    if (g.O) {
        this._K(g.f.k);
        return this
    }
    _.eW(g.f, function (k) {


        if (!i.of(k)) {
            i._K.push(k)
        }


    })
    return this
}//i.of=function(k){return this.K()==k || this.K()==''}
i.rm = function () {
    var i = this
    if (O(i) && O(i.parent)) {
        i.parent.removeChild(i)
    }

    return i
} //cant delete 'remove' quite yet
cjs.iH = function (h) {return O(h) && h.graphics}
cjs.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
    return O(ct) && ct.addContainer
}

st.MD = function (fn) {
    return this.on('stagemousedown', fn)
}
st.MM = function (fn) {
    return this.on('stagemousemove', fn)
}
st.MU = function (fn) {
    return this.on('stagemouseup', fn)
}
st.mO = function () {
    var g = G(arguments), st = this
    if (U(g[0]) || g[0]) {
        st.enableMouseOver(N(g[0]) ? g[0] : true)
    }
    else {
        st.enableMouseOver(false)
    }
    return st
}
st.W = function (a) {
    if (U(a)) {
        return this.canvas.width
    }
    this.canvas.width = a;
    return this}
st.H = function (a) {
    if (U(a)) {
        return this.canvas.height
    }
    this.canvas.height = a;
    return this
}
st.WH = function (w, h) {
    var st = this;
    if (U(w)) {
        return V(st.W(), st.H())
    }
    if (N(w)) {
        st.W(w)
    }
    if (N(h)) {
        st.H(h)
    }
    ;
    return st
}

st.N = st.next = function (next) {
    if (U(next)) {
        return this.nextStage
    }
    this.nextStage = next;
    return this
}
st.du = function () {
    alert('st.du')
    return this.canvas.toDataURL()
}

ct.A = function () {var ct = this, g = G(arguments), $b = $('body')
    if (g.u && ct.St()) {
        $b.A(
            ct.St().canvas
        )
    }
    else if (g.N_) {
        $b.A( ct.St().canvas ).abs(g.f, g.s)
    }

    else {
        _.e(g, function (g) {
            ct.addChild(g)
        })
    }
    return ct
}

ct.u = function () {
    this.update();
    return this
}

ct.st = ct.St= ct.S= function(){
    return this.getStage()
}//ct.st = function () {return this.stage}

ct.W = function (w) {
    var can = this.St().canvas
    if (U(w)) {
        return can.width
    }
    can.width = w
    return this
}
ct.H = function (w) {
    var can = this.getStage().canvas
    if (U(w)) {
        return can.height
    }
    can.height = w
    return this
}
ct.xCh = ct.removeAll = function () {
    this.e(function (ch) {
        ch.rm()
    });
    return this
}
ct.N = function (n) {
    var s = this;
    if (U(n)) {return s.nextStage}
    s.nextStage = n;
    return s
}
ct.ch = ct.e = ct.ix = function (fn, n) {
    var ct = this, CH
    if (N(n)) {
        ct.setChildIndex(fn, n);
        return ct
    }
    CH = []
    _.e(ct.children, function (ch) {
        CH.push(ch)
    })
    if (U(fn)) {
        return CH
    }
    _.e(CH, function (ch) {
        fn(ch)
    })
    return ct

    old = function () {
        i.ix = function (n) {
            var i = this, g = G(arguments)
            if (g.u) {
                return
            }
            i.P().setChildIndex(i, n)
            return i
        }

    }
}
ct.C = ct.bgC = function (c) {
    var ct = this
    $(ct.canvas).C(c)
    return ct
}
ct.cen = ct.pt = function () {
    return V(this.W() / 2, this.H() / 2)
}
ct.bgI = ct.bg= function (i) {
    var ct = this
    ct.bm(i, function (b) {
        ct.ch(b, 0)
    })
    return ct

}
ct.eMO = function (en) {
    this.enableMouseOver(en ? true : false);
    return this
}
 
ct.au = function (au) {
    this.autoClear = au ? true : false;
    return this
}
ct.noAuCl = function () {
    this.autoClear = false;
    return this
}
ct.clr =   ct.E = function () {
    return this.e(function (i) {i.rm()
    })
}
ct.Cv = function () {return this.St().canvas}
t.T = function (text) {
    if (U(text)) {
        return this.text
    }
    this.text = text
    return this
}
t.F = t.fo = function (f) {
    if (U(f)) {
        return this.font
    }
    this.font = N(f) ? f + 'px Arial' : f
    return this
}
t.C = t.col = function (color) {


    if (U(color)) {
        return this.color
    }

    this.color = oO('c', color)

    return this
}

$Gx=cjs.Gx = cjs.gx = function (a) {return new cjs.Graphics(a)}
gx.poly = function (verts, f, s, width) {
    var that = this
    //  _.each(arguments,function(vert){that.lt(vert[0],vert[1])});this.cp()
    if (N(verts[0])) {
        _.each(arguments, function (vert) {
            that.lt(vert[0], vert[1])
        });
        this.cp()
    }
    else {
        this.fs(f, s, width)
        _.each(verts, function (vert) {
            that.lt(vert[0], vert[1])
        });
        this.cp()
    }
    return this
}
gx.fC = gx.fs = function (c, C, l) {
    var gx = this
    gx.f(oO('c', c || 'z'))
    gx.s(oO('c', C || null))
    gx.ss(N(l) ? l : 2)
    return gx
}
gx.sC = function (s, w) {
    var gx = this
    w = N(w) ? w : 2
    s = O(s) ? s : oO('c', s || null)
    gx.s(s)
    gx.ss(w)
    return gx
}
h.col = h.fs = function () {
    var h = this, gx = h.graphics, g = G(arguments)
    gx.fs.apply(gx, g)
    return h
}
h.c = h.f = function (c, C, l) {
    var h = this, gx = h.graphics, g = G(arguments), o

    o = g.O ? g.f : g.m ? {c: '*'} : g.f == '**' ? {c: '**'} : g.f == '***' ? {c: '***'} :
        g.u ? {c: 'z', C: 'w', l: 6} :
            // 'c-C-l'
            N(g.s) ? {c: g.f, l: g.s} : g.N_ ? {l: g.f, C: g.s} : {c: g.f, C: g.s, l: g.t}

    if (A(o.c)) {
        if (N(o.c[1])) {
            o.l = o.c[1];
            o.c = o.c[0]
        }
        else if (N(o.c[0])) {
            o.l = o.c[0];
            o.C = o.c[1]
        }
        else {
            o.l = o.c[2];
            o.C = o.c[1];
            o.c = o.c[0]
        }
    }

    if (A(o.C)) {
        o.l = o.C[1];
        o.C = o.C[0]
    }

    if (o.c == 0) {
        gx.f(null);
        o.c = 'X'
    }
    if (o.C == 0) {
        gx.s(null);
        o.C = 'X'
    }
    if (o.c == 00) {
        gx.f(null);
        gx.s(null);
        o.c = 'X';
        o.C = 'X'
    }
    if (o.c == '*') {
        o.c = $r()
    }
    if (o.C == '*') {
        o.C = $r()
    }
    if (o.c == '**') {
        o.c = $r();
        o.C = $r()
    }
    if (o.c == '***') {
        o.c = $r();
        o.C = $r();
        o.l = R(20)
    }


    if (S(o.c)) {
        gx.f(oO('c', o.c))
    }
    if (S(o.C)) {
        gx.s(oO('c', o.C))
    }
    if (N(o.l)) {
        h.l(o.l)
    }
    if (o.lf) {
        o.lf = O(o.lf) ? o.lf : {}

        if (o.r) {
            o.r = N(o.r, 0)
            o.x = N(o.x, 0)
            o.y = N(o.y, 0)
            o.lf.x1 = N(o.lf.X1) ? o.lf.X1 : N(o.lf.x1, 0) + o.x - o.r
            o.lf.y1 = N(o.lf.Y1) ? o.lf.Y1 : N(o.lf.y1, 0) + o.y - o.r
            o.lf.x2 = N(o.lf.X2) ? o.lf.X2 : N(o.lf.x2, 0) + o.x - o.r
            o.lf.y2 = N(o.lf.Y2) ? o.lf.Y2 : N(o.lf.y2, 0) + o.y + o.r
        }
        /*
         $l('r: ' + o.r)
         $l('x: ' + o.x)
         $l('y: ' + o.y)
         $l('x1: '+ o.lf.x1)
         $l('y1: '+ o.lf.y1)
         $l('x2: '+ o.lf.x2)
         $l('y2: '+ o.lf.y2)

         */

        h.lf(o.lf)
    }


    if (o.rf) {
        o.rf = O(o.rf) ? o.rf : {}
        o.c = [2, 'z']
        if (o.r) {
            o.rf.x1 = N(o.rf.X1) ? o.rf.X1 : _.tN(o.rf.x1) + o.x
            o.rf.y1 = N(o.rf.Y1) ? o.rf.Y1 : _.tN(o.rf.y1) + o.y
            o.rf.x2 = N(o.rf.X2) ? o.rf.X2 : _.tN(o.rf.x2) + o.x + 20
            o.rf.y2 = N(o.rf.Y2) ? o.rf.Y2 : _.tN(o.rf.y2) + o.y + 20
            o.rf.r2 = N(o.rf.R2) ? o.rf.R2 : _.tN(o.rf.r2) + o.r
        }
        h.rf(o.rf)
    }


    if (o.ls) {
        o.ls = O(o.ls) ? o.ls : {}
        if (o.r) {
            o.ls.x1 = _.tN(o.ls.x1) + o.x - o.r
            o.ls.y1 = _.tN(o.ls.y1) + o.y - o.r
            o.ls.x2 = _.tN(o.ls.x2) + o.x - o.r
            o.ls.y2 = _.tN(o.ls.y2) + o.y + o.r
        }
        h.ls(o.ls)
    }


    if (o.rs) {
        o.rs = O(o.rs) ? o.rs : {}
        if (o.r) {
            o.rs.x1 = _.tN(o.rs.x1) + o.x
            o.rs.y1 = _.tN(o.rs.y1) + o.y
            o.rs.x2 = _.tN(o.rs.x2) + o.x
            o.rs.y2 = _.tN(o.rs.y2) + o.y
            o.rs.r2 = _.tN(o.rs.r2) + o.r
        }
        h.rs(o.rs)
    }
    if (o.bs) {
        h.bs(o.bs)
    }
    if (o.bf) {
        h.bf(o.bf)
    }

    return h
}
h.C = h.s = function (C, l) {
    var h = this, gx = h.graphics
    gx.s(oO('c', C))
    if (N(l)) {
        h.l(l)
    }
    return h
}
h.l = h.ss = function (l, b, c) {
    var h = this, gx = h.graphics;
    gx.ss(l || 1, b, c)
    return h

}
h.lf = function () {
    var h = this, gx = h.graphics, g = G(arguments), o
    o = cjs.lg(g)
    gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
    return h
}
h.rg = function (o) {
    var h = this, g = G(arguments),
        gx = h.graphics,
        o


    if (A(g[0]) && A(g[1])) {

        gx.rf(
            [oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
        )
        return h
    }


    o = O(g[0]) ? g[0] :


        S(g[1]) ? _.x({c1: g[0], c2: g[1]},
            N(g[7]) ?
            {x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
                : N(g[5]) ?
            {x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
                : N(g[4]) ?
            {x2: g[2], r1: g[3], r2: g[4]}
                : N(g[3]) ?
            {r1: g[2], r2: g[3]}
                :
            {r2: g[2]})

            : S(g[0]) ?
        {c2: g[0]}
            : {}

    $df.grad(o)

    o.x2 = N(o.x2, o.x1)
    o.y2 = N(o.y2, o.y1)
    o.r1 = N(o.r1, 1);
    o.r2 = N(o.r2, 100)

    return o
}
h.ls = function me() {
    var h = this, gx = h.graphics, g = G(arguments), o
    if (A(g[0])) {
        return me.apply(h, g[0])
    }
    o = h.lg.apply(h, g)
    gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
    return h
}
h.rf = function me() {
    var h = this, gx = h.graphics, g = G(arguments), o
    if (A(g[0])) {
        return me.apply(h, g[0])
    }

    o = h.rg.apply(h, g)

    gx.rf(
        [o.c1, o.c2],
        [o.s1, o.s2],
        o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
    return h


}
h.rs = function me() {
    var h = this, gx = h.graphics, g = G(arguments), o
    if (A(g[0])) {
        return me.apply(h, g[0])
    }
    o = h.rg.apply(h, g)
    gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
    return h
}
cjs.lg = h.lg = function () {
    var g = G(arguments), o//h=this, gx=h.graphics,

    if (g.A) {
        return cjs.lg.apply(null, g.f)
    }
    o = g.O ? g.f :
        _.x({c1: g.f, c2: g.s},
            N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
                : N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
                : N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})
    o.c1 = oO('c', o.c1 || 'z');
    o.c2 = oO('c', o.c2 || 'w')
    o.s1 = N(o.s1, 0);
    o.s2 = N(o.s2, 1)
    o.x1 = N(o.x1, 0);
    o.y1 = N(o.y1, 0)
    o.x2 = N(o.x2, 0)
    o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100
    return o
}
_MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
h.z = h.clr = function () {
    this.graphics.clear();
    return this
}
h.same = function () {return $h(this)} // h.copy=
h.lt = function (x, y) {
    var h = this, gx = h.graphics, v
    if (A(x) && O(x[0])) {
        return h.lt.apply(h, x)
    }
    if (N(x)) {
        gx.lt(x, y);
        return h
    }
    _.e(arguments, function (v) {
        v = V(v)
        h.lt(v.x, v.y)
    })
    return h
}
h.mt = function (x, y) {
    var h = this,
        gx = h.graphics, g = arguments, x = g[0], y = g[1], v
    if (A(g[0]) && O(g[0][0])) {
        _.e(g, function (v) {
            h.mt.apply(h, v)
        });
        return h
    }
    if (N(x)) {
        v = V(x, y);
        gx.mt(v.x, v.y)
    }
    else {
        v = V(_.f(g))
        h.mt(v.x, v.y)
        _.e(_.r(g), function (v) {
            v = V(v)
            h.lt(v.x, v.y)
        })
    }
    return h
}
h.dl = h.line = function () {
    var g = G(arguments), o
    o = N(g[0]) ? {x1: g[0], y1: g[1], x2: g[2], y2: g[3]} :
    {x1: g[0].x, y1: g[0].y, x2: g[1].x, y2: g[1].y}
    this.mt(o.x1, o.y1).lt(o.x2, o.y2)
    return this
}
$H = $h = function () {
    var g = G(arguments), h = new cjs.Shape(),


    //if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
        o = g.O ? g.f :
            g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
            {x: g.f, y: g.s, C: g.t, l: g[3]} : {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
                // 'c-C-l' pattern
                N(g.s) ? {C: g.f, l: g.s} :
                {c: g.f, C: g.s, l: g.t}

    _h=h
    h.XY(N(o.x, 0), N(o.y, 0))
    h.c(o.c || 'z', o.C || 'w', o.l || 8)
    if (o.C) {
        h.C(o.C)
    }
    if (N(o.l)) {
        h.l(o.l)
    }
    if (g.p) {
        h.dg()
    }
    return h
}
$Ct = function (a) {
    return new cjs.Container(a)
}
ct.h = function () {
    var ct = this,
        h = $H.apply($H, arguments)
    ct.A(h)
    return h
}
ct.ct = function (x, y) {
    var ct = this,
        g = G(arguments), ct1 = $Ct()
    o = g.F_ ? {fn: g.f} : {x: g.f, y: g.s}
    ct.A(ct1)
    if (o.fn) {
        o.fn(ct1, ct)
    }
    else if (N(o.x)) {
        ct1.XY(o.x, o.y)
    }
    if (g.p) {
        cjs.bindSlide(ct1)
    }
    return ct1
}
cjs.lq = function (mf, func) {


    var q = new cjs.LoadQueue(true)

    if (A(mf)) {
        q.loadManifest(cjs.mf.apply(null, mf))
    }

    if (F(func)) {
        q.complete(function () {
            func(function (img) {
                return q.getResult(img)
            })
        })
    }
    return q
} //cjs.loadQueue =
i.hT = i.test = function (x, y) {
    var i = this
    if (cjs.iDO(x)) {
        return i.hT(i.gTL(x))
    }
    if (O(x)) {
        y = x.y;
        x = x.x
    }
    return i.hitTest(x, y)
}
i.gL = i.gTL = function (x, y) {
    var i = this
    if (O(x)) {
        y = x.y;
        x = x.x
    }
    return i.globalToLocal(x, y)
}
i.uM = function () {
    var i = this, s = i.St()
    if (s.mouseInBounds) {
        var pt = i.gTL(s.mouseX, s.mouseY)
        return i.hT(pt)
    }
}
i.cC = i.cc = function () {
    return this.cacheCanvas
}
i.ca = function () {
    var ob = this,
        st = ob.St(),
        g = G(arguments), o, op, i
    if (O(ob.image && !g.n && !g.p)) {
        ob.cache($(ob.image)[0])
    }
    if (ob.cacheCanvas && !g.p && (U(g[0]) || S(g[0]) || g.n)) {
        op = g[0];
        ob.updateCache(op);
        return ob
    }
    o = O(g[0]) ? {i: g[0], x: g[1], y: [2]} : N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} : N(g[1]) ? {
        w: g[0],
        h: g[1]
    } : {}
    if (O(o.i)) {
        o.i = o.i.image ? o.i.image : $(o.i)[0];
        if (!g.n) {
            if (ob.image) {
                ob = ob.image
            }
            ob = $(ob)[0]
            ob.cache(0, 0, ob.width, ob.height)
        }
    }
    o.x = N(o.x) ? o.x : 0;
    o.y = N(o.y) ? o.y : 0
    o.w = N(o.w) ? o.w : O(o.i) ? o.i.width : N(o.h) ? o.h : st ? st.W() : 0
    o.h = N(o.h) ? o.h : O(o.i) ? o.i.height : st ? st.H() : 0
    ob.cache(o.x, o.y, o.w, o.h)
    return ob
}
cjs.rmOb = function (ob) {

    if (cjs.iDO(ob)) {
        ob.rm()
    }
}
i.shad = function (color, x, y, blur) {
    cjs.shad = function (color, x, y, blur) {
        alert('cjs.shad')
        if (color == '-') {
            return new cjs.Shadow(null, 0, 0, 0)
        }
        color = S(color) ? color : 'a'
        blur = N(blur) ? blur : 10
        x = N(x) ? x : 0
        y = N(y) ? y : 0
        var shad = new cjs.Shadow(oO('c', color), x, y, blur)
        return shad
    }// = cjs.shadow

    var shadow = cjs.shad(color, x, y, blur)
    this.shadow = shadow
    return this
}
i.St = i.S = i.st = function (){return this.getStage()}
i.pa= i.P = function (){return this.parent}
i.hd = function () {
    this.visible = false;
    return this
}
i.sib = function () {return this.P().ch()}
i.rC =  function () {
    var i = this, g = G(arguments), x, y, hW, hH

    x = i.W() / 2
    hW = x
    y = i.H() / 2

    hH = y

    return (g.p) ?
        i.rX(hW, '+').rY(hH, '+') :
        i.rXY(hW, hH)
}
i.bd = i.bounds = function (a, b, c, d) {
    var i = this

    this.nominalBounds = new cjs.Rectangle(a, b, c, d)

    return this

}
i.toFront = function () {
    return this.ix(this.sib().length - 1)
}
i.belowStg = function () {
    return this.y > this.St().H()
}
i.in = i.within = i.inStage = function () {
    var ob = this,
        st = ob.st(),
        g = G(arguments),
        x = ob.x,
        y = ob.y,
        w = st.W() - 100,
        h = st.H() - 100,

        inn = x > 0 && x < w && y > 0 && y < h

    if (g.n) {
        if (!inn) {
            ob.rm()
        }
    }

    return inn
}
i.within = i.inStage = function () {
    var i = this, g = G(arguments), s = i.S(), wthnS

    wthnS = i.x > 0 && i.y > 0

    && i.x < (s.W() - 100) && i.y < ( s.H() - 100 )

    if (g.n && !wthnS) {
        s.rm()
    }

    return wthnS
}
comp()
function comp(){
    i.o=function(o){this.compositeOperation = o;return this}
    i.Ds= i.dO=function(){
        this.o('destination-out'); return this}
    i.dS= i.dI=function(){return this.o('destination-in')}
    i.sD= i.sI=function(){this.o('source-in'); return this }
    i.Sd= i.sO=function(){this.o('source-out'); return this } // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
    i.ds= i.dV= function(){ this.o('destination-over'); return this }
    i.SD= i.sT= i.sA= function(){ this.o('source-atop'); return this }
    i.DS= i.dT= i.dA= function(){ this.o('destination-atop'); return this }
    i.li=function(){ this.o('lighter'); return this }
    i.co=function(){ this.o('copy'); return this }
    i.xo=function(){ this.o('xor'); return this }
}
$Bm=  function(bm){var g=G(arguments)
    bm=  new cjs.Bitmap(bm)
    if(g.p){ bm.drag() }
    return bm
}
$St = function(){var st, g = G(arguments), cv
    st = St(cv = g.A ? canById(g.f) : O(g.f) ? canEl(g.f) : newCan(g))
    st.cv = st.c = st.can = $(st.canvas)
    st.cv0 = st.cv[0]
    st.xc = st.cv0.getContext('2d')
    st.A(); if (g.p) {st.t()}//.t()
    function canById(a){return a[0]}
    function canEl(a){
        //can pass it a canvas OR a $canvas object
        return $(a)[0]}
    function newCan(g){
        return  $.c(g.f || 'p', g.s || 1200, g.t || 600, g[3], g[4])[0]}
    return st
    function St(cv){
        var s= new cjs.Stage(cv)
        return s
    }
}
St = function () {z(); var g = G(arguments)
    st = s = $St(g[0] || 'p', 1200, 600)
    h = $h(0, 0).a2(s)
    if (g.p) {
        SL(h)
    }
    return s
}
st.ab = st.abs = function (x, y) {
    this.can.abs(x, y);
    return this
}
st.trDr = function (){
    var st = this
    st._md = 0
    st.MD(function () {
        st._md = 1
    })
    st.MU(function () {
        st._md = 0
    })
    return this
}
st.Bm = function (i) {
    return $Bm(i).a2(this)
}
mou()
balls()
st.hW = function () {
    return this.W() / 2
}
st.hH = function () {
    return this.H() / 2
}
function mou() {
    st.m = function (ob) {
        //uses Point
        var st = this
        if (U(ob)) {
            return cjs.P(st.mouseX, st.mouseY)
        }
        if (O(ob)) {
            if (ob.d) {
                st.MD(ob.d)
            }
            ;
            if (ob.u) {
                st.MU(ob.u)
            }
            ;
            if (ob.m) {
                st.MM(ob.m)
            }
        }
        return st
    }
    st.mx = st.mX = function () {
        return this.m().x
    }
    st.my = st.mY = function () {
        return this.m().y
    }
}
function balls(){
    s.cannonBall=function(x,y){var s=this,h
        h=s.h(x,y)
        h.rf('a', 'z',18 ).dc(18).ef()
        return h}
    s.basketBall=function(x,y){var s=this
        return this.h(x,y).rf('w', 'o',18 ).dc(18).ef()
    }
    s.beachBall=function(x,y){var s=this
        return s.h(x,y)
            .rf('b','r',18).dc(18).ef()
    }
    s.snowBall=function(x,y){var s=this
        return s.h(x,y).rf('a','w',18).dc(18).ef()
    }}
i.rgc = function () {
    var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
    return (g[0] === 0) ?
        i.rXY(0, 0, (g.p ? '+' : null))
        : i.rXY(x, y, (g.p ? '+' : null))
}//

function graf(){
	$.St = function () {
		alert('$.St')
		z()
		s = $St().t()
		s.bm('me', function (bb) {
			b = bb.drag()
		})
		return s
	}
	function easPhys() {
		i.move = function () {
			return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
		}
		i.accelerate = function () {
			return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
		}
		i.jerk = function () {
			return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
		}
		i.vX = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vx = this.vx + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vx = this.vx - a
				}
				else {
					this.vx = this.vx * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vx
			}
			this.vx = a;
			return this
		}
		i.vY = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vy = this.vy + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vy = this.vy - a
				}
				else {
					this.vy = this.vy * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vy
			}
			this.vy = a
			return this
		}
		i.vXY = function (x, y) {
			return this.vX(x).vY(y)
		}
		i.aX = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vx = this.vx + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vx = this.vx - a
				}
				else {
					this.vx = this.vx * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vx
			}
			this.vx = a;
			return this
		}
		i.aY = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vy = this.vy + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vy = this.vy - a
				}
				else {
					this.vy = this.vy * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vy
			}
			this.vy = a
			return this
		}
		i.jX = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vx = this.vx + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vx = this.vx - a
				}
				else {
					this.vx = this.vx * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vx
			}
			this.vx = a;
			return this
		}
		i.jY = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vy = this.vy + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vy = this.vy - a
				}
				else {
					this.vy = this.vy * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vy
			}
			this.vy = a
			return this
		}
		i.brake = function () {
			this.vx = this.vy = 0
		}
		i.shootBullet = function () {
			alert('i.shootbullet')
			shooter = this
			s = stage = shooter.stg()
			bullet = cjs.circ(8, 'w').XY(shooter).a2(s)
			bullet.startMoving(
					(shooter.vx || 1) * 1.5, (shooter.vy || 1) * 1.5
			)
		}
		i.hitByBullet = i.isPointInMyRectBounds = function (bullet) {
			alert('i.hitByBullet')
			var args = G(arguments), bullet = args[0],
					didHit = M.pointInRectangle(
							bullet.cX(), bullet.cY(),
							{
								x: this.cX(),
								y: this.cY(),
								w: this.W(),
								h: this.H()
							}
					)
			if (args.n) {
				if (didHit) {
					this.rm()
				}
			}
			return didHit
		}
		i.killAllIAmHitting = function () {
			var i = this,
					stage = i.St()
			_.e(stage.children, function (obj) {
				if (i != obj) {
					obj.hitByBullet(i, '-')
				}
			})
		}
		i.makeMeAKiller = function () {
			var i = this
			cjs.tick(function () {
				i.killAllIAmHitting()
			})
			return this
		}
		i.bounce = function (n) {
			var i = this,
					stage = i.getStage(),
					h = stage.H(),
					w = stage.W()
			n = N(n, 0)
			T.t(
					function () {
						var x = i.x, y = i.y
						if (x > w - i.W() - n || x < (n )) {
							i.vX('-')
						}
						if (y > h - i.H() - n || y < (n )) {
							i.vY('-')
						}
					})
			return i
		}
		i.startMoving = function (x, y) {
			var i = this, vx, vy
			if (x) {
				i.vX(x)
			}
			if (y) {
				i.vY(y)
			}
			vx = i.vx || 0
			vy = i.vy || 0
			T.t(function () {
				i.X(vx, '+').Y(vy, '+')
			})
			return i
		}
		i.toR = i.moveRight = function (num) {
			num = num || 20
			this.X(num, '+')
			return this
		}
		i.toL = i.moveLeft = function (num) {
			num = num || 20
			this.X(num, '-')
			return this
		}
		i.toU = i.moveDown = function (num) {
			num = num || 20
			this.Y(num, '-')
			return this
		}
		i.toD = i.moveDown = function (num) {
			num = num || 20
			this.Y(num, '+')
			return this
		}
		i.keyControls = function (num) {
			var args = G(arguments), i = this
			if (args.P) {
				$.kD('left', function () {
					i.toL(num)
				})
				$.kD('right', function () {
					i.toR(num)
				})
			}
			if (args.N) {
				$.kD('up', function () {
					i.toU(num)
				})
				$.kD('down', function () {
					i.toD(num)
				})
			}
		}
	}
	
	oC = function (c) {
		return oO('c', c)
	}
	oK = function (a) {
		return oO('k', a)
	}
	oT = function (a) {
		return oO('t', a)
	}
	oE = function (a) {
		return oO('e', a)
	}
	oI = function (a) {
		return oO('i', a)
	}
	oS = function (a) {
		return oO('s', a)
	}
	$o = function o(a, b, c) {
		return _.isUndefined(b) ? _p(o, a) : G(arguments).N ? oO(a, b, c) : Oo(a, b, c)
	}
	oQ = function (f, m) {
		$(function () {
			Q(m || mf, f)
		})
	}
	old = function () {
		ct.bmR = function (i, fn) {
			var ct = this, bm
			alert('ct.bmR')
			$.i(i, function (i) {
				bm = $Bm(i[0]).a2(ct)
				bm.rXY(
						bm.W() / 2,
						bm.H() / 2
				)
				if (fn) {
					fn(bm)
				}
			})
			return ct
		}
//to shape -> ct.circle = function(x,y,r,c){var ct=this;ct.A(cjs.circle(x,y,r,c));return ct}
// 'P' is avaible.  potition?  (M is taken by Math, but mouse needs something)
		q.mf = q.manifest = function () {
			var q = this, g = G(arguments)
			q.loadManifest(cjs.mf.apply(null, g))
			return q
		}
		cjs.lQDep = cjs.lqDep = cjs.loadQueueDep = function (mf, fn) {
			var q = new cjs.LoadQueue(true)
			if (A(mf)) {
				q.loadManifest(cjs.mf.apply(null, mf))
			}
			if (F(fn)) {
				q.complete(function () {
					fn(function (i) {
						return q.getResult(i)
					})
				})
			}
			return q
		}
		cjs.mfDep = cjs.manifestDep = function (a) {
			var g = G(arguments), mf = []
			_.e(g, function (v) {
				mf.push({
					src: cjs.src(v),
					id: v
				})
			})
			return mf
		}
		//cjs.handleFileLoad = function (e) {if (e.item.type == "image") {images[e.item.id] = e.result}}
//cjs.makeManifest = cjs.makeMan=function(a) {return cjs.manifest.apply(null, _.m(a.images, function (i) {return Graphics.fromSource(i)}))}
		QDep = function (i, fn) {
			q = cjs.lQ(),
					mf = []
			_.e(i, function (v) {
				mf.push({src: cjs.src(v), id: v})
			})
			q.mf(mf)
			q.c(function () {
				fn(q)
			})
			return q
		}
		tickX = function (e) {
			j.Y(e.delta / 1000 * 100, '-')
		}
		timeStamp2 = function (s, j, pxPerSec) {
			var fn = function (s, e) {
				if (!N(j.ts)) {
					j.ts = 0;
					j.lts = e.ts
				}
				else {
					j.ts = e.ts - j.lts;
					j.lts = e.ts
					j.y((j.ts / 1000) * pxPerSec, '-')
				}
			}
			return s.t(fn)
		}
// s.B = function(x,y){return this.ct(x,y).drag() }
		/*
		 $a1=function(ob, g, c){
		
		 ob.apply(c||ob,  g)
		
		 }
		
		
		 $a = function(gx, met, g){
		
		 gx[met].apply(gx, g)
		
		 }
		
		
		 $a(gx, 'dc',  N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )
		
		 gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )
		
		 gx.app=function(met,g){var gx=this
		
		 gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )
		
		 }
		 */
		cjs.RECTx = function (c, W, H, x, y, a) {
			var g = G(arguments), ct = cjs.ct(), h, o;
			if (O(c)) {
				o = c
			} else if (S(c)) {
				o = {c: c, w: W, h: H, x: x, y: y, a: a}
			}
			o = b2d.oDef(o)
			h = ct.h(o.x, o.y).c(o.c, o.C, o.l).rot(o.a)
			if (o.bm) {
				h.bm('me', function () {
					h.dr2(o.x, o.y, o.w, o.h)
				});
				return h
			}
			if (o.rg) {
				h.rg(o.c, o.C)
			}
			if (o.lg) {
				h.lg(o.c, o.C)
			}
			h.dr2(o.x, o.y, o.w, o.h)
			cjs.recx = cjs.rectx = function self(wd, ht, c, C) {
				var h, hW, hH
				wd = _.tN(wd, 100)
				ht = _.tN(ht, wd)
				hW = wd / 2
				hH = ht / 2
				h = $h().c(c || 'g', C || 'w').mt(-hW, -hH)
						.lt(-hW, hH).lt(hW, hH).lt(hW, -hH).lt(-hW, -hH)
				return h
			}
			ct.artx = function (x, y, c, C) {
				var g = G(arguments), ct = this, h
				y = N(g[1]) ? g[1] : x
				c = S(g[2]) ? oO('c', g[2]) : null
				C = S(g[2]) ? oO('c', g[3]) : c
				h = $h(x, y, c, C).a2(ct)
				if (g.p) {
					h.drag()
				}
				return h
			}
			return h
		}
//b2d.colMap=function(C){return _.map(C,function(c){return oO('c',c)})}
//cjs.chalk=function(t,c){if(O(t)){alert('check code'); t='x: '+t.x+', '+'y: '+ t.y}; return cjs.T(t,"26px Arial", c||"w").XY(550,150)}
		/*
		 w.i.bm('me', function(bm){
		 bm.XY(300).sXY(.2)
		 w.i.dot(300,300)
		 })*/
//third wheel, wagon hitch
	}
	Utils = {}
	Utils.isNested = isArrayWhoseFirstObjIsAlsoAnArray = Utils.isDataUrl = Du = function (a) {
		return s$(a).contains('data:')
	}
	Utils.asElement = E
	Utils.apply = _a = function (a, b, c, d, e) {//_.isUndefined(a)? qq('a')
		return F(a) ? a.apply(c || a, b)
				: S(a) ? a.split(b || '/').pop()// after('/')
				: 0//:a.animate(b,c,d,e)//
	}
	Utils.URL = _u = function (a) {
		url = function (a) {
			return 'url("' + a + '")'
		}
		return url(a)
		//return _.isUndefined(a)? qq('ul'): url(a)
	}
	Utils.func = _v = function (a) {
		return S(a) ?
				function () {
					Function(a)()
				}
				: F(a) ? a : F(a.value) ? a.value() : a.value
	}
	Graphics = window['Graphics'] || {}
	Graphics.getCanvas = C
	Utils.chompRight = chompRight = function (a, b) {
		return s$(a).chompRight(b).s
	}
	Utils.ensureRight = ensureRight = function (a, b) {
		return
		s$(a).ensureRight(b).s
	}
	Range = function (a, b) {
		var g = G(arguments)
		return N(b) ? _.range(a, b)
				: g.P ? _.range(a)
				: _.range(1, (a || 10) + 1)
	}
//should be dep? 'fsa'.toUpperCase()
	Utils.toUpperCase = toUpperCase = uC = function (a) {
		return S(a) ? a.toUpperCase()
				: A(a) ? _.map(a, function (a) {
			return uC(a)
		}) : a
	}
	Utils.isUpper = isUpper = Uc = function (a) {
		if (S(a)) { //for safety?
			return s$(a).isUpper()
		}
	}
	lC = function (a) {
		return S(a) ? a.toLowerCase()
				: A(a) ? _.m(a, function (a) {
			return lC(a)
		}) : a
	}
	Lc = function (a) {
		if (S(a)) {
			return s$(a).isLower()
		}
	}
	_.props = Utils.props = $p = function p(i, t, kK, vf, f) {
//get: index thing key //set: index thing key value [function] //setOb: index thing ob [function]
		if (O(kK)) {
			_.each(kK, function (v, k) {
				p(i, t, k, v, vf)
			})
		}                   //setOb
		if (U(kK)) {
			return _p(p, i, t)
		}
		if (vf == "*") {
			return p(i, t, kK, $r(kK))
		} // set it randomly?!
		else if (U(vf)) {
			return t[oO(i, kK)]
		}   //get
		else {
			f = f || _s  //function(t,k,v){t[k]=v}  //set
			f(t, oO(i, kK), oO(kK, vf, 'R'))
		}
		return t
	}
	_.methods = Utils.methods = $m = function f(i, x, m, g) { //=met
		if (U(i)) {
			return
		}
		if (U(x)) {
			return _p(f, i)
		}
		if (U(m)) {
			return _p(f, i, x)
		}// if(U(g)){return _p(f,i,x,m)}
		if (!A(g)) {
			return _a(f, [i, x, m, _r(arguments, 3)])
		}//met('x',  c.x, 'd',  [i,0,0]     )//met('x',  c.x, 'd',   i,0,0   )
		return _a(x[oO(i, m)], g, x) || x
	}
	nN = function (w) {
		return Boolean(Number(w))
	}//M=
	Nn = _.isNan
	J = function (a, b, c) {
		if (S(a)) {
			return $.getJSON(a, b, c)
		}
		;
		return JSON.stringify(a)
	}
	isWindow = function (a) {
		if (O(a)) {
			if (s$(a).contains('Window') ||
					s$(a[0]).contains('Window')) {
				return window
			}
		}
	}
	Yano.func = function () {
		$('body').C('*')
	}
	Yano.interval = 1000
	Yano.intervalID = null
//when you call this straight:
//it checks if a Y-func is currently running (by seeing if Y.intervalID is set)
//if it is, it clears the Y-func.. (and then unsets the Y.intervalID)
// if func not running, it does setInterval, saving the returned # as Y.intervalID
// if you pass in a neg, it will only toggle(turn) off
// if you pass in a pos, it will only toggle(turn) on
	Yano.toggleFunc = function self(func, interval) {
		var args = G(arguments),
				func = args[0],
				interval = args[1]
		if (Yano.intervalID) {
			if (args.P) {
				clearInterval(Yano.intervalID)
				Yano.intervalID = null
			}
		}
		else {
			if (args.N) {
				Yano.intervalID = setInterval(Yano.func, Yano.interval)
			}
		}
	} //rat
	Yano.setToggleFunc = function (func, interval) {
		if (func) {
			Yano.intervalFunc = func
		}
		if (interval) {
			Yano.interval = interval
		}
		Yano.setIntervalID = setInterval(Yano.intervalFunc, Yano.interval)
		return Yano.toggleFunc
	}
//random
	Yano.random = Yano.rand = $r = function (a, b) {
		a = a || 'c'; //cannot be 'color' ?? only abr??
		var values = _.values(oO(a))
		return Oo(a, b) || values[_.random(_.size(values) - 1)]
	}
}
T = function (times, func) {
	var timeout
	if (N(times)) {
		return _.t(times, function (i) {
			func(i + 1)
		})
	}
	if (F(times)) {
		timeout = N(func) ? func : 100
		func = times
	}
	return setTimeout(func, timeout)
}
$.in = function () {
	var g = G(arguments), o, n = 1,
			ret
	if (N(g[0])) {
		o = {s: g[0], fn: _.r(g)}
	}
	else {
		o = {s: 1, fn: g}
	}
	_.e(o.fn, function (fn) {
		var s = o.s * n
		ret = setTimeout(_v(fn), s * 1000)
		n++
	})
	return ret
}
$.T = function (a, b) {
	return setTimeout(_v(a), b)
}
bad = function () {
	
	//xP=function(a){return Utils.props('X', X(a))}
//xM=function(a){return Utils.methods('x', X(a))}
//tf=function(){n=1;t=true;T(function(){t=false},1000);I(function(){if(t==true){co();n=n+1}else{$l(n)}},1)}
	$.inASec = function (func) {
		return setTimeout(func, 1000)
	}
	cjs.waitFor = function (time) {
		time = N(time) ? time : 1000
		cjs.wait = true
		setTimeout(function () {
			cjs.wait = false
		}, time)
	}
	Qx = function Q(a) {
		if (!O(a)) {
			return
		}
		if (s$(a.toString()).contains('Window') || a[0]
				&& s$(a[0].toString()).contains('Window')) {
			return $(window)
		}
		return a.name === 'q' ? Q(a.q)
				: E(a) ? $(E(a))
				: 0
	}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Object.prototype.__C = function(){ return this.constructor.name }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
////////////////////////////////////////////////////////
	gT = withGetTest = function (url) {
		$.get('/' + url, function (aa) {
			a = aa
		})
	}
	vkl = function (a) {
		return new Function("v", "k", "l", "l[k]=" + a)
	}
	$.sec = function (f) {
		return setTimeout(f, 1000)
	}
	oO.V = values = function (a) {
		if (S(a)) {
			a = oO(a)
		}
		;
		return _.values(a)
	}
	scaleXandYBy = scl = function (v, a) {
		v.x *= a;
		v.y *= a;
		return v
	}
//??? sub=function(a,b){return a.o('s',b)}
	_lX = function (a, b) {
		if (F(b)) {
			$(a).load(b);
			return a
		}
		return _.l(a, b)
	}
	_mX = function (a, b, c) {
		return F(b) ? _.m(a, b, c)
				: A(a) ? _.min(a) : function (z) {
			return z * a
		}
	}
	_hX = function _h(a, b, c) {
		if (O(b)) {
			return _h(b.toString(), a)
		}
		if (S(a)) {
			return s$(a).contains(b, c)
		}
		if (O(a)) {
			if (U(b)) {
				return a.height ? (F(a.height) ? a.height() : a.height) : F(a.h) ? a.h() : N(a.h) ? a.h : false
			}
			if (N(b)) {
				if (F(a.height)) {
					a.height(b);
					return a
				}
				if (N(a.height)) {
					a.height = b;
					return a
				}
				if (F(a.h)) {
					a.h(b);
					return a
				}
				if (N(a.h)) {
					a.h = b;
					return a
				}
			}
			return A(a) ? _.contains(a, b) : _.has(a, b)
		}
		if (U(a)) {
			return qq($('html'))
		}
	}
	_IX = function (a, b) {
		return U(a) ? new Image()
				: U(b) ? _.invert(a)
				: _a(_.intersection, arguments)
	}
	IX = function (a, b) {
		if (N(b)) {
			return setInterval(_v(a), b)
		}
		if (_h('Image', E(a))) {
			return E(a)
		}
	}
	_wX = function (a, b) {
		if (O(a)) {
			var w = function (a, b) {
				if (_.isUndefined(b)) {
					return a.width
				}
				a.width = b;
				return a
			}
			if (U(b)) {
				return F(w(a)) ? a.width() : w(a) ? w(a) : F(a.w) ? a.w() : a.w
			}
			if (F(w(a))) {
				a.width(b)
			}
			else if (w(a)) {
				w(a, b)
			}
			else if (F(a.w)) {
				a.w(b)
			}
			else {
				a.w = b
			}
			return a
		}
	}
//fCC=function(a){ return String.fromCharCode(a) }
//qx = function(a){return xx(qi(a))}
//ddd=function(){return (d=_d().c('y').Z().a())}
//ccc=function(){return (c=$b($c()).drg())}
//test functions
//fA=function(a){return function(){alert(a)}}
//fL=function(a){return function(){$l(a)}}
//a3=function(){alert(3)}
//a4=function(){alert(4)}
//al=function(a){a=a||':)';alert(a);return a}
	H = function (a) {
		var oH = function (a) {
			if (O(a = a || $(window))) {
				return Q(a).outerHeight()
			}
		}
		a = a || $(window);
		return N(a) ? W() / a : oH(Q(a))
	}
//logic
	df = function (a, b) {
		a = ob(a)
		return G(arguments).p ? D(a, oO(b || '' + 'D'))
				: D(a) ? a : b
	}
//cL=function(a){console.log(a);return a}
	ll = function (a, b) {
		if (S(b)) {
			console.log(a + ': ' + b)
		}
		else {
			$l(a + ' ->')
			$l(b)
		}
		return b
	}
	_iX = function (a, b) {
		return U(a) ? qq('i') :
				A(a) ? _.i(a, b) : pI(a)
	}
	//is=function(a){return function(b){return b===a}}
//_.io$=function(a,b,c){return a.indexOf(b,(c<0?c+_z(a):c))}
//_j=function(a,b){return(a||[]).join(b||' ')}
//K=function(a,b,c){return N(a)? I(b, a*1000): N(b)? I(a, b): _.keys(a)}
//graphics
	onReady = _k = function (a) {
		return O(a) && a.complete
	}
	_s = function s(a, b, c) {
		var g = G(arguments)
		if (D(g[1])) {
			a[b] = c;
			return a
		}
		if (U(a)) {
			return qq('s')
		}
		return src(a)
	}
	iW = function (a) {
		if (O(a = a || $$w)) {
			return Q(a).innerWidth()
		}
	}
	iH = function (a) {
		if (O(a = a || $$w)) {
			return Q(a).innerHeight()
		}
	}
	$t = function (a, b) {
		if (b2d.test) {
			var g = G(arguments),
					a = g[0],
					b = g[1], str
			if (D(b)) {
				str = '||'
				_.e(g, function (s) {
					str += ' ' + s.toString() + ' |'
				})
				str += '|'
			}
			else {
				str = a.toString()
			}
			$l(str)
		}
		;
		return a
	}
	Wx = function (a) {
		var g = G(arguments)
		var oW = function (a) {
			if (_.isObject(a = a || $(window))) {
				return Q(a).outerWidth()
			}
		}
		a = a || $(window);
		return N(a) ? W() / a : oW(Q(a))
	}
//just returns toDataUrl() on an object, safe
	tU = function (a) {
		if (
				O(a) && F(a.toDataURL)) {
			return a.toDataURL()
		}
//tU=function(s){return  S(s)?sJ:tU(s)? tU(s)
// :s.u? s.u():iI(s)? s.src
// : s.image?s.image.src:0} //s/c/C/i/b->s sync
	}
	tDU = function (a) {
		return a.toDataURL()
	}
	_W = function (a, b) {
		if (U(b)) {
			return a.which
		}
		return a.which == b
	} //_.without
	RX = function (a, b) {
		var g = G(arguments)
		return ( S(a) && S(b) ) ? (
				g.N ? s$(a).ensureRight(b).s
						: s$(a).chompRight(b).s    )
				: N(b) ? _.range(a, b)
				: N(a) ? (g.P ? _.range(a) : _.range(1, (a || 10) + 1)   )
				: new XMLHttpRequest()
	}
	_S = function (a, b) {
		return b ? String(a).split(b) : a.toString()
	}
	_r = function r(a, b, c, d) {
		return U(a) ? rnd()
				: (F(b) && D(c)) ? _.reduce(a, b, c)
				: (F(a) && D(c)) ? _.reduceRight(a, c, b)
				: (F(a) || F(b)) ? r(c, a, b)
				: N(a) ? _.random(a, b, c)
				: S(a) ? a.replace(b || '#', c || '')
				: _.rest(a, b)
	}
	ok = function (a) {
		return a || 'ok'
	}
	_P = function (a, b, c) {
		return S(a) ? JSON.parse(a, b)
				: $(a).prepend(b, c)
	}
	P = function (a) {
		return O(a) && !F(a) && !A(a) && !(E(a))
	}
	_p = function (a, b, c) {
		if (U(a)) {
			return qq('p')
		}
		return (c === 0) ? function (c, d) {
			return a(c, b, d)
		}
				: F(a) ? _a(_.partial, arguments)
				: O(a) ? (G(arguments).N ? $(a).parents(f)
				: $(a).parent(f))
				: S(b) ? (S(a, b) ? a : b + a)
				: nN(a) ? a + 'px'
				: a
	}
	_b = function (a, b, c) {
		return U(a) ? qq($('body'))//--
				: F(a) ? _.b(a, b, c)//
				: S(a) ? a.split(b || '.')[0] //before('.')
				: _.bindAll(a, b, c)//
	}
	_e = function e(p, q, w) {
		var eW = function (a, b) {
			return l$(a, _z(b)) == b
		}
		if (U(p)) {
			return qq('li')
		}
		if (U(q)) {
			return p.empty()
		}
		if (F(p)) {
			p = O(p)
		}
		return (S(p) && S(q)) ? eW(p, q)
				: S(q) ? e(p, function (v, k) {
			eval(q)
		}, w)
				: _.e(p, q, w)
	}
	_F = function (a) {
		if (A(a)) {
			return _.flatten(a)
		}
	}
	_f = function (a, b, c) {
		return U(a) ? qq('f') // need to deprecate this
				: F(b) ? _.find(a, b, c)
				: _.f(a, b)
	}
	_g = function (a) {
		if (_.isArray(a)) {
			a = _.f(a)
		}
		return F(a) ? a
				: O(a) ? (a.target ? a.target : Q(a)[0])
				: a
	}
	_C = function (a, b) {
		return U(a) ? _c()[0]
				: A(a) ? _.compact(a)//dep
				: a.connect(b)
	}
	_c = function (a, b) {
		if (N(a)) {
			clearInterval(a)
		}
		return U(a) ? qq('c').k('can')
				.at({w: 100, h: 100})
				: b ? (A(a) ? a : [a]).concat(b)
				: O(a) ? a.children()
				: 0
	}
	_t = function me(a, b, c) {
		return U(a) ? qq('t')
				: N(a) ? _.t(a, _v(b), c)
				: D(b) ? $(a).text(b)
				: S(a) ? me(_b(), a)
				: $(a).text()
	}
	tA = function (a) {
		return O(a) ? _.toArray(a) : [a]
	}
}
function edu() {
	MAT2D = function () {
		/*
		 a Scales the drawing horizontally
		 b Skew the the drawing horizontally
		 c Skew the the drawing vertically
		 d Scales the drawing vertically
		 e Moves the the drawing horizontally
		 f Moves the the drawing vertically
		 */
	}
}
touchEnable = function (s) {
	cjs.Touch.enable(s);
	return s
}
//important for ipad//move this onto stage itself
}