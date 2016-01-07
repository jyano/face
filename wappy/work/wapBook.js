 
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
 