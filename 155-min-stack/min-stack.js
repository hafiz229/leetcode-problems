
var MinStack = function() {
    const stack = [];

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(stack.length === 0) {
        stack.push([val, val])
        return;
    }

    const currentMinimum = stack[stack.length-1][1];
    stack.push([val, Math.min(currentMinimum, val)]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return stack[stack.length-1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return stack[stack.length-1][1];
};

};
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */