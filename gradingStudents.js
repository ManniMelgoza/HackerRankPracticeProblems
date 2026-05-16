/*
* Complete the 'gradingStudents' function below.
* The function is expected to return an INTEGER_ARRAY.
* The function accepts INTEGER_ARRAY grades as parameter.
*
* *HackerLand University has the following grading policy:
*
*Every student receives a  in the inclusive range from  to .
*Any  less than  is a failing grade.
*Sam is a professor at the university and likes to round each student's  according to these rules:
*
*If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
*If the value of  is less than , no rounding occurs as the result will still be a failing grade.
*Examples
*
*round to  (85 - 84 is less than 3)
*do not round (result is less than 38)
*do not round (60 - 57 is 3 or higher)
*
*
*/

let grades = [4,
73,
67,
38,
33,
]
function gradingStudents(grades) {
    // Write your code here
    let roundGrades = [];


    for (let element of grades) {

        if (element >= 0 && element <= 100) {

            let amountNeeded = 5 - element % 5;
            // console.log('amountNeeded', amountNeeded)
            let nextMultiple = element + amountNeeded;
            // console.log('nextMultiples', nextMultiple);

            if(element < 38) {
                roundGrades.push(element)
            } else if (amountNeeded < 3) {
                roundGrades.push(nextMultiple)
            } else {
                roundGrades.push(element)
            }
        }
        else {
            console.log('no vals')
        }
    }
    console.log(roundGrades)
};

console.log(gradingStudents(grades))
