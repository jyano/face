// ok so play and draw go together
// draw for functions
// play for apps
// duh

 
BOXES=function(){
    CT(ROW(

        stage=cjs.stage(800,600).tick(),

        $.div('yellow').pad(20).A($.h1('controls'),

            bt('fall',function(){ball.fall(box)}),
            bt('fall+',function(){
                setInterval(newBall,1000)})),

        '+' // ?????!
    ))


    kD('r',function(){box.X(10,'+')})
    kD('l',function(){box.X(10,'-')})

    stage.A(box=Box().XY(300,450))

    stage.A(ball=Ball(40,'red','orange').XY(300,100))

    newBall=function(){

        var ball = Ball(40, 'red', 'orange').XY(_r(600), 100)
        stage.A(ball)
        ball.fall(box)
    }

}
 

 

 

 
canon=function(box, x, y){
    var vx, vy, ball
    x = x || box.x || 100
    y = y || box.y || 500

    stage.A( ball = Ball(12).XY(x,y) )

    if(box.rotation > 0){
        vx = 8 * (1 + Math.toRads(box.rotation))
        vy = 16 * (1 - Math.toRads(box.rotation))}

    else{
        vx = 8*(-1 + Math.toRads(box.rotation))
        vy = 16*(1 + Math.toRads(box.rotation))}

    stage.tick(function(){
        vy -= 0.5
        ball.X(vx, '+').Y(vy, '-')})
}
CANON=function(){
    stage = cjs.stage(1000,600).tick().A()
    box = Box(20,100).X(500).B(600)
    stage.A(box)
    kD('l',function(){box.rT(4, '-')})
    kD('r',function(){box.rT(4, '+')})
    kD('d',function(){box.rotation=0})
    kD('s',function(){ canon(box) })
   setInterval(function(){
       var degs = Math.toRads(box.rotation)
       canon(box, (500 + Math.acos(degs) * 30)+ box.x-540,
           (500 + Math.asin(degs) * 30)+ box.y -540)
   },500)



}





