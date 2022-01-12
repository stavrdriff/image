// // alert('Hello');
// let a = 1;
// let b = 2;

// console.log(2019);
// console.log('Hello', "Hello", `Hello`);

// console.log(true, false);

// console.log(null);

// console.log(Symbol());

// console.log({ c:3, d:4, e:5 });

// console.log([{ c:3, d:4, e:5 }, { c:7, d:43, e:51 }]);

// console.clear();

// let objects = [
//    {
//       c:3,
//       d:4,
//       e:5
//    },
//    {
//       c:7,
//       d:43,
//       e:51
//    }
// ]

// objects.forEach(item => {
//    console.log(item.c, item.d, item.e)
// });

// for(item of objects) {
//    console.log(item.c, item.d, item.e)
// }

// let name = 'Tim';

// console.clear();

// let date = new Date(),
//    gmt = 3,
//    hours = date.getUTCHours() + gmt,
//    minutes = date.getUTCMinutes(),
//    seconds = date.getUTCSeconds(),
//    day = date.getUTCDate(),
//    month = date.getUTCMonth() + 1,
//    year = date.getUTCFullYear(),
//    showDate = {hours, minutes, day, month, year};

// console.log(showDate);





// let value = 10;
// // value = String(value);
// // value = true;
// // value = (value).toString();

// console.log(value)
// console.log(typeof value)

// let array = [ hours, minutes, day, month, year ];

// array = String(array)

// console.log(typeof array)

// array = array.toString();

// console.log(typeof array)

// let value = '20';
// value = Number(value % 8);
// value = parseInt('2000 asdsadasd 34 afasfa')
// value = parseFloat('2000 asdsadasd 34 afasfa')

// console.log(value);
// console.log(typeof value);


// const number1 = 10;
// const number2 = 20;
// let value;
// //__________

// value = number1 + number2; // сложение

// value += 100; // value = value + 100;
// value = 13 % 3; // остаток от деления
// value++; // +1 к числу
// value--; // -1 от числа

// value = 0.6 + 0.7; // =1.2999999999999998
// value = +value.toFixed(1) // округление

// value = (0.6 * 10 + 0.7 * 10) / 10; // value = +value.toFixed(1) // округление

// value = Math.PI; // число Пи
// value = Math.random(); // каждый раз возвращает рандомное число от 0 до 1
// value = +value.toFixed(6)
// value = Math.round(251.5); // округление до ближайшего целого числа от 0.1 до 0.4 округление к 0, от 0.5 до 0.9 окгруление к 1
// value = Math.floor(251.5); // округление к меньшему целому числу
// value = Math.ceil(251.5); // округление к большему целому числу




// __________________________________

// let arr = ['black', 'red', 'yellow', 'pink', 'white', 'blue', 'orange', 'green', 'cyan', 'purple'];
// value = Math.round(Math.random() * arr.length)

// console.log(arr[value])
// console.log(value)

// __________________________________



// Task1 Получить число pi из Math и округлить его до 2-х знаков после точки
// let task1 = Math.PI.toFixed(2);
// console.log(task1)

// Task2 Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
// let max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
// console.log(max);

// let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
// console.log(min);

// Task3 Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
// let rand = Math.random().toFixed(2);
// console.log(rand);
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.
// let integer = Math.round(Math.random() * 10);
// console.log(integer);

// Task4 Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
// let task4 = (0.6 + 0.7).toFixed(1);
// console.log(task4);

// Task5 Получить число из строки ‘100$’
// let task5 = parseInt('100$');
// console.log(task5);

//___________________________________

// const firstName = 'Tymofii';
// const lastName = 'Solomatin';
// const age = 38;
// const str = 'Hello, my name is Tim';
// let value;

// value = firstName + lastName;
// console.log(value);
// value = firstName + ' ' + lastName;
// console.log(value);
// value += ' I am ' + age;
// console.log(value);
// value = firstName.length;
// console.log(value);
// value = firstName[0];
// console.log(value);
// value = lastName[lastName.length - 1]; // последний єлемент
// console.log(value);
// value = firstName.toUpperCase(); // все заглавніми
// console.log(value);
// value = firstName.toLowerCase(); // все маленькими
// console.log(value);
// value = firstName.concat(' ', lastName);
// console.log(value);
// value = str.indexOf('m', 10); // поиск символа или набора в строке, старт поиска
// console.log(value);
// value = str.lastIndexOf('m'); // поиск с конца строки
// console.log(value);
// value = str.includes('my'); // поиск с булевім значением
// console.log(value);
// value = str.slice(0, 5) // оставляет в строке от и до
// console.log(value);
// value = str.replace('Tim', lastName) // заменяет значения
// console.log(value);
// value = str.substr(5, 10)
// console.log(value);
// value = str.substring(2, [4])
// console.log(value);


//________________________________________________

// const firstName = 'Tymofii';
// const lastName = 'Solomatin';
// const age = 38;

// let str;

// str = 'Hello my name is ' + firstName + ' ' + lastName;

// str = '<ul>' +
//       '<li>First name: ' + firstName + '</li>' +
//       '<li>Last name: ' + lastName + '</li>' +
//       '<li>Name: ' + age + '</li>' +
//       '</ul>';

// // console.log(str)


// // ES6
// str = `
//       <ul style="list-style: none">
//             <li>First name: ${ firstName }</li>
//             <li>Last name: ${ lastName }</li>
//             <li>Age: ${ age } </li>
//             <li>Math.random: ${ Math.random() } </li>
//       </ul>
//       `;

// document.body.innerHTML = str;



//________________________________________________

// let string = 'some test string';
// console.log(string);

// // Task1 Получить первую и последнюю буквы строки
// let letters = string[0] + ' ' + string[string.length -1];
// console.log('Task1 Получить первую и последнюю буквы строки =', letters);

// // Task2 Сделать первую и последнюю буквы в верхнем регистре
// let uppers = string[0].toUpperCase() + ' ' + string[string.length -1].toUpperCase();
// console.log('Task2 Сделать первую и последнюю буквы в верхнем регистре =', uppers);

// // Task3 Найти положение слова ‘string’ в строке
// let positionWord = string.indexOf('string') + 1;
// console.log('Task3 Найти положение слова `string` в строке =', positionWord);

// // Task4 Найти положение второго пробела (“вручную” ничего не считать)
// let positionSpace = string.indexOf(' ', string.indexOf(' ') + 1) + 1;
// console.log('Task4 Найти положение второго пробела (“вручную” ничего не считать) =', positionSpace);

// // Task5 Получить строку с 5-го символа длиной 4 буквы
// let endSlicedString = string.slice((5-1)).replace(/\s/g, '').slice(0, 4);
// console.log('Task5 Получить строку с 5-го символа длиной 4 буквы =', endSlicedString);

// // Task6 Получить строку с 5-го по 9-й символы
// let slisedString = string.slice((5-1), (9-1));
// console.log('Task6 Получить строку с 5-го по 9-й символы =', slisedString);

// // Task7 Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
// let newString = string.slice(0, string.length - 6);
// console.log('Task7 Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6-и символов) =', newString);

// // Task8 Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
// let a = 20;
// let b = 16;
// let numberString = a.toString() + b.toString();
// console.log(numberString)




//_____________________________________________________________




// let user = {
//   firstName: 'Tymofii',
//   lastName: 'Solomatin',
//   age: 38,
//   isAdmin: true,
//   email: 'stavr.driff@gmail.com',
//   'user-address': {
//     city: 'Odesa',
//     street: 'Pishonivska'
//   },
//   skills: ['html5', 'css3', 'js']
// };

// // console.log(user);

// let value;
// let prop = 'email';
// let skills = 'skills';

// value = user.firstName;
// console.log(value);


// value = user['isAdmin'];
// console.log(value);

// value = user['user-address'];
// console.log(value);

// value = user['user-address'].city;
// console.log(value);

// value = user['user-address']['city'];
// console.log(value);

// value = user[prop];
// console.log(value);

// value = user[skills];
// console.log(value);

// value = user[skills][0];
// console.log(value);

// user.firstName = 'Tim';
// value = user.firstName;
// console.log(value);

// user.info = 'information';
// console.log(user.info);

// user['user-address'].city = 'Kharkiv';
// user['user-address'].street = 'Mar`inska';
// user['user-address'].country = 'Ukraine';
// value = user['user-address'];
// console.log(value);

//____________________________________________________________


// // task1
// let obj = {
  // product: 'iPhone'
// }

// // task2
// obj.price = 1000;
// obj.currency = 'dollar';

// // task3
// obj.details = {model: '', color: ''};

// console.log(obj)




//_____________________________________________________________

// let value;

// value = 1 > 2;
// value = 2 <= 2;
// value = 44 === 44; // true
// value = 44 == '44'; // true
// value = 44 === '44'; // false
// value = 44 != 44; // false
// value = 44 != '44'; // false
// value = 44 !== '44'; // true
// value = 'a' > 'a'; // false
// value = 'a' > 'A'; // false
// value = 'ab' > 'a'; // true
// value = 'b'.charCodeAt();

// console.log(value)


// value = 10;

// if (value === 10){
//   console.log('value: 10')
// } else {
//   console.log('Wrong')
// }

// if (value) {
//   console.log('Yah...')
// } else {
//   console.log('Wrong')
// }

// if (!value || value < 20) {
//   console.log('true')
// } else {
//   console.log('false')
// }

// if (!value && value > 20) {
//   console.log(value)
// } else {
//   console.log('not value')
// }

// value = [];


// if (value.length) {
//   console.log('Full')
// } else {
//   console.log('empty')
// }

// value = 1;

// if (Array.isArray(value)) {
//   console.log('is array')
// } else {
//   console.log('not array')
// }



// let user = {
//   name: 'Tim'
// }

// if (user.name) {
//   console.log(user.name)
// } else {
//   console.log(user)
// }

// if (user.hasOwnProperty('name')) {
//   console.log(user.name)
// } else {
//   console.log(user)
// }

// let age = 20;

// if (age < 16 || age < 65) {
//   console.log(age, 'normal')
// } else {
//   console.log(age, 'false')
// }

// let a = 0 || 'string'; // 'string' - ищет первое правдивое выражение

// let a = 1 && 'string'; // 'string' - ищет первый false или последнее правдивое

// let a = null || 25; // 25 - ищет первый false или последнее правдивое

// let a = null && 25; // null - ищет первый false или последнее правдивое

// let a = null || 0 || 35; // 35 - ищет первое правдивое выражение

// let a = null && 0 && 35; // null - ищет первый false

// console.log(true + undefined)






// let product = {
//   name: 'Яблоко',
//   price: '10$'
// };

// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// product.price = Number(product.price.replace(/[^\d]/g, ''));

// if (product.price >= min && product.price <= max) {
//   console.log(product.name)
// } else {
//   console.log('товаров не найдено')
// }


// let i = 50;

// if (i === 0) {
//   i = 1
// } if (i < 0) {
//   i = 'less then zero'
// } else {
//   i *= 10
// }
// console.log(i)


// let car = {
//   name: 'Lexus',
//   age: 10,
//   create: 2008,
//   needRepair: false
// }
// if (car.age > 5) {
//   console.log('Need Repair');
//   car.needRepair = true;
// } else {
//   car.needRepair = false;
// }


// let item = {
//   name: 'Intel core i7',
//   price: '100$',
//   discount: '15%'
// }

// let itemPrice = Number(item.price.replace(/[^\d]/g, ''));
// let itemDiscount = Number(item.discount.replace(/[^\d]/g, ''));

// if (item.discount){
//   item.priceWithDiscount = itemPrice - (itemPrice / 100 * itemDiscount)
//   console.log(item.priceWithDiscount)
// } else {
//   console.log(itemPrice)
// }


//_______________________________________________________________



// let a = 1;
// let b = 0;

// if (a > 0) {
//   b = a;
// } else {
//   b +=1;
// }

// b = a > 0 ? a : b += 2;


// console.log(`b = ${b}`)

// let color = 'green';
// switch(color) {
//   case 'yellow':
//     console.log(`Color is ${color}`);
//     break;
//   case 'red':
//     console.log(`Color is ${color}`);
//     break;
//   case 'orange':
//     console.log(`Color is ${color}`);
//     break;
//   default:
//     console.log(`Default color ${color}`)
// }

// let a;
// switch(a) {
//   case 'block':
//     console.log('block');
//     break;
//   case 'none':
//     console.log('none');
//     break;
//   case 'inline':
//     console.log('inline');
//     break;
//   default: console.log('other')
// }

// let b = 'hidden';
// b = b === 'hidden' ? 'visible' : 'hidden';


// let c = 0;
// c = c === 0 ? 1 : c < 0 ? 'less then zero' : c * 10;
// console.log(c)





//________________________________________________________________ Циклы


// while , do while, for, for of, for in

// let i = 0;
// while(i++ < 10) { // будет выполнять до тех пор, пока условие будет правдой
//   console.log(i)
// }

// i = 10
// while(i--) {
//   console.log(i)
// }

// i = 10;
// do {
//   i--;
//   console.log(i)
// } while(i > 0)

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log('five')
//     // continue;
//     break;
//   }
//   if (i === 6) {
//     console.log('five')
//     // continue;
//     break;
//   }
//   console.log(i);
// }

// let str = 'hello';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
//   res += str[i];
// }

// console.log(res)

// let colors = ['white', 'black', 'yellow', 'orange']

// for (let i = 0; i < colors.length; i++){
//   console.log(colors[i])
//   colors[i] = colors[i].toUpperCase();
// }
// console.log(colors);



// let users = [
//   {
//     name: 'Tymofii',
//     age: 38
//   },
//   {
//     name: 'Natalya',
//     age: 30
//   },
//   {
//     name: 'Makar',
//     age: 3
//   }
// ];

// let usersNames = {};

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i])
//   usersNames[users[i].name] = users[i];
// }

// for (let user in usersNames){
//   console.log(user)
//   console.log(usersNames[user])
// }

// for (let value of users) {
//   console.log(value)
// }

// console.log(usersNames.Makar)

// let usersObj = {
//   name: 'Tymofii',
//   age: 38
// };

// for (let user in usersObj){
//   console.log(user)
//   console.log(usersObj[user])
// }



// let task1 = 'i am in the easycode'.split(' ');
// let res1 = '';
// for (let word of task1) {
//   res1 += word[0].toUpperCase() + word.slice(1) + ' ';
// }
// console.log(res1)



// let task2 = 'tseb eht ma i';
// let res2 = '';
// for (let i = task2.length - 1; i >= 0; i--){
//   res2 += task2[i]
// }
// console.log(res2)



// let task3 = 10;
// let res3 = 1;
// for (let i = 0; i < 10; i++){
//   res3 += res3 * i
// }
// console.log(res3)



// let task4 = 'JavaScript is a pretty good language'.split(' ');
// let res4 = '';
// for (let word of task4) {
//   res4 += word[0].toUpperCase() + word.slice(1);
// }
// console.log(res4)



// let task5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let res5 = [];
// for (let number of task5){
//   if(number % 2 === 0){
//     res5 = res5 + ' ' + number;
//   }
// }
// console.log(res5.split(' ').slice(1))



// let list = {
//   name: 'denis',
//   work: 'easycode',
//   age: 29
// }
// for (let key in list) {
//   if (typeof list[key] !== "number"){
//     list[key] = list[key].toUpperCase();
//   }
// }
// console.log(list)



//_____________________________________________________________________________



// function sayHello(firstName = 'NoName', lastName = 'NoName') {

//   return `Hello ${firstName} ${lastName}`
// }

// let res = sayHello('Tymofii', 'Solomatin');
// console.log(res)

// let res2 = sayHello('Natalya', 'Solomatina') + '!';
// console.log(res2)

// let res3 = sayHello();
// console.log(res3)

// let x = 10;

// function foo() {
//   let x = 20;
//   console.log(x)
// }

// foo();

// console.log(x)

// const user = {
//   name: 'Tymofii',
//   age: 38
// };

// function getUser(obj) {
//   console.log(obj)
//   obj.name = 'Makar'
//   console.log(obj)
// }

// getUser(user);


// const square = function(x) {
//   return x * x;
// };

// (function(msg) {
//   console.log(msg)
// })('Hello');

// function foo(x) {
//   console.log(x);
//   console.log(arguments);

//   for(let i = 0; i < arguments.length; i++){
//     console.log(arguments[i]);
//   }
// }
// foo(11, 'string', [1, 2, 3])



//______________________________________________________________________________




// function multiply() {
//   let res = 0;
//   if(arguments.length !== 0){
//     res = 1;
//     for(let i = 0; i < arguments.lentgh; i++){
//       res *= arguments[i];
//     }
//     return res;
//   }
//   return res;
// }
// console.log(multiply(2, 4, 5, 6));
// console.log(multiply());



// function reverseString(str = 'denifednu') {
//   let rev = '';
//   if (arguments.length !== 0){
//     for (let i = 0; i < arguments.length; i++) {
//       str = String(arguments[i]);
//       for (let i = str.length - 1; i >= 0; i--) {
//       rev += str[i];
//       }
//     }
//   } else {
//     rev = str;
//   }
//   return rev;
// }

// const reverseString = function (str) {
//   return String(str).split('').reverse().join('');
// }

// const reverseString = function (str) {
//   const temp = String(str);
//   let result = '';
//   for (let idx = temp.length - 1; idx >= 0; idx--) {
//       result += temp[idx];
//   }
//   return result;
// }

// console.log(reverseString('test'));
// console.log(reverseString(''));
// console.log(reverseString(null));
// console.log(reverseString(undefined));
// console.log(reverseString());



// const getCodeStringFromText = function (str) {
//   let temp = String(str).split('');
//   let unicode = '';
//   for (let key in temp){
//     unicode += temp[key].charCodeAt(0) + ' ';
//   }
//   return unicode.trim();
// }

// console.log(getCodeStringFromText());



// function guessTheNumber(num) {
//   if (typeof num !== 'number') {
//     return new Error('Please provide a valid number');
//   }
//   if (num < 0 || num > 10) {
//     return new Error('Please provide number in range 0 - 10');
//   }
//   let temp = Math.ceil(Math.random() * 10);
//   if (num === temp){
//     return 'You win';
//   } else {
//     return 'Try more';
//   }
// }

// console.log(guessTheNumber(3));



//_______________________________________________________________________________________



// const numArr = ['srt', 'STR', 2, 32, 1234, 54, 323];

// let value;

// value = numArr.length;
// value = numArr.indexOf(32);
// value = numArr.push();
// value = numArr.pop();
// value = numArr.unshift(111);
// value = numArr.shift();
// value = numArr.slice(0, 2);
// value = numArr.splice(0, 1);
// value = numArr.reverse();
// value = numArr.concat(numArr);
// value = numArr.join();
// value = 'hello world'.split();



// console.log(value, numArr);
// console.log(value);



// function getArray(num) {
//   if (typeof num !== 'number') {
//     return new Error('Please input number');
//   }
//   let arr = [];
//   for (let i = 1; i <= num; i++){
//     arr.push(i);
//   }
//   return arr;
// }

// console.log(getArray(100));




// function doubleArray(arr) {
//   arr = arr.concat(arr);
//   return arr
// }

// console.log(doubleArray([1,2,3]));



// function changeCollection() {
//   let res = [];
//   for (let i = 0; i <= arguments.length; i++){
//     if(Array.isArray(arguments[i])){
//       let temp = arguments[i].slice();
//       temp.shift();
//       res.push(temp);
//     }
//   }
//   return res;
// }

// console.log(changeCollection([1,2,3], [4,5,6], [7,8,9]))




// const users = [
//   {
//     "_id": "5e36b779dc76fe3db02adc32",
//     "balance": "$1,955.65",
//     "picture": "http://placehold.it/32x32",
//     "age": 33,
//     "name": "Berg Zimmerman",
//     "gender": "male"
//   },
//   {
//     "_id": "5e36b779d117774176f90e0b",
//     "balance": "$3,776.14",
//     "picture": "http://placehold.it/32x32",
//     "age": 37,
//     "name": "Deann Winters",
//     "gender": "female"
//   },
//   {
//     "_id": "5e36b779daf6e455ec54cf45",
//     "balance": "$3,424.84",
//     "picture": "http://placehold.it/32x32",
//     "age": 36,
//     "name": "Kari Waters",
//     "gender": "female"
//   }
// ]


// function filterUsers(arr, key, value) {
//   if (!arr || !key || !value) {
//     return new Error('Error message');
//   }
//   let res = [];
//   for (let item of arr) {
//     for (let keys in item){
//       if (item[keys] === value && keys === key){
//         res.push(item);
//       }
//     }
//   }
//   return res;
// }

// function filterUsers(arr, key, value) {
//   if (!arr || !key || !value) {
//     return new Error('Error message');
//   }
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][key] === value){
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// console.log(filterUsers(users, "name", 36))



// _________________________________________________________________________________________




// function foo () {
//   console.log('hi');
// }

// foo();

// foo.field = 'Tim';

// console.log(foo.field)



// const arr = ['Tim', 'Nata', 'Makar'];

// // [3, 4, 5]

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i].length);
// }

// console.log(newArr);

// let newArr2 = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr2.push(arr[i].toUpperCase());
// }

// console.log(newArr2);


// const names = ['Tim', 'Nata', 'Makar']

// function mapArrey(arr, fn) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(fn(arr[i]));
//   }
//   return res;
// }

// function nameLength (el) {
//   // console.log(el);
//   return el.length;
// }

// console.log(mapArrey(names, nameLength));

// function nameToUpperCase (el) {
//   return el.toUpperCase();
// }

// console.log(mapArrey(names, nameToUpperCase));



// function greeting (firstName) {
//   return function (lastName) {
//     return `Hello, ${firstName} ${lastName}`;
//   }
// }

// // const testGreeting = greeting('Tim');
// // const fullName = testGreeting('Solomatin');

// const fullName = greeting('Tim')('Solomatin');
// // console.log(fullName);

// function question (job) {
//   const jobDictionary = {
//     developer: 'что такое JavaScript?',
//     teacher: 'каой предмет вы ведете?'
//   };
//   return function (name) {
//     return `${name}, ${jobDictionary[job]}`;
//   };
// }

// const developerQuestion = question('developer');
// console.log(developerQuestion('Tim'));

// const teacherQuestion = question('teacher');
// console.log(teacherQuestion('Tim'));







// function firstFunc(arr, fn) {
//   let res = [];
//   res.push(fn(arr));
//   return `New value: ${res}`;
// }

// function handler1(el) {
//   for (let i = 0; i < el.length; i++){
//     el[i] = el[i].slice(0, 1).toUpperCase() + el[i].slice(1, el[i].length);
//   }
//   el = el.join('');
//   return el;
// }

// console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

// function handler2(el) {
//   for (let i = 0; i < el.length; i++) {
//     if (typeof el[i] === 'number'){
//       el[i] = ' ' + el[i] * 10;
//       el[0] = el[0].trim();
//     }
//   }
//   return el + ',';
// }

// console.log(firstFunc([10, 20, 30], handler2));

// function handler3(el) {
//   for (let i = 0; i < el.length; i++){
//     el[i] = ` ${el[i].name} is ${el[i].age}`;
//     el[0] = el[0].trim();
//   }
//   return el + ',';
// }

// console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

// function handler4(el) {
//   for (let i = 0; i < el.length; i++){
//     el[i] = ' ' + el[i].split('').reverse().join('');
//     el[0] = el[0].trim();
//   }
//   return el + ',';
// }

// console.log(firstFunc(['abs', '123'], handler4));



// function every(arr, fn) {
//   if (!Array.isArray(arr)) return new Error('The first argument expected as array');
//   if (!fn || typeof fn !== 'function') return new Error('The second argument expected as function');

//   for (let i = 0; i < arr.length; i++) {
//     if (!fn(arr[i], i, arr)) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(every([1, 20, 38], function (el) {
//   return typeof el === 'number';
// }))



//__________________________________________________________________________________




// function getThis () {
//   console.log(this);
// }

// // getThis();
// // window.getThis();
// // console.log(window.getThis);

// let getPrice = function (currency = '$') {
//   console.log(currency + this.price);
//   return this;
// };

// let getName = function () {
//   console.log(this.name);
//   return this;
// };


// const prod1 = {
//   name: 'Intel',
//   price: 100,
//   getPrice,
//   getName,
//   info: {
//     information: ['2.3gHz'],
//     getInfo: function () {
//       console.log(this)
//     }
//   }
// }

// // prod1.getPrice();
// // prod1.info.getInfo();
// // prod1.getName();

// const prod2 = {
//   name: 'AMD',
//   price: 50,
//   getPrice
// };

// prod2.getName = prod1.getName;
// // prod2.getPrice();

// // prod2.getName();


// let str = 'Hello Tim';
// const reverseStr = str.split('').reverse().join('');
// // console.log(reverseStr);


// const prod3 = {
//   name: 'ARM',
//   price: 200,
//   getPrice,
//   // getName,
// };

// // getPrice.call(prod3, '*');
// // getPrice.apply(prod3, ['*'])

// // prod3.getName().getPrice();


// const getPriceBind = prod3.getPrice.bind(prod3, '*');
// console.log(getPriceBind);
// setTimeout(getPriceBind, 1000);







//______________________________________________________

// const rectangle = {
//   width: 50,
//   height: 60,
//   area: 0,
//   getSquare: function (){
//     if (this.width && this.height) {
//       this.area = this.width * this.height;
//     };
//     return this.area;
//   }
// };

// console.log(rectangle.getSquare());



// //______________________________________________________

// const price = {
//   price: 10,
//   discount: '15%',
//   getPrice: function (){
//     if (this.price) {
//       return this.price;
//     }
//   },
//   getPriceWithDiscount: function (){
//     if (this.discount !== ''){
//       this.discount = Number(this.discount.replace(/[^\d]/g, ''))
//       this.price -= this.price / 100 * this.discount;
//     }
//     return this.price;
//   }
// };
// console.log(price.getPrice()); // 10
// console.log(price.getPriceWithDiscount()); // 8.5



// //______________________________________________________

// let lofty = {
//   height: 10,
//   upHeight: function () {
//     if (this.height) {
//       this.height = this.height + 1;
//     }
//     return this.height;
//   }
// }

// console.log(lofty.upHeight());



// //______________________________________________________

// const numerator = {
//   value: 1,
//   double: function () {
//     if (this.value) {
//       this.value = this.value * 2;
//     }
//     return this
//   },
//   plusOne: function () {
//     if (this.value) {
//       this.value = this.value + 1;
//     }
//     return this
//   },
//   minusOne: function () {
//     if (this.value) {
//       this.value = this.value - 1;
//     }
//     return this
//   }
// }

// console.log(numerator.double().plusOne().plusOne().minusOne())
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3



// //__________________________________________________________


// let apple = {
//     price: 10,
//     count: 3,
//     getTotal: function () {
//       if (this.price && this.count) {
//         return this.price * this.count;
//       };
//     }
//   }

// console.log(apple.getTotal());


// //___________________________________________________________

// let autoParts = {
//   count: 44,
//   price: 17,
// }

// console.log(apple.getTotal.call(autoParts));



// //___________________________________________________________


// let sizes = {
//   width: 5,
//   height: 10
// };
// getSquare = function () {
//   return this.width * this.height;
// };

// console.log(getSquare.call(sizes));



// //__________________________________________________________


// let element = {
//   height: 25,
//   getHeight: function () {
//     return this.height;
//   }
// };

// let getElementHeight = element.getHeight.bind(element);
// console.log(getElementHeight());


//__________________________________________________________



// const plus = (x = 0, y = 0) => x + y;


// const witoutArgs = () => console.log('Hello');
// const singleArg = x => x * 2;
// const moreActions = (a, b) => {
//   a *= 2;
//   b *= 3;
//   return a + b;
// };
// const returnObj = (str = '') => {
//   return {
//     value: str,
//     length: str.length,
//   };
// };

// const returnObjShort = (str = '') => ({
//   value: str,
//   length: str.length,
// });

// const obj = {
//   firstName: 'Tim',
//   age: 38,
//   getFirstName() {
//     console.log(this)
//   },
//   getAgeArrow: null,
//   getAge() {
//     this.getAgeArrow = () => console.log(this);
//   }
// };
// obj.getAge();
// obj.getAgeArrow();




// function sum() {
//   const params = Array.prototype.slice.call(arguments);
//   if (!params.length) return 0;
//   return params.reduce(function (prev, next) { return prev + next; });
// }

// sum(1, 2, 3, 4); // 10
// sum(); // 0



// const sum = (...params) => {
//   if (!params.length) return 0;
//   return params.reduce((prev, next) => prev + next);
// }

// console.log(sum(1, 2, 3, 4)); // 10
// console.log(sum()); // 0



// const convertToObject = (num = 0) => ({
//     value: num,
//     isOdd: Boolean(num % 2)
// });


// let users = [
//   {
//     name: 'Tymofii',
//     year: '1983',
//     age: '38',
//     gender: 'male',
//     company: 'Webget.Agency',
//     email: 'tymofii.wga@gmail.com',
//     phone: '+380961712071',
//     isActive: true,
//     balance: '100',
//     id: 'assfasfafcwwaefewdfcsda'
//   },
//   {
//     name: 'Natalya',
//     year: '1992',
//     age: '30',
//     gender: 'female',
//     company: 'freelance',
//     email: '',
//     phone: '',
//     isActive: false,
//     balance: '100',
//     id: 'assfasfafcwwaefewsfhgfasg'
//   },
//   {
//     name: 'Makar',
//     year: '2008',
//     age: '3',
//     gender: 'male',
//     company: '',
//     email: '',
//     phone: '',
//     isActive: true,
//     balance: '1s0sdf0',
//     id: 'assfasfafcwwaefewfsdgas'
//   },
// ];

// users.forEach((user, i, arr) => {
//   console.log(user, i, arr);
// });

// let usersLess30 = users.filter(user => user.age < 30);
// console.log(usersLess30);

// let activeUser = users.filter(user => user.isActive);
// console.log(activeUser);

// let usersName = users.map((user) => ({name: user.name, gender: user.gender}));
// console.log(usersName);

// let usersBalance = users.reduce((acc, user) => (acc += Number(user.balance.replace(/[^\d]/g, ''))), 0);
// console.log(usersBalance);

// const usersIdObj = users.reduce((acc, user) => {
//   acc[user.id] = user;
//   return acc;
// }, {});
// console.log(usersIdObj);

// const isGender = users.some((user) => user.gender === 'male');
// console.log(isGender)

// const isGenders = users.every((user) => user.gender === 'male');
// console.log(isGenders)

// const isAge = users.some((user) => user.age > 2);
// console.log(isAge)

// const user = users.find(user => user.name === 'Makar');
// console.log(user);

// const letSort = users.sort()
// const namesArr = ['Tymofii', 'Natalya', 'Makar'];
// namesArr.sort();
// console.log(namesArr);

// const numArr = [10, 7, 44, 32];
// numArr.sort((prev, next) => prev - next);
// console.log(numArr);

// users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
// console.log(users);


// const arrTask1 = [1, 2, 3, 5, 8, 9, 10];
// const newArrTask1 = arrTask1.map(num => ({
//   digit: num,
//   odd: num % 2 === 0
// }));



// const arrTask2 = [12, 4, 50, 1, 0, 18, 40];
// arrTask2.some(num => num === 0);



// const arrTask3 = ['yes', 'hello', 'no', 'easycode', 'what'];
// arrTask3.every(word => word.length >= 3);



// const arrTask4 = [
//   {char:"a", index:12},
//   {char:"w", index:8},
//   {char:"Y", index:10},
//   {char:"p", index:3},
//   {char:"p", index:2},
//   {char:"N", index:6},
//   {char:" ", index:5},
//   {char:"y", index:4},
//   {char:"r", index:13},
//   {char:"H", index:0},
//   {char:"e", index:11},
//   {char:"a", index:1},
//   {char:" ", index:9},
//   {char:"!", index:14},
//   {char:"e", index:7}
// ];
// arrTask4.reduce((acc, obj) => {acc[obj.index] = obj.char; return acc}, []).join('');



// const arrTask5 = [[14, 45], [1], ['a', 'c', 'd']];
// arrTask5.sort();




// const arrTask6 = [
//   {cpu: 'intel', info: {cores:2, сache: 3}},
//   {cpu: 'intel', info: {cores:4, сache: 4}},
//   {cpu: 'amd', info: {cores:1, сache: 1}},
//   {cpu: 'intel', info: {cores:3, сache: 2}},
//   {cpu: 'amd', info: {cores:4, сache: 2}}
// ];

// arrTask6.sort((a, b) => a.info.cores - b.info.cores);




// let products = [
//   {title: 'prod1', price: 5.2},
//   {title: 'prod2', price: 0.18},
//   {title: 'prod3', price: 15},
//   {title: 'prod4', price: 25},
//   {title: 'prod5', price: 18.9},
//   {title: 'prod6', price: 8},
//   {title: 'prod7', price: 19},
//   {title: 'prod8', price: 63}
// ];

// let filterCollection = function (arr, minPrice, maxPrice) {
//   return arr.filter(product => product.price > minPrice && product.price < maxPrice).sort((a, b) => a.price - b.price);
// }
// filterCollection(products, 15, 30);



// function getFullName(firstName, lastName) {
//   console.log(firstName, lastName);
//   return function() {
//     return `${firstName} ${lastName}`;
//   }
// }

// const getName = getFullName('Tim', 'Solo');
// console.log(getName());

// function updatedValue(val = 0) {
//   let x = val;
//   return function(num = 0) {
//     return (x += num);
//   };
// }
// const updateVal = updatedValue(2);
// console.log(updateVal(1));
// console.log(updateVal(5))

// function checkCred () {
//   const login = 'test';
//   const password = 'testpass'

//   return{
//     checkLogin(value) {
//       return login === value;
//     },
//     checkPassword(value) {
//       return password === value;
//     }
//   }
// }
// const check = checkCred();
// console.log(check.checkLogin('test'));


// function closureExemple() {
//   const arrOfFunc = [];
//   let value = '';

//   for (let i = 0; i < 10; i++) {
//     value += i;
//     arrOfFunc.push(function() {
//       console.log(value, i)
//     });
//   }
//   return arrOfFunc;
// }
// const res = closureExemple();
// res[0]();
// res[5]();


// function minus (val = 0) {
//   return function (num = 0) {
//     return val -= num;
//   }
// }

// console.log(minus(10)(6)); // 4
// console.log(minus(5)(6)); // -1
// console.log(minus(10)()); // 10
// console.log(minus()(6)); // -6
// console.log(minus()()); // 0




// function multiplyMaker (val = 0){
//   return function (num = 0){
//     return val *= num;
//   }
// };
// const multiply = multiplyMaker(2);
// console.log(multiply(2)); // 4 (2 * 2)
// console.log(multiply(1)); // 4 (4 * 1)
// console.log(multiply(3)); // 12 (4 * 3)
// console.log(multiply(10)); // 120 (12 * 10)



// function stringModule () {
//   let temp;
//   return {
//     setString (str = '') {
//       temp = str.toString();
//       return temp;
//     },
//     getString () {
//       return temp;
//     },
//     getLength () {
//       return temp.length;
//     },
//     getRevers () {
//       return temp.split('').reverse().join('');
//     }
//   }
// }

// let module = stringModule();
// console.log(module.setString('abcde'));
// console.log(module.getString());
// console.log(module.getLength());
// console.log(module.getRevers());




// function calculator() {
//   let temp;

//   return {
//     setDigit (digit = 0) {
//       temp = digit;
//       return this;
//     },
//     getPlus (plus = 0) {
//       temp += plus;
//       return this;
//     },
//     getMultiply (factor = 0) {
//       (temp *= factor).toFixed(2);
//       return this;
//     },
//     getExponentiation (factor = 0) {
//       let res = temp;

//       for (let i = 1; factor > i; i++) {
//         res *= temp;
//       }

//       temp = res;
//       return this;
//     },
//     getDigit () {
//       return temp;
//     }
//   }
// }

// let count = calculator();
// console.log(count.setDigit(10).getDigit()); // 10
// console.log(count.getPlus(5).getDigit()); // 15
// console.log(count.getMultiply(2).getDigit()); // 30

// console.log(count.setDigit(10).getExponentiation(2).getDigit());






// function getFullName (firstName, lastName) {
//   console.log(firstName, lastName);

//   return function() {
//     return `${firstName} ${lastName}`;
//   }
// }

// const getName = getFullName('Tim', 'Solo');
// console.log(getName());


// function counter() {
//   let count = 0;

//   return {
//     increment: () => count++,
//     decrement: () => count--,
//     getCount: () => count,
//   }
// }

// const counter1 = counter();
// counter1.increment();
// counter1.increment();
// counter1.increment();
// const counter2 = counter();
// counter2.increment();
// counter2.decrement();
// counter2.decrement();

// console.log(counter1.getCount(), counter2.getCount())

// //_________________________________________________________________

// function createSumValue (x) {
//   return function (y) {
//     return x + y;
//   }
// }
// // const createSumValue = (x) => (y) => x + y;
// const sumWithFive = createSumValue(5);
// const sum1 = sumWithFive(5);
// const sum2 = sumWithFive(10);

// console.log(sum1, sum2);

//_______________________________________

// const ItemComponent = () => {  };

// const withAPI = (Component) => {
//   const api = new ServiceApi('google.com');

//   return function (props) {
//     return <Component api={api} {...props} />
//   }
// }

// const ItemComponentWithAPI = withAPI(ItemComponent);



let obj1 = {
  name: 'Tim',
};

let obj2 = {
  name: 'Ivan',
  age: 37,
};

let newObj = Object.assign({}, obj1, obj2);
console.log(newObj);
console.log(obj1);
console.log(obj2);
