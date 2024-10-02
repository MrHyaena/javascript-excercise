const palindromes = function (word) {
    let array = word.split("");
    let reverseArray = array.reverse();

    let reverseWord = reverseArray.join("");

    let lowercaseWord = reverseWord.toLowerCase()
    let lowercaseReverseWord = word.toLowerCase()

    let finalWord = removeFunction(lowercaseWord);
    let finalReverseWord = removeFunction(lowercaseReverseWord);

    let valueWord = finalWord.valueOf();
    let valueReverseWord = finalReverseWord.valueOf();

    if (valueWord === valueReverseWord) {
        return true;
    } else {
        return false;
    }

    function removeFunction(inputString) {
        return inputString.replace(/[^a-zA-Z0-9]/g, '');
    }
    
};

// Do not edit below this line
module.exports = palindromes;
