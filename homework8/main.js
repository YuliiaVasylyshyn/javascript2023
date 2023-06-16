// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User (1, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500),
    new User (3, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500),
    new User (2, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500),
    new User (10, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500),
    new User (9, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500),
    new User (6, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500),
    new User (7, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500),
    new User (5, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500),
    new User (8, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500),
    new User (4, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500)
]

console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let fUsers = users.filter((u) => u.id %2 === 0)
console.log(fUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsers = users.sort ((a, b) => a.id - b.id)
console.log(sortUsers);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500, ['fruit']),
    new Client(1, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500, ['meat', 'fish', 'pepper']),
    new Client(1, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500, ['chocolate', 'candies']),
    new Client(1, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500, ['cake']),
    new Client(1, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500, ['fruit', 'vegetables', 'mushrooms', 'water']),
    new Client(1, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500, ['letuce']),
    new Client(1, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500, ['bread', 'butter']),
    new Client(1, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500, ['jogurt']),
    new Client(1, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500, ['paper']),
    new Client(1, 'Yuliia', 'Vasylyshyn', 'yuliia@gmail.com', 380637841500, ['nuts', 'toothpaste'])
]
console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let fClients = clients.sort ((a, b) => a.order.length - b.order.length)
console.log(fClients);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

function Car (model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function () {
        for (const item in this) {
            if (typeof this[item] !== 'function')
            console.log(`${item} --- ${this[item]}`);
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }

}

let car = new Car ('Korea', 'Japan', 2005, 200, 2.6);
console.log(car);
car.increaseMaxSpeed(50);
car.changeYear(2000);
car.addDriver({name: 'Marta', age: 35})
car.drive();
car.info();



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info = function () {
//         console.log(`------- INFO -------`);
//         console.log(`model: ${this.model}`);
//         console.log(`producer: ${this.producer}`);
//         console.log(`year: ${this.year}`);
//         console.log(`maxSpeed: ${this.maxSpeed}`)
//         console.log(`volume: ${this.volume}`);
//         console.log(`drivers: ${JSON.stringify(this.driver)}`);
//         console.log(`------- INFO -------`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         newSpeed = this.maxSpeed + newSpeed;
//         this.maxSpeed = newSpeed < 0 ? 0 : newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver = {name: 'Andrik', age: 77}) {
//         this.driver = driver;
//     }
// }
//
// const car = new Car('x6', 'BMW', '2008', 120, 5.2);
// car.drive()
// car.info()
// car.increaseMaxSpeed(300)
// car.info()
// car.changeYear(2023)
// car.info()
// car.addDriver({name: 'Dima', age: 65});
// car.addDriver({name: 'Maksym', age: 6});
// car.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Popelushka extends Human {
    constructor(name, age, foot) {
        super(name, age);
        this.foot = foot;
    }
}

class Prince extends Human {
    constructor(name, age, boot) {
        super(name, age);
        this.boot = boot;
    }
    findPrincess1(arr) {
        // arr = arr.sort((a, b) => a.age - b.age);
        for (const princess of arr) {
            if (princess.foot === this.boot) {
                return princess;
            }
        }
    }
    findPrincess2(arr) {
        return arr
            .sort((a, b) => a.age - b.age)
            .find((princess) => princess.foot === this.boot);
    }
}

const popelArr = [
    new Popelushka('Sabrina', 57, 46),
    new Popelushka('Alina', 22, 36),
    new Popelushka('Tamara', 17, 45),
    new Popelushka('Anna', 17, 37),
    new Popelushka('Inna', 30, 38),
    new Popelushka('Rita', 30, 39),
    new Popelushka('Olga', 17, 39),
    new Popelushka('Irina', 18, 34),
    new Popelushka('Oksana', 25, 35),
    new Popelushka('Tanya', 29, 40),
];
const prince = new Prince('Sergey', 17, 39);
console.log(prince.findPrincess1(popelArr));
console.log(prince.findPrincess2(popelArr));







