const removeFromArray = function() {
    let originalArray = arguments[0]
    

    let arrayTest = originalArray.filter((value, id) => originalArray.indexOf(value) === id)

    let argLength = arrayTest.length 

    for (let i = 0; i < argLength; i++) {

        let index = arrayTest.indexOf(arguments[i + 1]);

        if (index >= 0) {
        arrayTest.splice(index, 1)
        }
    }

    
    return arrayTest
};

// Do not edit below this line
module.exports = removeFromArray;
