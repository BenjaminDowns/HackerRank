function processData(input) {
    var datesArray = input.split("\n")
    var returnedDate = datesArray[0].split(' ')
    var dueDate = datesArray[1].split(' ')
    var fine = 0
    if (dueDate[2] < returnedDate[2]) {
        fine = 10000
    } else if (dueDate[2] == returnedDate[2] && dueDate[1] < returnedDate[1]) {
        fine = 500 * (returnedDate[1] - dueDate[1])
    } else if (dueDate[2] == returnedDate[2] && dueDate[1] == returnedDate[1] && dueDate[0] < returnedDate[0]) {
        fine = 15 * (returnedDate[0] - dueDate[0]);
    }
    console.log(fine)
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