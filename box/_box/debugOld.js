 
	b2d.setupDebugDrawx = setupDebugDrawx = function () {
		debugDraw = DebugDraw()
		debugDraw.SetSprite(w.context)
		debugDraw.dS(30)
		debugDraw.SetFillAlpha(.6)
		//debugDraw.SetLineThickness( 3000 )
		debugDraw.SetFlags(shB || jB)
		w.dD(debugDraw)
	}
	function drawMets() {
//DrawCircle(center:b2Vec2, r:N, c:b2Color) 
//DrawPolygon(vs:Arr, numVs, c)  -closed CCW poly 
//DrawSegment(p1:b2Vec2, p2:b2Vec2, c)   line segment
//DrawSolidCircle(cen:b2Vec2, rs:N, axis:b2Vec2,c) 
//DrawSolidPolygon(vs:Vector, numVs,c   )    -solid closed CCW poly 
//DrawTransform(xf:b2Transform)  
	}
	
	/*
	
	 Chapter 12 Debug Drawing
	
	 You can implement the b2DebugDraw class to get detailed drawing of the physics world. 
	 Here are the available entities:
	
	 •                    shape outlines
	 •                    joint connectivity
	 •                    broad-phase axis-aligned bounding boxes (AABBs)
	 •                    center of mass
	
	
	
	 This is the preferred method of drawing these physics entities, rather than accessing the data directly. 
	 The reason is that much of the necessary data is internal and subject to change.
	
	 The testbed draws physics entities using the debug draw facility and the contact listener,
	 so it serves as the primary example of how to implement debug drawing as well as how to draw contact points.
	
	
	 */
//$wa = {}
//initFxts // w.bD = $dB() // w.fD = fD = $fD().de(1).fr(.5).re(.8).H($pH())
 