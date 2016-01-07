//
topicSchema = new mongoose.Schema({
	topic: String,
	items: {type: [{}], default: []}
})
messageSchema = new mongoose.Schema({
	topicId: Number, //?
	topicName: String,
	text: String,
	score: Number
})
commentSchema = new mongoose.Schema({})
linkSchema = new mongoose.Schema({
	title: String,
	url: String
})
//
ashSchema = new mongoose.Schema({
	name: String,
	children: [{}]
})
sortSchema = new mongoose.Schema({
	name: String,
	text: String,
	username: {type: String, required: true},
	datetime: {type: Date, default: Date.now},
	items: {type: [{}], default: []},
	children: {type: Object, default: {}}
})
termSchema = new mongoose.Schema({
	term: String,
	definition: String,
	datetime: {type: Date, default: Date.now}
})
sectionSchema = new mongoose.Schema({
	page: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Page'
	}, content: String, heading: String
})
pageSchema = new mongoose.Schema({
	name: String,
	content: String,
	sections: [{
		name: String,
		text: String
	}],
	chapterId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Chapter'
	},
})
chapterSchema = new mongoose.Schema({
	bookId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Book'
	},
	text: String,
	name: String, //title?
	pages: [
		{
			name: String,
			text: String
		}]
})
bookSchema = new mongoose.Schema({
	userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
	title: String,
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
	chapters: ['chapter']  // ???
})
guySchema = new mongoose.Schema({
	username: {type: String, required: true},
	mugDataURL: String,
	x: Number, y: Number
}) //map:{n:S, guys:O},
profileSchema = new mongoose.Schema({ //userId
	username: String,
	aboutMe: String,
	iEnjoy: String,
	iSeek: String
})
/////////////////////////////////////////////////////////
Book = mongoose.model('Book', bookSchema)
Chapter = mongoose.model('Chapter', chapterSchema)
Page = mongoose.model('Page', pageSchema)
Section = mongoose.model('Section', sectionSchema)