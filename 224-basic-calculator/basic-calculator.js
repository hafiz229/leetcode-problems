/**
 * @param {string} s
 * @return {number}
 */

const isDigit = (value) => {
    return value >= '0' && value <= '9';
};

var calculate = function (s) {
    const stack = [];
    let operand = 0;
    let result = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {
        let currentCharacter = s.charAt(i);
        if (isDigit(currentCharacter)) {
            operand = 10 * operand + Number(currentCharacter);
        } else if (currentCharacter === "+") {
            result += sign * operand;
            sign = 1;
            operand = 0;
        } else if (currentCharacter === "-") {
            result += sign * operand;
            sign = -1;
            operand = 0;
        } else if (currentCharacter === "(") {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (currentCharacter === ")") {
            result += sign * operand;
            result *= stack.pop();
            result += stack.pop();
            operand = 0;
        }
    }
    return result + (sign * operand);
};