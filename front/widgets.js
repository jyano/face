function multiSelect() {

//multi select!!
// The object literal should contain
// default options
// _create,    _setOption    _destroy
// enhance  <select multiple>,
// one might have to iterate over the <option>s
// in the select to create a corresponding <li> in a proxy <ul>.
// Unfortunately, leaving this code in  _create makes it diff to
// 1) manage the relationship btwn   orig <option> els  and  list items,
// 2)  reflect  state of <option> els added/removed from orig <select>  after   instant
// Instead,   build a refresh met (invoked   from _create)for dealing with this linkage,
//  also keep  click-handling logic  on the list items separate,
// and  use ev  delegation  to avoid  binding NEW handlers when list items are created.
	a = {
		_create: function () {
			var wg = this, q = wg.element
			wg.list = $("<ul>").iA(q).delegate("li.multi-option-item", "click", $.proxy(wg_itemClick, wg))
			q.hd()
			wg.refresh()
		},
		refresh: function () {
			var wg = this, q = wg.element  //     Keep track of the generated list items  // Use a class to avoid working on options that have already been created
			wg.items = wg.items || $()
			q.fi("option:not(.demo-multi-option)")
					.ea($.proxy(function (i, el) {
						var q = $(el)
						q.K("demo-multi-option")  // Add k so option !processed next time list  refreshed
						wg.items.add(
								$.li().a2(this.list)
										.K('multi-option-item').A(q.t())
										.data("option.multi", el) // Save it into the item cache
						)
					}, wg)) // If this li's assocd-opt !contained by selEl anymore, // rm it from list/cache
			wg.items = wg.items.filter($.proxy(function (i, item) {
				var inOrig, wg = this, q = wg.element, el = q[0]
				inOrig = $.contains(el, $.data(item, "option.multi"))
				if (!inOrig) {
					$(item).rm()
				}
				return inOrig
			}, wg))
		},
		_itemClick: function (ev) {
			$l($(ev.target).v())
		}
	}
// When ref  to the actual wg inst  is acquired via .data(),
// its PRIVATE mets can be invoked directly:
// $( "#something" ).data( "multi" )._create().
// *** OK, SO user will be changing the select element..
// The refresh example is a case in point:
// Since the user will be the one manipug els in the orig  <select>,
// we must provide the facility for him to update the proxy.
// On the other hand, a plumbing function to
// handle input on the proxy els the wg creates,
// like the _itemClick method, is only for internal use
	pops = function () {
		// this.element-  el (always 1)  used to instantiate   plugin.
		// this.options  ops curr  used for plugin config    // On instant, user-provided-ops are MERGED with df vals   defined in $.demo.multi.prototype.options.
		// this.namespace    The namespace the plugin lives in (  "demo" ) -usually not needed
		// this.name   name of the plugin( "multi  ) " -only Slightly more useful than this.namespace!
		// this.widgetEventPrefix     dets how to name evs assocd w plgn cbs
		// when the  dlg's close cb  execd, -> dlg close ev triggered.
		//    ev  name =  ev prefix(df = widget name) +  cb name
		//ex, when a user starts dragging el, we want ev name to be  dragstart,  !draggablestart,   // so we override ev-prefix to be "drag". // If  cb name == event prefix, ev  name !prefixed (prevents ev name like dragdrag)
		// this.widgetBaseClass
		// -useful for building class names to use on els within your widget.
		// ex:    mark an el  active ->   .K( "demo-multi-active" ) <- el.K( this.widgetBaseClass + "-active" )
		// - more for use inside the wgFac & abstract plugins ($.ui.mouse)
	};
	pops()
	mets = function () {
		
		
		
		// _create (extend):  setup * related to your widget, (create els, bind  evs.), run ONCE, post-instant
		// _init: ***
		//  invoked when wg  invoked w  0 args | 1 ops arg
		// ( first invoc -> called AFTER  _create).
		// o/w  handle   RE-INIT  // without forcing the user to perform a destroy->create cycle. ****
		// destroy extend! ( provides start point):
		// destroys plugin, cleans up (rms ks, unbind evs, destroy els...
// option (dont modify): get/set ops post-instant, sig ~ .css()/attr(), calls _setOptions internally
// _setOptions (dont modify):  internal util  met used for setting ops after instant, calls _setOption internally
// _setOption (can modify!): Called when a user sets an option val  via the option met
		// ex: when a dialog's title option changes, the text inside the title bar must be updated.
		// In some instances, it's necessary to compare the old and new values to determine the correct side effects.
		// In those instance, you can compare this.options[key] with value as long as you delay the call to the base _setOption until the end.
		// If you don't need to compare the old and new values, you can call the base _setOption at top of your _setOption function.
		_setOption = function (k, v) {
			var q = this, g = G(arguments)
			if (k === 'title') {
				q.titleElement.text(v)
			}
			$.Widget.prototype._setOption.apply(q, g)
		}
// _trigger:
// !! be used to execute all cbs
// The only required pam is the name of cb to execute.  All cbs also trgr evs // (see notes about this.widgetEventPrefix above).
//   may also provide evOb that reps ev that initd the process.
// ex:  drag ev is initd by mousemove ev, // so orig mousemove evOb !!(must) be passed to _trigger.
// pam3 is hash of data that will be passed as cb pam and ev handlers.- hash data should only be info relev to spec ev (!avail via the plugin API)
// enable/disable:    just calls option('disabled', false/true) // Note that you'll want to handle enable/disable, by having an if (key === "disabled") blockin your _setOption
	};
	mets()
//http://wiki.jqueryui.com/w/page/12138135/Widget%20factory
	$.wg("demo.multi", {
		options: {clear: null},
		_create: function () {
			var self = this, q = this.element
			self.list = $.ul().iA(q)
			q.hd().fi("option").ea(function (i, el) {
				var q = $(el),
						li = $.li().K('multi-option-item')
				li.A(q.t()).$(function () {
					$l(q.v())
				})
				li.a2(self.list)
			})
		},
		_setOption: function (k, v) { // Use the _setOption method to respond to changes to options
			switch (k) {
				case "clear":
					break;
			}
			this._super("_setOption", k, v)
		}
	})
}
function progressBar() {
	//https://learn.jquery.com/jquery-ui/widget-factory/how-to-use-the-widget-factory/
	$.wg("cust.prgbar", {
		options: {v: 0},
		_create: function () {
			this.element.K("prgbar")
					.text(this.options.v + "%")
		},
		v: v, _cap: cap,
		_options: {v: 0},
		_create: create,
		_setOption: setOption,
		_setOptions: setOptions,
		refresh: refresh,
		_cap: cap,
		_destroy: destroy
	})
	$.cust.prgbar.prototype.reset = function () {
		this._setOption("v", 0)
	}  //  add a met to our prg bar   to reset the prg to 0%
//  rg bar   lets us set the prg once;
//  this.el  1el-qob
// this.ops   k/v-hash plg's ops
// $.d().prgbar({ v: 20 })
// ( fn n ~ n  you pass to $.wid() w/o nSp    "prgbar" )
//ex:  bar = $.d().prgbar({ v: 20 });  bar.prgbar( "v", 50 )
// The option() met allows you to get and set ops after init.  // When used as a setter, the plg's,  _setOption met will be called for ea op   being set.
// For acts to perform independ  of  num  of ops changed, can override _setOptions().
	PRGBAR = function () {

//add cbs so users can react when the state of your plg changes.
		// add  cb to  prgs bar to signfy prg   100%
		// The _trigger() met takes 3pams: cb n,  $ vob that initd the cb, and hash of data relev  to  ev.
		// The cb n  is the only req pam, but  others   useful
		//Cb fns  just addtonl ops,  you can g/s them just like any other op .
		// When    cb  execd, a correspg ev is trgd as well. ev ty  is determd by concatg   plg n + cb n
		// cb and ev both receive the same two pams:  vob,  hash of data relevant to the ev,
		//your plg may have fnly you want to be user-preventble.  best way to support this is  crg cancble cbs.
		// Users can canc  cb, or its assoc  ev, same as cancg any natv ev (by callg ev.preventDefault() or retg Fa)
		// If    cb cancd, the _trigger() met rets Fa,
		// can impl  the appropr  fnly w/in your plg.
		// ex: if we were bildg  dgn plg,   could pass the mm ev when trgg a drag cb;
		// users can react to the drag based on  x/y coords  providd by vob.
		// Note that the orig ev passed to _trigger() must be a $ ev, not a native bw ev.
		bar = $.d().prgbar({
			complete: function (ev, dat) {
				$l("Cbs are great!")
			}
		})
		bar.bind("prgbarcomplete", function (ev, data) {
			$l("Events bubble and support many handlers for extreme flexibility.");
			$l("progress %: " + data.v)
		})
		bar.prgbar("option", "v", 100)
		//DATA
		//  When plg inst crtd,  its stored on orig DOMel using $.data ( key:plgN)
		//  B/c plg inst is drctly linked to the DOM el, you can access the plg inst drctly . instead of going through the exposed plg met
		//- allows you to call mets drctly on the plg inst, instead of passing met names as strings
		//-  also gives you dirc access to the plg's pops.
		bar = $.d().prgbar().data("cust-prgbar");
		bar.option("v", 50); // Call a met drctly on the plg inst.
		$l(bar.ops.v); // Access pops on the plg inst.
//You can also create an inst without going through the plg met,
// by calling the constr drctly,with the ops and element g's:
		bar = $.cust.prgbar({}, $.d());
		$l(bar.ops.v) // Same result as before.
// Extending a Plugin's Prototype,
// modify the bh of all insts of our plg.
		/*  In some cases, it will make sense to allow users to apply
		 and then ltr unapply your plg.
		 You can accomplish this via the _destroy() met.
		 W/in _destroy() met,  undo anything your plg   may have done dur  init|ltr use.
		 _destroy() calld by destroy() met, auto-called if plg-inst-el is rmd,
		 (can be used for gb-cl)
		 That base destroy() met   handles some gen  cleanup ops,
		 ( rmg the inst ref from the wid's DOM el)
		 unbinding all evs in (wid's el-nspaced|_bind()-added-evs)    */
// $ contains the fn.extend() met,
//  simple plg that just adds captions to images      captr
//  so we'll also need a page, with a bunch of images on it, to develop/test the plg with.
	}
	function setOptions(o) {
		this._super(o);
		this.refresh()
	}
	
	function setOption(k, v) {
		if (k === "v") {
			v = this._cap(v)
		}
		;
		this._super(k, v)
	}
	
	function create() {
		this.q.K("prgbar")
		this.o.v = this._cap(this.ops.v)
		this.refresh()
	}
	
	function refresh() {
		this.q.T(this.o.v + "%");
		if (this.o.v == 100) {
			this._trg("complete", null, {v: 100})
		}
	}
	
	function v(v) {
		var wg = this, q = wg.element, ops = wg.options
		if (U(v)) {
			return ops.v
		}
		ops.v = this._cap(v)
		q.text(ops.v + "%")
	}
	
	function destroy() {
		this.element.xK("prgbar").T('')
	}
	
	function cap(v) {
		if (v > 100) {
			v = 100
		}
		if (v < 0) {
			v = 0
		}
		return v
	}
	
	$.wg("jy.bar", {
		options: {v: 0},
		_create: function () {
			this.element.K("bar").text(this.options.v + "%")
			this._update()
		},
		_constrain: function (v) {
			return v > 100 ? 100 : v < 0 ? 0 : v
		},
		_setOption: function (key, v) {
			this.options[key] = v;
			this._update()
		},
		_update: function () {
			var progress = this.options.v + "%";
			this.element.text(progress);
			if (this.options.v === 100) {
				this._trigger("complete", null, {v: 100});
			}
		},
		_destroy: function () {
			
			
			// _destroy method called if the element that your plugin instance is tied to is
// removed from the DOM,  can be used for garbage collection
//  base destroy method calls _destroy on the plugin instance.
			this.element
					.removeClass("bar")
					.text("");
		},
		v: function (v) {
			if (U(v)) {
				return this.options.v
			}
			else {
				this.options.v = this._constrain(v)
				this.element.text(this.options.v + "%")
			}
		}
	})
	$.jy.bar.prototype.reset = function () {
		this._setOption("v", 0);
	}
	BAR = function () {
		$Ms('BAR')
		d = $("<div>").A()
		d.bar({v: 30})
		d.bind("barcomplete", function (e, d) {
			alert("Events bubble and support many handlers for extreme flexibility.")
			alert("The progress bar value is " + d.v);
		})
		d.bar({
			complete: function (e, data) {
				$Ms('complete')
			}
		})
	}
}
function sDlg() {

//https://learn.jquery.com/jquery-ui/widget-factory/extending-widgets/
//super dialog!!
	$.wg("cust.sdlg", $.ui.dialog, {
		open: function () {
			$l("open");
			return this._super()
		},
		setOption: function (k, v) {
			this._super(k, v);
			this._superApply(arguments)
		},
		red: function (r) {
			this.element.C('r')
		}
	})
	WIJ = function () {
		d = $.d(['i am red'])
		d.sDlg().sDlg('red')
		$.in(function () {
			d.sDlg("close")
		})
	}
	SDLG = function () {
		
		// Mets overridden on the ptt affect all insts of wid.
// both insts of the dlg use the same open() met
		d = $.d().sdlg().data("ui-dialog")
		// Retrieve the dialog's instance and store it.
		// sometimes you only need to change the bhr for a sing  inst  of the wid.  //To do this, obtain   ref  to   inst  and override the met  using  normal js
		d.close = function () {
			$l("close")
		}
		$.d().sdlg()
		$(':data(ui-dialog)').dlg("close")
		// Select both dialogs and call close() on each of them--> "close" will only be logged once.
	}
}
$.wg("ui.capt", {
	options: {loc: "bottom", c: "y", C: "z"},
	_create: function () {
		var wg = this, q = wg.element, o = wg.options
		var tx = q.at("alt")
		var cap = $.sp()
		cap.K("ui-widget ui-caption").tx(tx).C(o.C, o.c).W('100%')
		cap.iA(q)
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
		$(window).resize(function () {
			cap.css({top: top(o.loc === "top"), left: q.os().left})
		})
		function top(bool) {
			return bool ? q.os().top :
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
	$s({'.ui-caption': {d: 'none', position: 'absolute', P: 10}})
	$.C('z')
	$.i('me').A().at('alt', 'wowowowowoowowo').capt({
		loc: "top"
	})
	$.i('chicks').A().at('alt', 'wowowowowoowowo').capt({
		loc: "top"
	})
}
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