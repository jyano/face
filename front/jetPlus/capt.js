//CAPTION!!

$.wg("ui.capt", {

	options: {
		loc: "bottom",
		c: "#fff", C: "#000"
	},
	
	_create: function () {
		var wg = this, q = wg.element, o = wg.options, tx = q.at("alt"), cap = $('<span>').A()
		cap.tx(tx)
		cap.C(o.C).col(o.c)
		cap.W(q.W())
		cap.iA(q).K("ui-widget ui-caption")
		cap.css({
			width: q.W() - _.pI(cap.pL()) - _.pI(cap.pR()),
			top: top(o.loc === "top"),
			left: q.os().left,
			display: "block"
		})
		
		// custom event:
		wg._trigger("added", null, cap);
		// that can be reacted to.
		// We call the _trigger() method of the plugin instance (which we stored in the variable wg)
		// and pass the method three arguments;
		// the first is the name of the event,
		// the second is for the event object
		// (we don't need to use this in our example plugin, hence the null value)
		// and the third is a reference to the caption element.
		// The widget factory will automatically pass the event object
		// (if supplied) and the data we pass in the third parameter to a callback function
		// that uses the added event. A developer could hook into this event using the following syntax:
		// $("element_caption_attached_to").capt({ added: function(e, ui){ //do stuff });
		//
		$(window).rz(function () {
			$l('wd.rz')
			cap.css({
				top: top(o.loc === "top"),
				left: q.os().left
			})
		})
		function top(bool) {
			return bool ?
					q.os().top :
			q.os().top + q.H() - cap.ouH() - _.pI(cap.pT()) + _.pI(cap.pB())
		}
	},
	
	destroy: function () {
		this.element.next().remove();
		$(window).unbind("resize")
	},
	
	_setOption: function (option, value) {
		$.Widget.prototype._setOption.apply(this, arguments)
		var el = this.element, cap = el.next(),
				capH = cap.outerHeight() - parseInt(cap.css("paddingTop"))
						+ parseInt(cap.css("paddingBottom"))
		switch (option) {
			case "loc":
				(value === "top") ? cap.css("top", el.os().top) :
						cap.css("top", el.os().top + el.H() - capH);
				break;
			case "color":
				el.next().css("color", value);
				break;
			case "backgroundColor":
				el.next().css("backgroundColor", value);
				break;
		}
	}
})


CAPT = function () {
	$CSS({'.ui-caption': {d: 'none', position: 'absolute', P: 10}})
	$.C('z')
	$.i('me').A().at('alt', 'wowowowowoowowo').capt({
		loc: "top"
	})
	$.i('chicks').A().at('alt', 'wowowowowoowowo').capt({
		loc: "top"
	})
	//Once the caption has been inserted,
	// it needs to be sized and positioned;
	// the only way it can be sized accurately is if it already exists in the
	// DOM and has CSS rules applied to it, such as the font-size.
	// This is why we append the caption to the page, and then determine its exact dimensions,
	// which are then stored in the variables capW and capH.
	//Once the caption has been appended to the page (and only then) we can work set the correct width, H and position of each caption,
	// which we set using the css() method once again.
	// The captions are actually completely separate from the images;
	// they are inserted directly after each image and then positioned to appear to overlay the images, after all,
	// we can't append
	// the <span> as a child of the <img>.
	//This is fine, until the browser is resized, at which point the images move but the captions don't because they are absolutely positioned.
	// To remedy this, we've used a basic resize handler
	// attached to the window which simply repositions each caption to the new position of its image. This event handler is the last thing in our initialization method.
	//Another method that our plugin should expose is the destroy() method which is common to all jQuery UI plugins.
	// We must provide an implementation of this method in order to clean up after
	// our plugin. For our example plugin, the method can be as simple as this:
	//
	//All we need to do is remove the captions and unbind our window resize handler.
	// This method can be called by an implementer
	// using the plugin so we shouldn't begin this method name with an underscore.
	// To call this method,
	// the implementer would use
	// $("element_caption_attached_to").capt("destroy");
	// which is how any of our public methods would be called.
	//We start this method with an underscore because the implementer uses option,
	// not _setOption to actually change the options; we don't need to worry about how this is handled,
	// we just need to provide this method to deal with anything specific to our plugin.
	// Because this method already exists in the widget factory we should call the original method,
	// which we do first of all in our method using the prototype of the Widget object,
	// specifying the method name (_setOption in this case but we could do it for other built-in methods as well)
	// and use apply to call it.
	//The function will automatically receive two arguments
	// which are the option to change and the new value.
	// We cache some commonly used elements,
	// such as the image and the caption, and obtain the current H of each caption.
	// We then use a simple switch-case statement to handle each of our three options being changed.
	// Repositioning the captions is the most complex,
	// but is still quite trivial and similar to how we positioned them initially.
}

///

BASE=function(){

$S({
	'.custom-colorize': {'font-size': '20px', position: 'relative', width: '75px', height: '75px'},
	'.custom-colorize-changer': {			'font-size': '10px', position: 'absolute', right: '0', bottom: '0'}

})
$.d().A(
		$.d().id("my-widget1").A('color me'),
		$.d().id("my-widget2").A('color me'),
		$.d().id("my-widget3").A('color me'),
		$.bt('Toggle disabled option').id('disable'),
		$.bt('Go green').id('green')
)
 
 // the widget definition, where "custom" is the namespace,
 // "colorize" the widget name
 $.widget( "custom.colorize", {
 // default options
 options: {
 red: 255,
 green: 0,
 blue: 0,
 
 // callbacks
 change: null,
 random: null
 },
 
 // the constructor
 _create: function() {this.element
 // add a class for theming
 .addClass( "custom-colorize" )
 // prevent double click to select text
 .disableSelection()
 
 
 this.changer = $( "<button>", {text: "change", "class": "custom-colorize-changer"})
 .appendTo( this.element ).button()
 
 // bind click events on the changer button to the random method
 this._on( this.changer, {
 // _on won't call random when widget is disabled
 click: "random"})
 this._refresh()},
 
 // called when created, and later when changing options
 _refresh: function() {
 this.element.css( "background-color", "rgb(" +
 this.options.red +"," +
 this.options.green + "," +
 this.options.blue + ")"
 );
 
 // trigger a callback/event
 this._trigger( "change" );
 },
 
 // a public method to change the color to a random value
 // can be called directly via .colorize( "random" )
 random: function( event ) {
 var colors = {
 red: Math.floor( Math.random() * 256 ),
 green: Math.floor( Math.random() * 256 ),
 blue: Math.floor( Math.random() * 256 )
 };
 
 // trigger an event, check if it's canceled
 if ( this._trigger( "random", event, colors ) !== false ) {
 this.option( colors );
 }
 },
 
 // events bound via _on are removed automatically
 // revert other modifications here
 _destroy: function() {
 // remove generated elements
 this.changer.remove();
 
 this.element
 .removeClass( "custom-colorize" )
 .enableSelection()
 .css( "background-color", "transparent" );
 },
 
 // _setOptions is called with a hash of all options that are changing
 // always refresh when changing options
 _setOptions: function() {
 // _super and _superApply handle keeping the right this-context
 this._superApply( arguments );
 this._refresh();
 },
 
 
 // _setOption is called for each individual option that is changing
 _setOption: function( key, value ) {
 // prevent invalid color values
 if ( /red|green|blue/.test(key) && (value < 0 || value > 255) ) {return}
 this._super( key, value )}})
 
 
 // initialize with default options
 $( "#my-widget1" ).colorize();
 
 
 // initialize with two customized options
 $( "#my-widget2" ).colorize({red: 60, blue: 60})
 
 
 // initialize with custom green value
 // and a random callback to allow only colors with enough green
 $( "#my-widget3" ).colorize( {green: 128, random: function( event, ui ) {return ui.green > 128}})
 
 // click to toggle enabled/disabled
 $( "#disable" ).click(function() {
 // use the custom selector created for each widget to find all instances
 // all instances are toggled together, so we can check the state from the first
 if ($( ":custom-colorize" ).colorize( "option", "disabled" )){
	 $( ":custom-colorize" ).colorize( "enable" )} else {$( ":custom-colorize" ).colorize( "disable" )}})
 
 
 // click to set options after initialization
 $( "#green" ).click( function() {$( ":custom-colorize" ).colorize( "option", {red: 64, green: 250, blue: 8})})
 
 

 
}