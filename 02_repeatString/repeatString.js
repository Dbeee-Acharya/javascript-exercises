const repeatString = function(string, num) {
    let repeatedString = "";

    if (num < 0) {
        return "ERROR";
    }

    for (let i = 1; i <= num; i++) {
         repeatedString += string;
    }

    return repeatedString;
};

// repeatString("hey", 3);
// repeatString("hey", 10);
// repeatString("hey", 1);
// repeatString("hey", 0);
// repeatString("hey", -1);
// repeatString("", 10);




// Do not edit below this line
module.exports = repeatString;
