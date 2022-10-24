function setup() {
  createCanvas(windowWidth, windowHeight);
  
}
function draw() {
  var r=0
  background(100) ;
  r = mouseX;
 for(let i=0; i<16;i++) {
    stroke("#33E6CC") //產生白色線條
    ellipse(i*100+50,50,100+mouseX/4) ;
stroke(0,0,255) //大圓
    rect(i*100,0,100+mouseX/4)
stroke(255,255,0)
    ellipse(i*100+100,100,50) //小圓
     noFill(0) //不充滿顏色
    stroke(0)
   }
   
   ellipse(50,150,100) ;
  noFill(0)
 for(let i =0; i<16 ;i++){  //迴圈
  stroke("#33E6CC")  //線條顏色
  ellipse(i*100+50,150,100+mouseX/4) //隨著圓滑鼠移動
  stroke (0,255,0)
  rect(i*100,100,100+mouseX/4)
  stroke (0,255,255)
  ellipse(i*100+100,200,50)
  noFill(0)
  stroke(0)
} 
for(let i =0; i<16 ;i++){
  stroke("#33E6CC")
  ellipse(i*100+50,350,100+mouseX/4)
  stroke(0,0,255)
  rect(i*100,300,100+mouseX/4)
  stroke(255,255,0)
  ellipse(i*100+100,400,50)
  noFill(0)
  stroke(0)

} 
for(let i =0; i<16 ;i++){
stroke("#33E6CC")
ellipse(i*100+50,450,100+mouseX/4)
stroke(0,0,255)
rect(i*100,400,100+mouseX/4)
stroke(255,255,0)
ellipse(i*100+100,500,50)
noFill(0)
stroke(0)
}
for(let i =0; i<16 ;i++){
stroke("#33E6CC")
ellipse(i*100+50,550,100+mouseX/4)
stroke(0,0,255)
rect(i*100,500,100+mouseX/4)
stroke(255,255,0)
ellipse(i*100+100,600,50)
noFill(0)
stroke(0)
}
for(let i =0; i<16 ;i++){
stroke("#33E6CC")
  ellipse(i*100+50,650,100+mouseX/4)
  stroke(0,0,255)
  rect(i*100,600,100+mouseX/4)
  stroke(255,255,0)
  ellipse(i*100+100,700,50)
  noFill(0)
  stroke(0)
}
for(let i =0; i<16 ;i++){
  stroke("#33E6CC")
  ellipse(i*100+50,750,100+mouseX/4)
  stroke(0,0,255)
  rect(i*100,700,100+mouseX/4)
  stroke(255,255,0)
  ellipse(i*100+100,800,50)
  noFill(0)
  stroke(0)
}
}