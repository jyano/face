 
	f.removeSprites = function () {
		var f = this
		f.sprites = f.sprites || []
		_.each(f.sprites,
				function (s) {
					if (O(s) && s.parent) {
						s.remove()
					}
				}
		)
		f.sprites = []
		return this
	}
	f.kill = f.remove = function () { // if(this.sprite  ){this.sprite.remove()}
		this.removeSprites()
		this.B().destroyFixt(this)
//f.setRemove = function(){var f=this; setTimeout(function(){f.B().destroyFixt(f)},10)} //can combine with kill?
//f.setDestroy=function(){this.B().K('destroy'); return this}
	}
	f.kill = function () {
		var f = this, b = f.B(), w = b.W()
		if (!f) {
			return
		}
		if (w._fPreKill) {
			w._fPreKill(f)
		}
		if (b) {
			b.rmF(f)
		}
	}//= f.xx = f.remove
 
 