$mg = mongoose
$Ty = $mg.Schema.Types
$oId = oid = $Ty.ObjectId
$OId = function (ref) {
	var g = G(arguments),
			o = {ty: $oId, ref: ref}
	if (g.p) {
		o.required = 1
	}
	return o
}
$s=$Sc = function (o) {
	return new $mg.Schema(o)
}
$m=$Md = $M = function (name, sc) {
	return $mg.model(name, sc)
}