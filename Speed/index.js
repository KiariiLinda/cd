const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pointDemerits(speed) {
    
    const speedLimit = 70;

    const kmPerPointDemerit = 5;
 const licenseSuspension = 12;

    switch (true) {
        case (speed <= speedLimit):
            return "Ok";
        default:
            const demeritPoints = Math.floor((speed - speedLimit) / kmPerPointDemerit);
            if (demeritPoints > licenseSuspension) {
                return "License suspended";
            } else {
                return "Points: " + demeritPoints;
            }
    }
}

rl.question("Enter your speed (in km/hr): ", (speedInput) => {
    const speed = parseFloat(speedInput);

    if (!isNaN(speed)) {

        console.log("You are going at " + speed + " km/hr\nYou have received, \n" + " as Demerits point" + pointDemerits(speed) );
    } else {
        console.log("Invalid input. Please enter a valid number for speed.");
    }

    rl.close();
});
