
/**
 *  creates and returns a new string by concatenating all of the elements in an array
 * @param {*} array Array with the elements that will be concatenated
 */

function join (array){
    var result = [];
    for (var i= 0; i < array.length; i++){
        result += array[i];
    };
    return result;
};



