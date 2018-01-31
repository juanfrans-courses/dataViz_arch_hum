console.log('Hello world!')

var name = 'Juan Francisco Saldarriaga'

console.log(typeof(name))

var myList = ["Juan", 23, [4.5, "another string"], "thisIsCrazy"]
console.log(typeof(myList))
console.log(typeof(myList[2][0]))

var firstName = 'Juan';
var completeName = firstName.concat(" Francisco", " Saldarriaga");
alert(completeName);
var myNames = ['Juan', 'Francisco', 'Saldarriaga'];
var fullName = myNames.join(' ');
console.log(fullName);

function myFunction(x1, x2, x3){
  var x4 = x1 * x2 * x3;
  return x4;
}

console.log(myFunction(1,4,5));
