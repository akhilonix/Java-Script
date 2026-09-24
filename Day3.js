let age = 20;
if(age >=18){
    console.log("You cane able to vote")
}
else{
    console.log("You not able to vote")
}


let marks = 80;

if(marks>=75){
    console.log("You are Pass")
}
else{
    console.log("You Fail")
}


let physics = 90;
if(physics>=90){
    console.log("Grade A")
}



const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function calculateGrade() {
    const rl = readline.createInterface({ input, output });

    
    const physics = parseFloat(await rl.question('Enter Physics marks: '));
    const chemistry = parseFloat(await rl.question('Enter Chemistry marks: '));
    const maths = parseFloat(await rl.question('Enter Maths marks: '));
    const english = parseFloat(await rl.question('Enter English marks: '));
    const hindi = parseFloat(await rl.question('Enter Hindi marks: '));

    rl.close(); 


    let total = physics + chemistry + maths + english + hindi;
    let percentage = (total / 500) * 100;
    let grade = "";

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else if (percentage >= 40) {
        grade = "E";
    } else {
        grade = "F (Fail)";
    }

    
    console.log("\n--- RESULT ---");
    console.log("Total Marks: " + total + " / 500");
    console.log("Percentage: " + percentage.toFixed(2) + "%");
    console.log("Grade: " + grade);
}

calculateGrade();