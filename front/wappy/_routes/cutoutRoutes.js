 

//FIND ALL
$a.G('/cutouts', function (q, p) {
	//find all   images on site // good: $findAllP('cutout', p)
	$findAll('cutout', _js(p)) })
//FIND MY
$a.G('/cutout', function (q, p) {//find 'my'  cutouts//      /img
	Cut.fi({un: q.un}, _js(p))
})
//FIND BY USERNAME
$a.G('/cutout/:un', _fByUn('cutout'))
// CREATE
$a.PO('/cutout', function (q, p) {
//img//new cutout (image)
	Cut.cr($cutout(q), _js(p))
	
})
// DELETE
$a.DEL('/cutout', function (q, p) {

	Cut.rm(q.b, _js(p)) })
// DATA
$a.PO('/dat', function (q, p) {
	
	Cut.fId(
	
			q.b.dat,
			_js(p)
	)
	
	
	//   _se//$a.PO('/getimagebyid', function (q, p) {Cut.fId(q.b.d, _js(p)) })
	//** get a dataUrl from an img-ob id ++++ physics! //can dep by using oid's?? 
	// $l('dud'); $l('q.body.data');
	// $l(q.body.d)// /dats//Cutout.findById(q.body.data, _send(p) )	
	// '54d4506172f7e12a05000012'


})



