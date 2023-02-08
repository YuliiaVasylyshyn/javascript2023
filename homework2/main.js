// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let students = ['Maria', 'Andriy', 'Dima', 'Vira', 'Katya', 'Roman', 5, -150, true, false,];
console.log (students[0]);
console.log(students[1]);
console.log(students[2]);
console.log (students[3]);
console.log(students[4]);
console.log(students[5]);
console.log (students[6]);
console.log(students[7]);
console.log(students[8]);
console.log (students[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'It',
    pageCount: 650,
    genre: 'horror'
};

let book2 = {
    title: 'Crooked house',
    pageCount: '243',
    genre: 'detective'
};

let book3 = {
    title: 'Gone with the wind',
    pageCount: '243',
    genre: 'classic'
};

console.log(book1, book2, book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let bookOne = {
    title: 'Horrors',
    pageCount: 610,
    genre: 'horror',
    authors: [
        {name: 'Stephen King', age: 75},
        {name: 'Jay Anson', age: 42},
        {name: 'Howard Lovecraft', age: 46}
    ]
};

let bookTwo = {
    title: 'Detectives',
    pageCount: '575',
    genre: 'detective',
    authors: [
        {name: 'Jo Nesbo', age: 62},
        {name: 'Agatha Christie', age: 85},
        {name: 'Edgar Allan Poe', age: 40}
    ]
};

let bookThree = {
    title: 'Poems',
    pageCount: '243',
    genre: 'poem',
    authors: [
        {name: 'Lesya Ukrainka', age: 42},
        {name: 'Vasyl Simonenko', age: 28},
        {name: 'Sergiy Zhadan', age: 48}
    ]
};

console.log (bookOne);
console.log (bookTwo);
console.log (bookThree);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

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

console.log (users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);

// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;
if (x !== 0) {
    console.log ('Virno');
} else {
    console.log('Nevirno');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 55;

if (time > 0 && time <= 15) {
    console.log ('1 quarter');
} else if (time > 15 && time <= 30) {
    console.log ('2 quarter');
} else if (time > 30 && time <= 45) {
    console.log ('3 quarter');
} else if (time > 45 && time <= 60) {
    console.log ('4 quarter');
} else {
    console.log ('???');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 15;
if (day > 0 && day <= 10) {
    console.log ('1 decada');
} else if (day > 10 && day <= 20) {
    console.log ('2 decada');
} else if (day > 20 && day <= 31) {
    console.log ('3 decada');
} else {
    console.log ('Error!');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let number = +prompt ('Enter the number of the day');
switch (number) {
    case 1:
        console.log ('Monday');
        break;
    case 2:
        console.log ('Tuesday');
        break;
    case 3:
        console.log ('Wednesday');
        break;
    case 4:
        console.log ('Thursday');
        break;
    case 5:
        console.log ('Friday');
        break;
    case 6:
        console.log ('Saturday');
        break;
    case 7:
        console.log ('Sunday');
        break;
    default:
        console.log ('Error');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = 7;
let num2 = 7;
if (num1 > num2) {
    console.log (num1)
} else if (num1 < num2) {
    console.log (num2);
} else if (num1 === num2) {
    console.log ('Equal numbers');
} else {
    console.log ('Error');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//;

let y = NaN || 'default';
console.log (y);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5 ) {
    console.log ('Super');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log ('Super');
}
if (coursesAndDurationArray[2].monthDuration > 5 ) {
    console.log ('Super');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log ('Super');
}
if (coursesAndDurationArray[4].monthDuration > 5 ) {
    console.log ('Super');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log ('Super');
}
