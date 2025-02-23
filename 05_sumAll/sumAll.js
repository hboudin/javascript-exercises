const sumAll = function(num1, num2) {
    let answer = 0
    
    if (num1 < 0 || num2 < 0 || Math.floor(num1) !== num1 || Math.floor(num2) !== num2) {
        return "ERROR"
    }
    else if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            answer += i
        }
    } else {
        for (let i = num2; i <= num1; i++) {
        answer += i
    }
} return answer
};

// Do not edit below this line
module.exports = sumAll;
