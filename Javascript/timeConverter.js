function processData(input) {
    var timeArray = input.split('');
    var hours = parseInt(timeArray.slice(0,2).join(''))
    var meridian = timeArray.slice(-2).join('');
    if (meridian == 'PM' && hours != 12) {
        hours += 12
    } else if (meridian == 'AM' && hours == 12) {
        hours = '00'
    }
    var leadingZero = '0'
    hours = (leadingZero + hours).slice(-2)
    timeArray.splice(0,2,hours);
    timeArray.splice(-2,2)
    console.log(timeArray.join(''))
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

