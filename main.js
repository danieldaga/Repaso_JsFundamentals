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

//exercise 3 ??

let array1 = [1,0,2,3,4]
let array2 = [3,5,6,7,8,13]
function sumArray(array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        console.log(array1[i] + array2[i]); 
    }
    return 
}
console.log(sumArray(array1, array2));

//exercise 4

// const array = ["apple", "orange", "banana", "mango", "watermelon", "grape", "peach"];

// function element(arr,num) {
//     for (let i = 0; i < arr.length; i++) {
        
//     }
//     return
// }
// console.log(element(array, 2));


