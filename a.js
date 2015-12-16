console.log('.\n\n\n\n\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n\n\n');
require('./core/both')
$l(' - face - \n');
require('./core/$superNode$')
$stc = function () {
	_.e(arguments, function (arg) {
		A(arg) ? _.e(arg, $stc) : Use(arg)
	})
	function Use(arg) {
		use(name(arg))
		use(name(arg + '/_pre'))
		use(name(arg + '/_deps'))
		use(name(arg + '/_protos'))
		use(name(arg + '/_data'))
		use(name(arg + '/_draw'))
		use(name(arg + '/_core'))
		use(name(arg + '/_apps'))
		use(name(arg + '/_games'))
		use(name(arg + '/_routes'))
		use(name(arg + '/_api'))
		use(name(arg + '/_alpha'))
		function name(dir) {
			return __dirname + '/' + dir
		}
		
		function use(dir) {
			$a.use($e.static(dir))
		}
	}
}
require('./core/$xap$')
require('./core/$goo$')
$l(' - routing.. - \n');
require('./$mw$')
$a.g('/', function (q, p) {
	p.send('it worked jason..')
})
require('./$routes$')
$l(' - servering..')
$htSv = httpServer = $h.createServer($a)
$htSv.listen(80, lsFn)
require('./socket/$kets$')
function lsFn() {$l('\nserver listening on port 80 \n')}
$l(' - trying to listen- \n');
  