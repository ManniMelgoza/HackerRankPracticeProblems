

function staircase(n) {
    // Write your code here
    let symbol = "";
    for (let i = 0; i < n; i++){
            // console.log(symbol)
            symbol += '#'
            console.log(symbol.padStart(n))
        }

}

console.log(staircase(6))
