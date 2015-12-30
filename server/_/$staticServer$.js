module.exports = function(DIRNAME){
	$l('dirname: ' + DIRNAME)
	var dirN = DIRNAME
	
_.e([
	'art',
	'both',
	'web', 'web/superJQuery',
	'boot',
	'handy', 'web/handy',
	'canvas', 'context',
	'poly',
	'easel', 'displayObjects', 'draw',
	'easelProtos', 'displayObjectProto', 'containerProto', 'stageProto', 'shapeProto',
	'anim',
	'bone',
	'box',
	'world',
	'spriteSheet', 'tween',
	'loader'
	
], function (dir) {
	 
	
	
	$a.use($e.static(dirN + '/' + dir))
	$a.use($e.static(dirN + '/' + dir + '/_deps'))
	$a.use($e.static(dirN + '/' + dir + '/_apps'))
	$a.use($e.static(dirN + '/' + dir + '/_protos'))
	$a.use($e.static(dirN + '/' + dir + '/_data'))
})

}