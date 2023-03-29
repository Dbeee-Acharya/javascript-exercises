/* TO DO:
    1. Accept multiple arguments in a function
    2. remove given elements
    3. ignore elements that are not present
    4. works with strings and data types
*/ 

const removeFromArray = function(array, ...toRemove) {
    newArray = [];

    newArray = array.filter( item => !toRemove.includes(item));

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
