// Fn = Fn-1 + Fn-2

const fibonacci = function(number) {
    const arr = [1,1]

    if (number < 1) return "OOPS";

    for (let i = 1; i <= +number; i++) {
        arr.push(arr[i-1] + arr[i])
    }

    return arr[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
