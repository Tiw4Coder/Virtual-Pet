//Create variables here
var dog, dogImage;
var happyDog, happyDogImage;
var database;
var foodStock;
var count;


function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImage);
  dog.scale = 0.25;
  database = firebase.database();
  foodStock=database.ref('Food');
    foodStock.on("value",readStock);
    //count = 20
  
}


function draw() { 
  
  if(keyWentDown(UP_ARROW)){
    writeStock();
    dog.addImage(happyDogImage);
  }

    
  

  drawSprites();
  //add styles here
  textSize = 3;
  fill("black");
  stroke(2);
  text("Bones Left: " + count,20,30);


}

function readStock(data){
  foodStock = data.val();
}

function writeStock(x){

  if(count<1){
    count=0;
  }else{
    count=count-1;
  }
  var updatedPosition = database.ref("/");
  updatedPosition.set({
  })
}




