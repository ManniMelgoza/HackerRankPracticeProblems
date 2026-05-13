/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const arr = [1,3,5,7,9];

function miniMaxSum(arr) {
    // Write your code here
    let sum = arr.reduce((acc, currVal) => acc + currVal, 0)


    let sumMax = Math.min(...arr);
    let sumMin = Math.max(...arr);

    console.log(sumMax)

    let minVal = sum - sumMin;
    let maxVal = sum - sumMax

    console.log(minVal, maxVal);




}

console.log(miniMaxSum(arr))
