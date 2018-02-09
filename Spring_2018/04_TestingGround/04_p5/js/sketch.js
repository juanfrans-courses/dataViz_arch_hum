console.log('Is this working??????');

function setup(){
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100, 1);
  print('Setup complete...');
}

function draw(){
  background(100, 200, 50);
  if (mouseIsPressed){
    fill(255, 0, 0, 0.5);
  }
  else{
    fill(255);
  }
  for (var i = 0; i < 10; i++){
    for (var j = 0; j < 10; j++){
      ellipse(mouseX + 30 * i, mouseY + 30 * j, 20, 20);
    }
  }
}
