var circleSize = 50;

function setup(){
	createCanvas(500,500);
	var i = 0;
	while (i < 100){
		print(i);
		i++;
	}
}

function draw(){
	// background(0, 100, 100);
	if (mouseIsPressed){
		fill(255);
	}
	else {
		fill(0);
	}
	stroke(200, 0, 50);
	strokeWeight(1);
	ellipse(mouseX, mouseY, circleSize, circleSize);
}



























// // ***** Global variables ***** //
// var refugeeTable;
// var maxTotal = 0;
// var maxLabel = 0;
// var maxLength = 550;

// // ***** Preload function ***** //
// function preload(){
// 	refugeeTable = loadTable('../data/RefugeesUNHCR.csv', 'csv', 'header');
// 	console.log('Done loading table...');
// }

// // ***** Setup function ***** //
// function setup(){
// 	createCanvas(800, 3000);
// 	textSize(12);
// 	console.log('Setup complete...');
// 	print(refugeeTable.getRowCount() + ' rows loaded...');
// 	print(refugeeTable.getColumnCount() + ' columns loaded...');
// 	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
// 		maxTotal = max(refugeeTable.getNum(i, 'Total'), maxTotal);
// 		maxLabel = max(refugeeTable.getString(i, 'Country').length, maxLabel);
// 	}
// 	print('Maximum total is ' + maxTotal);
// 	print('Maximum label length is ' + maxLabel);
// }

// // ***** Draw function ***** //
// function draw(){
// 	background(255);
// 	fill(0);
// 	noStroke();
// 	textAlign(LEFT, TOP);
// 	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
// 		var total = refugeeTable.getNum(i, 'Total');
// 		var length = map(total, 0, maxTotal, 0, maxLength);
// 		rect(maxLabel * 5, 2 + 14*i, length, 12);
// 		text(total.toLocaleString('en-US', {minimumFractionDigits: 0}), maxLabel * 5 + length + 5, 14*i);
// 	}
// 	textAlign(RIGHT, TOP);
// 	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
// 		text(refugeeTable.getString(i, 'Country'), maxLabel * 5 - 5, 14*i);
// 	}
// }