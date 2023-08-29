'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const size = arr.length;
    let negative = 0;
    let positive = 0;
    let zero = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            zero ++;
        }else if(arr[i] > 0){
            positive ++;
        }else{
            negative++;
        }
    }
    console.log(
        `${(positive/size).toFixed(6)}
    ${(negative/size).toFixed(6)}
    ${(zero/size).toFixed(6)}`);

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
