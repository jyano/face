$.fU = $.fileUpload = function (lb, t) {
	var fG = $.d().K("form-group").A(
			$.lb(
					D(lb) ? lb : 'upload file',
					'upl'
			),//.K('control-label')//.fS(20),
			$.ip().ty('file').id('upl').n('avatar')
	)
	if (t) {
		fG.A(
				$.p(t)//.K('help-block')
		)
	}
	return fG
	function alt(){
		$fileUpload = fup = function (labelText, text) {
			var theFormGroup = fg(
					$label(D(labelText) ? labelText : 'upload file', 'upl').k('ctl').f(20),
					ip('file').id('upl').nm('i'))
			if (text) {
				theFormGroup(
						pg(['help-block'], text))
			}
			return theFormGroup
		}
		$.fileUpload = function (labelText, text) {
			var theFormGroup = $.div().K("form-group").A(
					$.label(D(labelText) ? labelText : 'upload file', 'upl').K('control-label').fontSize(20),
					$.input().type('file').id('upl').name('i')
			)
			if (text) {
				theFormGroup.A($.p(text).K('help-block'))
			}
			return theFormGroup
		}
	
	}
}
//<div class="form-group">
//      <label style="font-size: 20px;" class="control-label" for="upl">
//              upload file
//      </label>
//      <input name="i" id="upl" type="f">
// </div>
UPLOAD = function () {
	$.pop($.f().attr({
				method: 'post', action: '/pic',
				enctype: 'multipart/form-data'
			}).C('o').A(
			$.fU('').attr('name', 'avatar'), 
			$.sm().val('ok').K("show"),$.fileUpload(''), 
			$.input().K("show").type('submit').val('ok')
			),
			{title: 'upload a new pic'}
	).dg()
}
$.fU = $.fileUpload = function (lb, t) {
	var fG = $.d().K("form-group").A(
			$.lb(
					D(lb) ? lb : 'upload file',
					'upl'
			),//.K('control-label')//.fS(20),
			$.ip().ty('file').id('upl').n('avatar')
	)
	if (t) {
		fG.A(
				$.p(t)//.K('help-block')
		)
	}
	return fG
}
UPLOADS = function () {
	$.fm()
	y = 80
	n = 0
	$.eG('myPics', function (p) {
		$l('pic: ' + n++)
		$.picDiv(y).A(
				UpPic(p)
		)
		y += 220
	})
	function UpPic(p) {
		return $.sp().A(
				$.pic(p),
				$.delBt('/pic', p)
		)
	}
	
	/*
	 $.G('myPics',  function(p){_.e(p, function(p){
	
	 $l('pic: ' + n++)
	 $.picDiv(y).A($.pic(p), $.delBt('/pic', p))
	 y+= 220
	 })
	
	 })*/
	UPLOADSalt = function () {
		$.format()
		var top = 80
		s1.A(
				$.h4('You have uploaded these pics. Click to make a sprite, or hit the x to delete..')
		)
		$.g('/myPics', function (pics) {
			_.e(pics, function (pic) {
				var fileName = pic._id + pic.ext
				picDiv = function (top) {
					return $.divA('blue', 100, 100).WH('auto').K('pic')
							.XY(200, top).pad(16).drag()
				}
				$.delete = function (url, data, func) {
				}
				var theButton = $.bt('delete', function (element) {
					$.ajax({
						type: 'DELETE',
						data: pic,
						url: '/pic',
						success: function (result) {
							$(element.target).closest('div').remove()
						}
					})
				})
				var theImg = $.img(fileName).W(120).H(120).click(function () {
					cut(fileName)
				})
				var thePicDiv = picDiv(top).A(theImg, theButton)
				$('body').A(thePicDiv)
				top += 220
			})
		})
	}
}
 

 