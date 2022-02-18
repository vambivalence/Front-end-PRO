const createSum = function () {
    let res = 0; 
    return function(x) {
        res += x; 
        return res; 
    } 
};
const sum = createSum();

console.log(sum(3));
console.log(sum(8));
console.log(sum(28));
