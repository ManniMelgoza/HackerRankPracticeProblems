/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s = 7
 *  2. INTEGER t = 10
 *  3. INTEGER a = 4
 *  4. INTEGER b = 12
 *  5. INTEGER_ARRAY apples = [2, 3, -4]
 *  6. INTEGER_ARRAY oranges = [3, -2, -4]
 */

let s = 7;
let t = 10;
let a = 4;
let b = 12;
let applesArr = [2, 3, -4]
let orangesArr = [3, -2, -4]


function countApplesAndOranges(s, t, a, b, applesArr, orangesArr) {
    // Write your code here
    let orageSamsHouseCount = 0;
    let applesSamsHouseCount = 0;


    for (let apple of applesArr){
        let appleHomeRange = a + apple;

        if (appleHomeRange >= s && appleHomeRange <= t) {
            applesSamsHouseCount++
        }

    }

    for (let orange of orangesArr) {
        let orangeHomeRange = b - orange;
        if (orangeHomeRange <= t && orangeHomeRange >= s) {
            orageSamsHouseCount++;
        }
    }
    console.log(`${applesSamsHouseCount} ${orageSamsHouseCount}`)

}

countApplesAndOranges(s, t, a, b, applesArr, orangesArr)
