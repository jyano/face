 // The damping is calculated by multiplying velocity 
// by a matrix in local co-ordinates.
// In fact tensors are merely a generalisation of scalars and vectors; 
// a scalar is a zero rank tensor, 
// and a vector is a first rank tensor.
// The rank (or order) of a tensor is defined 
// by the number of directions
// (and hence the dimensionality of the array) 
// required to describe it.
/*
 Public Properties
 Property	Defined by
 maxTimestep : Number = 0
 Set this to a positive number to clamp the maximum amount of damping done.
 b2TensorDampingController
 T : b2Mat22
 Tensor to use in damping model
 b2TensorDampingController
 Protected Properties
 Show Inherited Protected Properties
 Public Methods
 Show Inherited Public Methods
 Method	Defined by
 
 SetAxisAligned(xDamping:Number, yDamping:Number):void
 Helper function to set T in a common case
 b2TensorDampingController

 Step(step:b2TimeStep):void
 b2TensorDampingController
 Property detail
 maxTimestep	property
 public var maxTimestep:Number = 0
 Set this to a positive number to clamp the maximum amount of damping done.

 T	property	 
 public var T:b2Mat22
 Tensor to use in damping model

 Method detail
 SetAxisAligned	()	method
 public function SetAxisAligned(xDamping:Number, yDamping:Number):void
 Helper function to set T in a common case

 Parameters
 xDamping:Number

 yDamping:Number
 Step	()	method	 
 public override function Step(step:b2TimeStep):voidParameters
 step:b2TimeStep


 */
tCo = $pt.tCo
tCo.axis = tCo.SAA = function (axis) {
	var co =
			co.SetAxisAligned(axis)
	return co
}
$tC = $tDC = b2d.tensor = function () {
	var co = new b2d.TDC(), g = G(arguments)
	if (D(g.f)) {
		co.SAA(g.f)
	}
	return co
}
w.tCo = w.ten = w.tens = w.tensor = function () {
	var w = this
	var co = $tDC.apply(null, arguments)
	w.co(co)
	return co
}