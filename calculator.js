/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

 var calculatorModule = function (){

    //private variables
    var memory = 0;
    var total = 0;
    var calculator = {};

    var load = function (x){
        if(typeof x === 'number'){
            total = x;
            return total
        }
    }

    var getTotal = function (x){
        return total;
    }

    var add = function (x){
        return total += x;
    }

    var subtract = function (x){
        return total -= x;
    }

    var multiply = function (x){
        return total *= x;
    }

    var divide = function (x){
        return total /= x;
    }

    var recallMemory = function(x){
        return memory;
    }

    return {
        load:load,
        getTotal:getTotal,
        add:add,
        subtract:subtract,
        multiply:multiply,
        divide:divide,
        recallMemory:recallMemory
    }

 }


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

