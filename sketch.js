let car, wall, button, wallimg;
let speed, weight;
let carblue, carred, carblack, caryellow, cargreen, carwhite;
let go, wait;
let num= 1;
let num1= 0;
let deformationcalc;
let remark, remarkimg;

function preload(){
  carblue= loadImage("bluecar.png");
  carred= loadImage("redcar.png");
  carblack= loadImage("blackcar.png");
  cargreen= loadImage("greencar.png");
  carwhite= loadImage("whitecar.png");
  caryellow= loadImage("orangecar.png");
  wallimg= loadImage("wall.png");
  go= loadImage("go.png");
  wait= loadImage("wait.png");
  remarkimg= loadImage("remark.png");
}

function setup() {
  createCanvas(1080,400);
  button= createSprite(windowWidth*0.05,windowHeight*0.08);
  button.addImage("go", go);
  button.addImage("wait", wait);
  button.scale= 0.4;
  wall= createSprite(1050, 200);
  wall.addImage("wall", wallimg);
  wall.debug= false;
  button.debug= false;
  remark=createSprite(100,345);
  remark.addImage("instructions", remarkimg);
  remark.scale=0.5;
}



function draw() {
  background(0);
  if(num1>0){
  istouching();
  }
  buttonfun();
  drawSprites();
}

function buttonfun(){
  if(mousePressedOver(button)&&num===1) {
    speed= Math.round(random(55,90));
    weight= Math.round(random(400,1500));
    car=createSprite(Math.round(random(100,300)),Math.round(random(100,300)),30,30);
    car.debug=false;
    num1=num1+1;
    let img=Math.round(random(1,3));
    switch(img){
      case 1:car.addImage("blue", carblue);
      break;
      case 2:car.addImage("black",carblack);
      break;
      case 3:car.addImage("white",carwhite);
      break;
    }
    car.addImage("green",cargreen);
    car.addImage("red",carred);
    car.addImage("yellow",caryellow);
    car.velocityX =speed;
    button.changeImage("wait");
    num=0;
    resetnum();
  }
}

function resetnum(){
  setTimeout(reset,2000);
}

function reset(){
  num=1;
  button.changeImage("go");
  console.log("helo");
}

function istouching(){
   if(wall.x - car.x <= (car.width+ wall.width)/2){
     car.velocityX=0;
     car.lifetime=2;
     deformation();
    }
}

function deformation(){
  deformationcalc=0.5*weight*speed*speed/22500;
  deformationresult();
}

function deformationresult(){
  if(deformationcalc<=100){
    car.changeImage("green");
  }
  if(deformationcalc>100&&deformationcalc<180){
    car.changeImage("yellow");
  }
  if(deformationcalc>=180){
    car.changeImage("red");
  }
  console.log(deformationcalc);
}