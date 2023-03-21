const fibonacci = function (number) {
    if (number < 0) return "OOPS"
    //every number is the sum of the precedent twos so
    let first = 0;
    let second = 1;
    let sum=0;
    for (let i = 1; i < number; i++) {
        sum = first + second;
        first = second;
        second = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
