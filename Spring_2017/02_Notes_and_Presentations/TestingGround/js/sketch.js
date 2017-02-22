// ***** Global variables ***** //
var refugeeTable;
var topRefugeesTable = new p5.Table;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 550;

// ***** Preload function ***** //
function preload(){
	refugeeTable = loadTable('../data/RefugeesUNHCR.csv', 'csv', 'header');
	console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
	createCanvas(800, 3000);
	textSize(12);
	console.log('Setup complete...');
	print(refugeeTable.getRowCount() + ' rows loaded...');
	print(refugeeTable.getColumnCount() + ' columns loaded...');
	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
		maxTotal = max(refugeeTable.getNum(i, 'Total'), maxTotal);
		maxLabel = max(refugeeTable.getString(i, 'Country').length, maxLabel);
	}
	print('Maximum total is ' + maxTotal);
	print('Maximum label length is ' + maxLabel);
	createNewTable();
}

// ****** Create new table function ******** //
function createNewTable(){
	topRefugeesTable.addColumn('Country');
	topRefugeesTable.addColumn('Total');
	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
		var totalRefugees = refugeeTable.getNum(i, 'Total');
		if (totalRefugees >= 100000) {
			var newRow = topRefugeesTable.addRow()
			newRow.setString('Country', refugeeTable.getString(i, 'Country'));
			newRow.setNum('Total', refugeeTable.getNum(i, 'Total'));
		}
	}
	print('New top refugee table created...');
}

function drawCountries(tableName){
	fill(0);
	noStroke();
	textAlign(LEFT, TOP);
	for (var i = 0; i < tableName.getRowCount(); i++) {
		var total = tableName.getNum(i, 'Total');
		var length = map(total, 0, maxTotal, 0, maxLength);
		rect(maxLabel * 5, 2 + 14*i, length, 12);
		text(nfc(total, 0), maxLabel * 5 + length + 5, 14*i);
	}
	textAlign(RIGHT, TOP);
	for (var i = 0; i < tableName.getRowCount(); i++) {
		text(tableName.getString(i, 'Country'), maxLabel * 5 - 5, 14*i);
	}
}

// ***** Draw function ***** //
function draw(){
	background(255);
	// drawCountries(refugeeTable);
	drawCountries(topRefugeesTable);
}
