function cxCos(){
	cx.bCo = cx.bindCo = cx.bindController = function (what) {
		var cx = this, fixt
		//if any fixt collides with a certain kind
		//switch to the controller with that name
		_.each(arguments,
				function (what) {
					if (fixt = cx.with(what)) {
						fixt.switchTo(window[what])
					}
				})
	}
	cx.aCo = cx.aBy = function (co) {
		var cx = this, bB = cx.bB();
		return co ? bB.a2(co) : bB.hasCo()
	}
	cx.bCo = cx.bBy = function (co) {
		return co ? this.bA().a2(co) : this.bA().hasCo()
	}
	cx.aNoCo = function () {
		return !this.aBy()
	}
	cx.bNoCo = function () {
		return !this.bBy()
	}
	cx.bCo = cx.bindCo = function () {
		var cx = this//if any fixt collides with a certain kind
// switch to the controller with that name
		G(arguments).e(function (k) {
			cx.w(k, function () {
				f.switchTo(window[k])
			})
		})
	}
}
function manifold() {
	b2d.WM = b2d.WorldManifold = b2d.C.b2WorldManifold
	$wM = function (cx) {
		var wM = new b2d.WorldManifold()
		if (cx) {
			cx.gWM(wM)
		}
		return wM
	}
	cx.filtering = cx.fFF = function () {//whats the point?
		this.FlagForFiltering();
		return contact
	}// Flag this contact for filtering.
// Filtering will occur the next time step.
	cx.center = function () {
		var centerA = this.A().center(),
				centerB = this.B().center()
		return Math.lineCenter(centerA, centerB)
	}
	function manifold() {
		function point() {
			cx.pt = cx.cen = function () {
				return V(this.pX(), this.pY())
			}
			cx.pX = function () {
				return parseInt(this.m().m_points[0].m().x)
			}
			cx.pY = function () {
				return parseInt(this.m().m_points[0].m().y)
			}
			cx.lP = function (b) {
				return b.lP(this.pX(), this.pY())
			}
//*** this is the collision center!!!!
			cx.point = cx.V = function () {
				return this.man().m_points[0].mult()
			}
			cx.localPlaneNormal = c.lPN = function () {
				return this.gM().m_localPlaneNormal
			}
			cx.localPoint = c.lP = function () {
				return this.gM().m_localPoint
			}
			cx.pointCount = c.pC = function () {
				return this.gM().m_pointCount
			}
			cx.points = c.p = function () {
				return this.gM().m_points
			}
			cx.pt = cx.cen = function () {
				return V(this.pX(), this.pY())
			}
			cx.pX = function () {
				return parseInt(this.m().m_points[0].m().x)
			}
			cx.pY = function () {
				return parseInt(this.m().m_points[0].m().y)
			}
			cx.lP = function (b) {
				return b.lP(this.pX(), this.pY())
			}
		}
		
		function norm() {
			cx.getNx = cx.N = function () {
				return this.GetNext()
			}
			cx.norm = function () {
				var norm
				norm = this.man().m_normal.toFixed(2)
				return norm
			}
			cx.norm = cx.n = function (n) {
				return this.m().m_normal.toFixed(2).m(N(n, 1))
			}
			cx.normX = cx.nX = function (n) {
				return this.n(n).x
			}
			cx.normY = cx.nY = function (n) {
				return this.n(n).y
			}
			cx.norm = cx.n = function (n) {
				return this.m().m_normal.toFixed(2).m(N(n, 1))
			}
			cx.normX = cx.nX = function (n) {
				return this.n(n).x
			}
			cx.normY = cx.nY = function (n) {
				return this.n(n).y
			}
		}
		
		cx.type = cx.t = function () {
			return this.gM().m_type
		}//Get the contact manifold.//  Do not modify the manifold unless you understand// the internals of Box2D
		cx.getMan = cx.getFold = cx.ty = cx.T = function () {
			return this.GetManifold().m_type
		}
		cx.man = cx.wM = cx.worMan = cx.worldManifold = function () {
			var m = b2d.worldManifold()
			this.GetWorldManifold(m)
			return m
		}
		cx.worMan = cx.getWorMan = cx.getWorFold = cx.m = function () {
			var cx = this, m = new b2d.Collision.b2WorldManifold
			cx.GetWorldManifold(m);
			return m
		}
		cx.getMan = cx.getFold = cx.ty = cx.T = function () {
			return this.GetManifold().m_type
		}
		cx.worMan = cx.getWorMan = cx.getWorFold = cx.m = function () {
			var cx = this, m = new b2d.Collision.b2WorldManifold
			cx.GetWorldManifold(m);
			return m
		}
		/*
		 You can access the raw contact manifold:
		 b2Manifold* GetManifold();
		 const b2Manifold* GetManifold() const;
		 You can potentially modify the manifold,
		 but this is generally not supported and is for advanced usage.
		 There is a helper function to get the b2WorldManifold:
		 void GetWorldManifold(b2WorldManifold* worldManifold) const;
		 This uses the current positions of the bodies to compute world positions
		 of the contact points.
		 */
		cx.lPN = cx.lcPN = function () {
			return this.gM().m_localPlaneNormal
		}
		cx.ptC = cx.numPts = cx.pointCount = cx.pC = function () {
			return this.gM().m_pointCount
		}
		cx.gM = function () {
			return this.GetManifold()
		}
		cx.ty = cx.type = cx.t = function () {
			return this.gM().m_type
		}
		cx.lPt = cx.lcPt = cx.lP = function () {
			return this.gM().m_localPoint
		}
		cx.pts = cx.p = function () {
			return this.gM().m_points
		}
		//worMan: -> :
		cx.gWM = function () {
			return this.GetWorldManifold()
		}
		cx.wM = function () {
			return $wM(this)
		}
		cx.wCxPt = cx.wPt = cx.cxPt = cx.pt = function () {
			return $wM(this).m_points[0].m()
		} //cx.point
		cx.no = cx.norm = function () {
			return $wM(this).m_normal.toFixed(2)
		}
		cx.pt = cx.V = function () {
			return this.wM().m_points[0].m()
		}
//Sensors dont create manifolds; 
// for them use:  touching = cx.IsTouching(); (fn also works for non-sensors)
		cx.iS = cx.Sn = function () {
			return this.IsSensor()
		}
		cx.sn = cx.sensor = cx.setSensor = cx.sS = function (a) {
			this.SetSensor(a ? true : false);
			return contact
		}
		cx.mS = function () {
			this.sS(true)
			return this
		}
		function prePost() {
			cx.iE = function () {
				return this.IsEnabled()
			}
			cx.en = cx.enabled = cx.sE = function (a) {
				this.SetEnabled(a ? true : false);
				return this
			} // Enable/disable this this.//   
// This can be used inside the pre-solve contact listener. // The contact is only disabled for the current time step// (or sub-step in continuous collision).
			cx.off = cx.disable = cx.ds = cx.d = function () {
				this.SetEnabled(false)
				return this
			}
			//You can disable a contact. This only works inside the b2ContactListener::PreSolve event, discussed below.
			//  Both PreSolve and PostSolve give you a b2Contact pointer, so we have access to the same points and normal information we just looked at for BeginContact. PreSolve gives us a chance to change the characteristics of the contact before the collision response is calculated, or even to cancel the response altogether, and from PostSolve we can find out what the collision response was.
//     Here are the alterations you can make to the contact in PreSolve:
//SetEnabled(bool flag);//non-persistent - need to set every time step
// persists for duration of contact
//persists for duration of contact
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
//    It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
			/*
			 Pre-Solve Event
			 This is called after collision detection, but before collision resolution. This gives you a chance to disable the contact based on the current configuration. For example, you can implement a one-sided platform using this callback and calling b2Contact::SetEnabled(false). The contact will be re-enabled each time through collision processing, so you will need to disable the contact every time-step. The pre-solve event may be fired multiple times per time step per contact due to continuous collision detection.
			
			 void PreSolve(b2Contact* contact, const b2Manifold* oldManifold)
			
			 {
			
			 b2WorldManifold worldManifold;
			
			 contact->GetWorldManifold(&worldManifold);
			
			 if (worldManifold.normal.y < -0.5f)
			
			 {
			
			 contact->SetEnabled(false);
			
			 }
			
			 }
			
			 The pre-solve event is also a good place to determine the point state and the approach velocity of collisions.
			
			 void PreSolve(b2Contact* contact, const b2Manifold* oldManifold)
			
			 {
			
			 b2WorldManifold worldManifold;
			
			 contact->GetWorldManifold(&worldManifold);
			
			 b2PointState state1[2], state2[2];
			
			 b2GetPointStates(state1, state2, oldManifold, contact->GetManifold());
			
			 if (state2[0] == b2_addState)
			
			 {
			
			 const b2Body* bodyA = contact->GetFixtureA()->GetBody();
			
			 const b2Body* bodyB = contact->GetFixtureB()->GetBody();
			
			 b2Vec2 point = worldManifold.points[0];
			
			 b2Vec2 vA = bodyA->GetLinearVelocityFromWorldPoint(point);
			
			 b2Vec2 vB = bodyB->GetLinearVelocityFromWorldPoint(point);
			
			 float32 approachVelocity = b2Dot(vB – vA, worldManifold.normal);
			
			 if (approachVelocity > 1.0f)
			
			 {
			
			 MyPlayCollisionSound();
			
			 }
			
			 }
			
			 }
			
			
			 */
			/*
			
			 Post-Solve Event
			 The post solve event is where you can gather collision impulse results. If you don’t care about the impulses, you should probably just implement the pre-solve event.
			
			 It is tempting to implement game logic that alters the physics world inside a contact callback. For example, you may have a collision that applies damage and try to destroy the associated actor and its rigid body. However, Box2D does not allow you to alter the physics world inside a callback because you might destroy objects that Box2D is currently processing, leading to orphaned pointers.
			
			 The recommended practice for processing contact points is to buffer all contact data that you care about and process it after the time step. You should always process the contact points immediately after the time step; otherwise some other client code might alter the physics world, invalidating the contact buffer. When you process the contact buffer you can alter the physics world, but you still need to be careful that you don't orphan pointers stored in the contact point buffer. The testbed has example contact point processing that is safe from orphaned pointers.
			
			 This code from the CollisionProcessing test shows how to handle orphaned bodies when processing the contact buffer. Here is an excerpt. Be sure to read the comments in the listing. This code assumes that all contact points have been buffered in the b2ContactPoint array m_points.
			
			 // We are going to destroy some bodies according to contact
			
			 // points. We must buffer the bodies that should be destroyed
			
			 // because they may belong to multiple contact points.
			
			 const int32 k_maxNuke = 6;
			
			 b2Body* nuke[k_maxNuke];
			
			 int32 nukeCount = 0;
			
			
			
			 // Traverse the contact buffer. Destroy bodies that
			
			 // are touching heavier bodies.
			
			 for (int32 i = 0; i < m_pointCount; ++i)
			
			 {
			
			 ContactPoint* point = m_points + i;
			
			
			
			 b2Body* body1 = point->shape1->GetBody();
			
			 b2Body* body2 = point->shape2->GetBody();
			
			 float32 mass1 = body1->GetMass();
			
			 float32 mass2 = body2->GetMass();
			
			
			
			 if (mass1 > 0.0f && mass2 > 0.0f)
			
			 {
			
			 if (mass2 > mass1)
			
			 {
			
			 nuke[nukeCount++] = body1;
			
			 }
			
			 else
			
			 {
			
			 nuke[nukeCount++] = body2;
			
			 }
			
			
			
			 if (nukeCount == k_maxNuke)
			
			 {
			
			 break;
			
			 }
			
			 }
			
			 }
			
			
			
			 // Sort the nuke array to group duplicates.
			
			 std::sort(nuke, nuke + nukeCount);
			
			
			
			 // Destroy the bodies, skipping duplicates.
			
			 int32 i = 0;
			
			 while (i < nukeCount)
			
			 {
			
			 b2Body* b = nuke[i++];
			
			 while (i < nukeCount && nuke[i] == b)
			
			 {
			
			 ++i;
			
			 }
			
			
			
			 m_world->DestroyBody(b);
			
			 }
			 */
		}
	}
	
	function bool() {
		function enab() {
			cx.setEn = cx.setEnab = cx.e = cx.en = function (a) {
				var cx = this
				if (U(a)) {
					return cx.IsEnabled()
				}
				cx.SetEnabled(a ? true : false);
				return cx
			}
			cx.setEn = cx.setEnab = cx.e = cx.en = function (a) {
				var cx = this
				if (U(a)) {
					return cx.IsEnabled()
				}
				cx.SetEnabled(a ? true : false);
				return cx
			}
		}
		
		function sensor() {
			cx.isSen = cx.iS = cx.s = cx.sen = function () {
				var cx = this, g = G(arguments)
				if (g.u) {
					return cx.IsSensor()
				}
				cx.SetSensor(g.f ? true : false)
				return cx
			}
			cx.isSen = cx.iS = cx.s = cx.sen = function () {
				var cx = this, g = G(arguments)
				if (g.u) {
					return cx.IsSensor()
				}
				cx.SetSensor(g.f ? true : false)
				return cx
			}
			cx.sr = cx.ofSr = function (fn) {
				var cx = this
				var sr = cx.aSr() ? [cx.fA(), cx.fB()] :
						cx.bSr() ? [cx.fB(), cx.fA()] :
								false
				if (fn) {
					fn(sr);
					return cx
				}
				return sr
			}
			cx.aSr = function () {
				return this.fA().iSr()
			}
			cx.bSr = function () {
				return this.fB().iSr()
			}
			cx.sensor = c.iS = function () {
				return this.IsSensor()
			}//Is this contact a sensor?
			cx.setSensor = c.sS = function (a) {
				this.SetSensor(a ? true : false);
				return contact
			}// Change this to be a sensor or-non-sensor this.
		}
		
		cx.iE = function () {
			return this.IsEnabled()
		}//Has this contact been disabled?
// ??? do i use any of below???
		cx.continuous = c.iC = function () {
			return this.IsContinuous()
		}//Does this contact generate TOI events for continuous simulation
		cx.enabled = c.sE = function (a) {
			this.SetEnabled(a ? true : false);
			return this
		} // Enable/disable this this.//   This can be used inside the pre-solve contact listener. // The contact is only disabled for the current time step// (or sub-step in continuous collision).
		cx.touching = c.iT = function () {
			return this.IsTouching()
		}//Is this contact touching.
//cx.manifold =c.gM=function(){return this.GetManifold()}
		cx.isCont = cx.isContin = cx.c = cx.cont = cx.continuous = cx.iC = function () {
			var cx = this
			return cx.IsContinuous()
		} //Does this contact generate TOI events for continuous simulation
		cx.isTouch = cx.doesTouch = cx.iT = cx.tch = cx.touching = cx.iT = function () {
			return this.IsTouching()
		}
		cx.isCont = cx.isContin = cx.c = cx.cont = cx.continuous = cx.iC = function () {
			var cx = this
			return cx.IsContinuous()
		} //Does this contact generate TOI events for continuous simulation
		cx.isTouch = cx.doesTouch = cx.iT = cx.tch = cx.touching = cx.iT = function () {
			return this.IsTouching()
		}
	}
	
	function vel() {
		cx.linVel = function (bod) {
			return bod.linVelWor(this.point())
		}
//By convention in Box2d, the collision normal (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!
		cx.vA = function () {
			return this.linVel(this.a())
		}
		cx.vB = function () {
			return this.linVel(this.b())
		}
	}
}
function cxList() {
	b.contacts = b.cx = function () {
		return this.GetContactList()
	}
//  the contact class is created and destroyed by Box2D.   Contact objects are not created by the user.  (but u can access  contact class,interact with it)
	b.GCxL = function () {
		return this.GetContactList()
	}
	b.cx = function () {
		var cxLs = this.GCxL()
		return cxLs
	}
	b.eachCx = function (fn) {
		var b = this
		for (var cx = b.cx(); cx; cx = cx.next) {
			if (O(cx) && O(cx.contact)) {
				fn(cx.contact)
			}
			else {
				alert('err in b.eachCo')
			}
		}
		return b
	}
	cx.N = cx.GN = cx.next = cx.gN = function () {
		return this.GetNext()
	}
	cx.IC = cx.iCn = cx.iCont = cx.continuous = cx.iC = function () {
		return this.IsContinuous()
	}
	//Does this contact generate TOI events for continuous simulation
	cx.IT = cx.iT = cx.touching = function () {
		return this.IsTouching()
	}//Is this contact touching.
// accessCxs
//to access cx: 1)  can access the contacts directly on world and body structures.  2) can  implement a contact listener.
	cx.ks = function () {
		var cx = this
		var aK = cx.A().K()
		var bK = cx.B().K()
		var str = ''
		if (aK) {
			str += 'fA: ' + aK + ', '
		}
		if (bK) {
			str += 'fB: ' + bK
		}
		$l(str)
		return cx
	}
	w.cxs = function () {
		//You can iterate over all contacts in the world:
		for (cx = w.GCxL(); cx; cx = cx.GN()) {
		}
	}
	b.cxs = function () {
//	 You can also iterate over all the contacts on a body. 
// These are stored in a graph using a contact edge structure.
		//b2ContactEdge
		for (ce = b.GetContactList(); ce; ce = ce.next) {
			cx = ce.contact
		}
		//Caution : Accessing contacts off b2World and b2Body
		// may miss some transient contacts 
		// that occur in the middle of the time step.
		// Use b2ContactListener to get the most accurate results.
	}
	//contact point:  point where two shapes touch. Box2D approximates contact with a small number of points.
	function contactNormal() {
		//contact normal:unit vector that points from one shape to another. 
		//By convention, the normal points from fixtureA to fixtureB.
		//contact separation:opposite of penetration. Separation is negative when shapes overlap. 
		//It is possible that future versions of Box2D will create contact points with positive separation,
		// so you may want to check the sign when contact points are reported.
	}
	
	function contactManifold() {
		//contact manifold:Contact between two convex polygons may generate up to 2 contact points. 
		//Both of these points use the same normal, so they are grouped into a contact manifold,
		// which is an approximation of a continuous region of contact.
	}
	
	function normalImpulse() {
		//normal impulse: force applied at a contact point to prevent the shapes from penetrating. 
		//For convenience, Box2D works with impulses. The normal impulse is just the normal force multiplied by the time step.
		//tangent impulse: generated at a contact point to simulate friction. For convenience, this is stored as an impulse.
	}
	
	function contactId() {//contact ids
		//Box2D tries to re-use the contact force results from a time step as the initial guess for the next time step. 
		//Box2D uses contact ids to match contact points across time steps. 
		//The ids contain geometric features indices that help to distinguish one contact point from another.
	}
	
	function chickenEgg() {
		//Contacts created when two fixture’s AABBs overlap, destroyed with the AABBs cease to overlap.
		//So you might gather that there may be contacts created for fixtures that are not touching (just their AABBs). 
		//Well, this is correct. It's a "chicken or egg" problem. 
		//We don't know if we need a contact object until one is created to analyze the collision. 
		//We could delete the contact right away if the shapes are not touching, 
		//or we can just wait until the AABBs stop overlapping. 
		//Box2D takes the latter approach because it lets the system cache information to improve performance.
		//You can get the fixtures from a contact, then the bodies: fA = cx.fA(); bA = fA.B();  actorA = Actor.bA.uD()
	}
	
	cx.next = cx.gN = function () {
		return this.GetNext()
	}//Get the next contact in the world's contact list.
	cx.getNx = cx.N = function () {
		return this.GetNext()
	}
}
b2d.either = function (ob1, ob2, is1, is2) {
	return (ob1.is(is1) && ob2.is(is2)) ||
			(ob1.is(is2) && ob2.is(is1))
	return {
		is: function (data) {
			return body1.is(data) || body2.is(data)
		}
	}
}
b2d.neither = function (body1, body2) {
	return {
		is: function (data) {
			return !body1.is(data) && !body2.is(data)
		}
	}
}
