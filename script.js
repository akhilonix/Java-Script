function calculateGrade(physics, chemistry, maths, english, hindi) {
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

    console.log("Total Marks: " + total + " / 500");
    console.log("Percentage: " + percentage.toFixed(2) + "%");
    console.log("Grade: " + grade);
}

// Pass sample marks directly into the function
calculateGrade(85, 78, 92, 88, 70);