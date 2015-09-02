function processData(input) {
    var allDataArray = input.split("\n")
    allDataArray.shift()

    for (var i = 0; i < allDataArray.length; i += 2) {
    	var roster = allDataArray[i].split(' ')[0]
    	var minAttendance = allDataArray[i].split(' ')[1]
    	var students = allDataArray[i + 1].split(' ');
    	var onTime = 0
    	var late = 0
    	late += (roster - students.length)
    	for (student in students) {
    		students[student] < 0 ? late +=1 : onTime += 1
    		}
    	if (onTime < minAttendance) {
    		console.log("YES")
    	} else {
    		console.log("NO")
    	}
	}
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

processData("2\n4 3\n-1 -3 4 2\n4 2\n0 -1 2 1\n4 3\n-1 -3 4 2\n4 2\n0 -1 2 1")