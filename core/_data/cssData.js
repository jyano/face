red = {C: 'r'}
black = {c: 'z'}
displayNone = {display: 'none'}
body = {C: 'z', c: 'w'}
divWrapper = {
	display: 'flex',
	'flex-direction': 'column',
	'align-items': 'center'
}
divTools = {
	display: 'flex',
	'flex-direction': 'column',
	'align-items': 'center'
}
username = {'font-size': 20, 'text-decoration': 'underline'}
rightBox = {
	float: 'left', width: '250px',
	'margin-left': '20px', border: '3px solid blue'
}
leftBox = {
	float: 'left', padding: '20px', border: '3px solid red'
}
aFilter = {
	C: 'b',
	c: 'y',
	P: '5px 10px',
	M: '5px',
	'border-radius': '3px',
	'text-decoration': 'none'
}
aFilterHelper = {
	C: 'y',
	c: 'b',
	P: '5px 10px',
	M: '5px',
	'border-radius': '3px',
	'text-decoration': 'none'
}
bucCSS = {$leftbox: leftBox, $rightbox: rightBox}
twtCss = {_un: username, _sts: {}}
CssOb = {
	body: body,
	'.details': displayNone,
	'.active': red,
	'a.filter': aFilter,
	'a.filter:hover': aFilterHelper,
	'div#wrapper': divWrapper,
	'div.tools': divTools,
	'input#searchBox': black
} 
JQLScss = {
	// {
	// width:250; // float:left;
	// mar:0;
	// background-color:gray;
	// min-height:240;
	// border-radius:10;
	// padding-bottom:15;
	// }
	'.task-list': {
		w: '250px', float: 'left',
		mar: '0px', C: 'gray', 'min-height': '240px',
		'border-radius': '10px', 'padding-bottom': '15px'
	},
	h3: {'text-align': 'center'},
	'.task-list input, .task-list textarea': {w: '240px', mar: '1px 5px'},
	'.task-list input': {h: '30px'},
	'.task-list input[type="button"]': {w: '100px', mar: '5px'},
	'.td-task': {'border-radius': '5px', C: 'g', w: '230px', mar: '5px', pad: '5px'},
	'.td-task > .task-header': {'font-weight': 'bold'},
	'.td-task >.task-date': {'font-size': 'small', 'font-style': 'italic'},
	'.td-task > .task-desc': {'font-size': 'smaller'},
	'#delete-div': {
		C: 'b', bor: '3px dotted #000', mar: '10px', h: '75px',
		'line-height': '75px', 'text-align': 'center'
	}
}