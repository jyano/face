$a.po('/pic', uplod, $w.user, function (q, p, n) {
	$l('post new pic')
	bd = q.body
	$l('q.file: ')
	$l(q.file)
	//when a user uploads a pic..
	// by default, it first goes to /public/uploads..
	// but then i automatically copy it to /pic/uploads..
	// example:
//    origPath: public/uploads/58bfc.JPG
//    newPath: public/pics/55e32.JPG
	//notice file names are different
	//the first name is random at time of orig file save
	//new name is based on mongoId (also came from random when pic saved to db)
	//i save by mongo id so it can be easily fetched!
	$f.rF = $f.readFile
	$f.wF = $f.writeFile
	$p = path
	$p.rs = $p.resolve
	var i = q.file//q.files.png || q.files.i
	$md.pic.create(Pic(q.userId, i), function (z, pic) {  //if (z) {$l('ERR:' + z)}
		copyFileTo(i.path, newPath(i, pic), function () {
			pic.save(function (z) {
				if (z) {
					$l('z');
					n(z)
				} else {
					$l('pic saved');
					p.redirect('/wap/uploads')
				}
			})
		}) //<- $f.rF(i.path,  function(z, fileData){$f.wF(newPath(i, pic), fileData,  savedToFile)})
	})
	function copyFileTo(origPath, newPath, fn) {
		$f.rF(origPath, function (z, fileData) {
			$f.wF(newPath, fileData, fn)
		})
	}
	
	function newPath(i, pic) {
		var newPath = $p.rs(i.path, '../../pics/', _id(pic) + pic.ext)  //$l('origPath: ' + i.path); $l('newPath: ' + newPath)   //for some reason extensions are saved with a starting '.'
		function _id(pic) {
			return pic._id.toString()
		}
		
		return newPath
	}
	
	function Pic(id, i) {
		return {
			user: id, ext: $p.extname(i.path) || '.png',
			//name: i.name,
			size: i.size//, modified: i.lastModifiedDate
		}
	}
})
$a.po('/pic', uplod, $w.user, function (q, p, n) {
	$l('post new pic')
	bd = q.body
	$l('q.file: ')
	$l(q.file)
	//when a user uploads a pic..
	// by default, it first goes to /public/uploads..
	// but then i automatically copy it to /pic/uploads..
	// example:
//    origPath: public/uploads/58bfc.JPG
//    newPath: public/pics/55e32.JPG
	//notice file names are different
	//the first name is random at time of orig file save
	//new name is based on mongoId (also came from random when pic saved to db)
	//i save by mongo id so it can be easily fetched!
	$f.rF = $f.readFile
	$f.wF = $f.writeFile
	$p = path
	$p.rs = $p.resolve
	var i = q.file//q.files.png || q.files.i
	Fl.create(Pic(q.userId, i), function (z, pic) {  //if (z) {$l('ERR:' + z)}
		copyFileTo(i.path, newPath(i, pic), function () {
			pic.save(function (z) {
				if (z) {
					$l('z');
					n(z)
				} else {
					$l('pic saved');
					p.redirect('/wap/uploads')
				}
			})
		}) //<- $f.rF(i.path,  function(z, fileData){$f.wF(newPath(i, pic), fileData,  savedToFile)})
	})
	function copyFileTo(origPath, newPath, fn) {
		$f.rF(origPath, function (z, fileData) {
			$f.wF(newPath, fileData, fn)
		})
	}
	
	function newPath(i, pic) {
		var newPath = $p.rs(i.path, '../../pics/', _id(pic) + pic.ext)  //$l('origPath: ' + i.path); $l('newPath: ' + newPath)   //for some reason extensions are saved with a starting '.'
		function _id(pic) {
			return pic._id.toString()
		}
		
		return newPath
	}
	
	function Pic(id, i) {
		return {
			user: id, ext: $p.extname(i.path) || '.png',
			//name: i.name,
			size: i.size//, modified: i.lastModifiedDate
		}
	}
})
