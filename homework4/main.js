// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaRectangle (a, b) {
    return a * b;
}
console.log (areaRectangle (4, 7));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let pi = 3.14;
function areaCircle (pi, r) {
    return pi * r * r;
}
console.log (areaCircle(pi, 4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder (pi, h, r) {
    return 2 * pi * h * r;
}
console.log (areaCylinder(pi, 2, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'Max', username: 'max1997', password: '46fdkJn'},
    {name: 'Tanya', username: 'tanya', password: 'kpkd23kfD'},
    {name: 'Oleh', username: 'oleh_s', password: '111Qrss'},
    {name: 'Sasha', username: 'sasha_1995', password: '345Jmcld'},
    {name: 'Ira', username: 'irochka1', password: 'bbb767fMa'},
    {name: 'Nadia', username: 'nadya', password: '009cmcBn'},
    {name: 'Yaroslav', username: 'slavik20', password: '5Lkdjs7'},
    {name: 'Igor', username: 'igor', password: 'njM78dd'},
    {name: 'Lilya', username: 'lilya30', password: 'mMxk5c'},
    {name: 'Anna', username: 'ania_m', password: 'W11sssv'}
];
function obj (arr) {
    for (const user of arr) {
        console.log (user)
    }
}
obj (users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph (text) {
document.write (`<p>${text}</p>`)
}
paragraph ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sequi?');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list1 (text) {
    document.write (`<ul>`)
    document.write (`<li>${text}</li>`)
    document.write (`<li>${text}</li>`)
    document.write (`<li>${text}</li>`)
    document.write(`</ul>`)
}
list1 ('Hello world');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list (text, number) {
    document.write (`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write (`</ul>`);
}
list ('Good morning!', 6);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayOfElements = [3, 10, 'OK', true, false];
function array (arr) {
    for (const element of arr) {
        document.write(`<ul><li>${element}</li></ul>`);
    }
}
array (arrayOfElements);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let students = [
    {id: 57493, name: 'Yuliia', age: 26},
    {id: 90785, name: 'Oleh', age: 26},
    {id: 78956, name: 'Max', age: 26},
    {id: 46593, name: 'Tanya', age: 26},
    {id: 67409, name: 'Sasha', age: 26}
];
function arrayOfFields (arr) {
    for (let student of arr) {
        document.write(`<div>ID: ${student.id}, name: ${student.name}, age: ${student.age}</div>`);
    }
}
arrayOfFields(students);

// - створити функцію яка повертає найменьше число з масиву

let numbers = [4, 7, 9, 2, 5];
function minimNum (num) {
    let min = numbers[3];
    for (const number of num) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(minimNum(numbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum (arr)
{
    let basket = 0;
    for (const item of arr ) {
        basket = basket + item;
    }
    return basket;
}
console.log (sum ([5, 100, 200]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap (arr, index1, index2) {
//     let oneIndex = arr[index1];
//     let otherIndex = arr[index2];
//     arr[index1] = otherIndex;
//     arr[index2] = oneIndex;
//     return arr;
// }
// console.log (swap ([1, 2, 3, 4, 5], 0, 4));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange (sumUAH, currencyValues, exchangeCurrency) {
for (const item of currencyValues) {
    if (item.currency === exchangeCurrency) {
        return sumUAH / item.value;
    }
}
}
console.log (exchange(80000, [
    {currency:'USD', value:40},
    {currency:'EUR', value:42},
    {currency:'GBP', value:43}
],
    'USD'));

























