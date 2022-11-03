//exercise 1
let arrNum = [1, 2, 3, 4, 5, 6];
function sum(arr) {
    let cont = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (i % 2 !== 0) {
            console.log(arr[i]);
        }
        cont++;
    }
    return cont;
}
console.log(sum(arrNum));

//exercise 2


let arrOne = ["one", "two", "three", "four"];

function printArray(arr) {
    for (let i = 3; i < arr.length; i--) {
        return arr.slice(0, 4).reverse();
    }
}
console.log(printArray(arrOne));

//exercise 3 


let arr1 = [1, 0, 2, 3, 4];
let arr2 = [3, 5, 6, 7, 8, 13];

function sumArr(firstArr, secondArr) {
    let result = [];

    let maxLength = 0;

    if (firstArr.length > secondArr.length) {
        maxLength = firstArr.length;
    } else {
        maxLength = secondArr.length;
    }

    for (let i = 0; i < maxLength; i++) {
        let num1 = 0;
        let num2 = 0;

        if (firstArr[i]) {
            num1 = firstArr[i];
        }

        if (secondArr[i]) {
            num2 = secondArr[i];
        }

        let pairSum = num1 + num2;
        result.push(pairSum);
    }

    return result;
}

console.log(sumArr(arr1, arr2));

//exercise 4 ??????

const array = [
    "apple",
    "orange",
    "banana",
    "mango",
    "watermelon",
    "grape",
    "peach",
];
let num = "";
function element(arr, num) {
    for (let i = 0; i < arr.length; i++) { }
    return;
}
console.log(element(array, 2));

//exercise 5

let arrUnionOne = [1, 2, 3];
let arrUnionTwo = [100, 2, 1, 10];
let arr3;
function arraysUnion(arr1, arr2) {
    arr3 = arr1.concat(arr2);
    arr3.sort();
    arr3.forEach((element) => {
        for (let i = 0; i < arr3.length; i++) {
            if (arr3[i] === i) {
                delete arr3.indexOf(i);
            }
        }
    });
    return;
}
arraysUnion(arrUnionOne, arrUnionTwo);
console.log(arr3);

//exercise 6

let Object = {
    name: "Daniel",
    surname: "García",
    country: "spain",
}

function deleteKey(person, key) {
    if (person[key]) {
        delete person.key //revisar no funciona sin llamarle directamente a arriba
        return true
    } else {
        return false
    }
}
console.log(deleteKey(Object, 'name'));
console.log(Object);

//exercise 7  ???

let arrOneD = [1, 2, 3]
let arrTwoD = [100, 2, 1, 10]
let arrResult = []

function arrDiferent(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr2.indexOf(arr1[i]) === -1) {
                arrResult.push(arr1[i]);
            }
        }
        for (let i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) === -1) {
                arrResult.push(arr2[i]);
            }
        }
        return arrResult;
    }
}

console.log(arrDiferent(arrOneD, arrTwoD));

//exercise 8

const arrayBidi = [[1, 2], [3, 4, 5, 6], [7, 8, 9], [0]]
// function printElements(arr) {
        // return arr.toString()
// }
const printElements = (arr) => {
        arr.forEach(subArr => {
            subArr.forEach(element => {
                console.log(element);
            });
        });
    }

console.log(printElements(arrayBidi));

//exercise 9

const drinks = [
    {
        name: "Cerveza",
        price: "3.50",
        ingredients: ["cebada", "lúpulo"],
    },
    {
        name: "Coca Cola",
        price: "3.00",
        ingredients: ["desconocido"],
    },
    {
        name: "Vino",
        price: "5.50",
        ingredients: ["uvas", "taninos"],
    },
    {
        name: "Vodka",
        price: "7.00",
        ingredients: ["patata", "agua", "etanol"],
    },
    {
        name: "Whiskey",
        price: "7.00",
        ingredients: ["trigo", "agua", "etanol"],
    },
    {
        name: "Zumo de naranja sin azúcar",
        price: "4.75",
        ingredients: ["naranjas", "aspartamo", "maltitol", "xilitol"],
    }
]

function priceDrinks(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`La bebida ${arr[i].name} tiene un precio de ${arr[i].price} y los siguientes ingredientes: ${arr[i].ingredients}`)
    }
    return
}
console.log(priceDrinks(drinks));

