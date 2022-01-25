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

const calcSwitch = function (a, b, action) {
  switch (String(action)) {
    case "+":
      return add(a, b);
    case "-":
      return sub(a, b);
    case "*":
      return multi(a, b);
    case "/":
      return div(a, b);
    case "%":
      return perc(a, b);
    case "^":
      return exp(a, b); 
    default:
      console.log("try again");
      break;
    }
    function add(a, b) {
      return Number(a) + Number(b);
    }
    function sub(a, b) {
      return Number(a) - Number(b);
    }
    function multi(a, b) {
      return Number(a) * Number(b);
    }
    function div(a, b) {
      return Number(a) / Number(b);
    }
    function perc(a, b) {
      return Number(a) % Number(b);
    }
    function exp(a, b) {
      return Number(a) ^ Number(b);
    }
  };
  
  console.log(calcSwitch(4, 5, "+"));
  console.log(calcSwitch(4, 5, "-"));
  console.log(calcSwitch(4, 5, "*"));
  console.log(calcSwitch(4, 5, "/"));
  console.log(calcSwitch(4, 5, "%"));
  console.log(calcSwitch(4, 5, "^"));
  console.log(calcSwitch(4, 5, "0"));
