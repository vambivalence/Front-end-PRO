function circle(radius)
{
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    this.length = function () {
        return 2*Math.PI*this.radius;
    };
}
let c = new circle(8);

console.log('Area', c.area().toFixed(4)); 
console.log('length', c.length().toFixed(4)); 

function arithmetic(first, second){
    return (first+second)/2;
  }

console.log("Среднее арифметическое:", arithmetic (23,512));  


const calc = function (a, b, action) {
    if (String(action) === "+") {
      return a + b;
    } else if (String(action) === "-") {
      return a - b;
    }
  };
  
  console.log(calc(10, 7, "+"));
  console.log(calc(10, 7, "-"));

  const calcSwitch = function (a, b, action) {
    switch (String(action)) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      default:
        console.log("try again");
        break;
    }
    if (String(action) === "+") {
      return a + b;
    } else if (String(action) === "-") {
      return a - b;
    }
  };
  
  console.log(calcSwitch(4, 5, "+"));
  console.log(calcSwitch(4, 5, "-"));
  console.log(calcSwitch(4, 5, "0"));