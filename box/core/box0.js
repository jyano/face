bx = b2d = Box2D
//big 3
bx.C = bx.Collision
bx.D = bx.Dynamics
bx.Cm = bx.Common
//math
bx.M = bx.Math = bx.Cm.Math
//main objects
bx.W = b2World = bx.D.b2World
bx.FD = b2FixtureDef = bx.D.b2FixtureDef
bx.F = b2Fixture = bx.D.b2Fixture
bx.BD = b2BodyDef = bx.D.b2BodyDef
bx.B = b2Body = bx.D.b2Body
//mathy
bx.V = b2Vec2 = bx.Vec = bx.M.b2Vec2
bx.AABB = b2AABB = bx.C.b2AABB
bx.M2 = bx.Mat22 = bx.M.b2Mat22
bx.M3 = bx.Mat33 = bx.M.b2Mat33
//shape
bx.Hs = bx.C.Shapes
bx.H = b2Shape = bx.Hs.b2Shape
bx.CH = b2CircleShape = bx.Hs.b2CircleShape
bx.PH = b2PolygonShape = bx.Hs.b2PolygonShape
//mass
bx.MD = b2MassData = bx.Hs.b2MassData
//contact
bx.Cxs = bx.D.Contacts
bx.Cx = bx.Cxs.b2Contact
//Joints
bx.Jts = bx.Js = bx.D.Joints
//joint
bx.Jt = bx.J = bx.Jts.b2Joint
bx.JD = bx.JtD = bx.Jts.b2JointDef

//distance joints
bx.DJD = bx.Jts.b2DistanceJointDef
bx.DJ = bDJ = bx.distanceJoint = bx.distanceJoint = bDJ = bx.Jts.b2DistanceJoint //=bx.Jts.b2DistanceJoint
bx.DJ = bx.distanceJoint = bDJ = bx.Jts.b2DistanceJoint
//mouse joints
bx.MJD = b2MouseJointDef = bx.MouseJointDef = bx.Jts.b2MouseJointDef
                                 
bx.MJ = bx.MouseJoint = bx.Jts.b2MouseJoint // = bx.Jts.b2MouseJoint
//rev joints
bx.RJD =  bx.RevoluteJointDef = bx.Jts.b2RevoluteJointDef
bx.RJ = bx.RevoluteJoint = bx.Jts.b2RevoluteJoint
// prismatic jonts
bx.PrismaticJointDef = bx.Jts.b2PrismaticJointDef
bx.PJD = bx.PrismaticJointDef = bx.Jts.b2PrismaticJointDef
 
//controllers
bx.Cos = bx.D.Controllers