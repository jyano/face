$L('proto',    'bool')
cj.PD = function () {
	eD = $pt.eD
	mx = $pt.mx
	tx = t = $pt.tx
	lQ = ld = $pt.ld
	dO = $pt.dO
	h = $pt.h
	ct = $pt.ct
	st = $pt.st
	gx = $pt.gx
}
cj.PD()

function proto() {
	$pt.eD = cj.ED.prototype
	$pt.gx = cj.Gx.prototype
	$pt.st = cj.St.prototype
	$pt.ct = cj.Ct.prototype
	$pt.h = cj.H.prototype
	$pt.dO = cj.DO.prototype
	ld = $pt.ld = $pt.lQ = cj.LQ.prototype
	$pt.ss = $pt.sS = cj.SS.prototype
	$pt.sp = cj.Sp.prototype
	$pt.ssB = $pt.sSB = cj.SSB.prototype
	$pt.tw = cj.Tween.prototype
	$pt.mc = cj.MovieClip.prototype
	$pt.tl = cj.Timeline.prototype
	$pt.mx = cjs.Matrix2D.prototype
	$pt.tx = cj.Tx.prototype
}
function bool() {
	cj.iT = function (t) {
		if (O(t)) {
			return (t.textBaseline)
		}
	}
	cj.iDO = cj.isDisplayOb = function (ob) {
		return O(ob) && F(ob.getStage)
	}
	cj.isCont = cj.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
		return O(ct) && ct.addChild
	}
	cj.iH = cj.isShape = function (h) {
		return O(h) && h.graphics
	}
	cj.isCont = function (cont) {
		if (O(cont)) {
			if (cont.addContainer) {
				return true
			}
			else {
				return false
			}
		}
	}
	cj.isText = cj.iT = function (t) {
		if (O(t)) {
			return (t.textBaseline)
		}
	}
	cj.hasDim = function (bm) {
		return !cj.iH(bm) && !cj.iCt(bm)
	}
}
function _pre() {
	cj = cjs = createjs
	T = cj.Tk = cj.Ticker
	cj.Pt = cj.Point
	cjs.R = cjs.Rectangle
	cj.ED = cj.EventDispatcher
	cj.DO = cj.DisplayObject
	cj.Ct = cj.Container
	cj.St = cj.Stage
	cj.Gx = cj.Graphics
	cj.H = cj.Sh = cj.Shape
	cj.LQ = cj.LoadQueue
	cj.M = cj.Mx = cj.Matrix2D
	cj.Tx = cj.Text
	cj.SS = cj.SpriteSheet
	cj.MC = cj.MovieClip
	cj.Sp = cj.Sprite
	cj.SSB = cj.SpriteSheetBuilder
	cj.Tl = cj.Timeline
	window.$pt = window.$pt || {}
}
//http://www.createjs.com/tutorials/Inheritance/
//http://www.createjs.com/tutorials/Mouse%20Interaction/
//http://www.createjs.com/tutorials/Inheritance/
//http://www.createjs.com/tutorials/Mouse%20Interaction/
$Ldr = function (name, fn) {
	return window[name] = function () {
		$Ld(fn)
	}
}