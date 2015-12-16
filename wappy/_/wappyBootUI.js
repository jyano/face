function nav(){
$.iconBar=function(){return $.span().K("icon-bar")}
$.caret=function(){return $.span().K("caret")}
$.fn.toggle=function(a){return this.attr("data-toggle", a)}
$.fn.target=function(a){return this.attr("data-target", a)}

Wappy = {}


// Wappy.nav makes a $.navbarCollapse and $.navbarHeader.  then it makes a $.navbar.
// it puts the navbarHeader and navbarCollapse in the navbar
//then it appends the navbar wrapped in a container

Wappy.Nav = Wappy.nav = WappyNav=function(){z()

    var navbarCollapse =

        $.navbarCollapse().A(
            $.nav(
                $.dropdown('create',[ 'upload','uploads','cutouts',  'edit', 'avatar','paint', 'filters','showcase',
                    'tween','tweenart', 'easing', 'pack','sprite','transform' ,
                    'can' ,'rub','fan' ]),
                $.dropdown('youplay',[ 'bod', 'invaders','thrust', 'starstruck', 'massvelocitytest','contactevents',  'ninjatilemap','launcher',
                    'groupvsgroup','shooty','hit','space','maggots']),
                $.dropdown('play',[ 'iso', 'connect','matrix', 'ship',  'circle','boxes','solar','canon','fullcan',
            'tangle','corners','borders','gquery','grid', 'bowl',  'gamer', 'melon','meltut'  ]),
                $.dropdown('share',[ 'universe',
            'users', 'status' , 'messages','posts','chatrooms',
            'ranky',  'profile', 'profiles','dirt','knocks', 'book','site','sorty','elements' ,'api' ,'object'   ]),
                $.dropdown('box2d',[     'box2d', 'wheel','heads', 'cups','pinball',
            'revdemo','shooter','thruster','jumper','warper' ])),
            $.navRight(
                $.liA('logged: '+ _username),
                $.liA('logout', Y.logOut)))



    $.container().A().A(
        $.navbar().A(
            $.navbarHeader('wappy', '/wap'), navbarCollapse ))

}


$.searchNavRight =  function(){

    return $.form().K("navbar-form navbar-right").A(
            $.div().K('form-group').A(

                $('<input>').K('form-control').attr('placeholder','search')

            ),    $.submitButton().A( $.glyphicon('search')))}

$.dropdownToggle = function(a){return $.a( a ).K("dropdown-toggle").toggle("dropdown").A(  $.caret()  )}

$.dropdownMenu=function(){

    var menu= $.ul().K("dropdown-menu")

    _.each(arguments,
        function(arg){
            menu.A(  liAWap(arg) )})

    return menu


    function liAWap(appName){
        return $.liA(appName,   function(){window.location='/wap/' + appName   }   )   }


}
$.dropdown=function(a,b){
    var toggle=$.dropdownToggle(a)
    var menu= $.dropdownMenu.apply(this, b)
    return  $.li().K("dropdown").A(toggle, menu)}

//this a ul element
$.nav=function(){
    var nav = $.ul().K("nav navbar-nav")
    _.each(arguments, function(arg){ nav.A( arg ) })
    return nav}

//this a ul
$.navRight=function(){
    var nav = $.ul().K("nav navbar-nav navbar-right")
    _.each(arguments, function(arg){ nav.A( arg ) })
    return nav}

// this a div
$.navbar=function(){return $.div().K("navbar navbar-default").A($.div().K("container-fluid"))}

$.navbarHeader=function(brand, link){

    var header = $.div().K("navbar-header")

    header.A(

        $.button().K("navbar-toggle collapsed").toggle('collapse').target(".navbar-collapse").A(

            $.span("Toggle navigation").K("sr-only"),

            $.iconBar(),$.iconBar(),$.iconBar()
        ),

        $.a(brand).K("navbar-brand").click(function(){

           if(link){
               window.location = link
           }

        })

    )


return header}
$.navbarCollapse=function(){return  $.div().K("navbar-collapse collapse")}




function old(){
	$.iconBar = function () {
		return $.span().K("icon-bar")
	}
	$.caret = function () {
		return $.span().K("caret")
	}
	$.fn.toggle = function (a) {
		return this.attr("data-toggle", a)
	}
	$.fn.target = function (a) {
		return this.attr("data-target", a)
	}
	Wappy = {}
// Wappy.nav makes a $.navbarCollapse and $.navbarHeader.  then it makes a $.navbar.
// it puts the navbarHeader and navbarCollapse in the navbar
//then it appends the navbar wrapped in a container
	Wappy.Nav = Wappy.nav = WappyNav = function () {
		z()
		var navbarCollapse =
				$.navbarCollapse().A(
						$.nav(
								$.dropdown('create', ['upload', 'uploads', 'cutouts', 'edit', 'avatar', 'paint', 'filters', 'showcase',
									'tween', 'tweenart', 'easing', 'pack', 'sprite', 'transform',
									'can', 'rub', 'fan']),
								$.dropdown('youplay', ['bod', 'invaders', 'thrust', 'starstruck', 'massvelocitytest', 'contactevents', 'ninjatilemap', 'launcher',
									'groupvsgroup', 'shooty', 'hit', 'space', 'maggots']),
								$.dropdown('play', ['iso', 'connect', 'matrix', 'ship', 'circle', 'boxes', 'solar', 'canon', 'fullcan',
									'tangle', 'corners', 'borders', 'gquery', 'grid', 'bowl', 'gamer', 'melon', 'meltut']),
								$.dropdown('share', ['universe',
									'users', 'status', 'messages', 'posts', 'chatrooms',
									'ranky', 'profile', 'profiles', 'dirt', 'knocks', 'book', 'site', 'sorty', 'elements', 'api', 'object']),
								$.dropdown('box2d', ['box2d', 'wheel', 'heads', 'cups', 'pinball',
									'revdemo', 'shooter', 'thruster', 'jumper', 'warper'])),
						$.navRight(
								$.liA('logged: ' + _username),
								$.liA('logout', Y.logOut)))
		$.container().A().A(
				$.navbar().A(
						$.navbarHeader('wappy', '/wap'), navbarCollapse))
	}
	$.searchNavRight = function () {
		return $.form().K("navbar-form navbar-right").A(
				$.div().K('form-group').A(
						$('<input>').K('form-control').attr('placeholder', 'search')
				), $.submitButton().A($.glyphicon('search')))
	}
	$.dropdownToggle = function (a) {
		return $.a(a).K("dropdown-toggle").toggle("dropdown").A($.caret())
	}
	$.dropdownMenu = function () {
		var menu = $.ul().K("dropdown-menu")
		_.each(arguments,
				function (arg) {
					menu.A(liAWap(arg))
				})
		return menu
		function liAWap(appName) {
			return $.liA(appName, function () {
				window.location = '/wap/' + appName
			})
		}
	}
	$.dropdown = function (a, b) {
		var toggle = $.dropdownToggle(a)
		var menu = $.dropdownMenu.apply(this, b)
		return $.li().K("dropdown").A(toggle, menu)
	}
//this a ul element
	$.nav = function () {
		var nav = $.ul().K("nav navbar-nav")
		_.each(arguments, function (arg) {
			nav.A(arg)
		})
		return nav
	}
//this a ul
	$.navRight = function () {
		var nav = $.ul().K("nav navbar-nav navbar-right")
		_.each(arguments, function (arg) {
			nav.A(arg)
		})
		return nav
	}
// this a div
	$.navbar = function () {
		return $.div().K("navbar navbar-default").A($.div().K("container-fluid"))
	}
	$.navbarHeader = function (brand, link) {
		var header = $.div().K("navbar-header")
		header.A(
				$.button().K("navbar-toggle collapsed").toggle('collapse').target(".navbar-collapse").A(
						$.span("Toggle navigation").K("sr-only"),
						$.iconBar(), $.iconBar(), $.iconBar()
				),
				$.a(brand).K("navbar-brand").click(function () {
					if (link) {
						window.location = link
					}
				})
		)
		return header
	}
	$.navbarCollapse = function () {
		return $.div().K("navbar-collapse collapse")
	}
//////
	$.iconBar = function () {
		return $.span().K("icon-bar")
	}
	$.caret = function () {
		return $.span().K("caret")
	}
	$.fn.toggle = function (a) {
		return this.attr("data-toggle", a)
	}
	$.fn.target = function (a) {
		return this.attr("data-target", a)
	}
	Wappy = {}
// Wappy.nav makes a $.navbarCollapse and $.navbarHeader.  then it makes a $.navbar.
// it puts the navbarHeader and navbarCollapse in the navbar
//then it appends the navbar wrapped in a container
	Wappy.Nav = Wappy.nav = WappyNav = function () {
		z()
		var navbarCollapse =
				$.navbarCollapse().A(
						$.nav(
								$.dropdown('create', ['upload', 'uploads', 'cutouts', 'edit', 'avatar', 'paint', 'filters', 'showcase',
									'tween', 'tweenart', 'easing', 'pack', 'sprite', 'transform',
									'can', 'rub', 'fan']),
								$.dropdown('youplay', ['bod', 'invaders', 'thrust', 'starstruck', 'massvelocitytest', 'contactevents', 'ninjatilemap', 'launcher',
									'groupvsgroup', 'shooty', 'hit', 'space', 'maggots']),
								$.dropdown('play', ['iso', 'connect', 'matrix', 'ship', 'circle', 'boxes', 'solar', 'canon', 'fullcan',
									'tangle', 'corners', 'borders', 'gquery', 'grid', 'bowl', 'gamer', 'melon', 'meltut']),
								$.dropdown('share', ['universe',
									'users', 'status', 'messages', 'posts', 'chatrooms',
									'ranky', 'profile', 'profiles', 'dirt', 'knocks', 'book', 'site', 'sorty', 'elements', 'api', 'object']),
								$.dropdown('box2d', ['box2d', 'wheel', 'heads', 'cups', 'pinball',
									'revdemo', 'shooter', 'thruster', 'jumper', 'warper'])),
						$.navRight(
								$.liA('logged: ' + _username),
								$.liA('logout', Y.logOut)))
		$.container().A().A(
				$.navbar().A(
						$.navbarHeader('wappy', '/wap'), navbarCollapse))
	}
	$.searchNavRight = function () {
		return $.form().K("navbar-form navbar-right").A(
				$.div().K('form-group').A(
						$('<input>').K('form-control').attr('placeholder', 'search')
				), $.submitButton().A($.glyphicon('search')))
	}
	$.dropdownToggle = function (a) {
		return $.a(a).K("dropdown-toggle").toggle("dropdown").A($.caret())
	}
	$.dropdownMenu = function () {
		var menu = $.ul().K("dropdown-menu")
		_.each(arguments,
				function (arg) {
					menu.A(liAWap(arg))
				})
		return menu
		function liAWap(appName) {
			return $.liA(appName, function () {
				window.location = '/wap/' + appName
			})
		}
	}
	$.dropdown = function (a, b) {
		var toggle = $.dropdownToggle(a)
		var menu = $.dropdownMenu.apply(this, b)
		return $.li().K("dropdown").A(toggle, menu)
	}
//this a ul element
	$.nav = function () {
		var nav = $.ul().K("nav navbar-nav")
		_.each(arguments, function (arg) {
			nav.A(arg)
		})
		return nav
	}
//this a ul
	$.navRight = function () {
		var nav = $.ul().K("nav navbar-nav navbar-right")
		_.each(arguments, function (arg) {
			nav.A(arg)
		})
		return nav
	}
// this a div
	$.navbar = function () {
		return $.div().K("navbar navbar-default").A($.div().K("container-fluid"))
	}
	$.navbarHeader = function (brand, link) {
		var header = $.div().K("navbar-header")
		header.A(
				$.button().K("navbar-toggle collapsed").toggle('collapse').target(".navbar-collapse").A(
						$.span("Toggle navigation").K("sr-only"),
						$.iconBar(), $.iconBar(), $.iconBar()
				),
				$.a(brand).K("navbar-brand").click(function () {
					if (link) {
						window.location = link
					}
				})
		)
		return header
	}
	$.navbarCollapse = function () {
		return $.div().K("navbar-collapse collapse")
	}
}
}
$.showTab = function (id) {
	$('#' + id).tab('show')
} //necessary?
$.tab = function (text, lookFor) {
	var args = G(arguments)
	if (F(lookFor)) {
		$l('function')
		var tabText = args[0],
				func = args[1],
				load = function (e) {
					$('#' + tabText).tab('show');
					func()
				}
		theLi = $.li().A($.a(tabText, load))
		theLi.load = load
		if (args.m) {
			theLi.K('active')
		}
		return theLi
	}
	$l('not function')
	var a = $.a(text, '#' + lookFor).attr({'data-toggle': 'tab'})
	return $.li().A(a)
}
$.navTabs = function () {
	var tabs = $.ul().K("nav nav-tabs")
	_.each(arguments, function (arg) {
		tabs.A(arg)
	})
	return tabs
}
$.tabPane = function (id) {
	var args = G(arguments),
			pane = $.div().K("tab-pane fade").id(args[0])
	if (args.p) {
		pane.K('active in')
	}
	return pane
}
$.tabContent = function () {
	var div = $.div().K("tab-content")
	_.each(arguments,
			function (arg) {
				div.A(arg)
			})
	return div
}
$.tabs = function () {

//can pass in a $.tab() -> 'tab'
	//OR can pass in an array, and then $.tab will be called for it, and pass in the pams
	tabsWrapper = $.div('X').WH('auto').A(
			tabBar = $.ul().K("nav nav-tabs"),
			panel = TABS = $.span()
	)
	_.each(arguments,
			function (tab) {
				if (A(tab)) {
					tab = $.tab(tab[0], tab[1])
				}
				tabBar.A(tab)
			})
	tabsWrapper.load = function () {
		tabBar.children().first().first().click()
		return tabsWrapper
	}
	return tabsWrapper
}
showTabX = shwX = function (a) {
	qi(a).q.tab('show')
	//return a
}
TabX = tabX = function (tabText, func) {
	var args = G(arguments),
			tabText = args[0],
			func = args[1],
			theLi = $liA(
					tabText,
					function () {
						showTab(tabText);
						func()
					})
	theLi.load = function () {
		showTab(tabText);
		func()
	}
	if (args.m) {
		theLi.k('active')
	}
	return theLi
}
tabsX = function (a) {
	var g = G(arguments),
			a = g[0], d, u
	theDiv = $.div('X').WH('auto').A(
			theUlNav = $.ul().K('nav nav-tabs'),
			TABS = $.span()
	)
	//ok so a can already be a tag.. OR, if you pass in an array, it will make it a tag for :)
	if (A(a)) {
		a = $.tab.apply($.tab, a)
	}
	theUlNav(a)
	_.each(g.r, function (a) {
		if (A(a)) {
			a = _a(tab, a)
		}
		;
		theUlNav(a)
	})
	theDiv.load = function () {
		a.children[0].click();
		return theDiv
	}
	return theDiv
}
function tabPil(){
	$.showTab = function (id) {
		$('#' + id).tab('show')
	} //necessary?
	$.tab = function (text, lookFor) {
		var args = G(arguments)
		if (F(lookFor)) {
			$l('function')
			var tabText = args[0],
					func = args[1],
					load = function (e) {
						$('#' + tabText).tab('show');
						func()
					}
			theLi = $.li().A($.a(tabText, load))
			theLi.load = load
			if (args.m) {
				theLi.K('active')
			}
			return theLi
		}
		$l('not function')
		var a = $.a(text, '#' + lookFor).attr({'data-toggle': 'tab'})
		return $.li().A(a)
	}
	$.navTabs = function () {
		var tabs = $.ul().K("nav nav-tabs")
		_.each(arguments, function (arg) {
			tabs.A(arg)
		})
		return tabs
	}
	$.tabPane = function (id) {
		var args = G(arguments),
				pane = $.div().K("tab-pane fade").id(args[0])
		if (args.p) {
			pane.K('active in')
		}
		return pane
	}
	$.tabContent = function () {
		var div = $.div().K("tab-content")
		_.each(arguments,
				function (arg) {
					div.A(arg)
				})
		return div
	}
	$.tabs = function () {

//can pass in a $.tab() -> 'tab'
		//OR can pass in an array, and then $.tab will be called for it, and pass in the pams
		tabsWrapper = $.div('X').WH('auto').A(
				tabBar = $.ul().K("nav nav-tabs"),
				panel = TABS = $.span()
		)
		_.each(arguments,
				function (tab) {
					if (A(tab)) {
						tab = $.tab(tab[0], tab[1])
					}
					tabBar.A(tab)
				})
		tabsWrapper.load = function () {
			tabBar.children().first().first().click()
			return tabsWrapper
		}
		return tabsWrapper
	}
	testTabs = function () {
		$.boot(
				$.navTabs(
						$.tab('Home', 'home').K('active'),
						$.tab('Profile', 'profile'),
						$.tab('Messages', 'messages'),
						$.tab('Settings', 'settings')
				).C('r'),
				$.tabContent(
						$.tabPane('home', '+').A(
								$.h1('home'),
								$.ipsum(6)
						),
						$.tabPane('profile').A(
								$.h1('profile'),
								$.ipsum(6)
						),
						$.tabPane('messages').A(
								$.h1('messages'),
								$.ipsum(6)
						),
						$.tabPane('settings').A(
								$.h1('settings'),
								$.ipsum(6)
						)
				).C('b')
		)
	}
	testTabs1 = function () { // 'active-s' are mismatched on purpose :)
		$.boot(
				$.navTabs(
						$.tab('Home1', 'home1'),
						$.tab('Home', 'home').K('active'),
						$.tab('Profile', 'profile'),
						$.tab('Messages', 'messages')),
				$.tabContent(
						$.tabPane("home1", '+').C('b').A('home1'),
						$.tabPane('home').C('r').A('home'),
						$.tabPane("profile").C('y').A('profile'),
						$.tabPane("messages").C("g").A('messages'))
		)
		$('.nav-tabs a').click(function (e) {
			//    e.preventDefault();  $(this).tab('show')
		})
	}
	testTabs2 = function () {
		z()
		var ul = $.ul().K('nav nav-tabs').A(
				$.liA('aaaa'),
				$.liA('bbbb').K('active'),
				$.liA('cccc'),
				$.liA('dddd')
		).C('b')
		var display = $.div('y', 300, 400).mar(20)
		var div = $.div('r').pad(30).A(ul, display).A().drag()
	}
	testTabs3 = function () {
		z()
		$.navTabs().A(
				$.tab('Home'),
				$.tab('Profile').K('active'),
				$.tab('Messages')).A()
		$(function () {
			$('a').click(function () {
				$(this).tab('show')
			})
		})
	}
	testTabAjax = function () {
		$.boot(
				$.navTabs(
						$.tab('hello', function () {
							alert('hello')
						}),
						$.tab('goodbye', function () {
							$('#stuff').load('/')
						})
				),
				$.div().id('stuff')
		)
	}
	testTabs4 = function () {
		z()
		var tabBar = $.ul().K("nav nav-tabs")
		tabBar.A(
				$.tab('first', function () {
					alert('1')
				}),
				$.tab('second', function () {
					alert('2')
				}),
				$.tab('third', function () {
					alert('3')
				})
		).A()
	}//navtabs=function(){return $.ul().K('nav nav-tabs')} //unnecessary
	testTabs5 = function () {
		z()
		var tabBar = $.tabs(
				['first', function () {
					$l('1')
					panel.E($.img('me'))
				}],
				['second', function () {
					$l('2')
				}],
				['third', function () {
					$l('3')
				}]
		).A()
	}
	testTabsAction = function () {
		testTabs()
		$(function () {
			$('a[data-toggle="tab"]')
					.on('show.bs.tab', function (e) {
						ee = e
						$l('tabbed!')
						e.target // newly activated tab
						e.relatedTarget // previous active tab
					})
		})
	}
	testTabsAction2 = function () {
		// for each tab, use 'on(show)', to automatically fetch/load?
	}
	$.pill = function (name, func) {
		var a = $.a(name, func).attr({'data-toggle': 'pill', href: '#' + name})
		return $.li().A(a)
	}
	$.navPills = function () {
		return $.ul().K('nav nav-pills')
	}
	$.pillPane = function (id) {
		var d = $.div().K('pill-pane fade').id(id).attr('role', 'pillpanel')
		return d
	}
	$.pillContent = function () {
		var div = $.div().K("pill-content")
		_.each(arguments,
				function (arg) {
					div.A(arg)
				})
		return div
	}
	testPills = function () {
		$(function () {
			$.boot().A(
					$.well($.h1('welcome to pills')),
					n = $.navPills().A(
							$.pill('home'),
							$.pill('profile'),
							$.pill('messages', function () {
								$('body').C('r')
							})
					),
					$.div().K("pill-content").A(
							$.pillPane('home').A('hoooome'),
							$.pillPane('profile').A('prooofile'),
							$.pillPane('messages').A('messsaaaages')
					)
			)
			//   $('a').each(function(){ $(this).attr('data-toggle', 'pill') })
		})
	}
	PILLS = function () {
		z()
		pills = $.ul().K("nav nav-pills").A(
				$.li().K('active').A($.a('home').toggle('tab')),
				$.li().A($.a('profile').K('profile')),
				$.li().A($.a('messages')))
		div = $.div('b').WH('auto').pad(40).drag()
		content = $.div('y', 300).pad(40).mar(40)
		div.A(pills, content)
		$('a').click(function (e) {
			e.preventDefault()
			$(this).tab('show')
		})
		// $('a:first').tab('show')
		$('a.profile').on('shown.bs.tab', function (e) {
			content.empty()
			content.A(
					$.div().text('asfdasfdfasd')
			)
		})
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			// alert('yay')
			ee = e.target
			e.target // activated tab
			e.relatedTarget // previous tab
		})
	}
}
function testTabs() {
	testTabs = function () {
		$.boot(
				$.navTabs(
						$.tab('Home', 'home').K('active'),
						$.tab('Profile', 'profile'),
						$.tab('Messages', 'messages'),
						$.tab('Settings', 'settings')
				).C('r'),
				$.tabContent(
						$.tabPane('home', '+').A(
								$.h1('home'),
								$.ipsum(6)
						),
						$.tabPane('profile').A(
								$.h1('profile'),
								$.ipsum(6)
						),
						$.tabPane('messages').A(
								$.h1('messages'),
								$.ipsum(6)
						),
						$.tabPane('settings').A(
								$.h1('settings'),
								$.ipsum(6)
						)
				).C('b')
		)
	}
	testTabs1 = function () { // 'active-s' are mismatched on purpose :)
		$.boot(
				$.navTabs(
						$.tab('Home1', 'home1'),
						$.tab('Home', 'home').K('active'),
						$.tab('Profile', 'profile'),
						$.tab('Messages', 'messages')),
				$.tabContent(
						$.tabPane("home1", '+').C('b').A('home1'),
						$.tabPane('home').C('r').A('home'),
						$.tabPane("profile").C('y').A('profile'),
						$.tabPane("messages").C("g").A('messages'))
		)
		$('.nav-tabs a').click(function (e) {
			//    e.preventDefault();  $(this).tab('show')
		})
	}
	testTabs2 = function () {
		z()
		var ul = $.ul().K('nav nav-tabs').A(
				$.liA('aaaa'),
				$.liA('bbbb').K('active'),
				$.liA('cccc'),
				$.liA('dddd')
		).C('b')
		var display = $.div('y', 300, 400).mar(20)
		var div = $.div('r').pad(30).A(ul, display).A().drag()
	}
	testTabs3 = function () {
		z()
		$.navTabs().A(
				$.tab('Home'),
				$.tab('Profile').K('active'),
				$.tab('Messages')).A()
		$(function () {
			$('a').click(function () {
				$(this).tab('show')
			})
		})
	}
	testTabAjax = function () {
		$.boot(
				$.navTabs(
						$.tab('hello', function () {
							alert('hello')
						}),
						$.tab('goodbye', function () {
							$('#stuff').load('/')
						})
				),
				$.div().id('stuff')
		)
	}
	testTabs4 = function () {
		z()
		var tabBar = $.ul().K("nav nav-tabs")
		tabBar.A(
				$.tab('first', function () {
					alert('1')
				}),
				$.tab('second', function () {
					alert('2')
				}),
				$.tab('third', function () {
					alert('3')
				})
		).A()
	}//navtabs=function(){return $.ul().K('nav nav-tabs')} //unnecessary
	testTabs5 = function () {
		z()
		var tabBar = $.tabs(
				['first', function () {
					$l('1')
					panel.E($.img('me'))
				}],
				['second', function () {
					$l('2')
				}],
				['third', function () {
					$l('3')
				}]
		).A()
	}
	testTabsAction = function () {
		testTabs()
		$(function () {
			$('a[data-toggle="tab"]')
					.on('show.bs.tab', function (e) {
						ee = e
						$l('tabbed!')
						e.target // newly activated tab
						e.relatedTarget // previous active tab
					})
		})
	}
	testTabsAction2 = function () {
		// for each tab, use 'on(show)', to automatically fetch/load?
	}
}
function pills() {
	$.pill = function (name, func) {
		var a = $.a(name, func).attr({'data-toggle': 'pill', href: '#' + name})
		return $.li().A(a)
	}
	$.navPills = function () {
		return $.ul().K('nav nav-pills')
	}
	$.pillPane = function (id) {
		var d = $.div().K('pill-pane fade').id(id).attr('role', 'pillpanel')
		return d
	}
	$.pillContent = function () {
		var div = $.div().K("pill-content")
		_.each(arguments,
				function (arg) {
					div.A(arg)
				})
		return div
	}
	testPills = function () {
		$(function () {
			$.boot().A(
					$.well($.h1('welcome to pills')),
					n = $.navPills().A(
							$.pill('home'),
							$.pill('profile'),
							$.pill('messages', function () {
								$('body').C('r')
							})
					),
					$.div().K("pill-content").A(
							$.pillPane('home').A('hoooome'),
							$.pillPane('profile').A('prooofile'),
							$.pillPane('messages').A('messsaaaages')
					)
			)
			//   $('a').each(function(){ $(this).attr('data-toggle', 'pill') })
		})
	}
	PILLS = function () {
		z()
		pills = $.ul().K("nav nav-pills").A(
				$.li().K('active').A($.a('home').toggle('tab')),
				$.li().A($.a('profile').K('profile')),
				$.li().A($.a('messages')))
		div = $.div('b').WH('auto').pad(40).drag()
		content = $.div('y', 300).pad(40).mar(40)
		div.A(pills, content)
		$('a').click(function (e) {
			e.preventDefault()
			$(this).tab('show')
		})
		// $('a:first').tab('show')
		$('a.profile').on('shown.bs.tab', function (e) {
			content.empty()
			content.A(
					$.div().text('asfdasfdfasd')
			)
		})
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			// alert('yay')
			ee = e.target
			e.target // activated tab
			e.relatedTarget // previous tab
		})
	}
}
$.$modalHeader = function (title) {
	return $.modalHeader().A(
			$.button('x').K("close").dismiss("modal"),
			$.h4(title).K("modal-title").id("myModalLabel")
	)
}
MOODAL = function () {
	z()
	var header = $.$modalHeader('title')
	var body = $.modalBody().A($.h3('modal body'))
	var footer = $.modalFooter().A(
			$.button('close').K("btn").dismiss('modal'),
			$.button('save').K("btn").C('r'))
	m = $.div().K("modal fade").id("basicModal").A(
			$.modalDialog().A(
					$.modalContent().A(header, body, footer))
	).A()
}
