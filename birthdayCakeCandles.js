/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 *
 *Approach 2 (most efficient)

Research:

single-pass loop
conditional counting

Conceptual flow:
While looping:

track current tallest height
track count of tallest

If you find:

a taller candle → reset count to 1
equal height → increment count

This avoids:

* creating an object
* creating extra arrays
* multiple passes
*
This is usually considered the most optimal solution algorithmically.
 *
 *
 *
 *
 *
 *
 */

let candles = [3,2,1,3];

function birthdayCakeCandles(candles) {
    // Write your code here
    let candleObj = {};

    for (let element of candles) {

        candleObj[element] = (candleObj[element] || 0) + 1
    }

    const objValues = Object.values(candleObj);
    const maxValue = Math.max(...objValues)

console.log(maxValue)
};


console.log(birthdayCakeCandles(candles));
