/**
 * @param {string[]} tokens
 * @return {number}
 */

 const Operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => Math.trunc(a/b),
    "*": (a, b) => a * b
 }
 
var evalRPN = function(tokens) {
    const stack = [];

    for(let i=0; i<tokens.length; i++) {
        if(tokens[i] in Operators) {
            const second = stack.pop();
            const first = stack.pop();
            const method = Operators[tokens[i]];
            stack.push(method(first, second));
        } else {
            stack.push(Number(tokens[i]))
        }
    }

    return stack.pop();
};