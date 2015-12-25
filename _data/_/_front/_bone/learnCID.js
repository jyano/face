CID0 = function () {

// to uniquely identify mds  use:
// id --- unique identifier (int|S, e.g.,UUID) -can be used to fetch md from cl
//Internally, Bb.Cl contains [md] enumerated by md.id, if md insts have one.
// When cl.g(id) is called, arr checked for existence of md inst  with corresp  id.
// cid--- (client id), auto-gen-d at md creation -can be used to fetch md from cl,
// helpful when you don’t have true id (   not (or not yet) saving it to db  )
// tdCid = tds.g(td2.cid)
//  idAttribute( df=id)----  identifying attr name of md returned from server (i.e. id in your db).
//  -tells bb which data field from server should be used  to populate id property (think of it as a mapper).
// if your server sets unique attr on your md named “userId” then you would set idAttribute to “userId” in your md definition.
//  The val of md’s idAttribute should be set by server when md is saved. -shouldn’t need to set it manually, unless further control is required.
}
 
 
 