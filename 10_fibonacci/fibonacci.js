const fibonacci = function(b) {

    let array = [0, 1]
    let a = parseInt(b);

    if (a < 0) {
        return "OOPS";
    } else {

    for (let i = 2; i < a + 2; i++) {
        array.splice(i, 0, array[i - 2] + array[i - 1])
    }

    return array[b];
}
};

// Do not edit below this line
module.exports = fibonacci;
