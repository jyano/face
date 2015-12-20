b.web = function (shouldKill) {
	
	//when a web is created it gets web.connected=false
	//when it hits certain things and forms a joint, then connected->true
	//then it just dies
	//pressing DOWN should release the most recent of the connectedWebs
	//non connected Webs can be shot off!
	var p = this, w = p.wor(),
			y = p.Y() - 100,
			x = p.X(),
			piece,
			web
	p.webs = p.webs || []
	p.webs.push(web = Web(p, shouldKill))
	piece = web.addPiece(p, web.Piece(x, y))   //add first piece to player
	T(9, function (i) {
		piece = piece.add(web.Piece(x, y - i))
	})  //add rest to each other
	piece.add(
			web.ball = w.circ(x, y - 100, 10, 'd').K('webBall').den(1).rest(0).fric(100))
	return web
	function Web(p, shouldKill) {
		var web = {
			player: p,
			connected: false,
			pieces: [],
			addPiece: function (toWhat, newPiece) {
				w.tightDist(toWhat, newPiece)
				this.pieces.push(newPiece)
				return newPiece
			},
			Piece: function (x, y) {
				var web = this,
						piece = w.ropePiece(x, y).K('webPiece')
				piece.add = function (newPiece) {
					return web.addPiece(this, newPiece)
				}
				return piece
			},
			delPieces: function () {
				_.each(this.pieces, function (piece) {
					piece.kill()
				})
				this.pieces = []
			},
			die: function () {
				var that = this
				this.delPieces()
				this.player.webs = _.reject(this.player.webs, function (web) {
					return that === web
				})
			},
			attach: function (toWhat) {
				this.connected = true
				w.tightDist(toWhat, this.ball)
				return this
			}
		}
		if (shouldKill) {
			shouldKill = N(shouldKill) ? shouldKill : 1000
			setTimeout(function () {
				if (!web.connected) {
					web.die()
				}
			}, shouldKill)
		}
		return web
	}
}