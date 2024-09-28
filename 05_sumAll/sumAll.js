const sumAll = function() {

    if (arguments[0] < 0 || arguments[1] < 0 || arguments[0] % 1 > 0 || arguments[1] % 1 > 0 || typeof arguments[0] != "number" || typeof arguments[1] != "number") {
        return "ERROR"
    } else {



highestNumber = Math.max(arguments[0], arguments[1])
lowestNumber = Math.min(arguments[0], arguments[1])
sum = 0



for (i = 0; i < highestNumber; i++) {

    sum = sum + (i + 1)
}

return sum


}
};

// Do not edit below this line
module.exports = sumAll;
