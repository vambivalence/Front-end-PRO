one = Number(prompt("Введите первое число:"));
two = Number(prompt("Введите второе число:"));
console.log(one, two);

one>two ? console.log(one + ">" + two) : console.log(one + "<" + two);

const r1 = 20;
const r2 = 30;
console.log(r1, r2);

r1>r2 ? console.log(r1 + ">" + r2) : console.log(r1 + "<" + r2);


let n = 18964523;

let n1 = n % 10;
n /= 10;
n = Math.floor(n);
console.log(n1);

if (n1 % 2 === 0) {
    console.log("Последнее число четное")
} else {
    console.log("Последнее число нечетное")
}


const nameUser = prompt("Укажите своё имя")
console.log (nameUser)
const age = +prompt("Укажите свой возраст");
console.log (age)

const drinkAlcohol = confirm("Алкоголь употребляем?");
if (drinkAlcohol === false) {
    console.log (nameUser + ", " + "Так держать");
} else if (drinkAlcohol === true && age < 18) {
    console.log (nameUser + ", " +  "Ты что?! Маме расскажу!");
} else if (drinkAlcohol === true && age >= 18 && age <= 40) {
    console.log (nameUser + ", " +  "Только водку с пивом не мешай...");
} else if (drinkAlcohol === true && age > 40) {
    console.log (nameUser + ", " +  "Не злоупотребляйте");
};






