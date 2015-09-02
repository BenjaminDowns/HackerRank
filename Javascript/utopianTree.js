'use strict';


function processData(input) {
  var parse_fun = function(s) {
    return parseInt(s, 10);
  };

  var lines = input.split('\n');
  var T = parse_fun(lines.shift());

  var trees = lines.splice(0, T).map(parse_fun);

  for (var tree in trees) {
  	console.log(trees[tree])
    var years = trees[tree]
    trees[tree] = 1
    if (years = 0) {
    	console.log(tree)
    } else if (years % 2 == 0 && years != 0) {
      while (years > 0) {
        trees[tree] *= 2
        years -= 1
        trees[tree] += 1
        years -= 1
      }
    } else {
      while (years > 0) {
        trees[tree] += 1
        years -= 1
        trees[tree] *= 2
        years -= 1
      }
    }
    console.log(trees[tree])
  }

  // logic here
}
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// var _input = "";
// process.stdin.on("data", function (input) { _input += input; });
// process.stdin.on("end", function () { processData(_input); });

processData("3\n4")