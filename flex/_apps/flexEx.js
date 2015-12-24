_css = {
	'*':{M:0},
	
	  body:{P: 50}, 
	
	h2:{C:'z', c:'w', ta: 'center'},
	
	_layout: {
	
	C:'y', dp: 'flex',
		
		 height: '100vh',
	   'flex-direction': 'column'
	},
	
	
	'header, footer': {padding: 20, background: '#666', c: 'w'},
	
	  _body: {
		  dp:'flex',
	 'flex-grow': 1, 
		  C: 'p'
	  },
	  
	
	_col1: {C: '_b', 'flex-grow':1},
	 _col2: {C: 'honeydew',
	 w:160, order:'-1'
	 },
	  _col3: {C: 'peachpuff',
		  w: 160}
}


LAY =function(){
	$s(_css)
	
	$.h1('css flexbox practical examples')
	$.dK('example').A(
			$.h2('3 col layout'),
			$.dK('layout').A(
					$.hdr().A('header'),
					
					$.dK('body').A(
							$.dK('col1').A('main content'),
							$.dK('col2').A('navigation'),
							$.dK('col3').A('sidebar')
					),
					
					$.ftr().A('footer')
			)
	)
}
MEDOB = function () {

	$s({
	
		'*': {M:0},
		
		_example:{
			border: '8px dashed black' 
		},
		
		
		h2: {  C:'z',c:'w',h:50, ta:'center', 'line-height': 50},
		
		'example-media': {
			dp:'flex', 'max-width': 300
		},
		
		img:{
			'margin-right': 10
		},
		
		_content: {
		flex: 1
		}
	})
	
	
	$.dK('example').A(
			$.h2('media object'),
			$.dK('example-page example-media').A(
					$.dK('media').A(
					$.i('me').WH(50,50),
					$.dK('content').A(
					'asdf asfd afsd asfd adfs asdf'+
					'asdf asfd afsd asfd adfs asdf'+
					'asdf asfd afsd asfd adfs asdf'
					)),
					$.dK('search-group').A(
							$.ip().ph('search'),
							$.sm()))
	)
}
DRIB = function () {

	$s({
		'*': {M: 0},
		
		_shots:{
		'flex-wrap':'wrap',
		'justify-content': 'space-between'
		},
		
		_positioner:{
			'max-width': 970,
			margin: '0 auto'
		},
		
		'.shots.meta':{
			'justify-content': 'flex-end'
		}
	})
	
	
	$.dK('example').A(
			$.h2('media object'),
			$.dK('example-page example-media').A(
					$.dK('media').A(
							$.i('me').WH(50, 50),
							$.dK('content').A(
									'asdf asfd afsd asfd adfs asdf' +
									'asdf asfd afsd asfd adfs asdf' +
									'asdf asfd afsd asfd adfs asdf'
							)),
					$.dK('search-group').A(
							$.ip().ph('search'),
							$.sm()))
	)
	
	
	// linds with  class shot-wrap
	
	//the shot  (images and meta)
	
	// (meta is views, count, likes? more images?)
	
	// owner (avatar)
	
	
}

