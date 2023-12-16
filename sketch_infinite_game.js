var mario
var opponent, opponentGroup
var obstacle, obstacleGroup
var powerup, powerupGroup
var PLAY=1
var END=0
var gameState="play"
var lvl1bg,lvl1bgImg,mario,mariostandingimg
var invisibleGround,plat1,platImage,plat2,plat2Image,plat1invisible

function preload(){

lvl1bgImg = loadImage("assets/bg1.jpg")  
mariostandingimg= loadImage("assets/Mario_1.png")
platImage = loadImage("assets/ground.PNG")

}
function setup(){
  //   var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  // if (isMobile) {
  //   canW = displayWidth
  //   canH = displayHeight
  //   createCanvas(displayWidth , displayHeight)
  // }
  // else {
  //   canW = windowWidth
  //   canH = windowHeight
  //   createCanvas(windowWidth, windowHeight)

  // }

  createCanvas(windowWidth,windowHeight)




  // create Background


  lvl1bg = createSprite(width/2,height/2, width*5, displayHeight)
  lvl1bg.addImage(lvl1bgImg)

  invisibleGround = createSprite(0,600,500000,20)
  invisibleGround.visible = false
  
  mario = createSprite(100,300,10,10)
  mario.addImage("standImg",mariostandingimg)
  mario.scale = 0.5

  // ground=createSprite(width/2,height/2,width,20) 
  // ground.addImage(lvl1bgImg)
  // ground.x=lvl1bg.width/2


  // invisibleGround = createSprite(width/2,height-20,width,20)

plat1=createSprite(225,450,50,20)
plat1.addImage(platImage)
plat1.setCollider("rectangle",0,0,width/3.2,height/4.5)
plat1.scale=0.5
plat1.debug=true

// plat1invisible=createSprite(50,50,200,20)
// plat1invisible.visible=false


plat2=createSprite(485,320,50,20)
plat2.addImage(platImage)
plat2.setCollider("rectangle",0,0,width/3.2,height/4.5)
plat2.scale=0.5
plat2.debug=true


plat3=createSprite(100,320,50,20)
plat3.addImage(platImage)
plat3.setCollider("rectangle",0,0,width/3.2,height/4.5)
plat3.scale=0.5
plat3.debug=true


plat4=createSprite(750,320,50,20)
plat4.addImage(platImage)
plat4.setCollider("rectangle",0,0,width/3.2,height/4.5)
plat4.scale=0.5
plat4.debug=true







}

function draw(){
   background(lvl1bgImg)
if (gameState=="play"){
 
  camera.x = mario.x+220
  mario.collide(invisibleGround)
  mario.collide(plat1)
  mario.collide(plat2)
  mario.collide(plat3)
  mario.collide(plat4)
  console.log(plat1.y, plat2.y, plat3.y, plat4.y)
  console.log(mario.y)

  if(mario.isTouching(plat1invisible)){
    mario.y=plat1.y
  }

// if(mario.y<=50){
//   mario.velocityY += 1.5
// }
  

  if(keyDown("RIGHT_ARROW")){
    mario.x +=5
  }

  if(keyDown("LEFT_ARROW")){
    mario.x -=5
  }
  if(keyDown("UP_ARROW")){
    // mario.y -=5
    mario.velocityY=-5
  }
  if(keyDown("DOWN_ARROW")){
    mario.y +=5
  }

  // add gravity
  mario.velocityY += 0.8

}


    



drawSprites()

}



function windowResized() {

    resizeCanvas(windowWidth, windowHeight)
  }


  //homework: remove all the backgrounds for images and add in a new background. 
  // Make movement
  //add enemies