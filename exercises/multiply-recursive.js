'use strict'

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :
let recur = 0;
let result = 0;
function multiply(number1, number2){
    if(number2 === 0 || number1 === 0){
        return 0;
    }
    let stock_result = 0;
    if(number1 > number2){
        if(recur < Math.abs(number1)) {
            result += Math.abs(number2);
            recur ++;
            return multiply(number1, number2);
        }
        if(recur === Math.abs(number1)|| recur === Math.abs(number2)){
            if((number1 < 0) && (number2 > 0) || ((number2 < 0) && (number1 > 0)) && (((number2 < 0) && (number1 > 0))||((number1 < 0) && (number2>0)))){
                stock_result = result;
                result = 0;
                recur = 0;
                return -stock_result;
            }
            else{
                stock_result = result;
                result = 0;
                recur = 0;
                return stock_result;
            }
        }
    }
    if(number2 > number1){
        if(recur < Math.abs(number2)) {
            result += Math.abs(number1);
            recur ++;
            return multiply(number1, number2);
        }
        if(recur === Math.abs(number1)|| recur === Math.abs(number2)){
            if((number1<0)&&(number2>0)|| ((number2<0) && (number1>0)) && (((number2<0) && (number1>0))||((number1<0)&& (number2>0)))){
                stock_result = result;
                result = 0;
                recur = 0;
                return -stock_result;
            }
            else{
                stock_result = result;
                result=0;
                recur = 0;
                return stock_result;
            }
        }
    }

}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
