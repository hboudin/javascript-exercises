const fibonacci = function(num) {
    let fibArray = [0, 1]
    
    if (num >= 0) {
        for (let i = 2; i <= num; i++) {
        
        let nextNum =
        fibArray[fibArray.length - 1]
        + fibArray[fibArray.length - 2]
        
        fibArray.push(nextNum)
    }  return fibArray[num]
    
    } else {
        return "OOPS"
    }
};


// Do not edit below this line
module.exports = fibonacci;
