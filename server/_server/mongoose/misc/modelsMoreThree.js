//mongoError: kill mongod processess!!!!  ps ax | grep mongod
function dirt() {
	topicSc = $Sc({
		topic: $S,
		items: {ty: [{}], df: []}
	})
	messageSc = $Sc({
		topicId: Number, //?
		topicName: $S,
		text: $S,
		score: Number
	})
	commentSc = $Sc({})
	linkSc = $Sc({
		title: $S,
		url: $S
	})
}
function misc() {
	ashSc = $Sc({
		name: $S,
		children: [{}]
	})
	sortSc = $Sc({
		name: $S,
		text: $S,
		un: {ty: $S, rq: 1},
		datetime: {ty: $D, df: $D.now},
		items: {ty: [{}], df: []},
		children: {ty: Object, df: {}}
	})
	termSc = $Sc({
		term: $S,
		definition: $S,
		datetime: {ty: $D, df: $D.now}
	})
}
function book() {
	sectionSc = $Sc({
		page: {
			ty: $mg.Sc.Types.ObjectId,
			ref: 'Page'
		}, content: $S, heading: $S
	})
	pageSc = $Sc({
		name: $S,
		content: $S,
		sections: [{
			name: $S,
			text: $S
		}],
		chapterId: {
			ty: $mg.Sc.Types.ObjectId,
			ref: 'Chapter'
		},
	})
	chapterSc = $Sc({
		bookId: {
			ty: $mg.Sc.Types.ObjectId,
			ref: 'Book'
		},
		text: $S,
		name: $S, //title?
		pages: [
			{
				name: $S,
				text: $S
			}]
	})
	bookSc = $Sc({
		userId: {ty: $mg.Sc.Types.ObjectId, ref: 'user', rq: 1},
		title: $S,
		author: {
			ty: $mg.Sc.Types.ObjectId,
			ref: 'user'
		},
		chapters: ['chapter']  // ???
	})
	Book = $mg.model('Book', bookSc)
	Chapter = $mg.model('Chapter', chapterSc)
	Page = $mg.model('Page', pageSc)
	Section = $mg.model('Section', sectionSc)
}
function guy() {
	guySc = $Sc({
		un: {ty: $S, rq: 1},
		mugDataURL: $S,
		x: Number, y: Number
	}) //map:{n:S, guys:O},
}
SCHEMAS_MISC = {
	thing: {name: $S, age: Number},
	guy: {n: {ty: S, rq: 1}, m: S, x: N, y: N}, //map:{n:S, guys:O},
	book: {
		userId: {
			ty: $mg.Sc.Types.ObjectId,
			ref: 'user', rq: 1
		},
		title: $S,
		chapters: ['chapter']  // ???
	},
	sort: {
		un: {ty: $S, rq: 1},
		datetime: {ty: $D, df: $D.now},
		title: $S,
		items: {ty: [{}], df: []}
	},
	Topic: {
		topic: $S,
		items: {ty: [{}], df: []}
	}, Message: {
		topicId: Number, //?
		topicName: $S,
		text: $S,
		score: Number
	}, Comment: {},
	link: {
		title: $S,
		url: $S
	}
}