// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log//

let hello = 'hello';
console.log(hello);
let owu = 'owu';
console.log(owu);
let com = 'com';
console.log(com);
let ua = 'ua';
console.log(ua);
let number1 = 1;
console.log(number1);
let number10 = 10;
console.log(number10);
let nummin999 = -999;
console.log(nummin999);
let number123 = 123;
console.log(number123);
let pi = 3.14;
console.log(pi);
let number2and7 = 2.7;
console.log(number2and7);
let number16 = 16;
console.log(number16);
let bull1 = 'true';
console.log(bull1);
let bull2 = 'false';
console.log(bull2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)//

let firstName = 'Yuliia';
let middleName = 'Ruslanivna';
let lastName = 'Vasylyshyn';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;//

let a = 100;
console.log (typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name1 = prompt('write your first name');
let name2 = prompt('write your middle name');
let age = prompt('write your age');
let user = name1 + name2 + age
console.log (user);