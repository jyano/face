 
$Mk = function () {
	$mk = function () {}
	ipsum()
	mks()
	function mks() {
		$mk.strs = ['wallaby', 'Macropus', 'agilis',
		 'Agouti', 'Dasyprocta', 'leporina']
		$mk.Doc = function (title, content) {
			title = title || $mk.l1()
			content = content || $mk.lI()
			return {
				title: title,
				content: content
			}
		}
		$mk.Docs = function (num) {
			var docs = []
			_.t(N(num, 27), function () {
				docs.push($mk.Doc())
			})
			return docs
		}
		$mk.docs = $mk.Docs(12)
		var Doc = $mk.Doc
		$mk.obs = [
			new Doc('title1', 'content1'),
			new Doc('title2', 'content2'),
			new Doc('title3', 'content3'),
			new Doc('title4', 'content4'),
			new Doc('title5', 'content5'),
		]
		$mk.ob = {
			eyes: 2,
			'secret nickname': null,
			obs: $mk.obs,
			strs: $mk.strs,
			likes: ['shopping', 'puking']
		}
		$mk.ob = {
			ob: $mk.ob,
			eyes: 2,
			'secret nickname': null,
			obs: $mk.obs,
			strs: $mk.strs,
			likes: ['shopping', 'puking']
		}
	}
	function ipsum() {
		$mk.lI = function (n) {
			n = N(n, R(40))
			var str = _.sample($mk.strs)
			_.t(n, function () {
				str += ' ' + _.sample($mk.strs)
			})
			return str
		}
		$mk.l1 = function () {
			return $mk.lI(1) + $sa.S($sa.S('-') + $mk.lI(1))
		}
	}
}

$Sa = function () {
	$sa = function (a, b) {
		if (U(b)) {
			return _.partial($sa, a)
		}
		return _.sample(arguments)
	}
	$sa.S = $sa('')
}

$Sa()
$Mk()
$mk.css = $s({h1: {C: 'o'}, li: {C: 'o'}, ul: {C: 'gray'}, d: {C: 'r'}, $: {B: '4px dashed pink', M: 20}})
$mk.$ = function () {
	$s($mk.css)
	return $
}
	