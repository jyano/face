MyCmVM = function (pm) {
	curObsrvInst = pm.$raw.myExpr()
}
/*
 MARKUP=function(){z()


 //Sometimes you may want to create a component that receives
 // markup and uses it as part of its output.
 //    Consider a special list component that can be invoked as follows:

 ok.$('my-special-list', {items: someArrayOfPeople}).A(//$("<!-- Look, Im putting markup inside a custom element -->"),
 'The person' ,
 $.em().bT('name'), $.em().bT('age') , 'years old.')


 $('<template>').id("my-special-list-template").A(
 $.h3('Here is a special list'),
 $.uE("{ data: myItems, as: 'myItem' }").A(

 $.li().A(
 $.h4('Here is another one of my special items'),
 // '<!-- ko template: { nodes: $componentTemplateNodes, data: myItem } --><!-- /ko -->'))
 ok.$('my-special-list',{items:'someArrayOfPeople'}).A(
 //'<!-- Look, I'm putting markup inside a custom element -->',
 'The person', $.em().bT('name'),  'is', $.em().bT('age'),'years old.'))
 )

 ko._('my-special-list', {
 t: { element: 'my-special-list-template' },
 m: function(params) {this.myItems = params.items}
 })

 ok({
 someArrayOfPeople: ko.observableArray([
 { name: 'Lewis', age: 56 },
 { name: 'Hathaway', age: 34 }
 ])
 })

 //This “special list” example does nothing more than insert a
 // heading above each list item. But the same technique
 // can be used to create sophisticated grids, dialogs, tab sets, and so on,
 // since all that is needed for such UI elements is common UI markup
 // (e.g., to define the grid or dialog’s heading and borders) wrapped around arbitrary supplied markup.
 //
 //    This technique is also possible when using components without
 // custom elements, i.e., passing markup when using the component binding directly.
 }
 CUSTTAGNAMES=function(){
 z()

 //    If you want to have different custom element tag names,
 // you can override getComponentNameForNode to control this. For example,
 //
 ko.cm.getComponentNameForNode = function(node) {

 var tagNameLower = node.tagName && _.tL(node.tagName)
 if (ko.cm.iR(tagNameLower)) {return tagNameLower}         // If the element's name exactly matches a preregistered// component, use that component
 else if (tagNameLower === "special-element") { return "MySpecialComponent"}// For the element <special-element>, use the component// "MySpecialComponent" (whether or not it was preregistered)
 else {return null; }// Treat anything else as not representing a component
 }

 //You can use this technique if, for example, you want to control which subset of
 // registered components may be used as custom elements.
 //
 ko.$('my-custom-element', { })//No config needed

 //Alternatively, you can override getComponentNameForNode to control
 // dynamically which elements map to which component names,
 // independently of preregistration.
 }
 COMBINE=function() {

 //    Note: Combining custom elements with regular bindings
 //A custom element can have a regular data-bind attribute
 // (in addition to any params attribute)
 ko.$('products-list', {category: 'chosenCategory'}).bVs('shouldShowProducts')


 //However, it does not make sense to use bindings that would modify
 // the element’s contents, such as the text or template bindings,
 // since they would overwrite the template injected by your component.
 //
 //    Knockout will prevent the use of any bindings that use
 // controlsDescendantBindings, because this also would clash
 // with the component when trying to bind its viewmodel to
 // the injected template. Therefore if you want to use a control
 // flow binding such as if or foreach, then you must wrap it around
 // your custom element rather than using it directly on the custom element, e.g.,:
 //

 //$("<!-- ko if: someCondition --><products-list></products-list> <!-- /ko -->")

 //or:
 $.ulE('allProducts').A(ko.$('product-details', {product: '$data'}))

 //Note: Custom elements cannot be self-closing
 //You must write <my-custom-element></my-custom-element>,
 // and not <my-custom-element />. Otherwise, your custom element is not closed and subsequent elements will be parsed as child elements.
 //    This is a limitation of the HTML specification and is outside the scope of what Knockout can control.
 // HTML parsers, following the HTML specification, ignore any self-closing slashes (except on a small number of special “foreign elements”, which are hardcoded into the parser). HTML is not the same as XML.

 }
 RAMPAMS=function() {
 z()


 //Advanced: Accessing $raw parameters
 //Consider the following unusual case, in which useObservable1, observable1, and observable2 are all observables:

 ok.$('some-component', {
 myExpr: 'useObservable1() ? observable1 : observable2'
 })
 //Since evaluating myExpr involves reading an observable (useObservable1), KO will supply the parameter to the component as a computed property.
 //
 //    However, the value of the computed property is itself an observable. This would seem to lead to an awkward scenario, where reading its current value would involve double-unwrapping (i.e., params.myExpr()(), where the first parentheses give the value of the expression, and the second give the value of the resulting observable instance).
 //
 //This double-unwrapping would be ugly, inconvenient, and unexpected, so Knockout automatically sets up the generated computed property (params.myExpr) to unwrap its value for you. That is, the component can read params.myExpr() to get the value of whichever observable has been selected (observable1 or observable2), without the need for double-unwrapping.
 //
 //    In the unlikely event that you don’t want the automatic unwrapping, because you want to access the observable1/observable2 instances directly, you can read values from params.$raw. For example,
 //
 function MyComponentViewModel(p) {
 var currentObservableInstance = p.$raw.myExpr();
 }

 // Now currentObservableInstance is either observable1 or observable2
 // and you would read its value with "currentObservableInstance()"
 //This should be a very unusual scenario,
 // so normally you will not need to work with $raw.
 }
 */