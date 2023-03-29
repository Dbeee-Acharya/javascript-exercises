const reverseString = function(word) {
    const wordLength  = word.length - 1;
    let newString = "";

    for(let i = wordLength; i >= 0; i--) {
        newString += word.substr(i, 1);
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
