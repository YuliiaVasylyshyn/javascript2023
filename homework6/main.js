// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let hw = 'hello world';
let li = 'lorem ipsum';
let js = 'javascript is cool';

let hw1 = hw.length;
console .log(hw1);

let li1 = li.length;
console.log(li1);

let js1 = js.length;
console.log(js1);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let hello = 'hello world';
let lorem = 'lorem ipsum';
let javascript = 'javascript is cool';

let newHello = hello.toUpperCase();
console.log(newHello);

let newLorem = lorem.toUpperCase();
console.log(newLorem);

let newJavascript = javascript.toUpperCase();
console.log(newJavascript);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let bigHello = 'HELLO WORLD';
let bigLorem = 'LOREM IPSUM';
let bigJs = 'JAVASCRIPT IS COOL';

let littleHello = bigHello.toLowerCase();
console.log(littleHello);

let littleLorem = bigLorem.toLowerCase();
console.log(littleLorem);

let littleJs = bigJs.toLowerCase();
console.log(littleJs);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';

// let cleanStr = str.substring(1, 13);
// console.log(cleanStr);

let cleanStr = str.trim();
console.log(cleanStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let string = 'Ревуть воли як ясла повні';

let stringToarray = (str) => str.split(' ');
console.log (stringToarray(string));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0];

let map = numbers.map(number => {
    return number.toString();
})
console.log (map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================

let nums = [11,21,3];
let sortNums = (direction, arr) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a);
    }
    return arr;
};

console.log(sortNums('ascending', nums));
console.log(sortNums('descending', nums));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let spad = coursesAndDurationArray.sort ((a, b) =>{
    return b.monthDuration - a.monthDuration;
    })
console.log(spad);

let course = coursesAndDurationArray.filter(u => u.monthDuration > 5);
console.log(course);

let maP = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration };
});
console.log(maP);

//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================

let cards = [
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'diamond', value: 6, color: 'red'},
    {cardSuit: 'heart', value: 6, color: 'red'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'spade', value: 7, color: 'black'},
    {cardSuit: 'diamond', value: 7, color: 'red'},
    {cardSuit: 'heart', value: 7, color: 'red'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'spade', value: 8, color: 'black'},
    {cardSuit: 'diamond', value: 8, color: 'red'},
    {cardSuit: 'heart', value: 8, color: 'red'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'spade', value: 9, color: 'black'},
    {cardSuit: 'diamond', value: 9, color: 'red'},
    {cardSuit: 'heart', value: 9, color: 'red'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'spade', value: 10, color: 'black'},
    {cardSuit: 'diamond', value: 10, color: 'red'},
    {cardSuit: 'heart', value: 10, color: 'red'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
];

let spadeAce = cards.find(value => value.cardSuit === 'spade' && value.value === 'ace')
console.log(spadeAce);

// Можливий варіант через includes або ===. Це одне й те саме

let six = cards.filter(value => value.value === 6)
console.log(six);

let red = cards.filter(value => value.color === 'red')
console.log(red);

let diam = cards.filter(value => value.cardSuit.includes('diamond'))
console.log(diam);

let clubs = cards.filter(value => value.cardSuit === 'clubs' && [9, 10, 'ace', 'jack', 'queen', 'king'].includes(value.value))
console.log(clubs);

//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================

 let reduce = cards.reduce((accumulator, card) => {
if (card.cardSuit === 'spade') {
    accumulator.spades.push(card);
} else if (card.cardSuit === 'diamond') {
    accumulator.diamonds.push(card);
} else if (card.cardSuit === 'heart') {
    accumulator.hearts.push(card);
} else if (card.cardSuit === 'clubs') {
    accumulator.clubs.push(card);
}
return accumulator;
 }, {
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(reduce);

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let ff = coursesArray.filter((value) => value.modules.includes('sass'));
console.log(ff);
let nn = coursesArray.filter((value) => value.modules.includes('docker'));
console.log(nn);
