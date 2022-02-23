function isString(str) {
  return typeof str === "string";
};

function isSymbolPresentInString(str, symbol) {
  if (!isString(str)) return false;
  for (let i = 0; i < str.length; i++) {
      if (str[i] === symbol) return true; 
  }

  return false;
};

console.log(isSymbolPresentInString("abc","a"));
console.log(isSymbolPresentInString("abc","e"));


let str = "hello lol";
function getSymbolIndex(str, symbol) {
  
  if (!isString(str)) return console.error("NOT_STRING");
  for (let a = 0; a < str.length; a++) {
      if (str[a] === symbol) return a; 
  }
  return -1;
}

console.log(getSymbolIndex("hello lol","h"));
console.log(getSymbolIndex("hello lol","l"));
console.log(getSymbolIndex("hello lol","v"));


function getNumberOfEven(n) {
  let num = 0;
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
const colors = ["Azure", "Black", "Coral", "Fuchsia", "Green"]
const arr = [1, 2, 3, 4, 5,];


function forEach(array, callback) {
  for (let b = 0; b < array.length; b++) {
      callback(array[b], b);
  }
};

forEach(colors, arrayOutput => console.log(arrayOutput));


//map:
function map(array, callback) {
  let bufferArray = [];
  for (let n = 0; n < array.length; n++) {
      bufferArray.push(callback(array[n], n));
  }
  return bufferArray;
};

let resultArray = map(arr, arrayOutput => arrayOutput);
console.log(resultArray);

//filter:
function filter(array, callback) {
  let bufferArray = [];
  for (let m = 0; m < array.length; m++) {
      if (callback(array[m], m, array)) {
          bufferArray.push(array[m]);
      }
  }

  return bufferArray;
};

console.log(filter(arr, item => item >= 3));

//every:
function every(array, callback) {
  for (let s = 0; s < array.length; s++) {
      if(callback(array[s], array)) return true;
  }
  return false;
};

console.log(every(arr, item => item === 5));
console.log(every(arr, item => item === 6));

//some:
function some(array, callback) {
  for (let d = 0; d < array.length; d++) {
      if(callback(array[d], array)) return true;
  }
  return false;
};

console.log(some(arr, item => item === 3));
console.log(some(arr, item => item === 6));



