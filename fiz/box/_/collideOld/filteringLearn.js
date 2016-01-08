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
 