BOOK = function () {
	$.fm()
	toBook = function () {
		Y.run('book')
	}
	s1.A(
			$.h1('BOOK').$(toBook),
			bookName = $.ip(),
			$.bt('new book', function () {
				$.P('newBook', {name: bookName.V()},
						toBook)
			}),
			$.hr())
	$.Gj('books', function (bks) {
		s1.A($.h3('books:'))
		_.e(bks, function (bk) {
			s1.A($.sp().C('x').$(function () {
						$.P('delBook', {book: bk._id}, toBook)
					}),
					$.bt(bk.name, function () {
						s2.A($.h2('CHAPTER: ' + bk.name),
								chapterTitleInput = $.ip(),
								$.bt('new chapter',
										function () {
											$.P('newChapter', {
												chapterTitle: chapterTitleInput.V(),
												book: bk._id
											}, function () {
												chapterView(bk, c)
											})
										}), $.hr())
						$.eGj('chapters', {book: bk._id}, function (ch) {
							s2.A($.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
						})
					}), $.br(2))
		})
	})
	chapterView = function (b, c) {
		s2.E();
		s1.E();
		s1.A($.h1('BOOK').$(toBook))
		$.Gj('chapters', {book: bk._id}, function (chapters) {
			s1.A($.h3('chapters:'))
			s2.A($.h3('pages:'))
			_.e(chapters, function (ch) {
				s1.A($.sp('x').$(function () {
							$.P('delChapter', {chapter: ch._id}, function () {
								chapterView(bk, ch)
							})
						}),
						$.bt(ch.title, function () {
							chapterView(bk, ch)
						}), $.br(2))
			})
		})
		s2.A($.h1('chapter: ' + ch.title))
		s2.A(pageNameInput = $.ip(),
				$.bt('new page', function () {
					$.P('newPage', {
						pageName: pageNameInput.V(), chapter: ch._id
					})
				}), $.hr())
		$.eGj('/pages', {chapter: ch._id}, function (pg) {
			s2.A($.bt(pg.name, function () {
				pageView(bk, ch, pg)
			}), $.br(2))
		})
	}
	pageView = function (bk, ch, pg) {
		s1.E();
		s2.E()
		s1.A($.h1('BOOK').$(ldr('book')))
		s1.A($.h1('CHAPTER ' + ch.title).$(function () {
			chapterView(book, ch)
		}))
		$.Gj('/pages', {chapter: ch._id},
				function (pgs) {
					s1.A($.h3('pages'))
					_.e(pgs, function (pg) {
						s1.A($.bt(pg.name, function () {
									sectionView(ch)
								}), $.br(2)
						)
					})
				})
		s2.A($.h1('page: ' + pg.name))
		$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
				function (sc) {
					s2.A($.bt(sc.section, function () {
								sectionView(bk, ch, pg)
							}), $.br(2)
					)
				})
	}
}
BOOK = function () {
	$.fm()
	toBook = function () {
		Y.run('book')
	}
	s1.A(
			$.h1('BOOK').$(toBook),
			bookName = $.ip(),
			$.bt('new book', function () {
				$.P('newBook', {name: bookName.V()},
						toBook)
			}),
			$.hr())
	$.Gj('books', function (bks) {
		s1.A($.h3('books:'))
		_.e(bks, function (bk) {
			s1.A($.sp().C('x').$(function () {
						$.P('delBook', {book: bk._id}, toBook)
					}),
					$.bt(bk.name, function () {
						s2.A($.h2('CHAPTER: ' + bk.name),
								chapterTitleInput = $.ip(),
								$.bt('new chapter',
										function () {
											$.P('newChapter', {
												chapterTitle: chapterTitleInput.V(),
												book: bk._id
											}, function () {
												chapterView(bk, c)
											})
										}), $.hr())
						$.eGj('chapters', {book: bk._id}, function (ch) {
							s2.A($.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
						})
					}), $.br(2))
		})
	})
	chapterView = function (b, c) {
		s2.E();
		s1.E();
		s1.A($.h1('BOOK').$(toBook))
		$.Gj('chapters', {book: bk._id}, function (chapters) {
			s1.A($.h3('chapters:'))
			s2.A($.h3('pages:'))
			_.e(chapters, function (ch) {
				s1.A($.sp('x').$(function () {
							$.P('delChapter', {chapter: ch._id}, function () {
								chapterView(bk, ch)
							})
						}),
						$.bt(ch.title, function () {
							chapterView(bk, ch)
						}), $.br(2))
			})
		})
		s2.A($.h1('chapter: ' + ch.title))
		s2.A(pageNameInput = $.ip(),
				$.bt('new page', function () {
					$.P('newPage', {
						pageName: pageNameInput.V(), chapter: ch._id
					})
				}), $.hr())
		$.eGj('/pages', {chapter: ch._id}, function (pg) {
			s2.A($.bt(pg.name, function () {
				pageView(bk, ch, pg)
			}), $.br(2))
		})
	}
}
pageView = function (bk, ch, pg) {
	s1.E();
	s2.E()
	s1.A($.h1('BOOK').$(ldr('book')))
	s1.A($.h1('CHAPTER ' + ch.title).$(function () {
		chapterView(book, ch)
	}))
	$.Gj('/pages', {chapter: ch._id},
			function (pgs) {
				s1.A($.h3('pages'))
				_.e(pgs, function (pg) {
					s1.A($.bt(pg.name, function () {
								sectionView(ch)
							}), $.br(2)
					)
				})
			})
	s2.A($.h1('page: ' + pg.name))
	$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
			function (sc) {
				s2.A($.bt(sc.section, function () {
							sectionView(bk, ch, pg)
						}), $.br(2)
				)
			})
}
BOOK = function () {
	$.fm()
	toBook = function () {
		Y.run('book')
	}
	s1.A(
			$.h1('BOOK').$(toBook),
			bookName = $.ip(),
			$.bt('new book', function () {
				$.P('newBook', {name: bookName.V()},
						toBook)
			}),
			$.hr())
	$.Gj('books', function (bks) {
		s1.A($.h3('books:'))
		_.e(bks, function (bk) {
			s1.A($.sp().C('x').$(function () {
						$.P('delBook', {book: bk._id}, toBook)
					}),
					$.bt(bk.name, function () {
						s2.A($.h2('CHAPTER: ' + bk.name),
								chapterTitleInput = $.ip(),
								$.bt('new chapter',
										function () {
											$.P('newChapter', {
												chapterTitle: chapterTitleInput.V(),
												book: bk._id
											}, function () {
												chapterView(bk, c)
											})
										}), $.hr())
						$.eGj('chapters', {book: bk._id}, function (ch) {
							s2.A($.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
						})
					}), $.br(2))
		})
	})
	chapterView = function (b, c) {
		s2.E();
		s1.E();
		s1.A($.h1('BOOK').$(toBook))
		$.Gj('chapters', {book: bk._id}, function (chapters) {
			s1.A($.h3('chapters:'))
			s2.A($.h3('pages:'))
			_.e(chapters, function (ch) {
				s1.A($.sp('x').$(function () {
							$.P('delChapter', {chapter: ch._id}, function () {
								chapterView(bk, ch)
							})
						}),
						$.bt(ch.title, function () {
							chapterView(bk, ch)
						}), $.br(2))
			})
		})
		s2.A($.h1('chapter: ' + ch.title))
		s2.A(pageNameInput = $.ip(),
				$.bt('new page', function () {
					$.P('newPage', {
						pageName: pageNameInput.V(), chapter: ch._id
					})
				}), $.hr())
		$.eGj('/pages', {chapter: ch._id}, function (pg) {
			s2.A($.bt(pg.name, function () {
				pageView(bk, ch, pg)
			}), $.br(2))
		})
	}
}
BOOK = function () {
	$.fm()
	toBook = function () {
		Y.run('book')
	}
	s1.A(
			$.h1('BOOK').$(toBook),
			bookName = $.ip(),
			$.bt('new book', function () {
				$.P('newBook', {name: bookName.V()},
						toBook)
			}),
			$.hr())
	$.Gj('books', function (bks) {
		s1.A($.h3('books:'))
		_.e(bks, function (bk) {
			s1.A($.sp().C('x').$(function () {
						$.P('delBook', {book: bk._id}, toBook)
					}),
					$.bt(bk.name, function () {
						s2.A($.h2('CHAPTER: ' + bk.name),
								chapterTitleInput = $.ip(),
								$.bt('new chapter',
										function () {
											$.P('newChapter', {
												chapterTitle: chapterTitleInput.V(),
												book: bk._id
											}, function () {
												chapterView(bk, c)
											})
										}), $.hr())
						$.eGj('chapters', {book: bk._id}, function (ch) {
							s2.A($.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
						})
					}), $.br(2))
		})
	})
	chapterView = function (b, c) {
		s2.E();
		s1.E();
		s1.A($.h1('BOOK').$(toBook))
		$.Gj('chapters', {book: bk._id}, function (chapters) {
			s1.A($.h3('chapters:'))
			s2.A($.h3('pages:'))
			_.e(chapters, function (ch) {
				s1.A($.sp('x').$(function () {
							$.P('delChapter', {chapter: ch._id}, function () {
								chapterView(bk, ch)
							})
						}),
						$.bt(ch.title, function () {
							chapterView(bk, ch)
						}), $.br(2))
			})
		})
		s2.A($.h1('chapter: ' + ch.title))
		s2.A(pageNameInput = $.ip(),
				$.bt('new page', function () {
					$.P('newPage', {
						pageName: pageNameInput.V(), chapter: ch._id
					})
				}), $.hr())
		$.eGj('/pages', {chapter: ch._id}, function (pg) {
			s2.A($.bt(pg.name, function () {
				pageView(bk, ch, pg)
			}), $.br(2))
		})
	}
}
pageView = function (bk, ch, pg) {
	s1.E();
	s2.E()
	s1.A($.h1('BOOK').$(ldr('book')))
	s1.A($.h1('CHAPTER ' + ch.title).$(function () {
		chapterView(book, ch)
	}))
	$.Gj('/pages', {chapter: ch._id},
			function (pgs) {
				s1.A($.h3('pages'))
				_.e(pgs, function (pg) {
					s1.A($.bt(pg.name, function () {
								sectionView(ch)
							}), $.br(2)
					)
				})
			})
	s2.A($.h1('page: ' + pg.name))
	$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
			function (sc) {
				s2.A($.bt(sc.section, function () {
							sectionView(bk, ch, pg)
						}), $.br(2)
				)
			})
}
pageView = function (bk, ch, pg) {
	s1.E();
	s2.E()
	s1.A($.h1('BOOK').$(ldr('book')))
	s1.A($.h1('CHAPTER ' + ch.title).$(function () {
		chapterView(book, ch)
	}))
	$.Gj('/pages', {chapter: ch._id},
			function (pgs) {
				s1.A($.h3('pages'))
				_.e(pgs, function (pg) {
					s1.A($.bt(pg.name, function () {
								sectionView(ch)
							}), $.br(2)
					)
				})
			})
	s2.A($.h1('page: ' + pg.name))
	$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
			function (sc) {
				s2.A($.bt(sc.section, function () {
							sectionView(bk, ch, pg)
						}), $.br(2)
				)
			})
}
BOOK=function(){

    toBook = function(){Y.run('book')}

    $.format()


    s1.A(

        $.h1('BOOK').click(toBook) ,

        bookName = $.input(),

        $.button('new book',function(){
            $.qP('/newBook',
                {name: bookName.V()},
                toBook)}),

        $.hr()

    )


    $.qJ('/books',function(books){

        s1.A($.h3('books:'))

        _.each(books,


        function(book){
            s1.A( $.span().C('x').click(function(){
                    $.qP('/delBook',{book: book._id},toBook)
                }),

                $.button(book.name,function(){


            s2.A($.h2('CHAPTER: '+book.name),
                chapterTitleInput=$.input(),
                $.button('new chapter',
                    function(){$.qP('/newChapter',{

                        chapterTitle: chapterTitleInput.V(),

                        book:book._id
                    },function(){
                        chapterView(book, c)})}), $.hr())


                    $.qJ('/chapters',{book:book._id},



                    function(chapters){


                        _.each(chapters,function(chapter){
                        s2.A($.button(chapter.title,
                            function(){
                                chapterView(book,chapter)}), $.br(2))})})

        }), $.br(2))})})


    chapterView=function(b,c){ s2.E();s1.E();

        s1.A($.h1('BOOK').click( toBook) )

        $.qJ('/chapters',{book:book._id},

            function(chapters){
                s1.A($.h3('chapters:'))

                s2.A($.h3('pages:'))

                _.each(chapters,function(chapter){



                    s1.A($.span()('x').click(function(){

                            $.qP('/delChapter',{chapter: chapter._id},
                            function(){chapterView(book, chapter)})
                    }),
                        $.button(chapter.title, function(){chapterView(book,chapter)}), $.br(2))})})


        s2.A($.h1('chapter: '+chapter.title))

        s2.A( pageNameInput=$.input(),
            $.button('new page',
                function(){

                    $.qP('/newPage',{

                        pageName :pageNameInput.V(), chapter:chapter._id


                    })}), $.hr())



        $.qJ('/pages', {chapter: chapter._id},

            function(pages){p=pages

                _.each(pages,function(page){

                    s2.A($.button(page.name,

                    function(){
                        pageView(book,chapter,page)}), $.br(2)  )})})
}}
pageView = function(book, chapter, page){s1.E();s2.E()

    s1.A($.h1('BOOK').click(ldr('book')) )

    s1.A($.h1('CHAPTER '+ chapter.title).click(
        function(){chapterView(book,chapter )}

    ))

    $.qJ('/pages',{chapter: chapter._id},

        function(pages){
            s1.A($.h3('pages'))

            _.each(pages,function(page){

                s1.A(
                    $.button(page.name,function(){
                sectionView(chapter)}), $.br(2)
            )})})



    s2.A($.h1('page: '+page.name))


    $.qJ('/sections', {
            book: book._id,
            chapter: chapter._id,
            page: page._id},

        function(sections){
            _.each(sections,
                function(section){

                    s2.A(
                        $.button(section.section, function(){sectionView(book,chapter,page)}),
                        $.br(2)
                    )})})
}
createjs.element = function(a){return new createjs.DOMElement(a)}
BOOK = function () {
	toBook = function () {
		Y.run('book')
	}
	$.format()
	s1.A(
			$.h1('BOOK').click(toBook),
			bookName = $.input(),
			$.button('new book', function () {
				$.qP('/newBook',
						{name: bookName.V()},
						toBook)
			}),
			$.hr()
	)
	$.qJ('/books', function (books) {
		s1.A($.h3('books:'))
		_.each(books,
				function (book) {
					s1.A($.span().C('x').click(function () {
								$.qP('/delBook', {book: book._id}, toBook)
							}),
							$.button(book.name, function () {
								s2.A($.h2('CHAPTER: ' + book.name),
										chapterTitleInput = $.input(),
										$.button('new chapter',
												function () {
													$.qP('/newChapter', {
														chapterTitle: chapterTitleInput.V(),
														book: book._id
													}, function () {
														chapterView(book, c)
													})
												}), $.hr())
								$.qJ('/chapters', {book: book._id},
										function (chapters) {
											_.each(chapters, function (chapter) {
												s2.A($.button(chapter.title,
														function () {
															chapterView(book, chapter)
														}), $.br(2))
											})
										})
							}), $.br(2))
				})
	})
	chapterView = function (b, c) {
		s2.E();
		s1.E();
		s1.A($.h1('BOOK').click(toBook))
		$.qJ('/chapters', {book: book._id},
				function (chapters) {
					s1.A($.h3('chapters:'))
					s2.A($.h3('pages:'))
					_.each(chapters, function (chapter) {
						s1.A($.span()('x').click(function () {
									$.qP('/delChapter', {chapter: chapter._id},
											function () {
												chapterView(book, chapter)
											})
								}),
								$.button(chapter.title, function () {
									chapterView(book, chapter)
								}), $.br(2))
					})
				})
		s2.A($.h1('chapter: ' + chapter.title))
		s2.A(pageNameInput = $.input(),
				$.button('new page',
						function () {
							$.qP('/newPage', {
								pageName: pageNameInput.V(), chapter: chapter._id
							})
						}), $.hr())
		$.qJ('/pages', {chapter: chapter._id},
				function (pages) {
					p = pages
					_.each(pages, function (page) {
						s2.A($.button(page.name,
								function () {
									pageView(book, chapter, page)
								}), $.br(2))
					})
				})
	}
}
pageView = function (book, chapter, page) {
	s1.E();
	s2.E()
	s1.A($.h1('BOOK').click(ldr('book')))
	s1.A($.h1('CHAPTER ' + chapter.title).click(
			function () {
				chapterView(book, chapter)
			}
	))
	$.qJ('/pages', {chapter: chapter._id},
			function (pages) {
				s1.A($.h3('pages'))
				_.each(pages, function (page) {
					s1.A(
							$.button(page.name, function () {
								sectionView(chapter)
							}), $.br(2)
					)
				})
			})
	s2.A($.h1('page: ' + page.name))
	$.qJ('/sections', {
				book: book._id,
				chapter: chapter._id,
				page: page._id
			},
			function (sections) {
				_.each(sections,
						function (section) {
							s2.A(
									$.button(section.section, function () {
										sectionView(book, chapter, page)
									}),
									$.br(2)
							)
						})
			})
}
createjs.element = function (a) {
	return new createjs.DOMElement(a)
}
BOOK = function () {
	toBook = function () {
		Y.run('book')
	}
	$.format()
	s1.A(
			$.h1('BOOK').click(toBook),
			bookName = $.input(),
			$.button('new book', function () {
				$.qP('/newBook',
						{name: bookName.V()},
						toBook)
			}),
			$.hr()
	)
	$.qJ('/books', function (books) {
		s1.A($.h3('books:'))
		_.each(books,
				function (book) {
					s1.A($.span().C('x').click(function () {
								$.qP('/delBook', {book: book._id}, toBook)
							}),
							$.button(book.name, function () {
								s2.A($.h2('CHAPTER: ' + book.name),
										chapterTitleInput = $.input(),
										$.button('new chapter',
												function () {
													$.qP('/newChapter', {
														chapterTitle: chapterTitleInput.V(),
														book: book._id
													}, function () {
														chapterView(book, c)
													})
												}), $.hr())
								$.qJ('/chapters', {book: book._id},
										function (chapters) {
											_.each(chapters, function (chapter) {
												s2.A($.button(chapter.title,
														function () {
															chapterView(book, chapter)
														}), $.br(2))
											})
										})
							}), $.br(2))
				})
	})
	chapterView = function (b, c) {
		s2.E();
		s1.E();
		s1.A($.h1('BOOK').click(toBook))
		$.qJ('/chapters', {book: book._id},
				function (chapters) {
					s1.A($.h3('chapters:'))
					s2.A($.h3('pages:'))
					_.each(chapters, function (chapter) {
						s1.A($.span()('x').click(function () {
									$.qP('/delChapter', {chapter: chapter._id},
											function () {
												chapterView(book, chapter)
											})
								}),
								$.button(chapter.title, function () {
									chapterView(book, chapter)
								}), $.br(2))
					})
				})
		s2.A($.h1('chapter: ' + chapter.title))
		s2.A(pageNameInput = $.input(),
				$.button('new page',
						function () {
							$.qP('/newPage', {
								pageName: pageNameInput.V(), chapter: chapter._id
							})
						}), $.hr())
		$.qJ('/pages', {chapter: chapter._id},
				function (pages) {
					p = pages
					_.each(pages, function (page) {
						s2.A($.button(page.name,
								function () {
									pageView(book, chapter, page)
								}), $.br(2))
					})
				})
	}
}
pageView = function (book, chapter, page) {
	s1.E();
	s2.E()
	s1.A($.h1('BOOK').click(ldr('book')))
	s1.A($.h1('CHAPTER ' + chapter.title).click(
			function () {
				chapterView(book, chapter)
			}
	))
	$.qJ('/pages', {chapter: chapter._id},
			function (pages) {
				s1.A($.h3('pages'))
				_.each(pages, function (page) {
					s1.A(
							$.button(page.name, function () {
								sectionView(chapter)
							}), $.br(2)
					)
				})
			})
	s2.A($.h1('page: ' + page.name))
	$.qJ('/sections', {
				book: book._id,
				chapter: chapter._id,
				page: page._id
			},
			function (sections) {
				_.each(sections,
						function (section) {
							s2.A(
									$.button(section.section, function () {
										sectionView(book, chapter, page)
									}),
									$.br(2)
							)
						})
			})
}
createjs.element = function (a) {
	return new createjs.DOMElement(a)
}
ELEMENTS = function () {
	z()
	div = $.div('red', 400, 400).P('a').A().A($.input())
	s = stage = createjs.stage('yellow', 1000).tick().A()
	elem = new createjs.DOMElement(div[0])
	//stage.A(el)
	// tw(el, [{x:300,y:300},2000])
	// tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
}
$.inputBox = function (ob) {
	ob = ob || {}
	var func = ob.func,
			url = ob.url || '/',
			boxTitle = ob.boxTitle,
			inputType = ob.inputType || 'text',
			defaults = ob.defaults || {},
			buttonText = ob.buttonText || 'submit'
	var theDiv = $.div().WH('auto').pad(10)
	if (boxTitle) {
		theDiv.A($.h1(boxTitle))
	}
	if (inputType == 'text') {
		var theTextInput = $.input().K('form-control')
		theDiv.A(theTextInput)
		theDiv.A(
				$.button(buttonText, function () {
					$.post(
							url,
							_.defaults(dataValue(theTextInput), defaults),
							func
					)
				})
		)
	}
	if (inputType == 'textArea') {
		var theTextAreaInput = $('<textarea>').K('form-control')
		theDiv.A(
				theTextAreaInput,
				$.button(buttonText, function () {
					$.post(url, _.defaults(dataValue(theTextAreaInput), defaults), func)
				})
		)
	}
	if (inputType == 'textAndTextArea') {
		var theTextInput = $.input().K('form-control'),
				theTextAreaInput = $('<textarea>').K('form-control')
		theDiv.A(theTextInput, theTextAreaInput)
		theDiv.A(
				$.button(buttonText, function () {
					$.post(url,
							_.defaults(dataValue(theTextInput, theTextAreaInput), defaults),
							func)
				}))
	}
	//z(); theDiv.a()
	return theDiv
}
 
test = function () {
	itemModel = new ItemModel({topic: 'yano', text: 'hi', score: 0})
	z()
	$('body').append(
			new ItemView({model: itemModel}).render().el
	)
}
OBJECT = function () {
	format()
	s1('your objects', br(2),
			t = tx(),
			bt('new object', function () {
				qP('/newObj',
						{t: t.V()})
			}))
	qG('/objs', function (o) {
		_e(o, function (o) {
			s1(
					h2(o.t).o(function () {
						s2.E(h1(o.t), tt = tx(),
								bt('new sub-object', function () {
									qP('/newObj', {t: tt.V()})
								}))
					}))
			_e(o.i, function (i) {
				s1(h3(i))
			})
		})
	})
}
DIRTPAGE = function () {
	z()
	MessageModel = Backbone.Model.extend({})
	MessageCollection = Backbone.Collection.extend({model: 'MessageModel'})
	MessageView = Backbone.View.extend({})
	MessagesView = Backbone.View.extend({})
	$.h1().A($.a('Dirtpage', '/wap/dirtpage/')).A()
	$.div().A().id('content')
	if (!pam) {
		var newMessageBox = $.div().WH('auto').A(
				$.h1('new message'),
				$.input().K('form-control').id('newTopic'),
				$.input().K('form-control').id('newMessage'),
				$.button('ok', function () {
					var newTopic = $('#newTopic').val()
					var newMessage = $('#newMessage').val()
					$.post('/messages',
							{
								topic: newTopic,
								message: newMessage
							}, function () {
							})
				}))
		var searchBox = $.div().WH('auto').A(
				$.h1('search'),
				$.input().K('form-control').id('searchInput'),
				$.button('ok', function () {
					window.location = '/wap/dirtpage/' + $('#searchInput').val()
					var searchInput = $('#searchInput').val()
					$.get('/topics/' + searchInput, function (messages) {
						$('#results').html($.h5('length: ' + messages.length))
						_.each(messages,
								function (message) {
									$('#results').A($.h6(message.message))
								})
					})
				}))
		$div().id('results').A()
		$('#content').A(newMessageBox, searchBox)
		qG('/messages', function (messages) {
			_.each(messages, function (message) {
				$('#results').A(
						$h2().A(
								$.a('topic: ' + message.topic, '/wap/dirtpage/' + message.topic)),
						$.h3('message: ' + message.message)
				)
			})
		})
	}
	else {
		var newMessageBox = $.div().WH('auto').A(
				$.h1('new message'),
				$.input().K('form-control').id('newMessage'),
				$.button('ok', function () {
					var newMessage = $('#newMessage').val()
					$.post('/messages',
							{topic: pam, message: newMessage},
							function () {
								loadResults()
							})
				}))
		$('#content').A(
				$.h1('the ' + pam + ' page'),
				newMessageBox,
				$.div().id('results')
		)
		loadResults = function () {
			$.get('/topics/' + pam, function (messages) {
				$('#results').html($.h5('length: ' + messages.length))
				_.each(messages,
						function (message) {
							$('#results').A($.h6(message.message))
						})
			})
		}
		loadResults()
	}
}




function sorty(){
	SORTY = function () {
		$.fm()
		/*
		 s1.A(
		 $.h1('your sorts'),
		 $.d().WH('auto').A($.h1('new sort'), textInputSpan('post','/srt') ),
		 $.h4('recent: ')
		 )
		 */
		$.eG('/srt', function (t) {
			d1.A($.bt(t.t, function () {
				sorty(t.t)
			}), $.br(2))
		})
		s2.A($.i('me'))
	}
	SORTY = function () {
		format()
		s1(
				$.h1('your sorts'),
				$.div().WH('auto').A(
						$.h1('new sort'),
						textInputSpan('post', '/srt')
				),
				$.h4('recent: '))
		qG('/srt', function (t) {
			d1($.button(t.t, function () {
						sorty(t.t)
					}),
					$.br(2))
		}, '+')
		s2(
				$.img('me'))
	}
	SORTY = function () {
		$.fm()
		/*
		 s1.A(
		 $.h1('your sorts'),
		 $.d().WH('auto').A($.h1('new sort'), textInputSpan('post','/srt') ),
		 $.h4('recent: ')
		 )
		 */
		$.eG('/srt', function (t) {
			d1.A($.bt(t.t, function () {
				sorty(t.t)
			}), $.br(2))
		})
		s2.A($.i('me'))
	}
}
RANKY = function (tp) {
	z()
	$.format()
	section1.A(
			$.h1('topics!'),
			// ipt('new topic', 'post', '/tpc') ,
			collection = $.inputBox({
				boxTitle: 'new topic',
				url: '/tpc',
				buttonText: 'post',
				func: function () {
				},
				inputType: 'textArea'
			}),
			$.h4('recent: ')
	)
	$.get('/tpc', function (topics) {
		_.each(topics, function (topic) {
			section1.A(
					$.button(topic.t,
							function () {
								ranky(topic)
							}),
					$.br(2))
		})
	})
//ranky takes a topic model from the database
//(which includes all its items already)
//this is messed up
	ranky = function (topic) {//var collection
		section2.empty()
		section2.A(
				$.h1('topic page: ' + topic.t),
				$.button('live chat', function () {
					priv(topic.t)
				}),
				//ipt('new item', 'post','/itm', {t: t.t}, function(){qG('/tpc1', {t: t.t},function(t){ranky(t)})}, '-'),
				$.inputBox({
					boxTitle: 'new item',
					url: '/itm',
					buttonText: 'post',
					defaults: {t: topic.t},
					func: function () {
						$.get('/tpc1', {t: topic.t}, function (t) {
							ranky(t)
						})
					},
					inputType: 'text'
				}),
				collection = $.div())
		itemCollection = new ItemCollection()
		_.each(topic.i, function (i) {
			if (O(i)) {
				var itemModel = new ItemModel({topic: topic.t, text: i.t, score: i.s})
				itemCollection.add(itemModel)
				// var itemView=new ItemView({model: itemModel}).render().el
				// collection(itemView)
				// itemCollection.render()
			}
		})
		itemsView = new ItemsView({collection: itemCollection})
		itemsView.render()
	}
	ItemModel = Backbone.Model.extend({
		initialize: function () {
		}
	})
	ItemCollection = Backbone.Collection.extend({
		model: ItemModel,
		comparator: 'score',
		render: function () {
			collection.E()
			_.each(
					this.models, function (itemModel) {
						var itemView = new ItemView({model: itemModel}).render()
						collection(itemView.el)
					}
			)
		}
	})
	ItemsView = Backbone.View.extend({
		initialize: function () {
			var self = this
			this.collection.on('change', function () {
				
				// alert(3)
				this.sort()
				self.render()
			})
		},
		render: function () {
			collection().E()
			this.collection.each(function (model) {
				var itemView = new ItemView({model: model}).render()
				collection(itemView.el)
			})
		}
	})
	ItemView = Backbone.View.extend({
		initialize: function () {
			this.listenTo(this.model, 'change', function () {
				this.render()
			})
		},
		render: function () {
			var self = this
			var topic = this.model.get('topic')
			var score = this.model.get('score')
			var text = this.model.get('text')
			qq(this.el).E(
					h1(text),
					h4('score: ' + String(score)),
					bt('up', function () {
						qP('/vte', {t: topic, i: text, dr: 'u'}, function () {
							self.model.set('score', self.model.get('score') + 1)
						})
					}),
					bt('down', function () {
						qP('/vte', {t: topic, i: text, dr: 'd'},
								function () {
									self.model.set('score', self.model.get('score') - 1)
								}
								//    function(){ranky(topic)}
						)
					}))
			return this
		}
	})
}