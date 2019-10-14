/**
 * reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
 * @param {Array} array  array with the elements that will be returned inversely.
 * 
 */


var numbers = ['one','two','three'];

function reverse(array){
    newAr=[];
    for (var i=array.length -1; i >= 0; i--){
        newAr+= array[i];
    };

};
console.log(reverse(numbers));