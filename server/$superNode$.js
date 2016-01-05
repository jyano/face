fileSystem()
reqPath()
function fileSystem(){
	$f = fs = require('fs')
	$f.rd = function () {
		var $f = this, g = G(arguments)
		//(pt, fn)//$f.rdS=$f.readdirSync(pt)
		if (F(_.l(g))) {
			$f.readdir.apply($f, g);
			return $f
		}
		return $f.readdirSync.apply($f, g)
	}
	$f.rdE = function (pt, fn) {
		$f.rd(pt, function (z, fs) {
			_.e(fs, fn)
		})
	}
	$f.rmd = function () {
		var $f = this, g = G(arguments) //(pt)
		if (F(_.l(g))) {
			$f.rmdir.apply($f, g);
			return $f
		}
		return $f.rmdirSync.apply($f, g)
	}
	$f.mkd = function () {
		var $f = this, g = G(arguments) // (pt [mode])
		if (F(_.l(g))) {
			$f.mkdir.apply($f, g);
			return $f
		}
		return $f.mkdirSync.apply($f, g)
	}
	$f.r = function () {
		var $f = this, g = G(arguments)//(fd,bf,offset,len,pos)
		if (F(_.l(g))) {
			$f.read.apply($f, g);
			return $f
		}
		return $f.readSync.apply($f, g)
	}
	$f.rF = function (f, op, fn) {
		var $f = this, g = G(arguments)
		if (F(_.l(g))) {
			$f.readFile.apply($f, g);
			return $f
		}
		return $f.readFileSync.apply($f, g)
	}
	$f.u8 = $f.rUF = function (js, fn) {
		this.rF(js, 'utf8', fn)
	}
	$f.rBF = $f.bn = function (a, fn) {
		this.rF(a, 'binary', fn)
	}
	$f.o = function () {
		var $f = this, g = G(arguments) //(pt, flags[, mode], fn)
		if (F(_.l(g))) {
			$f.open.apply($f, g);
			return $f
		}
		return $f.openSync.apply($f, g)
	}
	$f.cl = function () {
		var $f = this, g = G(arguments) //(fd, fn)//$f.clS=$f.closeSync(fd)
		if (F(_.l(g))) {
			$f.close.apply($f, g);
			return $f
		}
		return $f.closeSync.apply($f, g)
	}
	$f.ut = $f.utimes//(pt, atime, mtime, fn)//$f.utS=$f.utimesSync(pt, atime, mtime)
	$f.fut = $f.futimes//(fd, atime, mtime, fn)//$f.futS=$f.futimesSync(fd, atime, mtime)
	$f.fs = $f.fsync//(fd, fn)//$f.fsS=$f.fsyncSync(fd)
}

function reqPath(){
$p = pt = path = require("path")
$p.j = $p.join
$p.x = $p.ex = $p.exists
$p.d = $p.dirname
$p.b = $p.basename
$p.e = $p.extname
$p.d = $p.dl = $p.delimiter
$p.rs = $p.r = $p.resolve
$p.rl = $p.rel = $p.R = $p.relative
//$p.s = $p.
}

$h = ht = http = require("http")
$h.io = function (fn) {
	return $io(this, fn)
}
$h.ls = $h.listen
$h.s = $h.Srv = function ($a, port, fn) {
	var $h = this
	if (U($a)) {
		return $h.createServer()
	}
	var srv = ht.createServer($a)
	if (port) {
		fn = fn || function () {
			$l('listening port ' + port)
		}
		srv.listen(port, fn)
	}
	return srv
}
$h.init = function () {
	var $h = this
	http.createServer(app).listen(app.get('port'), function () {
		console.log("Express server listening on port " + app.get('port'));
	})
	$s = $h.Server($a)
	return $h
}

 
$js = function () {
	//if(A(arguments[0])){return $js.apply(null, g.f)}
	var str = ''
	_.e(arguments, function (js) {
		if (A(js)) {
			_.e(js, function (arg) {
				str += $js(arg)
			})
		}
		else {
			str += $.scrTag(js)
		}
	})
	return str
}
_string = function (fn) {
	var str = '';
	fn(str);
	return str
}
// jsScript :
	$ = function () {
	}
	$.jsG = $.gJs = $.scr = $.scrTag = function (src) {
		return '<script src="/' + src + '.js"></script>'
	}
	$.js = function (js) {
		return '<script>' + js + '</script>'
	}
	$$ = $.$ = $.$js = function (js) {
		return $.js('$(function(){' + js + '})')
	}
$.scrp = function (i, t) {
	
	//return $("<script type='text/html'>").id(i)
	var scr = $("<script type='text/html'>")
	scr.id(i)
	if (t) {
		scr.A(t)
	}
	scr.A()
	return scr
}