KOSPA = SPA = TABLE = function () {
	$.ul().e$('folders').K('folders').A(
			$.liT('$data')
	)
	/*
	 <ul class="folders" data-bind="foreach: folders">
	 <li data-bind="text: $data,css: { selected: $data == $root.chosenFolderId() }, click: $root.goToFolder"></li>
	 </ul>
	 <table class="mails" data-bind="with: chosenFolderData">
	 <thead><tr><th>From</th><th>To</th><th>Subject</th><th>Date</th></tr></thead>
	 <tbody data-bind="foreach: mails">
	 <tr data-bind="click: $root.goToMail">
	 <td data-bind="text: from"></td>
	 <td data-bind="text: to"></td>
	 <td data-bind="text: subject"></td>
	 <td data-bind="text: date"></td>
	 </tr>
	 </tbody>
	 </table>
	 <div class="viewMail" data-bind="with: chosenMailData">
	 <div class="mailInfo">
	 <h1 data-bind="text: subject"></h1>
	 <p><label>From</label>: <span data-bind="text: from"></span></p>
	 <p><label>To</label>: <span data-bind="text: to"></span></p>
	 <p><label>Date</label>: <span data-bind="text: date"></span></p>
	 </div>
	 <p class="message" data-bind="html: messageContent" />
	 </div>
	 */
	function WebmailViewModel() {
		// Data
		var self = this;
		self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
		self.chosenFolderId = $o();
		self.chosenFolderData = $o();
		self.chosenMailData = $o();
		// Behaviours
		self.goToFolder = function (folder) {
			self.chosenFolderId(folder);
			self.chosenMailData(null); // Stop showing a mail
			$.get('/mail', {folder: folder}, self.chosenFolderData);
		};
		self.goToMail = function (mail) {
			self.chosenFolderId(mail.folder);
			self.chosenFolderData(null); // Stop showing a folder
			$.get("/mail", {mailId: mail.id}, self.chosenMailData);
		};
		// Show inbox by default
		self.goToFolder('Inbox');
	};
	ko.applyBindings(new WebmailViewModel());
	ok(new (function WebmailVM() {
		var self = this
		this.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
	}))
}
TWT = function () {
	OK({
		un: $o('@ex'), da: $o(),
		g: function () {
			vm.da({
				dt: new Date,
				MS: _.m(['a', 'b'],
						function (t) {
							return {ms: vm.un() + ':' + t}
						})
			})
		},
		clr: function () {
			vm.da([])
		}
		//<- $.bt('Clear tweets').b$(' $parent.clearResults')
	})
	$.d([
		$.h3('dt:', $.spT('dt')),
		$.ol('MS').e$($.li.t$('ms')),
		$.bt('clr').cl$('$parent.clr')
	]).w$('da')
	$.fo(['un:', $.ip().v$('un'), $.sb('Get')]).sm$('g')
}
OLTWT = function () {
	$.fo(['un:', $.ip.v$('un'), $.sm('Get')]).sm$('get')
	$.d([
		$.h3('dt:', $.sp().t$('dt')),
		$.olE('MS',
				$.li().t$('ms')),
		$.bt$('clr', ' $parent.clr')
	]).w$('da')
	ok({
		un: $o('@ex'),
		da: $o(),
		get: function () {
			vm.da({
				dt: new Date,
				MS: _.m(['a', 'b'], function (t) {
					return {ms: vm.un() + ':' + t}
				})
			})
		},
		clr: function () {
			vm.da([])
		}
		//<- $.bt('Clear tweets').b$(' $parent.clearResults')
	})
}
Twit = function () {
	var vw = this
	vw.twtN = $o('@ex')
	vw.resDa = $o(0)
	vw.clearRes = function () {
		vw.resDa(undefined)
	}
	vw.getTwts = function () {
		var n = vw.twtN();
		vw.resDa({
			topTwts: [{text: n + ':nice'},
				{text: n + ':trump'},
				{text: n + ':sex'}],
			retrDt: new Date()
		})
	}
}
function Ms(ms, vt) {
	var g = G(arguments)
	return {
		ms: ms,
		vt: $o(g.p ? 'like' : vt || '')
	}
}
KTW = TWITSERVER = WITHPARENT = WPA = function () {
	$.f().sm$('getTwts').A(
			'Twt-acc:',
			$.ip.v$('twtN'),
			$.sm('Get twts')
	)
	$.d([
		$.h3(['Rec twts fetched at', $.spT('retrDt')]),
		$.ol().e$('topTwts')
				.A($.liT('text')),
		$.bt('Clear twts')
				.cl$('$parent.clearRes')])
			.w$('resDa')
	ok(new Twit)
}
