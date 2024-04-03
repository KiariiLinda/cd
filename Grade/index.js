const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gradeCalculated(marks) {

 let grade = null ;
    
    switch (true) {
        case marks > 79 && marks <= 100:
            grade = "A";
            break;
        case marks >= 60 && marks <= 79:
            grade = "B";
            break;
        case marks >= 50 && marks <= 59:
            grade = "C";
            break;
        case marks >= 40 && marks <= 49:
            grade = "D";
            break;
        case marks >= 0 && marks < 40:
            grade = "E";
            break;
        default:
            grade = "Invalid input. Marks should be between 0 and 100.";
    }

    return grade;
}

read.question("Enter student marks (between 0 and 100): ", function(marks) {
    marks = parseInt(marks);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Marks should be between 0 and 100.");
    } else {
        const grade = gradeCalculated(marks);
        console.log("Grade:", grade);
    }

    read.close();
});