const leapYears = function() {

let year = arguments[0];



if (year % 400 == 0) {
return true
} else if (year % 4 == 0 && year % 100 != 0) {
    return true
} else {
    return false
}

};

// Do not edit below this line
module.exports = leapYears;
