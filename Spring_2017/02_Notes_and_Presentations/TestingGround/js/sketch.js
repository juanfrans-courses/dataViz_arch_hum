function setup(){
	createCanvas(800, 800);
	console.log('Setup complete...')
}

function draw(){
	if (mouseIsPressed){
		fill(0);
	}
	else {
		fill(255);
	}
	ellipse(mouseX, mouseY, 50, 50);
}