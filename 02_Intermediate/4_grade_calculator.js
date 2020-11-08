let getMyGrade = function (currentMarks, totalMarks) {

    if (typeof currentMarks != Int16Array && typeof totalMarks != Int16Array)
        return "Paramerters passed are not type of integers";
    let myPercent = (currentMarks / totalMarks) * 100

    let myGrade = ''

    if (myPercent >= 100) {
        myGrade = 'A';
    } else if (myPercent >= 80) {
        myGrade = 'B';
    } else if (myPercent >= 60) {
        myGrade = 'C';
    } else {
        myGrade = 'F';
    }

    return `Your grade is ${myGrade} with percentage ${myPercent}`
}


console.log(getMyGrade("a", 100));