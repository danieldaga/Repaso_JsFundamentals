//exercise 1

let arrNum = [1, 2, 3, 4, 5, 6];
function sum(arr) {
    let cont = 0
    for (let i = 0; i < arr.length-1; i++) {
        if (i % 2 !== 0) {
            console.log(arr[i]);
        }
        cont ++
    }
    return cont
}
console.log(sum(arrNum));

//exercise 2

let arrOne = ['one', 'two', 'three', 'four']

function printArray(arr) {
    for (let i = 3; i < arr.length; i--) {
        return arr.slice(0, 4).reverse()
    }
}
console.log(printArray(arrOne));

//exercise 3


