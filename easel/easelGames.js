function isoGame(){
	ISO = function (levNum) {
		Tile = function () {
			var that = this
			var shape = this
			this.container = new createjs.Container().drag()
			this.tile = cjs.diamond(80, 40, 'blue')
			//this.tile.graphics.s('red').f('blue').s('green').mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
			this.container.A(this.tile)
			this.coin = false
			this.addCoin = function () {
				this.coin = tileCoin()
				this.container.A(this.coin)
			}
			this.addBad = function () {
				this.bad = tileBad()
				this.container.A(this.bad)
			}
			this.playerTo = function () {
				if (shape.wasOn == true) {
					location = location
				}//ISO()
				player.X(that.container.x)
				player.Y(that.container.y - 14)
				player.tile = shape
				player.col = shape.col
				player.row = shape.row
				if (shape.coin) {
					shape.coin.remove()
				}
				if (shape.bad) {
					location = location
				}
				shape.wasOn = true
				//if(isolated()){alert('!')}
			}
			this.container.on('dblclick', function () {
				h = that
				that.tile.graphics.f('red').dc(0, 0, 2)
				$l('dblclicked!')
				that.playerTo()
			})
		}
		isoRow = function (r, howMany, x, y) {
			x = x || 0;
			y = y || 0
			var row = []
			_.times(howMany, function (i) {
				x = x + 40
				y = y - 20
				var t = new Tile()
				t.container.XY(x, y)
				stage.A(t.container)
				createjs.bindSlide(t.container)
				t.col = i
				t.row = r
				row.push(t)
			})
			return row
		}
		isoGrid = function (n1, n2, x, y) {
			x = x || 0;
			y = y || 0
			var grid = []
			_.times(n2, function (i) {
				x = x + 40
				y = y + 20
				var row = isoRow(i, n1, x, y)
				grid.push(row)
			})
			return grid
		}
		tileCoin = function () {
			return cjs.circ(15, 'yellow', 'black')
		}
		tileBad = function () {
			return cjs.circ(15, 'green', 'orange')
		}
		tilePlayer = function (bm) {
			player = bm
			player.right = function () {
				player.tile.container.remove()
				grid[player.row][player.col] = null
				grid[player.row][player.col + 1].playerTo()
			}
			player.left = function () {
				player.tile.container.remove()
				player.tile.exists = false
				//player.tile=null
				grid[player.row][player.col] = null
				grid[player.row][player.col - 1].playerTo()
			}
			player.down = function () {
				player.tile.container.remove()
				grid[player.row + 1][player.col].playerTo()
			}
			player.up = function () {
				player.tile.container.remove()
				grid[player.row - 1][player.col].playerTo()
			}
			player.to = function (x, y) {
				grid[x][y].playerTo()
				return player
			}
			kD('u', function () {
				player.up()
			})
			kD('d', function () {
				player.down()
			})
			kD('l', function () {
				player.left()
			})
			kD('r', function () {
				player.right()
			})
			return player
		}
		killTile = function (a, b) {
			grid[a][b].container.remove()
			grid[a][b].wasOn = true
		}
		lev1 = function () {
			grid[3][5].container.remove()
			grid[4][4].container.remove()
			grid[6][6].container.remove()
			grid[7][1].container.remove()
			grid[0][3].addCoin()
			grid[1][3].addCoin()
			grid[3][4].addCoin()
			grid[5][2].addCoin()
			grid[8][8].addCoin()
		}
		lev2 = function () {
			grid[0][0].addCoin()
			grid[0][9].addCoin()
			grid[0][3].addCoin()
			grid[1][3].addCoin()
			grid[1][6].addCoin()
			grid[2][1].addCoin()
			grid[3][4].addCoin()
			grid[3][8].addCoin()
			grid[4][7].addCoin()
			grid[5][2].addCoin()
			grid[6][5].addCoin()
			grid[6][9].addCoin()
			grid[8][8].addCoin()
			grid[8][2].addCoin()
			grid[8][4].addCoin()
			grid[9][0].addCoin()
			killTile(1, 2)
			killTile(2, 2)
			killTile(2, 6)
			killTile(2, 7)
			killTile(2, 8)
			killTile(4, 0)
			killTile(4, 3)
			killTile(4, 4)
			killTile(4, 6)
			killTile(4, 9)
			killTile(6, 1)
			killTile(6, 2)
			killTile(7, 1)
			killTile(7, 3)
			killTile(7, 4)
			killTile(7, 9)
			killTile(8, 6)
			killTile(8, 7)
			killTile(8, 9)
		}
		lev3 = function () {
			grid[0][0].addBad()
			grid[0][9].addBad()
			grid[0][3].addBad()
			grid[1][6].addBad()
			grid[2][1].addBad()
			grid[3][4].addBad()
			grid[3][8].addBad()
			grid[5][2].addBad()
			grid[6][5].addBad()
			grid[6][9].addBad()
			grid[8][8].addBad()
			grid[8][2].addBad()
		}
		lev4 = function () {
			grid[2][9].addCoin()
			grid[5][0].addCoin()
			grid[2][3].addCoin()
			grid[5][6].addCoin()
			grid[9][3].addCoin()
			grid[3][1].addCoin()
			grid[4][4].addCoin()
			grid[0][8].addCoin()
			grid[6][7].addCoin()
			grid[5][8].addCoin()
			grid[9][6].addCoin()
			grid[2][2].addBad()
			grid[0][0].addBad()
			grid[0][9].addBad()
			grid[5][3].addBad()
			grid[2][6].addBad()
			grid[4][5].addBad()
			grid[9][0].addBad()
			grid[9][7].addBad()
			grid[3][8].addBad()
			grid[6][5].addBad()
			grid[6][9].addBad()
			grid[8][2].addBad()
		}
		isolatedBeta = function () {
			r = player.row;
			c = player.col
			if (
					//grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
			//&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn
			grid[r + 1] && grid[r + 1][c] && grid[r + 1][c].wasOn
			) {
				return true
			}
		}
		z()
		stage = $St(900, 500).tick().A()
		grid = isoGrid(10, 10, 0, 240)
		kD('s', function () {
			location = location
		})
		if (levNum) {
			window['lev' + levNum]()
		}
		else if (window['_pam']) {
			window['lev' + _pam]()
		}
		else {
			lev1()
		}
		stage.bm0('me', function (me) {
			player = tilePlayer(me).sXY(.2).drag().to(5, 5)
		})
	}
	ISO = function (levNum) {
		kD = $.kD
		z()
		Tile = function () {
			var that = this
			var shape = this
			this.container = new createjs.Container().drag()
			this.tile = cjs.diamond(80, 40, 'blue')
			//this.tile.graphics.s('red').f('blue').s('green').mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
			this.container.A(this.tile)
			this.coin = false
			this.addCoin = function () {
				this.coin = tileCoin()
				this.container.A(this.coin)
			}
			this.addBad = function () {
				this.bad = tileBad()
				this.container.A(this.bad)
			}
			this.playerTo = function () {
				if (shape.wasOn == true) {
					location = location
				}//ISO()
				player.X(that.container.x)
				player.Y(that.container.y - 14)
				player.tile = shape
				player.col = shape.col
				player.row = shape.row
				if (shape.coin) {
					shape.coin.remove()
				}
				if (shape.bad) {
					location = location
				}
				shape.wasOn = true
				//if(isolated()){alert('!')}
			}
			this.container.on('dblclick', function () {
				h = that
				that.tile.graphics.f('red').dc(0, 0, 2)
				$l('dblclicked!')
				that.playerTo()
			})
		}
		isoRow = function (r, howMany, x, y) {
			x = x || 0;
			y = y || 0
			var row = []
			_.t(howMany, function (i) {
				x = x + 40
				y = y - 20
				var t = new Tile()
				t.container.XY(x, y)
				stage.A(t.container)
				cjs.bindSlide(t.container)
				t.col = i
				t.row = r
				row.push(t)
			})
			return row
		}
		isoGrid = function (n1, n2, x, y) {
			x = x || 0;
			y = y || 0
			var grid = []
			_.t(n2, function (i) {
				x = x + 40
				y = y + 20
				var row = isoRow(i, n1, x, y)
				grid.push(row)
			})
			return grid
		}
		tileCoin = function () {
			return $Cir(15, 'y', 'z')
		}
		tileBad = function () {
			return $Cir(15, 'g', 'o')
		}
		tilePlayer = function (bm) {
			player = bm
			player.right = function () {
				player.tile.container.remove()
				grid[player.row][player.col] = null
				grid[player.row][player.col + 1].playerTo()
			}
			player.left = function () {
				player.tile.container.remove()
				player.tile.exists = false
				//player.tile=null
				grid[player.row][player.col] = null
				grid[player.row][player.col - 1].playerTo()
			}
			player.down = function () {
				player.tile.container.remove()
				grid[player.row + 1][player.col].playerTo()
			}
			player.up = function () {
				player.tile.container.remove()
				grid[player.row - 1][player.col].playerTo()
			}
			player.to = function (x, y) {
				grid[x][y].playerTo()
				return player
			}
			kD('u', function () {
				player.up()
			})
			kD('d', function () {
				player.down()
			})
			kD('l', function () {
				player.left()
			})
			kD('r', function () {
				player.right()
			})
			return player
		}
		killTile = function (a, b) {
			grid[a][b].container.remove()
			grid[a][b].wasOn = true
		}
		lev1 = function () {
			grid[3][5].container.remove()
			grid[4][4].container.remove()
			grid[6][6].container.remove()
			grid[7][1].container.remove()
			grid[0][3].addCoin()
			grid[1][3].addCoin()
			grid[3][4].addCoin()
			grid[5][2].addCoin()
			grid[8][8].addCoin()
		}
		lev2 = function () {
			grid[0][0].addCoin()
			grid[0][9].addCoin()
			grid[0][3].addCoin()
			grid[1][3].addCoin()
			grid[1][6].addCoin()
			grid[2][1].addCoin()
			grid[3][4].addCoin()
			grid[3][8].addCoin()
			grid[4][7].addCoin()
			grid[5][2].addCoin()
			grid[6][5].addCoin()
			grid[6][9].addCoin()
			grid[8][8].addCoin()
			grid[8][2].addCoin()
			grid[8][4].addCoin()
			grid[9][0].addCoin()
			killTile(1, 2)
			killTile(2, 2)
			killTile(2, 6)
			killTile(2, 7)
			killTile(2, 8)
			killTile(4, 0)
			killTile(4, 3)
			killTile(4, 4)
			killTile(4, 6)
			killTile(4, 9)
			killTile(6, 1)
			killTile(6, 2)
			killTile(7, 1)
			killTile(7, 3)
			killTile(7, 4)
			killTile(7, 9)
			killTile(8, 6)
			killTile(8, 7)
			killTile(8, 9)
		}
		lev3 = function () {
			grid[0][0].addBad()
			grid[0][9].addBad()
			grid[0][3].addBad()
			grid[1][6].addBad()
			grid[2][1].addBad()
			grid[3][4].addBad()
			grid[3][8].addBad()
			grid[5][2].addBad()
			grid[6][5].addBad()
			grid[6][9].addBad()
			grid[8][8].addBad()
			grid[8][2].addBad()
		}
		lev4 = function () {
			grid[2][9].addCoin()
			grid[5][0].addCoin()
			grid[2][3].addCoin()
			grid[5][6].addCoin()
			grid[9][3].addCoin()
			grid[3][1].addCoin()
			grid[4][4].addCoin()
			grid[0][8].addCoin()
			grid[6][7].addCoin()
			grid[5][8].addCoin()
			grid[9][6].addCoin()
			grid[2][2].addBad()
			grid[0][0].addBad()
			grid[0][9].addBad()
			grid[5][3].addBad()
			grid[2][6].addBad()
			grid[4][5].addBad()
			grid[9][0].addBad()
			grid[9][7].addBad()
			grid[3][8].addBad()
			grid[6][5].addBad()
			grid[6][9].addBad()
			grid[8][2].addBad()
		}
		isolatedBeta = function () {
			r = player.row;
			c = player.col
			if (
					//grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
			//&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn
			grid[r + 1] && grid[r + 1][c] && grid[r + 1][c].wasOn
			) {
				return true
			}
		}
		stage = $St(900, 500).t().A()
		grid = isoGrid(10, 10, 0, 240)
		kD('s', function () {
			location = location
		})
		if (levNum) {
			window['lev' + levNum]()
		}
		else if (window['_pam']) {
			window['lev' + _pam]()
		}
		else {
			lev1()
		}
		stage.bm('me', function (me) {
			player = tilePlayer(me).sXY(.2).drag().to(5, 5)
		})
	}//D
	HANOI = function () {
	}
	Tile = function () {
		var that = this
		var shape = this
		this.container = new createjs.Container().drag()
		this.tile = cjs.diamond(80, 40, 'blue')
		//this.tile.graphics.s('red').f('blue').s('green').mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
		this.container.A(this.tile)
		this.coin = false
		this.addCoin = function () {
			this.coin = tileCoin()
			this.container.A(this.coin)
		}
		this.addBad = function () {
			this.bad = tileBad()
			this.container.A(this.bad)
		}
		this.playerTo = function () {
			if (shape.wasOn == true) {
				location = location
			}//ISO()
			player.X(that.container.x)
			player.Y(that.container.y - 14)
			player.tile = shape
			player.col = shape.col
			player.row = shape.row
			if (shape.coin) {
				shape.coin.remove()
			}
			if (shape.bad) {
				location = location
			}
			shape.wasOn = true
			//if(isolated()){alert('!')}
		}
		this.container.on('dblclick', function () {
			h = that
			that.tile.graphics.f('red').dc(0, 0, 2)
			$l('dblclicked!')
			that.playerTo()
		})
	}
	isoRow = function (r, howMany, x, y) {
		x = x || 0;
		y = y || 0
		var row = []
		_.times(howMany, function (i) {
			x = x + 40
			y = y - 20
			var t = new Tile()
			t.container.XY(x, y)
			stage.A(t.container)
			createjs.bindSlide(t.container)
			t.col = i
			t.row = r
			row.push(t)
		})
		return row
	}
	isoGrid = function (n1, n2, x, y) {
		x = x || 0;
		y = y || 0
		var grid = []
		_.times(n2, function (i) {
			x = x + 40
			y = y + 20
			var row = isoRow(i, n1, x, y)
			grid.push(row)
		})
		return grid
	}
	tileCoin = function () {
		return cjs.circle(15, 'yellow', 'black')
	}
	tileBad = function () {
		return cjs.circle(15, 'green', 'orange')
	}
	tilePlayer = function (bm) {
		player = bm
		player.right = function () {
			player.tile.container.remove()
			grid[player.row][player.col] = null
			grid[player.row][player.col + 1].playerTo()
		}
		player.left = function () {
			player.tile.container.remove()
			player.tile.exists = false
			//player.tile=null
			grid[player.row][player.col] = null
			grid[player.row][player.col - 1].playerTo()
		}
		player.down = function () {
			player.tile.container.remove()
			grid[player.row + 1][player.col].playerTo()
		}
		player.up = function () {
			player.tile.container.remove()
			grid[player.row - 1][player.col].playerTo()
		}
		player.to = function (x, y) {
			grid[x][y].playerTo()
			return player
		}
		kD('u', function () {
			player.up()
		})
		kD('d', function () {
			player.down()
		})
		kD('l', function () {
			player.left()
		})
		kD('r', function () {
			player.right()
		})
		return player
	}
	ISO = function (levNum) {
		z()
		stage = createjs.stage(900, 500).tick().A()
		grid = isoGrid(10, 10, 0, 240)
		kD('s', function () {
			location = location
		})
		if (levNum) {
			window['lev' + levNum]()
		}
		else if (window['_pam']) {
			window['lev' + _pam]()
		}
		else {
			lev1()
		}
		stage.bm0('me', function (me) {
			player = tilePlayer(me).sXY(.2).drag().to(5, 5)
		})
	}
	killTile = function (a, b) {
		grid[a][b].container.remove()
		grid[a][b].wasOn = true
	}
	lev1 = function () {
		grid[3][5].container.remove()
		grid[4][4].container.remove()
		grid[6][6].container.remove()
		grid[7][1].container.remove()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[3][4].addCoin()
		grid[5][2].addCoin()
		grid[8][8].addCoin()
	}
	lev2 = function () {
		grid[0][0].addCoin()
		grid[0][9].addCoin()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[1][6].addCoin()
		grid[2][1].addCoin()
		grid[3][4].addCoin()
		grid[3][8].addCoin()
		grid[4][7].addCoin()
		grid[5][2].addCoin()
		grid[6][5].addCoin()
		grid[6][9].addCoin()
		grid[8][8].addCoin()
		grid[8][2].addCoin()
		grid[8][4].addCoin()
		grid[9][0].addCoin()
		killTile(1, 2)
		killTile(2, 2)
		killTile(2, 6)
		killTile(2, 7)
		killTile(2, 8)
		killTile(4, 0)
		killTile(4, 3)
		killTile(4, 4)
		killTile(4, 6)
		killTile(4, 9)
		killTile(6, 1)
		killTile(6, 2)
		killTile(7, 1)
		killTile(7, 3)
		killTile(7, 4)
		killTile(7, 9)
		killTile(8, 6)
		killTile(8, 7)
		killTile(8, 9)
	}
	lev3 = function () {
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[0][3].addBad()
		grid[1][6].addBad()
		grid[2][1].addBad()
		grid[3][4].addBad()
		grid[3][8].addBad()
		grid[5][2].addBad()
		grid[6][5].addBad()
		grid[6][9].addBad()
		grid[8][8].addBad()
		grid[8][2].addBad()
	}
	lev4 = function () {
		grid[2][9].addCoin()
		grid[5][0].addCoin()
		grid[2][3].addCoin()
		grid[5][6].addCoin()
		grid[9][3].addCoin()
		grid[3][1].addCoin()
		grid[4][4].addCoin()
		grid[0][8].addCoin()
		grid[6][7].addCoin()
		grid[5][8].addCoin()
		grid[9][6].addCoin()
		grid[2][2].addBad()
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[5][3].addBad()
		grid[2][6].addBad()
		grid[4][5].addBad()
		grid[9][0].addBad()
		grid[9][7].addBad()
		grid[3][8].addBad()
		grid[6][5].addBad()
		grid[6][9].addBad()
		grid[8][2].addBad()
	}
	isolatedBeta = function () {
		r = player.row;
		c = player.col
		if (
				//grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
		//&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn
		grid[r + 1] && grid[r + 1][c] && grid[r + 1][c].wasOn
		) {
			return true
		}
	}
}
function wapBoxes() {
// ok so play and draw go together
// draw for functions
// play for apps
// duh
	BOXES = function () {
		CT(ROW(
				stage = cjs.stage(800, 600).tick(),
				$.div('yellow').pad(20).A($.h1('controls'),
						bt('fall', function () {
							ball.fall(box)
						}),
						bt('fall+', function () {
							setInterval(newBall, 1000)
						})),
				'+' // ?????!
		))
		kD('r', function () {
			box.X(10, '+')
		})
		kD('l', function () {
			box.X(10, '-')
		})
		stage.A(box = Box().XY(300, 450))
		stage.A(ball = Ball(40, 'red', 'orange').XY(300, 100))
		newBall = function () {
			var ball = Ball(40, 'red', 'orange').XY(_r(600), 100)
			stage.A(ball)
			ball.fall(box)
		}
	}
	canon = function (box, x, y) {
		var vx, vy, ball
		x = x || box.x || 100
		y = y || box.y || 500
		stage.A(ball = Ball(12).XY(x, y))
		if (box.rotation > 0) {
			vx = 8 * (1 + Math.toRads(box.rotation))
			vy = 16 * (1 - Math.toRads(box.rotation))
		}
		else {
			vx = 8 * (-1 + Math.toRads(box.rotation))
			vy = 16 * (1 + Math.toRads(box.rotation))
		}
		stage.tick(function () {
			vy -= 0.5
			ball.X(vx, '+').Y(vy, '-')
		})
	}
	CANON = function () {
		stage = cjs.stage(1000, 600).tick().A()
		box = Box(20, 100).X(500).B(600)
		stage.A(box)
		kD('l', function () {
			box.rT(4, '-')
		})
		kD('r', function () {
			box.rT(4, '+')
		})
		kD('d', function () {
			box.rotation = 0
		})
		kD('s', function () {
			canon(box)
		})
		setInterval(function () {
			var degs = Math.toRads(box.rotation)
			canon(box, (500 + Math.acos(degs) * 30) + box.x - 540,
					(500 + Math.asin(degs) * 30) + box.y - 540)
		}, 500)
	}
}
function stageBalls() {
	old = function () {
		cjs.ball = function (z, fc, sc) {
			var b = cjs.circle(0, 0, z, fc, sc)
			b.r = z
			b.d = z + z
			b.T = function (a) {
				if (U(a)) {
					return b.y() - b.r
				}
				b.y(a + b.r);
				return b
			}
			b.B = function (a) {
				if (U(a)) {
					return b.y() + b.r
				}
				b.y(a - b.r);
				return b
			}
			b.L = function (a) {
				if (U(a)) {
					return b.x() - b.r
				}
				b.x(a + b.r);
				return b
			}
			b.R = function (a) {
				if (U(a)) {
					return b.x() + b.r
				}
				b.x(a - b.r);
				return b
			}
			b.F = 1
			b.fall = function (r) {
				b.t(function () {
					if (r) {
						if (ballBox(b, r)) {
							b.F = 0
						} else {
							b.F = 1
						}
					}
					if (b.F) {
						b.y(10, '+')
					}
				})
			}
			return b
		}
		cjs.box = function (w, h, fc, sc) {
			w = w || 200
			h = h || w
			var b = rct(
					0 - w / 2, 0 - h / 2, w, h, fc, sc
			)
			b.wr = w / 2
			b.hr = h / 2
			b.wd = w
			b.hd = h
			b.top = b.T = function (a) {
				if (U(a)) {
					return b.y() - b.hr
				}
				b.y(a + b.hr)
				return b
			}
			b.bottom = b.B = function (a) {
				if (U(a)) {
					return b.y() + b.hr
				}
				b.y(a - b.hr)
				return b
			}
			b.left = b.L = function (a) {
				if (U(a)) {
					return b.x() - b.wr
				}
				b.x(a + b.wr)
				return b
			}
			b.right = b.R = function (a) {
				if (U(a)) {
					return b.x() + b.wr
				}
				b.x(a - b.wr);
				return b
			}
			b.fall = function () {
				b.t(function () {
					if (b.F) {
						b.y(40, '+')
					}  //****
					if (ballBox(b, r)) {
						b.F = 0
					}
				})
			}
			return b
		}
		cjs.ballBox = function (bl, bx, buff) {
			buff = buff || 100
			var b = bl.bottom() >= bx.top() && bl.top() <= bx.top() + buff &&
					bl.x() >= bx.left() && bl.x() <= bx.right()
			if (b) {
				bl.bottom(bx.top())
			}
			return b
		}
		h.vs1 = function () {
			var h = this, g = G(arguments), o;
			$l('h.vs')
			o = {v: g.f, ox: g.s, oy: g.t}
			o.ox = N(o.ox, 0)
			o.oy = N(o.oy, 0)
			h.mt(
					_.f(o.v)[0] + o.ox,
					_.f(o.v)[1] + o.oy
			)
			_.eR(o.v, function (v) {
				h.lt(v[0] + o.ox, v[1] + o.oy)
			})
			return h
			//  takes [pt,pt..] and draws it.. with optional offsets..
			//used by (but NOT  dependent on) gPoly 
		}
		h.vs = function (vs, x, y) {
			return this.mt(M.os(vs, x, y))
			//  takes [pt,pt..] and draws it.. with optional offsets..
			//used by (but NOT  dependent on) gPoly 
		}
	}
	cjs.cirX = function (stg, x, y, r, f, s, width, opt) {
		var shp = cjs.shape(stg, x, y, f, s, width, opt) // ss = N(ss)?ss: radius/8
		shp.dc(0, 0, r)
		return shp
	}
	GRID = function () {
		z()
		stage = s = createjs.stage(1000, 1000).tick().A()
		container = c = new createjs.Container()
		stage.A(container)
		cjs.bindSlide(container)
		rows = 5;
		cols = 6;
		sqP = 12;
		sqS = 80
		sqSP = sqS + sqP
		_.times(rows * cols, function (i) {
			drawSquare(container,
					sqSP * (i % cols),
					sqSP * Math.floor(i / cols)
			)
		})
		function drawSquare(container, x, y) {
			var rectangle = new createjs.Shape()
			container.A(rectangle)
			rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
			if (x) {
				rectangle.X(x)
			}
			if (y) {
				rectangle.Y(y)
			}
			return rectangle
		}
	}
	HUD = function () {
		st = cjs.HUD('r', 500, 500).A()
		st.bm('guy')
		st.HUD.A().bm('me', function (b) {
			TR(b)
		})
	}
	nip = function () {
		x1 = 0
		y1 = 0
		r1 = 10
		x2 = 0
		y2 = 0
		r2 = 100
		var h = cjs.shape(10, 10).a2(s).drag().opacity(.8)
		h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
				x1, y1, r1, x2, y2, r2)
				.dc(0, 0, 100)
				.endFill()
		return h
	}
}
PONG=function(){z()



    sCan().id('PongStage').w(480).h(320).a()

var canvas; //Will be linked to the canvas in our index.html page
var stage; //Is the equivalent of stage in AS3 and we'll add "children" to it
var bg; //The background graphic
var main; //The Main Background
var startB; //The Start button in the main menu
var creditsB; //The credits button in the main menu
var credits
var player; //The player paddle graphic
var ball; //The ball graphic
var cpu; //The CPU paddle
var win; //The winning popup
var lose; //The losing popup
var playerScore; //The main player score
var cpuScore; //The CPU score
var cpuSpeed=6; //The speed of the CPU paddle, the faster it is the harder the game is
var xSpeed = 5;
var ySpeed = 5;
var tkr = new Object;

var preloader;
var manifest;
var totalLoaded = 0;

var TitleView = new createjs.Container()


  Main=function(){

    canvas = document.getElementById('PongStage')
    stage = new createjs.Stage(canvas)
    stage.mouseEventsEnabled = true;

    manifest = [
        {src:"bg.png", id:"bg"},
        {src:"main.png", id:"main"},
        {src:"startB.png", id:"startB"},
        {src:"creditsB.png", id:"creditsB"},
        {src:"credits.png", id:"credits"},
        {src:"paddle.png", id:"cpu"},
        {src:"paddle.png", id:"player"},
        {src:"ball.png", id:"ball"},
        {src:"win.png", id:"win"},
        {src:"lose.png", id:"lose"},
        {src:"playerScore.mp3|playerScore.ogg", id:"playerScore"},
        {src:"enemyScore.mp3|enemyScore.ogg", id:"enemyScore"},
        {src:"hit.mp3|hit.ogg", id:"hit"},
        {src:"wall.mp3|wall.ogg", id:"wall"}
    ]
    preloader=new createjs.PreloadJS();

    preloader.onProgress = handleProgress;
    preloader.onComplete = handleComplete;
    preloader.onFileLoad = handleFileLoad;
    preloader.loadManifest(manifest);



    Ticker.setFPS(30);
    Ticker.addListener(stage);

}


function handleProgress(event){} //use event.loaded to get the percentage of the loading
function handleComplete(event){}

function handleFileLoad(event){
            var img = new Image();
            img.src = event.src;
            img.onload = handleLoadComplete;
            window[event.id] = new createjs.Bitmap(img)}


function handleLoadComplete(event){
    totalLoaded++
    if(manifest.length==totalLoaded){addTitleView()}}



addTitleView=function(){

    startB.x = 240 - 31.5;
    startB.y = 160;
    startB.name = 'startB';

    creditsB.x = 241 - 42;
    creditsB.y = 200;

    TitleView.addChild(main, startB, creditsB);
    stage.addChild(bg, TitleView);
    stage.update();

    // Button Listeners

    startB.onPress = tweenTitleView;
    creditsB.onPress = showCredits}




showCredits=function(){
    // Show Credits

    credits.x = 480;

    stage.addChild(credits);
    stage.update();
    Tween.get(credits).to({x:0}, 300);
    credits.onPress = hideCredits;
}

// Hide Credits

function hideCredits(e)
{
    Tween.get(credits).to({x:480}, 300).call(rmvCredits);
}

// Remove Credits

function rmvCredits()
{
    stage.removeChild(credits);
}

// Tween Title View

function tweenTitleView()
{
    // Start Game

    Tween.get(TitleView).to({y:-320}, 300).call(addGameView);
}

// Add Game View

function addGameView()
{
    // Destroy Menu & Credits screen

    stage.removeChild(TitleView);
    TitleView = null;
    credits = null;

    // Add Game View

    player.x = 2;
    player.y = 160 - 37.5;
    cpu.x = 480 - 25;
    cpu.y = 160 - 37.5;
    ball.x = 240 - 15;
    ball.y = 160 - 15;

    // Score

    playerScore = new Text('0', 'bold 20px Arial', '#A3FF24');
    playerScore.x = 211;
    playerScore.y = 20;

    cpuScore = new Text('0', 'bold 20px Arial', '#A3FF24');
    cpuScore.x = 262;
    cpuScore.y = 20;

    stage.addChild(playerScore, cpuScore, player, cpu, ball);
    stage.update();

    // Start Listener

    bg.onPress = startGame;
}

// Start Game Function
function startGame(e)
{
    bg.onPress = null;
    stage.onMouseMove = movePaddle;

    Ticker.addListener(tkr, false);
    tkr.tick = update;
}

// Player Movement

function movePaddle(e)
{
    // Mouse Movement
    player.y = e.stageY;
}



/* Reset */

function reset()
{
    ball.x = 240 - 15;
    ball.y = 160 - 15;
    player.y = 160 - 37.5;
    cpu.y = 160 - 37.5;

    stage.onMouseMove = null;
    Ticker.removeListener(tkr);
    bg.onPress = startGame;
}

// Update Function

function update()
{
    // Ball Movement

    ball.x = ball.x + xSpeed;
    ball.y = ball.y + ySpeed;

    // Cpu Movement

    if((cpu.y+32) < (ball.y-14)) {
        cpu.y = cpu.y + cpuSpeed;
    }
    else if((cpu.y+32) > (ball.y+14)) {
        cpu.y = cpu.y - cpuSpeed;
    }

    // Wall Collision

    if((ball.y) < 0) { ySpeed = -ySpeed; createjs.SoundJS.play('wall'); };//Up
    if((ball.y + (30)) > 320) { ySpeed = -ySpeed; createjs.SoundJS.play('wall');};//down

    /* CPU Score */

    if((ball.x) < 0)
    {
        xSpeed = -xSpeed;
        cpuScore.text = parseInt(cpuScore.text + 1);
        reset();
        createjs.SoundJS.play('enemyScore');
    }

    /* Player Score */

    if((ball.x + (30)) > 480)
    {
        xSpeed = -xSpeed;
        playerScore.text = parseInt(playerScore.text + 1);
        reset();
        createjs.SoundJS.play('playerScore');
    }

    /* Cpu collision */

    if(ball.x + 30 > cpu.x && ball.x + 30 < cpu.x + 22 && ball.y >= cpu.y && ball.y < cpu.y + 75)
    {
        xSpeed *= -1;
        createjs.SoundJS.play('hit');
    }

    /* Player collision */

    if(ball.x <= player.x + 22 && ball.x > player.x && ball.y >= player.y && ball.y < player.y + 75)
    {
        xSpeed *= -1;
        createjs.SoundJS.play('hit');
    }

    /* Stop Paddle from going out of canvas */

    if(player.y >= 249)
    {
        player.y = 249;
    }

    /* Check for Win */

    if(playerScore.text == '10')
    {
        alert('win');
    }

    /* Check for Game Over */

    if(cpuScore.text == '10')
    {
        alert('lose');
    }
}




alert=function(e){
    Ticker.removeListener(tkr);
    stage.onMouseMove = null;
    bg.onPress = null


    if(e == 'win'){
        win.x = 140; win.y = -90;

        stage.addChild(win);
        Tween.get(win).to({y: 115}, 300)}

    else{
        lose.x = 140;
        lose.y = -90;

        stage.addChild(lose);
        Tween.get(lose).to({y: 115}, 300);
    }
}




}
function orbs(){//this is from iphone book createjs games
//chapter8
	ORB = function () {
		var Orb = function () {
			this.initialize()
		}
		Orb.prototype = new createjs.Shape()
		Orb.prototype.Shape_initialize = Orb.prototype.initialize
		Orb.prototype.initialize = function () {
			this.Shape_initialize()
		}
		window.Orb = Orb
	}
//this is to teach stage machine
	ORBS = function () {
		z()
		SuperStage(500).a()
		(function () {
			window.game = window.game || {}
			var GameStates = {
				MAIN_MENU: 0,
				RUN_SCENE: 1,
				GAME: 10,
				GAME_OVER: 20
			}
			var GameStateEvents = {
				MAIN_MENU: 'main-menu-event',
				GAME_OVER: 'game-over-event',
				GAME: 'game-event'
			}
			window.game.GameStates = GameStates
			window.game.GameStateEvents = GameStateEvents
		}())
		(function (window) {
			window.game = window.game || {}
			function GameMenu() {
				this.initialize()
			}
			
			var p = GameMenu.prototype = EaselContainer()
			p.Container_initialize = p.initialize
			p.titleTxt = null
			p.count = 0
			p.initialize = function () {
				this.Container_initialize()
				this.addBG()
				this.addTitle()
				this.addOrbs()
				this.addButton()
			}
			p.addBG = function () {
				var bg = new createjs.Shape()
				bg.graphics.beginFill('0').drawRect(0, 0, canvas.width, canvas.height)
				this.addChild(bg)
			}
			p.addTitle = function () {
				this.titleTxt = EaselText("ORB DESTROYER!", 'b', 40)
				this.titleTxt.x(canvas.width / 2)
				this.titleTxt.y(200)
				this.titleTxt.textAlign = 'center'
				this.addChild(this.titleTxt)
			}
			p.addOrbs = function () {
				var i, orb
				var orbContainer = EaselContainer()
				var numOrbs = 5
				var orbSize = 20
				var orbPadding = 10
				var orbsPosition = 300
				for (i = 0; i < numOrbs; i++) {
					orb = new PulsingOrb('r', orbSize)
					orb.x = i * ((orbSize * 2) + orbPadding)
					orbContainer.a(orb)
				}
				orbContainer.x = orbContainer.y = orbsPositionthis.addChild(orbContainer)
			}
			p.addButton = function () {
				var btn, event
				btn = new ui.SimpleButton('Play Game')
				btn.on('click', this.playGame, this)
				btn.regX = btn.width / 2
				btn.x = canvas.width / 2
				btn.y = 400
				btn.setButton({upColor: 'g', color: 'r', borderColor: 'b', overColor: 'y'})
				this.addChild(btn)
			}
			p.playGame = function (e) {
				this.dispatchEvent(game.GameStateEvents.GAME)
			}
			p.run = function (tickEvent) {
				this.titleTxt.alpha = cos(this.count++ * 0.1) * .4 + .6
			}
			window.game.GameMenu = GameMenu
		}(window))
	}
}
function solve(){
	MEMORY = MEM = function () {
		st = s = cjs.S().A(ct = cjs.ct())
		grid = [
			['guy', 'me', 0, 0],
			[0, 'me', 0, 0],
			[0, 0, 0, 0],
			[0, 'me', 'chicks', 'me']
		]
		wGuy = function () {
			var x = 0, y = 0
			_.e(grid, function (row, i) {
				_.e(row, function (cell, j) {
					if (cell == 'guy') {
						x = j, y = i
					}
				})
			})
			return {x: x, y: y}
		}
		dGuy = function () {
			var p = wGuy()
			grid[p.y][p.x] = 0
			if (grid[p.y + 1][p.x] == 'chicks') {
				alert('win')
			}
			else if (grid[p.y + 1][p.x] == 0) {
				grid[p.y + 1][p.x] = 'guy'
				playerGrid()
			} else {
				alert('lose!')
			}
		}
		rGuy = function () {
			var p = wGuy()
			grid[p.y][p.x] = 0
			if (grid[p.y][p.x + 1] == 'chicks') {
				alert('win')
			}
			else if (grid[p.y][p.x + 1] == 0) {
				grid[p.y][p.x + 1] = 'guy'
				playerGrid()
			} else {
				alert('lose!')
			}
		}
		_.e(grid, function (row, i) {
			_.e(row, function (cell, j) {
				ct.A(
						cjs.rect(30, 40).XY(j * 100 + 100, i * 100 + 100))
				if (cell == 'me') {
					ct.bm('me',
							function (b) {
								b.XY(j * 100 + 100, i * 100 + 100
								).sXY(.1)
							})
				}
			})
		})
		playerGrid = function () {
			_.e(grid, function (row, i) {
				_.e(row, function (cell, j) {
					ct.A(cjs.rect(30, 40).XY(j * 100 + 100, i * 100 + 100))
					if (cell == 'guy' || cell == 'chicks') {
						ct.b(cell, function (b) {
							b.xy(j * 100 + 100, i * 100 + 100).sXY(.1)
						})
					}
				})
			})
		}
		_.in(3, function () {
			ct.remove()
			st.A(ct = cjs.ct())
			playerGrid()
		})
		$.kD('d', dGuy)
		$.kD('r', rGuy)
	}
	CONNECT = function () {
		z();//m$$('location=location')
		stage = createjs.stage(1000).tick().A()
		pink = cjs.circle(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
		stage.A(pink)
		container = new createjs.Container()
		stage.A(container)
		green = cjs.circle(200, 'green', 'purple').XY(320, 300)//.rXY(100)
		yellow = cjs.circle(100, 'yellow', 'purple').XY(250)
		red = cjs.circle(40, 'red', 'purple').XY(200, 100)
		orange = cjs.circle(20, 'orange', 'purple').XY(300)
		container.A(green, yellow, red, orange)
		LS(yellow, container)
		SL(green)
		SL(green, pink)
		SL(yellow)
		SL(red, container)
		SL(orange, red)
	}
	MOUSEENTERSTAGE = function () {
		z()
		stage = s = cjs.stage(500, 500).A().tick()
		s.bm('me')
		s.on('mouseenter', function () {
			$('body').prepend('once<br>')
		}, null, true)
		s.on('mouseenter', function () {
			$('body').prepend('many<br>')
		}, null, false)
	}
	HANDLEEVENT = function () {
		z()
		s = createjs.stage(500, 500).A().tick()
		s.bm('me', function (b) {
			me = b
			cb = b.on('pressmove', function () {
				this.x++
			})
		})
		s.bm('guy', function (b) {
			b.handleEvent = function () {
				this.y++
			}
			b.on('pressmove', b)
		})
	}
	REMOVEEVENT = function () {
		z()
		s = createjs.stage(500, 500).A().tick()
		s.bm('me', function (b) {
			me = b
			cb = b.on('pressmove', function () {
				this.x++
			})
		})
		s.bm('guy', function (b) {
			b.handleEvent = function () {
				this.y++
				me.off('pressmove', cb)
			}
			b.on('pressmove', b)
		})
	}
	BUBBLE = function () {
		z()
		stage = cjs.stage(500, 500).tick().A()
		output = new createjs.Text(
				"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
				"13px courier").lWH(280, 13).XY(190, 10)
		background = new createjs.Shape().N("background")
		background.graphics.f("red").drawRoundRect(0, 0, 150, 60, 10)
		label = new createjs.Text("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2)
				.N('label')
				.tA("center")
				.tB("middle")
		button = new createjs.Container().XY(20).N('button').A(background, label)
		// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
		// button.mouseChildren = false;
		stage.A(button, output)
		// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
		_.each([stage, button, label, background], function (target) {
			target.on("click", handleClick, false);
			target.on("click", handleClick, true)
		})
		stage.update()
	}
	function handleClick(e) {
		if (e.currentTarget == stage && e.eventPhase == 1) {
			// this is the first dispatch in the event life cycle, clear the output.
			output.text = "target : eventPhase : currentTarget\n"
		}
		output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
		if (e.currentTarget == stage && e.eventPhase == 3) {
			// this is the last dispatch in the event life cycle, render the stage.
			stage.update()
		}
	}
	
	function spaceBowl() {
//SPACE BOWLING
//SPACE BOWLING
		BOWL = function () {
			stage = s = createjs.stage(1000, 1000).tick().A()
			//append a container to the stage
			container = c = new createjs.Container()
			stage.A(container)
			plX = stage.W() / 2
			plY = 150
			plR = 100
			plr = 75 // this seems to determine the radius of the 'cluster' of balls
			oRng = 8 //outer ring
			nRng = 3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
			circle = cjs.circle(plX, plY, plR, 'yellow')
			container.A(circle) // cr = Hx().c(plR,'y').xy(plX,plY)
			rngSp = plr / (nRng - 1)
			aA = []
			var ast = function (x, y, r, m, f) {
				return {
					x: x, y: y, radius: radius,
					m: m,  //?
					f: f,
					vX: 0, vY: 0, player: false
				}
			}
			_.times(nRng, function (r) {
				var crR = 0,
						ang = 0,
						rngR = 0
				if (r == nRng - 1) {
					crR = 1
				}
				else {
					crR = oRng - (r * 3)
					ang = 360 / crR
					rngR = plr - (rngSp * r)
				}
				_.times(crR, function (a) {
					var x = 0, y = 0
					if (r == nRng - 1) {
						x = plX;
						y = plY
					}
					else {
						x = plX + (rngR * cos((ang * a) * PI / 180))
						y = plX + (rngR * sin((ang * a) * PI / 180)) - 350
					}
					aA.push(ast(x, y, 10, 5, 0.95))
					container.A(
							cjs.circle(10, 'black').XY(x, y))
				})
			})
		}
		BOWL = function () {
			stage = s = createjs.stage(1000, 1000).tick().A()
			//append a container to the stage
			container = c = new createjs.Container()
			stage.A(container)
			plX = stage.W() / 2
			plY = 150
			plR = 100
			plr = 75 // this seems to determine the radius of the 'cluster' of balls
			oRng = 8 //outer ring
			nRng = 3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
			circle = cjs.circle(plX, plY, plR, 'yellow')
			container.A(circle) // cr = Hx().c(plR,'y').xy(plX,plY)
			rngSp = plr / (nRng - 1)
			aA = []
			var ast = function (x, y, r, m, f) {
				return {
					x: x, y: y, radius: radius,
					m: m,  //?
					f: f,
					vX: 0, vY: 0, player: false
				}
			}
			_.times(nRng, function (r) {
				var crR = 0,
						ang = 0,
						rngR = 0
				if (r == nRng - 1) {
					crR = 1
				}
				else {
					crR = oRng - (r * 3)
					ang = 360 / crR
					rngR = plr - (rngSp * r)
				}
				_.times(crR, function (a) {
					var x = 0, y = 0
					if (r == nRng - 1) {
						x = plX;
						y = plY
					}
					else {
						x = plX + (rngR * cos((ang * a) * PI / 180))
						y = plX + (rngR * sin((ang * a) * PI / 180)) - 350
					}
					aA.push(ast(x, y, 10, 5, 0.95))
					container.A(
							cjs.circle(10, 'black').XY(x, y))
				})
			})
		}
//SPACE BOWLING
		BOWL = function () {
			stage = s = createjs.stage(1000, 1000).tick().A()
			//append a container to the stage
			container = c = new createjs.Container()
			stage.A(container)
			plX = stage.W() / 2
			plY = 150
			plR = 100
			plr = 75 // this seems to determine the radius of the 'cluster' of balls
			oRng = 8 //outer ring
			nRng = 3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
			circle = cjs.circle(plX, plY, plR, 'yellow')
			container.A(circle) // cr = Hx().c(plR,'y').xy(plX,plY)
			rngSp = plr / (nRng - 1)
			aA = []
			var ast = function (x, y, r, m, f) {
				return {
					x: x, y: y, radius: radius,
					m: m,  //?
					f: f,
					vX: 0, vY: 0, player: false
				}
			}
			_.times(nRng, function (r) {
				var crR = 0,
						ang = 0,
						rngR = 0
				if (r == nRng - 1) {
					crR = 1
				}
				else {
					crR = oRng - (r * 3)
					ang = 360 / crR
					rngR = plr - (rngSp * r)
				}
				_.times(crR, function (a) {
					var x = 0, y = 0
					if (r == nRng - 1) {
						x = plX;
						y = plY
					}
					else {
						x = plX + (rngR * cos((ang * a) * PI / 180))
						y = plX + (rngR * sin((ang * a) * PI / 180)) - 350
					}
					aA.push(ast(x, y, 10, 5, 0.95))
					container.A(
							cjs.circle(10, 'black').XY(x, y))
				})
			})
		}
	}
	
	function matrix() {


//brilliant demo
		MATRIX1 = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
			z()
			$.div('b', 50, 50).A()
			stage = s = cjs.stage(1600, 1000).tick().A()
			// on stage enter, change background color, though you
			// cant see it here because stage fills screen
			// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
			stage.on('e', co)
			//make a container
			stage.ct(function (c, s) {
				
				//the little me clicks do not hit the 'big' me underneath it.  that's normal.
				//but it does hit the container.  but this example shows off 'remove', so it only hits once
				//however, it continues to propogate on to the container. hmmm..
				c.bm('me',
						function (b) {
							b.sXY(.2).XY(100, 80)
							b.on(click, function () {
								$l('lit')
							}, '/')  //on click, log('lit'), just once (remove listener)!
						})
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
				c.bm('me', function (bm) {
					bm.sXY(.4).XY(100, 180)
					bm.on('click', function () {
						$l('mid')
					}, '-')  //on click, log('mid'), and stop prop
				})
				c.bm('me', function (bm) {
					bm.sXY(1.5)
					bm.on('click', function () {
						$l('big')
					})  //on click, log('big')
				})
				//on click, log('con')
				c.on('click', function () {
					$l('con')
				})
			})
			stage.ct(function (c) {
						var vn = 0,
								rvn = 0,
								on = 0,
								ron = 0
						c.X(200)
						c.mug(
								function (b) {
									b.sXY(.8).XY(200, 80)
								})
						c.mug(
								function (b) {
									b.sXY(.8).XY(100, 280)
								})
						c.mg(
								function (b) {
									b.sXY(.8).XY(340, 180)
								})
						//this shows over/out vs rollover/rollout
						//over/out get retriggered when switching between connected sprites
						//rollover/rollout does not because it is still touching 'something'
						c.on('mouseover', function () {
							c.X(10, '+');
							$l('v: ' + vn++)
						})
						c.on('rollover', function () {
							c.X(20, '-');
							$l('rv: ' + rvn++)
						})
						c.on('mouseout', function () {
							c.Y(10, '+');
							$l('o: ' + on++)
						})
						c.on('rollout', function () {
							c.Y(20, '-');
							$l('ro: ' + ron++)
						})
					}
			).MV(40)
			stage.container(function (container, stage) {
				container.X(700)
				container.mug(function (bm) {
					bm.sXY(.8).XY(200, 80)
				})
				container.mug(function (bm) {
					bm.sXY(.8).XY(100, 280)
				})
				container.mug(function (bm) {
					bm.sXY(.8).XY(340, 180)
				})
				//this example shows which sprites are acted upon with over/rollover
				//over only affects one
				//rollover affects ALL
				//if you enter a sprite from outside, they all grow (via rollover),
				//and the one sprite grows double (via over)
				container.on('mouseover', function () {
					$l('mouseover')
					this.sXY(.01, '+')
				})
				container.on('rollover', function () {
					$l('rv')
					this.sXY(.01, '+')
				})
				container.on('mouseout', function () {
				})
				container.on('rollout', function () {
				})
				// in summary,
				// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
				// BUT, they will all recieve events separately
			}).MV(40) //??? mouse events? speed for some mouse checking thing
			stage.container(function (container, stage) {
				container.x = 1400
				container.bm('me', function (bm) {
					
					
					//make the little me slide the entire container
					//it acts as a handle! (for its container)
					lit = bm.sXY(.2).XY(100, 80)
					SL(bm, container)
					container.bm('me', function (bm) {
//big me will scale the little me
						big = bm.sXY(2).XY(100, 180)
						SC(bm, lit)
						container.bm('me', function (bm) {
							bm.sXY(.6).XY(150, 180)
							SL(bm)
							RT(bm, big)
						})
					})
				})
//guy slides stage
				container.bm('guy', function (bm) {
					bm.sXY(.4).XY(100, 180)
					SL(bm, stage)
				})
			})
		}
		MATRIX0 = function () {

// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
			z()
			$l('matrix')
			$.div('blue', 50, 50).A()
			stage = s = createjs.stage(1600, 1000).A().tick()
			// on stage enter, change background color, though you
			// cant see it here because stage fills screen
			// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
			stage.on('mouseenter', function () {
				$('body').C($r())
			})
			stage.A(container = c = new createjs.Container())
			container.bm('me', function (bm) {
				//b.sxy(.2).xy(100,80)
				//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
			})
			//make a container
			stage.ct(function (c, s) {
				
				//the little me clicks do not hit the 'big' me underneath it.  that's normal.
				//but it does hit the container.  but this example shows off 'remove', so it only hits once
				//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
				c.bm('me', function (b) {
					b.sXY(.4).XY(100, 180)
					//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
				})
				c.b('me', function (b) {
					b.sXY(1.5)
					// b.o('$',fL('big'))  //on click, log('big')
				})
				//on click, log('con')
				//c.o('$',  fL('con'))
			})
			stage.ct(function (c) {
				var vn = 0,
						rvn = 0,
						on = 0,
						ron = 0
				c.X(200)
				c.mug(
						function (b) {
							b.sXY(.8).XY(200, 80)
						})
				c.mug(
						function (b) {
							b.sXY(.8).XY(100, 280)
						})
				c.mg(
						function (b) {
							b.sXY(.8).XY(340, 180)
						})
				//this shows over/out vs rollover/rollout
				//over/out get retriggered when switching between connected sprites
				//rollover/rollout does not because it is still touching 'something'
				// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
				//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
				// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
				//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
			})//.MV(40)
			stage.ct(function (c, s) {
				c.x(700)
				c.mg(function (b) {
					b.sxy(.8).xy(200, 80)
				})
				c.mg(function (b) {
					b.sxy(.8).xy(100, 280)
				})
				c.mg(function (b) {
					b.sxy(.8).xy(340, 180)
				})
				//this example shows which sprites are acted upon with over/rollover
				//over only affects one
				//rollover affects ALL
				//if you enter a sprite from outside, they all grow (via rollover),
				//and the one sprite grows double (via over)
				c.o('v', function (g, e) {
					$l('v')
					g.sxy(.01, '+')
				})
				c.o('rv', function (g, e) {
					$l('rv')
					g.sxy(.01, '+')
				})
				c.o('o', function (q, e, g) {
				})
				c.o('ro', function (q, e, g) {
				})
				// in summary,
				// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
				// BUT, they will all recieve events separately
			}).MV(40)
			stage.ct(function (container, stage) {
				container.X(1400)
				container.bm('me', function (bm) {
					
					//make the little me slide the entire container
					//it acts as a handle! (for its container)
					lit = bm.sXY(.2).XY(100, 80)
					SL(bm, container)
					container.bm('me', function (bm) {
//big me will scale the little me
						big = bm.sXY(2).XY(100, 180)
						SC(bm, lit)
						container.bm('me', function (bm) {
							bm.sXY(.6).XY(150, 180)
							SL(bm)
							RT(bm, big)
						})
					})
				})
//guy slides stage
				container.bm('guy', function (bm) {
					bm.sXY(.4).XY(100, 180)
					createjs.bindSlide(bm, stage)
				})
			})
		}
		MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
			z()
			$l('matrix')
			stage = s = createjs.stage(1600, 1000).A().tick()
			// on stage enter, change background color, though you
			// cant see it here because stage fills screen
			// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
			stage.on('mouseenter', function () {
				$('body').C($r())
			})
			stage.A(container = c = new createjs.Container())
			container.bm('me', function (bm) {
				bm.sXY(.2).XY(100, 80)
				bm.on('click', function () {
					$l('lit')
				}, this, true) //just once
			})
			//make a container
			stage.container(function (container, stage) {
				
				//the little me clicks do not hit the 'big' me underneath it.  that's normal.
				//but it does hit the container.  but this example shows off 'remove', so it only hits once
				//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
				container.bm('me', function (bm) {  //future: c.bm('me', .4, function(bm){})
					bm.sXY(.4).XY(100, 180)
					bm.on('click', function (e) {
						$l('mid')
						e.stopPropagation()
					})
				})
				container.bm('me', function (bm) {
					bm.sXY(1.5)
							.on('click', function () {
								$l('big')
							})
				})
				container.on('click', function () {
					$l('con')
				})
			})
		}
//brilliant demo
		MATRIX1 = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
			z()
			$.div('b', 50, 50).A()
			stage = s = cjs.stage(1600, 1000).tick().A()
			// on stage enter, change background color, though you
			// cant see it here because stage fills screen
			// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
			stage.on('e', co)
			//make a container
			stage.ct(function (c, s) {
				
				//the little me clicks do not hit the 'big' me underneath it.  that's normal.
				//but it does hit the container.  but this example shows off 'remove', so it only hits once
				//however, it continues to propogate on to the container. hmmm..
				c.bm('me',
						function (b) {
							b.sXY(.2).XY(100, 80)
							b.on(click, function () {
								$l('lit')
							}, '/')  //on click, log('lit'), just once (remove listener)!
						})
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
				c.bm('me', function (bm) {
					bm.sXY(.4).XY(100, 180)
					bm.on('click', function () {
						$l('mid')
					}, '-')  //on click, log('mid'), and stop prop
				})
				c.bm('me', function (bm) {
					bm.sXY(1.5)
					bm.on('click', function () {
						$l('big')
					})  //on click, log('big')
				})
				//on click, log('con')
				c.on('click', function () {
					$l('con')
				})
			})
			stage.ct(function (c) {
						var vn = 0,
								rvn = 0,
								on = 0,
								ron = 0
						c.X(200)
						c.mug(
								function (b) {
									b.sXY(.8).XY(200, 80)
								})
						c.mug(
								function (b) {
									b.sXY(.8).XY(100, 280)
								})
						c.mg(
								function (b) {
									b.sXY(.8).XY(340, 180)
								})
						//this shows over/out vs rollover/rollout
						//over/out get retriggered when switching between connected sprites
						//rollover/rollout does not because it is still touching 'something'
						c.on('mouseover', function () {
							c.X(10, '+');
							$l('v: ' + vn++)
						})
						c.on('rollover', function () {
							c.X(20, '-');
							$l('rv: ' + rvn++)
						})
						c.on('mouseout', function () {
							c.Y(10, '+');
							$l('o: ' + on++)
						})
						c.on('rollout', function () {
							c.Y(20, '-');
							$l('ro: ' + ron++)
						})
					}
			).MV(40)
			stage.container(function (container, stage) {
				container.X(700)
				container.mug(function (bm) {
					bm.sXY(.8).XY(200, 80)
				})
				container.mug(function (bm) {
					bm.sXY(.8).XY(100, 280)
				})
				container.mug(function (bm) {
					bm.sXY(.8).XY(340, 180)
				})
				//this example shows which sprites are acted upon with over/rollover
				//over only affects one
				//rollover affects ALL
				//if you enter a sprite from outside, they all grow (via rollover),
				//and the one sprite grows double (via over)
				container.on('mouseover', function () {
					$l('mouseover')
					this.sXY(.01, '+')
				})
				container.on('rollover', function () {
					$l('rv')
					this.sXY(.01, '+')
				})
				container.on('mouseout', function () {
				})
				container.on('rollout', function () {
				})
				// in summary,
				// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
				// BUT, they will all recieve events separately
			}).MV(40) //??? mouse events? speed for some mouse checking thing
			stage.container(function (container, stage) {
				container.x = 1400
				container.bm('me', function (bm) {
					
					
					//make the little me slide the entire container
					//it acts as a handle! (for its container)
					lit = bm.sXY(.2).XY(100, 80)
					SL(bm, container)
					container.bm('me', function (bm) {
//big me will scale the little me
						big = bm.sXY(2).XY(100, 180)
						SC(bm, lit)
						container.bm('me', function (bm) {
							bm.sXY(.6).XY(150, 180)
							SL(bm)
							RT(bm, big)
						})
					})
				})
//guy slides stage
				container.bm('guy', function (bm) {
					bm.sXY(.4).XY(100, 180)
					SL(bm, stage)
				})
			})
		}
		MATRIX0 = function () {

// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
			z()
			$l('matrix')
			$.div('blue', 50, 50).A()
			stage = s = createjs.stage(1600, 1000).A().tick()
			// on stage enter, change background color, though you
			// cant see it here because stage fills screen
			// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
			stage.on('mouseenter', function () {
				$('body').C($r())
			})
			stage.A(container = c = new createjs.Container())
			container.bm('me', function (bm) {
				//b.sxy(.2).xy(100,80)
				//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
			})
			//make a container
			stage.ct(function (c, s) {
				
				//the little me clicks do not hit the 'big' me underneath it.  that's normal.
				//but it does hit the container.  but this example shows off 'remove', so it only hits once
				//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
				c.bm('me', function (b) {
					b.sXY(.4).XY(100, 180)
					//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
				})
				c.b('me', function (b) {
					b.sXY(1.5)
					// b.o('$',fL('big'))  //on click, log('big')
				})
				//on click, log('con')
				//c.o('$',  fL('con'))
			})
			stage.ct(function (c) {
				var vn = 0,
						rvn = 0,
						on = 0,
						ron = 0
				c.X(200)
				c.mug(
						function (b) {
							b.sXY(.8).XY(200, 80)
						})
				c.mug(
						function (b) {
							b.sXY(.8).XY(100, 280)
						})
				c.mg(
						function (b) {
							b.sXY(.8).XY(340, 180)
						})
				//this shows over/out vs rollover/rollout
				//over/out get retriggered when switching between connected sprites
				//rollover/rollout does not because it is still touching 'something'
				// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
				//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
				// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
				//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
			})//.MV(40)
			stage.ct(function (c, s) {
				c.x(700)
				c.mg(function (b) {
					b.sxy(.8).xy(200, 80)
				})
				c.mg(function (b) {
					b.sxy(.8).xy(100, 280)
				})
				c.mg(function (b) {
					b.sxy(.8).xy(340, 180)
				})
				//this example shows which sprites are acted upon with over/rollover
				//over only affects one
				//rollover affects ALL
				//if you enter a sprite from outside, they all grow (via rollover),
				//and the one sprite grows double (via over)
				c.o('v', function (g, e) {
					$l('v')
					g.sxy(.01, '+')
				})
				c.o('rv', function (g, e) {
					$l('rv')
					g.sxy(.01, '+')
				})
				c.o('o', function (q, e, g) {
				})
				c.o('ro', function (q, e, g) {
				})
				// in summary,
				// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
				// BUT, they will all recieve events separately
			}).MV(40)
			stage.ct(function (container, stage) {
				container.X(1400)
				container.bm('me', function (bm) {
					
					//make the little me slide the entire container
					//it acts as a handle! (for its container)
					lit = bm.sXY(.2).XY(100, 80)
					SL(bm, container)
					container.bm('me', function (bm) {
//big me will scale the little me
						big = bm.sXY(2).XY(100, 180)
						SC(bm, lit)
						container.bm('me', function (bm) {
							bm.sXY(.6).XY(150, 180)
							SL(bm)
							RT(bm, big)
						})
					})
				})
//guy slides stage
				container.bm('guy', function (bm) {
					bm.sXY(.4).XY(100, 180)
					createjs.bindSlide(bm, stage)
				})
			})
		}
		MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
			z()
			$l('matrix')
			stage = s = createjs.stage(1600, 1000).A().tick()
			// on stage enter, change background color, though you
			// cant see it here because stage fills screen
			// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
			stage.on('mouseenter', function () {
				$('body').C($r())
			})
			stage.A(container = c = new createjs.Container())
			container.bm('me', function (bm) {
				bm.sXY(.2).XY(100, 80)
				bm.on('click', function () {
					$l('lit')
				}, this, true) //just once
			})
			//make a container
			stage.container(function (container, stage) {
				
				//the little me clicks do not hit the 'big' me underneath it.  that's normal.
				//but it does hit the container.  but this example shows off 'remove', so it only hits once
				//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
				container.bm('me', function (bm) {  //future: c.bm('me', .4, function(bm){})
					bm.sXY(.4).XY(100, 180)
					bm.on('click', function (e) {
						$l('mid')
						e.stopPropagation()
					})
				})
				container.bm('me', function (bm) {
					bm.sXY(1.5)
							.on('click', function () {
								$l('big')
							})
				})
				container.on('click', function () {
					$l('con')
				})
			})
		}
	}
	
	GRID = function () {
		z()
		stage = s = createjs.stage(1000, 1000).tick().A()
		container = c = new createjs.Container()
		stage.A(container)
		cjs.bindSlide(container)
		rows = 5;
		cols = 6;
		sqP = 12;
		sqS = 80
		sqSP = sqS + sqP
		_.times(rows * cols, function (i) {
			drawSquare(container,
					sqSP * (i % cols),
					sqSP * Math.floor(i / cols)
			)
		})
		function drawSquare(container, x, y) {
			var rectangle = new createjs.Shape()
			container.A(rectangle)
			rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
			if (x) {
				rectangle.X(x)
			}
			if (y) {
				rectangle.Y(y)
			}
			return rectangle
		}
	}
	testShape = function () {
		z()
		stage = createjs.stage(600).tick().A()
		shape = new createjs.Shape()
		stage.A(shape)
		shape.graphics.f('red').s('black').dc(400, 400, 200).dr(100, 0, 200, 200)
	}
	TANGLE = function () {
		z()
		a = $.divA('r', 50, 50).XY(50).A().pad(10)
		b = $.divA('b', 100, 100).XY(100).A().pad(10)
		c = $.divA('g', 200, 200).XY(200).A().pad(10)
		d = $.divA('y', 400, 400).XY(400).A().pad(10)
		y = function (aa, bb, cc, dd) {
			if (aa && U(bb)) {
				aa.A().P('a')
			}
			if (bb) {
				bb.A(aa.P('static'))
			}
			if (dd) {
				dd.A(cc.P('s'))
			}
		}
	}
	ZX = function () {
		z()
		a = $.editDiv().A().C('a')
		b = $.editDiv().A().C('b')
	}
	SHIP = function () {
		angleInDegrees = function self(y, x) {
			if (O(y)) {
				return self(y.vy, y.vx)
			}
			var d = tDeg(Math.atan(y / x))
			if (x < 0) {
				d = Math.abs(d) + 90;
				if (y < 0) {
					d = Math.abs(d) + 90
				}
			}
			return d
		}
		ship = function (st) {
			t = new cjs.Shape().XY(100).rY(20).vX(1).vY(1)
			t.graphics.f('o').s('z').mt(0, 0).lt(0, 40).lt(80, 20).lt(0, 0)
			kD('d', function () {
				t.rt(6, '+')
			})
			kD('u', function () {
				t.rt(6, '-')
			})
			if (st) {
				st.A(t)
				st.on('stmousedown', function (event) {
					e = event
					t.vX((e.rawX - t.x) / 100, '+')
					t.vY((e.rawY - t.y) / 100, '+')
					if (t.vx > 10) {
						t.vX(10)
					}
					if (t.vy > 10) {
						t.vY(10)
					}
				})
			}
			setInterval(function () {
				t.X(t.vx, '+').Y(t.vy, '+')
				t.rotation = angleInDegrees(t)
			}, 10)
			return t
		}
		PL = 1;
		aA = []
		div = $.d('y').pad(10)
		div.A(
				$.h1('controls'),
				b1 = $.bt('start', function () {
					PL = 1;
					b1.hd();
					b2.sh()
				}),
				b2 = $.bt('stop', function () {
					PL = 0;
					b2.hd();
					b1.sh()
				}).hide(),
				$.bt('sgun', function () {
					sgun(guy)
				})
		)
		boot = $.boot()
		st = createjs.st(800, 600).tick()
		boot.A(
				div,
				st.canvas
		)
		guy = ship(st)
		// kD('s',function(){ $l('bang')})
		// _.times(100,function(){var a=ast();a.a();a.p()})
		// st.tick(function(){ if(PL){ _.each(aA,function(a){  a.u()  })}} )
		sgun(guy)
	}
	function canon() {
		canon = function (box, x, y) {
			var vx, vy, ball
			x = x || box.x || 100
			y = y || box.y || 500
			stage.A(ball = Ball(12).XY(x, y))
			if (box.rotation > 0) {
				vx = 8 * (1 + Math.toRads(box.rotation))
				vy = 16 * (1 - Math.toRads(box.rotation))
			}
			else {
				vx = 8 * (-1 + Math.toRads(box.rotation))
				vy = 16 * (1 + Math.toRads(box.rotation))
			}
			stage.tick(function () {
				vy -= 0.5
				ball.X(vx, '+').Y(vy, '-')
			})
		}
		CANON = function () {
			stage = cjs.stage(1000, 600).tick().A()
			box = Box(20, 100).X(500).B(600)
			stage.A(box)
			kD('l', function () {
				box.rT(4, '-')
			})
			kD('r', function () {
				box.rT(4, '+')
			})
			kD('d', function () {
				box.rotation = 0
			})
			kD('s', function () {
				canon(box)
			})
			setInterval(function () {
				var degs = Math.toRads(box.rotation)
				canon(box, (500 + Math.acos(degs) * 30) + box.x - 540,
						(500 + Math.asin(degs) * 30) + box.y - 540)
			}, 500)
		}
	}
}