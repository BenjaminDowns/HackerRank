function processData(input) {
    var integers = input.split('\n')[1].split(' ');
    var sum = integers.reduce(function(prevNum, nextNum) { return parseInt(prevNum) + parseInt(nextNum) } );
    console.log(sum)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
