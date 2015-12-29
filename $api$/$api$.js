require('./api/$ko$')
require('./api/$twitServer$')
require('./api/$blogRollServer$')
//require('./REST/$wappyPost$')
 //http://robdodson.me/some-more-backbone-dot-js-basics/
 //If you don't want to setup a server but you do want to play around with saving models and collections
 // you can use the Backbone LocalStorage adapter written by Jerome Gravel-Niquet.
 $a.g('/thoughts', function (q, p) {
	 $l('/thoughts')
	 p.json([
		 {un: 'SERVER1', sts: 'thinking'},
		 {un: 'SERVER2', sts: 'playing'},
		 {un: 'SERVER3', sts: 'loving'}
	 ])
 })