// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let areaR = (a, b) => a * b;
console.log(areaR(4, 5));



// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let pI = 3.14;
let areaC = (r) => Math.PI * r ** 2;
console.log(areaC(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let areaCyl = (r, h) => (r + h) * r * 3.14;
console.log(areaCyl(2, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент

let array = (arr) => {
    for (const item of arr) {
        console.log (item);
    }
}
array (['Kit', 'Pes', 4, true]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let par = (text) => {
    document.write(`<p>${text}</p>`)
}
par ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda consequuntur eligendi eos eveniet exercitationem ipsum maxime mollitia nam nemo quo ratione reprehenderit rerum soluta, tempore ullam veritatis voluptatum?');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let parag = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li><li>${text}</li><li>${text}</li>`);
    document.write(`<ul>`);
}
parag ('world !');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let paragraph = (text, amount) => {
    document.write(`<ul>`)
    for (i = 0; i < amount; i++) {
        document.write(`<li>${text}</li>`)
    }
        document.write(`</ul>`);
};
paragraph('hello', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayOfElements = [3, 10, 'OK', true, false];
let aar = (arr) => {
    document.write(`<ul>`)
    for (const element of arr) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`)
}
aar (arrayOfElements);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let students = [
    {id: 57493, name: 'Yuliia', age: 26},
    {id: 90785, name: 'Oleh', age: 26},
    {id: 78956, name: 'Max', age: 26},
    {id: 46593, name: 'Tanya', age: 26},
    {id: 67409, name: 'Sasha', age: 26}
];

let ara = (arr) => {
    for (const item of arr) {
        document.write(`<div>${item.id}, ${item.name}, ${item.age}</div>`)
    }
}
ara(students);

// - створити функцію яка повертає найменьше число з масиву

let numbs = [5, 8, 3, 14];
let fMin = (arr) => {
    let min = numbs[2];
    for (const element of arr) {
        if (element < min) {
            min === element;
        }
            }
    return min;
}
console.log(fMin(numbs));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let basket = 0;
    for (const item of arr ) {
        basket = basket + item;
    }
    return basket;
}
console.log (sum ([1, 100, 200]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr, index1, index2) => {
//     let oneIndex = arr[index1];
//     let otherIndex = arr[index2];
//     arr[index1] = otherIndex;
//     arr[index2] = oneIndex;
//     return arr;
// }
// console.log (swap ([1, 2, 3, 4, 5], 0, 4));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
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
















