userName = prompt("Как тебя зовут?");
age = prompt("Какого ты года рождения?");
alert(userName + " " + ("2022" - age));

const a = Number(prompt("Ширина"));
console.log(a);

const b = Number(prompt("Высота"));
console.log(b);

const c = Number(prompt("Толщина"));
console.log(c);

const sum = a + b + c;
console.log(sum);

a % 2 === 0 ? console.log("a is even") : null;
b % 2 === 0 ? console.log("b is even") : null;
c % 2 === 0 ? console.log("c is even") : null;

const average = (a + b + c) / 2;
console.log(average);

const numeral = Number (46539)
console.log(numeral);

let n = 46539;

let n1 = n % 10;
n /= 10;
n = Math.floor(n);
let n2 = n % 10;
n /= 10;
n = Math.floor(n);
let n3 = n % 10;
n /= 10;
n = Math.floor(n);
let n4 = n % 10;
n /= 10;
n = Math.floor(n);
let n5 = n % 10;
n /= 10;
n = Math.floor(n);
console.log(n5 + " " + n4 +" " + n3 + " " + n2 + " " + n1);