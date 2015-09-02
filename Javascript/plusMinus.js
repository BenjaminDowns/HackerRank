function processData(input) {
  var entries = input.split('\n')[0]
  var entrants = input.split('\n')[1].split(' ');
  var negatives = 0;
  var positives = 0;
  var zeroes = 0;

  i = entrants.length - 1

  while (i > -1) {
    if (entrants[i] < 0) {
      negatives += 1
    } else if (entrants[i] > 0) {
      positives += 1
    } else {
      zeroes += 1
    }
    i--
  }

  var negativesRatio = ((negatives / entries).toFixed(3));
  var positivesRatio = ((positives / entries).toFixed(3));
  var zeroesRatio = ((zeroes / entries).toFixed(3));

  console.log(positivesRatio + "\n" + negativesRatio + "\n" + zeroesRatio)
}

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function(input) {
//   _input += input;
// });

// process.stdin.on("end", function() {
//   processData(_input);
// });

processData("6\n-4 3 -9 0 4 1")