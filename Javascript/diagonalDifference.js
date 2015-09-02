function processData(input) {
  var dimensions = parseInt(input.split("\n")[0]);
  var inputLine = 1;
  var matrix = [];
  var firstDiagonalSum = 0
  var secondDiagonalSum = 0
  
  while (inputLine <= dimensions) {
    matrix.push(input.split("\n")[inputLine].split(' '));
    inputLine++;
  }

  for (var i = 0; i <= dimensions - 1; i++) {
    firstDiagonalSum += parseInt(matrix[i][i])
  }

  var row = 0

  for (var column = dimensions - 1; column >= 0; column--) {
    console.log("column IS NOW " + column + " and row is " + row)
    secondDiagonalSum += parseInt(matrix[row][column])
    row++
  }

  var difference = Math.abs(firstDiagonalSum - secondDiagonalSum);
  console.log(difference)

}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

