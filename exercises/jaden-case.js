'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(stringToUp){
    let recupTable =[];
    recupTable = stringToUp.split(' ');
    for(let i = 0; i< recupTable.length; i++){
        recupTable[i] = recupTable[i].charAt(0).toUpperCase() + recupTable[i].slice(1);
    }
    return recupTable.join(' ');
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase("J aime manger des pommes"), "J Aime Manger Des Pommes")
assert.strictEqual(jadenCase("Il etait une fois"), "Il Etait Une Fois")
assert.strictEqual(jadenCase("Il"), "Il")
assert.strictEqual(jadenCase("Kappa"), "Kappa")
assert.strictEqual(jadenCase("Oui non ! "), "Oui Non ! ")
// End of tests */
