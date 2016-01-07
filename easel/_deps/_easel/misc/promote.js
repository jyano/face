PRM = function () {
	z()
	cjs.utils()
	function ClassA(name) {
		this.name = name
	}
	
	ClassA.prototype.greet = function () {
		return "Hello " + this.name
	} //a = new ClassA('john')
	function ClassB(name, punctuation) {
		this.ClassA_constructor(name)
		this.punctuation = punctuation
	}
	
	cjs.extend(ClassB, ClassA)
	ClassB.prototype.greet = function () {
		return this.ClassA_greet() + this.punctuation
	}
	cjs.promote(ClassB, "ClassA")
	b = new ClassB("World", "!?!")
	$l(b.greet())  // Hello World!?!
}
PRM1 = PROMOTE = function () {
	z()
	cjs.utils()
	function ClassA(name) {
		this.name = name
	}
	
	ClassA.prototype.greet = function () {
		return "Hello " + this.name
	} //a = new ClassA('john')
	function ClassB(name, punctuation) {
		this.ClassA_constructor(name)
		this.punctuation = punctuation
	}
	
	cjs.extend(ClassB, ClassA)
	ClassB.prototype.greet = function () {
		return this.ClassA_greet() + this.punctuation
	}
	cjs.promote(ClassB, "ClassA")
	b = new ClassB("World", "!?!")
	$l(b.greet())  // Hello World!?!
}
PROMOTE = function () {
	z()
	cjs.utils()
	function ClassA(name) {
		this.name = name
	}
	
	ClassA.prototype.greet = function () {
		return "Hello " + this.name
	} //a = new ClassA('john')
	function ClassB(name, punctuation) {
		this.ClassA_constructor(name)
		this.punctuation = punctuation
	}
	
	cjs.extend(ClassB, ClassA)
	ClassB.prototype.greet = function () {
		return this.ClassA_greet() + this.punctuation
	}
	cjs.promote(ClassB, "ClassA")
	b = new ClassB("World", "!?!")
	$l(b.greet())  // Hello World!?!
}