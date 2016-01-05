rts = {
	help: "help",    // #help
	"search/:query": "search",  // #search/kiwis
	"search/:query/p:page": "search"   // #search/kiwis/p7
}
Workspace = Bb.R.x({
	routes: rts,
	help: function () {
	},
	search: function (query, page) {
	}
})
//  Part of a route can be made optional by surrounding it in parentheses (/:optional).
//Trailing slashes are treated as part of the URL,
// and (correctly) treated as a unique route when accessed.
// docs and docs/ will fire different callbacks.
// If you can't avoid generating both types of URLs, 
// you can define a "docs(/)" matcher to capture both cases.
//When the visitor presses the back button, or enters a URL, and a particular route is matched,
// the name of the action will be fired as an event, so that other objects can listen to the router,
// and be notified. In the following example, 
// visiting #help/uploading will fire a route:help event from the router.
routes = {
	"help/:page": "help",
	"download/*path": "download",
	"folder/:name": "openFolder",
	"folder/:name-:mode": "openFolder"
}
router.on("route:help", function (page) {
});
//constructor / initializenew Router([options]) 
//When creating a new router, you may pass its routes hash directly as an option, if you choose.
// All options will also be passed to your initialize function, if defined.
//routerouter.route(route, name, [callback]) 
//Manually create a route for the router, The route argument may be a routing string or
// regular expression. Each matching capture from the route or regular expression will
// be passed as an argument to the callback. The name argument will be triggered as a
// "route:name" event whenever the route is matched. If the callback argument is 
// omitted router[name] will be used instead. Routes added later may override previously declared routes.
//
initialize = function (options) {
	
	// Matches #page/10, passing "10"
	this.route("page/:number", "page", function (number) {
	});
	// Matches /117-a/b/c/open, passing "117-a/b/c" to this.open
	this.route(/^(.*?)\/open$/, "open");
}
//
//open: function(id) { ... }
//navigaterouter.navigate(fragment, [options]) 
//Whenever you reach a point in your application that you'd like to save as a URL, 
// call navigate in order to update the URL. If you also wish to call the route function,
// set the trigger option to true. To update the URL without creating an entry in the browser's history,
// set the replace option to true.
//
openPage = function (pageNumber) {
	this.document.pages.at(pageNumber).open();
	this.navigate("page/" + pageNumber);
}
//
//# Or ...
//
//app.navigate("help/troubleshooting", {trigger: true});
//
//# Or ...
//
app.navigate("help/troubleshooting", {trigger: true, replace: true});
//executerouter.execute(callback, args, name) 
//This method is called internally within the router, whenever a route matches 
// and its corresponding callback is about to be executed.
// Return false from execute to cancel the current transition.
// Override it to perform custom parsing or wrapping of your routes,
// for example, to parse query strings before handing them to your route callback, like so:
//
Router = Backbone.Router.extend({
	execute: function (callback, args, name) {
		if (!loggedIn) {
			goToLogin();
			return false;
		}
		args.push(parseQueryString(args.pop()))
		if (callback) callback.apply(this, args)
	}
})
//Backbone.history
//
//History serves as a global router (per frame)
// to handle hashchange events or pushState,
// match the appropriate route, 
// and trigger callbacks.
// You shouldn't ever have to create one of these yourself since Backbone.history already contains one.
//
//pushState support exists on a purely opt-in basis in Backbone.
// Older browsers that don't support pushState will continue to use hash-based URL fragments,
// and if a hash URL is visited by a pushState-capable browser, 
// it will be transparently upgraded to the true URL.
// Note that using real URLs requires your web server 
// to be able to correctly render those pages, 
// so back-end changes are required as well.
// For example, if you have a route of /documents/100,
// your web server must be able to serve that page,
// if the browser visits that URL directly.
// 
// For full search-engine crawlability,
// it's best to have the server generate the complete HTML for the page
// ... but if it's a web application, 
// just rendering the same content you would have for the root URL,
// and filling in the rest with Backbone Views and JavaScript works fine.
//startBackbone.history.start([options]) 
//When all of your Routers have been created, and all of the routes are set up properly,
// call Backbone.history.start() to begin monitoring hashchange events, and dispatching routes.
// Subsequent calls to Backbone.history.start() will throw an error,
// and Backbone.History.started is a boolean value indicating whether it has already been called.
//To indicate that you'd like to use HTML5 pushState support in your application,
// use Backbone.history.start({pushState: true}). If you'd like to use pushState,
// but have browsers that don't support it natively use full page refreshes instead,
// you can add {hashChange: false} to the options.
//If your application is not being served from the root url / of your domain,
// be sure to tell History where the root really is, as an option: 
// Backbone.history.start({pushState: true, root: "/public/search/"})
//When called, if a route succeeds with a match for the current URL,
// Backbone.history.start() returns true. If no defined route matches the current URL, it returns false.
//If the server has already rendered the entire page,
// and you don't want the initial route to trigger when starting History, pass silent: true.
//Because hash-based history in Internet Explorer relies on an <iframe>, 
// be sure to call start() only after the DOM is ready.
$(function () {
	new WorkspaceRouter();
	new HelpPaneRouter();
	Backbone.history.start({pushState: true});
});
//
//For example, a route of "search/:query/p:page" 
// will match a fragment of #search/obama/p2, passing "obama" and "2" to the action.
//
//A route of "file/*path" will match #file/nested/folder/file.txt,
// passing "nested/folder/file.txt" to the action.
//
//A route of "docs/:section(/:subsection)" 
// will match #docs/faq and #docs/faq/installing, 
// passing "faq" to the action in the first case, 
// and passing "faq" and "installing" to the action in the second.
//