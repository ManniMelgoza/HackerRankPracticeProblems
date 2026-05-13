/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    // Write your code here
    let positiveNumbers = 0;
    let negativeNumbers = 0;
    let zeroNumbers = 0;

    for (let element of arr) {
        if (element < 0) {
            negativeNumbers++
        } else if(element > 0) {
            positiveNumbers++
        } else {
            zeroNumbers++;
        }

    }
    console.log((positiveNumbers / arr.length).toFixed(6));
    console.log((negativeNumbers / arr.length).toFixed(6));
    console.log((zeroNumbers / arr.length).toFixed(6));

}

console.log(plusMinus(arr));
