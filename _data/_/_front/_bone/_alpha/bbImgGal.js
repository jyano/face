//https://www.youtube.com/watch?v=VERQEr-bVTs
 //Backbone.js with Derick Bailey - April 2013
//talks marionette at 1 HOUR EXACTLY
 GAL = IMGGALLERY = function () {
 
	$Ms('Image Gallery')


	$.a('video', 'https://www.youtube.com/watch?v=VERQEr-bVTs')

}
function addEdit() {
}
function imgLs() {
}
function imgGal() {
	ImgGal = {
		init: function (o) {
			//get list of images rendered at top
			this.imgs = o.imgs;
			ImgGal.ImgLs.init()
			//to get the addEdit Img on screen .. so that whenever you // load the  (add fresh?) it goes to the add image view
			ImgGal.ImgLs.show(o.imgs)
			ImgGal.AddEditImg.init()
			//init this img view which handles displaying images when we click on them
			ImgGal.AddEditImg.addNewImg()
			ImgGal.ImgVwr.init()
		}
	}
	
	
	function showImg() {
	
		ImgGal.ImgVwr = {
			init: function () {
				this.$main = $('#main')
			},
			show: function (imgM) {
				this.$main.A(
						new Img_({
							model: imgM
						}).r().$el
				)
			}
		}
		
		
		Img_ = Bb.v(_vw({
			i: function () {
				this.$main = $('#main')
				this.showImgTp = function (img) {
					var i = $.i('img')
					return $.d().A(i)
				}
			},
			r: function () {
				var els = this.$main.A(
						this.showImgTp(this.model))
				this.$el.A(els)
				return this
			}
		}))
	}
	
	
}
 //STARTS 420 ...'i got this little img app..'
 