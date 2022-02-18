function isSymbolPresentInString(str,symbol) {
    str = "abc";
    if (~str.indexOf(symbol)) {
     console.log ("true");
   } else {
     console.log ("false")
   }
   return;
};
isSymbolPresentInString("abc","a");
isSymbolPresentInString("abc","e");


function getSymbolIndex(str,symbol){
    str = "hello lol";
    console.log(str.indexOf(symbol));
    return;
};

getSymbolIndex("hello lol","h");
getSymbolIndex("hello lol","l");
getSymbolIndex("hello lol","v");

 
function getNumberOfEven(n) {
    num = 0;
    while (n) {
      num += n % 2 === 0;
      n = Math.floor(n / 10);
    }
    return num;
};

console.log(getNumberOfEven(223344));
console.log(getNumberOfEven(111));


//Написать собственную реализацию функций forEach, map, filter, some, every. Каждая функция должна принимать два аргумента - массив и callback. Все функции, кроме forEach, должны вернуть результат. 


//forEach:
let colors = ["Azure", "Black", "Coral", "Fuchsia", "Green"]

colors.forEach(function(item, i, colors) {
    console.log( i + ": " + item);
  });

//map:

let names = ['HTML', 'CSS', 'JavaScript'];

let nameLengths = names.map(function(name) {
  return name.length;
});

console.log(nameLengths);

//filter:

let arr = [1, -1, 2, -2, 3, 4, -5];

let positiveArr = arr.filter(function(number) {
  return number > 0;
});

console.log(positiveArr);

//every:

let fives = [5, 5, 5, 6, 5, 5];
result = fives.every(function(five) {
  return five === 5;
});

console.log(result);

//some:

let nums = [10, 20, 30, 40, 50];
result = nums.some(function(num) {
  return num < 30;
});

console.log(result);



