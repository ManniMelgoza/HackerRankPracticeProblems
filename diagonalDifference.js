/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 3]
];

function diagonalDifference(matrix) {
    // Write your code here
    let leftDiagnalSum = 0;
    let rightDiagnalSum = 0;

    for (let i = 0; i < matrix.length; i++){
        leftDiagnalSum += matrix[i][i];
        rightDiagnalSum += matrix[i][matrix.length - 1 - i];

    }

    let differenceSum = leftDiagnalSum - rightDiagnalSum;
    return Math.abs(differenceSum);

};

console.log(diagonalDifference(matrix))
