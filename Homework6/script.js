//Написать функцию copy(target, origin), которая копирует свойства из объекта origin в объект target и возвращает объект со всеми свойствами. В данном задании используйте for ... in для работы со свойствами объектов.
function copy(origin) {
    let target = {}; 
    let key;
    for (let key in origin) {
      target[key] = origin[key];
    }
    return target;
  };
  
const origin = {
    name: "Виктория",
    age: 27,
    birthday: "4 august",
    email: "workfront.demcheno@gmail.com",
    telegram: "https://t.me/VAmbivalence",
  };    
  
console.log(copy(origin));

  //Напишите функцию, принимающую и сравнивающую два объекта. Если объекты содержат одинаковые ключи и значения, то функция возвращает true, если нет - false. Функция должна учитывать, что количество свойств в двух объектах может отличаться.

function compare(object1, object2) {
    const someObjectOne = Object.getOwnPropertyNames(object1);
    const someObjectTwo = Object.getOwnPropertyNames(object2);
  
    if (someObjectOne.length !== someObjectTwo.length) {
      return false;
    }
    for (let i = 0; i < someObjectOne.length; i += 1) {
      const prop = someObjectOne[i];
  
      if (object1[prop] !== object2[prop]) {
        return false;
      }
    }
    return true;
  };
  
const object1 = {
    id: 1,
    email: "test@test.com",
    firstName: "someObjectOne",
    lastName: "objectData1",
  };
  
const object2 = {
    id: 2,
    title: "Product",
    price: 1000,
  };
  
console.log(compare(object1, object2));

//Написать функцию, которая принимает строку и возвращает данные о том, сколько раз встречается каждая буква. Например, если передали строку “aaabbc”, то функция должна сообщить, что буква “a” встретилась 3 раза, буква “b” встретилась 2 раза, а буква “c” - 1 раз. Функция не должна использовать console.log, а должна вернуть объект с данными.

function countLetters(str) {
  let results = {};
  const line = Array.from(str);

  line.forEach(function(letter)  {
    if (results.hasOwnProperty(letter)) {
      results[letter].count++;
    } else {
      results[letter] = { letter };
      results[letter].count = 1;
    }
  });
  return results;
};

const exampleFunc = countLetters("aaabbc");
console.log(exampleFunc);