const reverseString = function(text) {
    textArray = [...text]
    reverseArray = textArray.reverse()
    reversedText = reverseArray.join("")
    return reversedText
};

// Do not edit below this line
module.exports = reverseString;
