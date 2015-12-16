function _filtering(){
	$PT()
	w.SCF = w.sCF = function (cF) {
		this.SetContactFilter(cF);
		return this
	}
	f.SFD = function (flD) {
		this.SetFilterData(flD);
		return this
	}
	f.GFD = function () {
		return this.GetFilterData()
	}
	f.flD = f.gFD = f.gFlD = function (flD) {
		var f = this
		if (flD) {
			return this.SFD(flD)
		}
		var _sFlD = function (flD) {
			flD.cB = function (cB) {
				var fLD = this
				if (U(cB)) {
					return flD.categoryBits
				}
				flD.categoryBits = cB
				return flD
			}
			flD.mB = function (mB) {
				var fLD = this
				if (U(mB)) {
					return flD.maskBits
				}
				flD.maskBits = mB;
				return flD
			}
			flD.gI = function (gI) {
				var flD = this
				if (U(gI)) {
					return flD.groupIndex
				}
				flD.groupIndex = gI;
				return flD
			}
			return flD
		}
		return _sFlD(f.GFD())
	}
	f.gI = f.gr = f.grp = f.ix = function (gI) {
		var f = this,
				flD = f.flD()
		return U(gI) ? flD.gI() : f.flD(flD.gI(gI))
	}
	fD.gI = fD.gr = fD.ix = fD.grp = function (gI) {
		var fD = this
		if (U(gI)) {
			return fD.filter.groupIndex
		}
		fD.filter.groupIndex = gI;
		return fD
	}
//Changing the collision filter at run-time
//You can change each of the categoryBits, maskBits, groupIndex
// by setting a new b2Filter in the fixture.
// Quite often you only want to change one of these,
// so it's handy to be able to get the existing filter first,
// change the field you want, and put it back.
	b.gI = function (gI) {
		return this.fs(function (f) {
			f.gI(gI)
		})
	} 
	fD.ct = fD.cat = fD.cB = function (cB) {
		var fD = this
		if (U(cB)) {
			return fD.filter.categoryBits
		}
		fD.filter.categoryBits = cB;
		return fD
	}
	fD.ms = fD.msk = fD.mask = fD.mB = function () {
		var fD = this
		var g = G(arguments)
		if (g.u) {
			return fD.filter.maskBits
		}
		var n = 0
		_.e(g, function (msk) {
			n += msk
		})
		fD.filter.maskBits = n
		return fD
	}
	fD.bt = fD.bits = function (cat, msk) {
		return this.cat(cat).msk(msk)
	}
	f.ms = f.msk = f.mask = function () {
	}
	f.ct = f.cat = function () {
	}
	f.bt = f.bit = function () {
	}
 
	alpha = function () {
		cx.filtering = cx.fFF = function () {
			var cx = this
			cx.FlagForFiltering();
			return cx
			// Flag this contact for filtering.
// Filtering will occur the next time step.
		}
	}
	b.GLVFLP = function (v) {
		return this.GetLinearVelocityFromLocalPoint(v)
	}
	b.GLVFWP = function (v) {
		return this.GetLinearVelocityFromWorldPoint(v)
	}
	b.lVL = function (x, y) {
		return this.GLVFLP(V(x, y, '-'))
	}
	b.lVW = function (x, y) {
		return this.GLVFWP(V(x, y, '-'))
	}
	function filtering() {
		/*
		 Often in a game you don't want all objects to collide. For example, you may want to create a door that only certain characters can pass through. This is called contact filtering, because some interactions are filtered out.
		
		 Box2D allows you to achieve custom contact filtering by implementing a b2ContactFilter class. This class requires you to implement a ShouldCollide function that receives two b2Shape pointers. Your function returns true if the shapes should collide.
		
		 The default implementation of ShouldCollide uses the b2FilterData defined in Chapter 6, Fixtures.
		
		 bool b2ContactFilter::ShouldCollide(b2Fixture* fixtureA, b2Fixture* fixtureB)
		
		 {
		
		 const b2Filter& filterA = fixtureA->GetFilterData();
		
		 const b2Filter& filterB = fixtureB->GetFilterData();
		
		
		
		 if (filterA.groupIndex == filterB.groupIndex && filterA.groupIndex != 0)
		
		 {
		
		 return filterA.groupIndex > 0;
		
		 }
		
		
		
		 bool collide = (filterA.maskBits & filterB.categoryBits) != 0 &&
		
		 (filterA.categoryBits & filterB.maskBits) != 0;
		
		 return collide;
		
		 }
		
		 At run-time you can create an instance of your contact filter and register it with b2World::SetContactFilter. Make sure your filter stays in scope while the world exists.
		
		 MyContactFilter filter;
		
		 world->SetContactFilter(&filter);
		
		 // filter remains in scope …
		
		
		 */
	}
	
	function Filtering() {
// Fixtures carry collision filtering information to let you prevent collisions 
// between certain game objects.
// When a shape develops multiple contacts, 
// restitution is simulated approximately. 
// This is because Box2D uses an iterative solver. 
// Box2D also uses inelastic collisions when the collision velocity is small. 
// This is done to prevent jitter.
// Collision filtering allows you to prevent collision between fixtures. For example, say you make a character that rides a bicycle. You want the bicycle to collide with the terrain and the character to collide with the terrain, but you don't want the character to collide with the bicycle (because they must overlap). Box2D supports such collision filtering using categories and groups.
//
// Box2D supports 16 collision categories. For each fixture you can specify which category it belongs to. You also specify what other categories this fixture can collide with. For example, you could specify in a multiplayer game that all players don't collide with each other and monsters don't collide with each other, but players and monsters should collide. This is done with masking bits. For example:
//
// playerFixtureDef.filter.categoryBits = 0x0002;
//
// monsterFixtureDef.filter.categoryBits = 0x0004;
//
// playerFixtureDef.filter.maskBits = 0x0004;
//
// monsterFixtureDef.filter.maskBits = 0x0002;
//
// Here is the rule for a collision to occur:
//
// uint16 catA = fixtureA.filter.categoryBits;
//
// uint16 maskA = fixtureA.filter.maskBits;
//
// uint16 catB = fixtureB.filter.categoryBits;
//
// uint16 maskB = fixtureB.filter.maskBits;
//
//
//
// if ((catA & maskB) != 0 && (catB & maskA) != 0)
//
// {
//
// // fixtures can collide
//
// }
//
// Collision groups let you specify an integral group index. You can have all fixtures with the same group index always collide (positive index) or never collide (negative index). Group indices are usually used for things that are somehow related, like the parts of a bicycle. In the following example, fixture1 and fixture2 always collide, but fixture3 and fixture4 never collide.
//
// fixture1Def.filter.groupIndex = 2;
//
// fixture2Def.filter.groupIndex = 2;
//
// fixture3Def.filter.groupIndex = -8;
//
// fixture4Def.filter.groupIndex = -8;
//
// Collisions between fixtures of different group indices are filtered according the category and mask bits. In other words, group filtering has higher precedence than category filtering.
//
// Note that additional collision filtering occurs in Box2D. Here is a list:
//
// ·         A fixture on a static body can only collide with a dynamic body.
// ·         A fixture on a kinematic body can only collide with a dynamic body.
// ·         Fixtures on the same body never collide with each other.
// ·         You can optionally enable/disable collision between fixtures on bodies connected by a joint.
//
// Sometimes you might need to change collision filtering after a fixture has already been created. You can get and set the b2Filter structure on an existing fixture using b2Fixture::GetFilterData and b2Fixture::SetFilterData. Note that changing the filter data will not add or remove contacts until the next time step (see the World class).
	}
}

f.getFiltData=f.fil = f.fl = f.flDa = function () {
	var f = this, g = G(arguments)
	if (g.u) {
		return f.GetFilterData()
	}
	;
	f.SetFilterData(g.f);
	return f
}
f.catBit=f.cat = function () {
	var f = this, g = G(arguments),
			flDa = f.flDa()
	if (g.u) {
		return flDa.categoryBits
	}
	flDa.categoryBits = g.f;
	f.flDa(flDa);
	return f
}
f.mskBit=f.msk = function (msk) {var f = this, g = G(arguments),
			flDa = f.flDa(), num//f.msk: pass it a single number, pass it an array of numbers and it will add them up for you
	if (g.u) {return flDa.maskBits}
	if (A(g.f)) {num = 0
		_.e(g.f, function (bits) {num += bits})
		g.f = num
	}
	flDa.maskBits = g.f
	f.flDa(flDa)
	return f
}
b.cat = function () {var b = this, g = G(arguments);
	if (g.u) {return b}
	b.fs(function (f) {f.cat(g.f)});
	return b
}
b.msk = function () {var b = this, g = G(arguments);
	b.fs(function (f) {f.msk(g.f)})
	return b
}
f.bit = function (cat, msk) {
	if (N(cat)) {this.cat(cat)}
	if (N(msk) || A(msk)) {this.msk(msk)}
	return this
}
b.bit = function (cat, msk) {
	if (N(cat)) {this.cat(cat)}
	if (N(msk) || A(msk)) {this.msk(msk)}
	return this
}
 /*flDa.groupIX= flDa.grp = flDa.g = function (grp) {
	var flDa = this
	if (U(grp)) {
		return flDa.groupIndex
	}
	flDa.groupIndex = grp
	return flDa
}
f.groupIx=f.grp = function (grpIx) {
	var f = this, fl = f.GetFilterData()
	if (U(grpIx)) {
		return fl.groupIndex
	}
	fl.groupIndex = grpIx
	f.SetFilterData(fl)
	return f
	//get/set for groupIndex
}
fd.groupIx= fd.grp = fd.group = fd.index = fd.gI = function (a) {
	if (U(a)) {
		return this.filter.groupIndex
	}
	this.filter.groupIndex = a;
	return this
}
f.groupIx = f.grp = function (i) {
	var f = this, fl = f.fl()
	if (U(i)) {
		return fl.groupIndex
	}
	fl.groupIndex = i
	return this.fl(fl)
}
b.groupIX=b.grp = function (i) {

	if (U(i)) {
		return this.f().grp()
	}
	
	
	
	
	this.fs(function (f) {
		f.grp(i)
	})
	return this

}
b.groupIx=b.grp = function (grp) {

	var b = this
	 
	b.fs(function (f) {
		f.grp(grp)
	})
	
	return b

} */
w.setContactFilt=w.cxFl = w.sCF = function () {
	var w = this, g = G(arguments)
	w.SetContactFilter.apply(w, g)
}
 
function filtering_(){
	f.getFiltData = f.fil = f.fl = f.flDa = function () {
		var f = this, g = G(arguments)
		if (g.u) {
			return f.GetFilterData()
		}
		f.SetFilterData(g.f);
		return f
	}
	f.catBit = f.cat = function () {
		var f = this, g = G(arguments),
				flDa = f.flDa()
		if (g.u) {
			return flDa.categoryBits
		}
		flDa.categoryBits = g.f;
		f.flDa(flDa);
		return f
	}
	f.mskBit = f.msk = function (msk) {
		var f = this, g = G(arguments),
				flDa = f.flDa(), num//f.msk: pass it a single number, pass it an array of numbers and it will add them up for you
		if (g.u) {
			return flDa.maskBits
		}
		if (A(g.f)) {
			num = 0
			_.e(g.f, function (bits) {
				num += bits
			})
			g.f = num
		}
		flDa.maskBits = g.f
		f.flDa(flDa)
		return f
	}
	b.cat = function () {
		var b = this, g = G(arguments);
		if (g.u) {
			return b
		}
		b.fs(function (f) {
			f.cat(g.f)
		});
		return b
	}
	b.msk = function () {
		var b = this, g = G(arguments);
		b.fs(function (f) {
			f.msk(g.f)
		})
		return b
	}
	f.bit = function (cat, msk) {
		if (N(cat)) {
			this.cat(cat)
		}
		if (N(msk) || A(msk)) {
			this.msk(msk)
		}
		return this
	}
	b.bit = function (cat, msk) {
		if (N(cat)) {
			this.cat(cat)
		}
		if (N(msk) || A(msk)) {
			this.msk(msk)
		}
		return this
	}
	flDa.groupIX = flDa.grp = flDa.g = function (grp) {
		var flDa = this
		if (U(grp)) {
			return flDa.groupIndex
		}
		flDa.groupIndex = grp
		return flDa
	}
	f.groupIx = f.grp = function (grpIx) {
		var f = this, fl = f.GetFilterData()
		if (U(grpIx)) {
			return fl.groupIndex
		}
		fl.groupIndex = grpIx
		f.SetFilterData(fl)
		return f
		//get/set for groupIndex
	}
	fd.groupIx = fd.grp = fd.group = fd.index = fd.gI = function (a) {
		if (U(a)) {
			return this.filter.groupIndex
		}
		this.filter.groupIndex = a;
		return this
	}
	f.groupIx = f.grp = function (i) {
		var f = this, fl = f.fl()
		if (U(i)) {
			return fl.groupIndex
		}
		fl.groupIndex = i
		return this.fl(fl)
	}
	b.groupIX = b.grp = function (i) {
		if (U(i)) {
			return this.f().grp()
		}
		this.fs(function (f) {
			f.grp(i)
		})
		return this
	}
	b.groupIx = b.grp = function (grp) {
		var b = this
		b.fs(function (f) {
			f.grp(grp)
		})
		return b
	}
	w.setContactFilt = w.cxFl = w.sCF = function () {
		var w = this, g = G(arguments)
		w.SetContactFilter.apply(w, g)
	}
 
} 